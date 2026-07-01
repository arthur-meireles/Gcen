import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';

/**
 * ScrollManager — sincroniza rota com scroll usando Lenis quando ativo.
 * - hash presente: scroll suave até a âncora (offset navbar -80px)
 * - sem hash: topo instantâneo
 * - prefers-reduced-motion: usa scroll nativo (Lenis desligado no App)
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        if (lenis && !reduce) {
          lenis.scrollTo(el, { offset: -80, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
        }
        return;
      }
    }
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash, lenis, reduce]);

  return null;
}
