import { useState, useRef } from 'react';
import { segments, segmentImages } from '../data/segments';
import './Segments.css';

export default function Segments() {
  const [active, setActive] = useState(segments[0].id);
  const current = segments.find((s) => s.id === active);
  const tabRefs = useRef([]);

  // Arrow-key navigation for accessible tablist
  function handleTabKeyDown(e, idx) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (idx + 1) % segments.length;
      setActive(segments[next].id);
      tabRefs.current[next]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (idx - 1 + segments.length) % segments.length;
      setActive(segments[prev].id);
      tabRefs.current[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(segments[0].id);
      tabRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const last = segments.length - 1;
      setActive(segments[last].id);
      tabRefs.current[last]?.focus();
    }
  }

  return (
    <section id="segmentos" className="segments">
      <div className="segments__inner">
        <div className="segments__header">
          <span className="section-tag">Nossos Segmentos</span>
          <h2 className="segments__title">
            Soluções para cada <em>necessidade</em>
          </h2>
          <p className="segments__lead">
            A GCEN reúne segmentos especializados que trabalham de forma integrada
            para o agronegócio brasileiro.
          </p>
        </div>

        <div className="seg-tabs" role="tablist" aria-label="Segmentos do GCEN">
          {segments.map((seg, idx) => (
            <button
              key={seg.id}
              ref={(el) => { tabRefs.current[idx] = el; }}
              role="tab"
              aria-selected={active === seg.id}
              aria-controls={`seg-panel-${seg.id}`}
              id={`seg-tab-${seg.id}`}
              tabIndex={active === seg.id ? 0 : -1}
              className={`seg-tab ${active === seg.id ? 'seg-tab--active' : ''}`}
              onClick={() => setActive(seg.id)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              <span className="seg-tab__label">{seg.label}</span>
            </button>
          ))}
        </div>

        {current && (
          <div
            key={current.id}
            id={`seg-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`seg-tab-${current.id}`}
            className="seg-panel"
          >
            <div className="seg-panel__left">
              <div className="seg-panel__badge">
                CONFIRA NOSSOS SERVIÇOS
              </div>
              <h3 className="seg-panel__title">{current.label}</h3>
              <p className="seg-panel__desc">{current.description}</p>

              {current.features && (
                <ul className="seg-panel__features">
                  {current.features.map((f, i) => (
                    <li key={i}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <a href={current.cta} className="seg-panel__btn">
                Fale com especialista
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="seg-panel__right">
              <div className="seg-panel__media">
                <img
                  src={segmentImages[current.id]}
                  alt={`Imagem representativa do segmento ${current.label}`}
                  className="seg-panel__img"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <button
                  type="button"
                  className="seg-panel__play"
                  aria-label={`Assistir vídeo sobre ${current.label}`}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
