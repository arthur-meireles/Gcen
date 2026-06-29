import { motion, useReducedMotion } from 'motion/react';

/**
 * Reveal — wrapper de scroll-reveal reutilizável (DRY).
 * Anima opacity + translateY ao entrar na viewport, uma única vez.
 * Respeita prefers-reduced-motion (renderiza estático).
 *
 * Props:
 *  - as: tag/elemento ('div' | 'section' | 'li' | 'h2' ...). Default 'div'.
 *  - delay: atraso em segundos (use index * 0.06 para stagger).
 *  - y: deslocamento inicial em px (default 28).
 *  - amount: fração visível para disparar (default 0.2).
 *  - ...rest: className, style, etc.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 28,
  amount = 0.2,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
