import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import './ParallaxSection.css';

const EASE = [0.16, 1, 0.3, 1];

export default function ParallaxSection({ image, title, text, ctaLabel, ctaHref }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.04, 1.14]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.6, 0.9, 0.9, 0.6]);

  const words = title.split(' ');

  return (
    <section
      className="parallax"
      ref={ref}
      role="region"
      aria-label={title}
    >
      <motion.div
        className="parallax__bg"
        style={{
          backgroundImage: `url(${image})`,
          ...(reduce ? undefined : { y: bgY, scale: bgScale }),
        }}
        aria-hidden="true"
      />
      <motion.div
        className="parallax__overlay"
        aria-hidden="true"
        style={reduce ? undefined : { opacity: overlayOpacity }}
      />

      <div className="parallax__content">
        <h2 className="parallax__title">
          {words.map((w, i) => (
            <span key={i} className="parallax__word-mask">
              <motion.span
                className="parallax__word"
                initial={reduce ? false : { y: '115%' }}
                whileInView={reduce ? undefined : { y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>
        {text && (
          <motion.p
            className="parallax__text"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          >
            {text}
          </motion.p>
        )}
        {ctaLabel && ctaHref && (
          <motion.a
            href={ctaHref}
            className="parallax__cta geo-shape btn-wipe"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          >
            {ctaLabel}
          </motion.a>
        )}
      </div>
    </section>
  );
}
