import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { stats } from '../data/segments';
import './Stats.css';

const EASE = [0.16, 1, 0.3, 1];

function useCountUp(target, duration = 2000, active) {
  const [count, setCount] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active || reduce) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);

  return reduce ? target : count;
}

const STAT_ICONS = {
  calendar: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  layers: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  users: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  map: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  shield: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
};

function StatItem({ stat, active, index }) {
  const count = useCountUp(stat.value, 2000, active);
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="stat"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
    >
      <motion.div
        className="stat__icon"
        initial={reduce ? false : { scale: 0.7, opacity: 0 }}
        whileInView={reduce ? undefined : { scale: 1, opacity: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.15, ease: EASE }}
      >
        {STAT_ICONS[stat.icon]}
      </motion.div>
      <div className="stat__number">
        {count}{stat.suffix}
      </div>
      <div className="stat__label">{stat.label}</div>
      <div className="stat__desc">{stat.desc}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="numeros" className="stats" ref={ref}>
      <div className="stats__deco" aria-hidden="true" />
      <div className="stats__inner">
        <div className="stats__header">
          <span className="section-tag section-tag--light">G.C.E.N</span>
          <h2 className="stats__title">
            A força do <em>G.C.E.N</em> em números
          </h2>
          <p className="stats__lead">
            Presente em todo o Brasil, a GCEN combina experiência e capilaridade para oferecer
            as melhores soluções em agronegócio, seguro rural, consórcio e muito mais.
          </p>
        </div>

        <motion.div
          className="stats__divider"
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: EASE }}
        />

        <div className="stats__grid">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
