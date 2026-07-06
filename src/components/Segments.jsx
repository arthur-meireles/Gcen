import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { segments, segmentImages } from '../data/segments';
import './Segments.css';

const EASE = [0.16, 1, 0.3, 1];

/* Selo das 14 verticais do Global Marketplace — logos exportados do Figma */
const GLOBAL_MARKETS = [
  { key: 'agro', label: 'Global Agro' },
  { key: 'construcao', label: 'Global Construção' },
  { key: 'aereo', label: 'Global Aéreo' },
  { key: 'servicos', label: 'Global Serviços' },
  { key: 'insumos', label: 'Global Insumos' },
  { key: 'rodoviario', label: 'Global Rodoviário' },
  { key: 'imobiliario', label: 'Global Imobiliário' },
  { key: 'infraestrutura', label: 'Global Infraestrutura' },
  { key: 'tecnologico', label: 'Global Tecnológico' },
  { key: 'nautico', label: 'Global Náutico' },
  { key: 'commodities', label: 'Global Commodities' },
  { key: 'pecas', label: 'Global Peças' },
  { key: 'implementos', label: 'Global Implementos' },
  { key: 'equipamentos', label: 'Global Equipamentos' },
];

/* Ícones das abas — um por segmento, mapeados por seg.icon */
const SEGMENT_ICONS = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l9-8 9 8" /><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'trending-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function Segments() {
  const [activeId, setActiveId] = useState(segments[0].id);
  const reduce = useReducedMotion();
  const active = segments.find((s) => s.id === activeId) ?? segments[0];

  return (
    <section id="segmentos" className="segments after-parallax">
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

        <div className="seg-tabs" role="tablist" aria-label="Segmentos GCEN">
          {segments.map((seg) => {
            const isActive = seg.id === activeId;
            return (
              <button
                key={seg.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`seg-tab ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveId(seg.id)}
              >
                <span className="seg-tab__icon">{SEGMENT_ICONS[seg.icon]}</span>
                <span className="seg-tab__label">{seg.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="seg-tab-underline"
                    className="seg-tab__underline"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active.id}
          className="seg-panel"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="seg-panel__promo">
            <div className="seg-panel__promo-top">
              <span className="seg-panel__promo-eyebrow">Segmento em destaque</span>
              <h3 className="seg-panel__promo-title">{active.label}</h3>
            </div>
            <p className="seg-panel__promo-text">{active.description}</p>
            <div className="seg-panel__promo-actions">
              <a href="#contato" className="seg-panel__promo-btn">
                Fale com especialista
                <ArrowIcon />
              </a>
              <Link to={`/segmentos#${active.id}`} className="seg-panel__promo-more">
                Saiba mais
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="seg-panel__media">
            <img className="seg-panel__media-img" src={segmentImages[active.id]} alt="" aria-hidden="true" />
            <div className="seg-panel__media-overlay" />
            <span className="seg-panel__media-play" aria-hidden="true">
              <PlayIcon />
            </span>
          </div>
        </motion.div>

        <div className="seg-logos" aria-label="Verticais do Global Marketplace">
          {GLOBAL_MARKETS.map((m) => (
            <img
              key={m.key}
              className="seg-logos__item"
              src={`/assets/segment-logos/${m.key}.png`}
              alt={m.label}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
