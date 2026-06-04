import { useState } from 'react';
import { segments } from '../data/segments';
import './Segments.css';

const SEG_IMAGES = {
  consorcio: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80',
  seguro: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80',
  investimento: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80',
  consultoria: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80',
  maquinas: 'https://images.unsplash.com/photo-1530637369086-3a8c3fce6447?w=900&q=80',
  imoveis: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80',
  marketplace: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=80',
};

export default function Segments() {
  const [active, setActive] = useState(segments[0].id);
  const current = segments.find((s) => s.id === active);

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
          {segments.map((seg) => (
            <button
              key={seg.id}
              role="tab"
              aria-selected={active === seg.id}
              aria-controls={`seg-panel-${seg.id}`}
              id={`seg-tab-${seg.id}`}
              className={`seg-tab ${active === seg.id ? 'seg-tab--active' : ''}`}
              style={{ '--seg-color': seg.color }}
              onClick={() => setActive(seg.id)}
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
              <div className="seg-panel__badge" style={{ '--seg-color': current.color }}>
                CONFIRA NOSSOS SERVIÇOS
              </div>
              <h3 className="seg-panel__title">{current.label}</h3>
              <p className="seg-panel__desc">{current.description}</p>

              {current.features && (
                <ul className="seg-panel__features">
                  {current.features.map((f, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <a href={current.cta} className="seg-panel__btn" style={{ '--seg-color': current.color }}>
                Fale com especialista
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div className="seg-panel__right">
              <img
                src={SEG_IMAGES[current.id]}
                alt={`Imagem representativa do segmento ${current.label}`}
                className="seg-panel__img"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}