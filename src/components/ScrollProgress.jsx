import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { useLenis } from 'lenis/react';

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });
  const [visible, setVisible] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    // Caminho 1: Lenis ativo — usa o evento nativo dele com direction/velocity
    if (lenis) {
      const onScroll = ({ direction, velocity }) => {
        // direction: -1 = cima, 1 = baixo
        // só aparece rolando para cima OU no topo da página
        setVisible(direction < 0 || velocity === 0);
      };
      lenis.on('scroll', onScroll);
      return () => lenis.off('scroll', onScroll);
    }

    // Caminho 2: fallback (reduced-motion, sem Lenis) — scroll nativo
    let lastY = window.scrollY;
    const onWindowScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 10);
      lastY = y;
    };
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [lenis]);

  if (reduce) return null;

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      animate={{ opacity: visible ? 0.55 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      aria-hidden="true"
    />
  );
}
