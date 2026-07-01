import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { segments, segmentImages } from '../data/segments';
import './Segments.css';

const FILTERS = [
  { id: 'all', label: 'Todos' },
  ...segments.map((s) => ({ id: s.id, label: s.label })),
];

const EASE = [0.16, 1, 0.3, 1];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Segments() {
  const [filter, setFilter] = useState('all');
  const reduce = useReducedMotion();
  const visible = filter === 'all' ? segments : segments.filter((s) => s.id === filter);

  return (
    <section id="segmentos" className="segments">
      <div className="segments__inner">
        <div className="segments__header">
          <span className="eyebrow">Nossos Segmentos</span>
          <h2 className="segments__title">
            Soluções para cada <em>necessidade</em>
          </h2>
          <p className="segments__lead">
            A GCEN reúne segmentos especializados que trabalham de forma integrada
            para o agronegócio brasileiro.
          </p>
        </div>

        <div className="seg-filters" role="group" aria-label="Filtrar segmentos">
          {FILTERS.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                className={`seg-filter ${isActive ? 'is-active' : ''}`}
                aria-pressed={isActive}
                onClick={() => setFilter(f.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="seg-filter-pill"
                    className="seg-filter__pill"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="seg-filter__label">{f.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="seg-grid" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {visible.map((seg, i) => (
              <motion.article
                key={seg.id}
                layout
                className="seg-card geo-shape"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <div className="seg-card__media img-cine">
                  <img
                    src={segmentImages[seg.id]}
                    alt={`Segmento ${seg.label}`}
                    loading="lazy"
                    width="900"
                    height="600"
                  />
                  <div className="seg-card__overlay" aria-hidden="true" />
                  <button
                    type="button"
                    className="seg-card__play"
                    aria-label={`Assistir vídeo sobre ${seg.label}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="seg-card__body">
                  <h3 className="seg-card__title">{seg.label}</h3>
                  <p className="seg-card__desc">{seg.description}</p>
                  <Link to={`/segmentos#${seg.id}`} className="seg-card__link">
                    Saiba mais
                    <ArrowIcon />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="segments__more">
          <Link to="/segmentos" className="segments__more-btn btn-wipe">
            Ver todos os segmentos em detalhe
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
