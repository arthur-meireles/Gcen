import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { segments, segmentImages } from '../data/segments';
import './Segments.css';

const FILTERS = [
  { id: 'all', label: 'Todos' },
  ...segments.map((s) => ({ id: s.id, label: s.label })),
];

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
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`seg-filter ${filter === f.id ? 'is-active' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="seg-grid" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {visible.map((seg) => (
              <motion.article
                key={seg.id}
                layout
                className="seg-card geo-shape"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="seg-card__media img-cine">
                  <img
                    src={segmentImages[seg.id]}
                    alt={`Segmento ${seg.label}`}
                    loading="lazy"
                    width="900"
                    height="600"
                  />
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
          <Link to="/segmentos" className="segments__more-btn">
            Ver todos os segmentos em detalhe
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
