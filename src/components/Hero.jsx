import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { heroSlides } from '../data/segments';
import './Hero.css';

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // Parallax suave: conteúdo sobe e some, fundo desce levemente ao rolar.
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
        <h1 className="hero__title">
          {slide.title.split('\n').map((line, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? (
                <span className="accent-ribbon"><span>{line}</span></span>
              ) : (
                line
              )}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero__subtitle">{slide.subtitle}</p>
        <div className="hero__actions">
          <a href="#segmentos" className="hero__btn hero__btn--primary">
            Fale com especialista
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#sobre" className="hero__btn hero__btn--secondary">
            Conheça a GCEN
          </a>
        </div>
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
          />
        ))}
      </div>
    </section>
  );
}
