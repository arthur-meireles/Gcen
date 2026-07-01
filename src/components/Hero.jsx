import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { heroSlides } from '../data/segments';
import './Hero.css';

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setActive(idx);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[active];
  const lines = slide.title.split('\n');

  return (
    <section id="hero" className="hero" aria-label="Banner principal" ref={ref}>
      <motion.div className="hero__bg-layer" style={reduce ? undefined : { y: bgY }}>
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`hero__bg ${i === active ? 'hero__bg--active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden="true"
          />
        ))}
      </motion.div>

      <div className="hero__overlay" aria-hidden="true">
        <div className="hero__overlay-gradient" />
        <div className="hero__overlay-vignette" />
      </div>

      <motion.div
        className="hero__content"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <span className="hero__tag">{slide.tag}</span>
        <h1 className="hero__title">
          {lines.map((line, i) => (
            <span key={i} className="hero__title-mask">
              <motion.span
                className="hero__title-line"
                initial={reduce ? false : { y: '115%' }}
                animate={reduce ? undefined : { y: 0 }}
                transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: EASE }}
              >
                {i === lines.length - 1 ? (
                  <span className="accent-ribbon"><span>{line}</span></span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="hero__subtitle"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
        >
          {slide.subtitle}
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
        >
          <a href="#segmentos" className="hero__btn hero__btn--primary btn-wipe">
            Fale com especialista
            <svg className="hero__btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#sobre" className="hero__btn hero__btn--secondary">
            Conheça a GCEN
          </a>
        </motion.div>
      </motion.div>

      <div className="hero__dots" role="tablist" aria-label="Slides do banner">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === active}
            aria-label={`Ir para slide ${i + 1}: ${s.tag}`}
            className={`hero__dot ${i === active ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
          >
            {i === active && (
              <motion.span
                layoutId="hero-dot-pill"
                className="hero__dot-fill"
                transition={{ duration: 0.45, ease: EASE }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
