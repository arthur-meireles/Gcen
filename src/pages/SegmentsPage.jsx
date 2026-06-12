import { Fragment } from 'react';
import { segments, segmentImages } from '../data/segments';
import ParallaxSection from '../components/ParallaxSection';
import './SegmentsPage.css';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

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

export default function SegmentsPage() {
  return (
    <div className="segpage">
      <section className="segpage__intro">
        <div className="segpage__intro-inner">
          <span className="section-tag section-tag--light">Nossos Segmentos</span>
          <h1 className="segpage__title">
            Soluções completas para <em>cada necessidade</em> do agronegócio
          </h1>
          <p className="segpage__lead">
            Conheça em detalhe cada segmento da GCEN — do consórcio ao marketplace global —
            e acesse diretamente a área de cada solução.
          </p>
        </div>
      </section>

      {segments.map((seg, i) => (
        <Fragment key={seg.id}>
          <ParallaxSection image={segmentImages[seg.id]} title={seg.label} />

          <section className="segblock" id={seg.id} aria-labelledby={`seg-h-${seg.id}`}>
            <div className="segblock__inner">
              <div className="segblock__text">
                <span className="segblock__eyebrow">
                  Segmento {String(i + 1).padStart(2, '0')}
                </span>
                <h2 id={`seg-h-${seg.id}`} className="segblock__title">{seg.label}</h2>
                <p className="segblock__desc">{seg.description}</p>

                {seg.features && (
                  <ul className="segblock__features">
                    {seg.features.map((f, idx) => (
                      <li key={idx}><CheckIcon />{f}</li>
                    ))}
                  </ul>
                )}

                <a href={seg.cta} className="segblock__btn geo-shape">
                  Acessar {seg.label}
                  <ArrowIcon />
                </a>
              </div>

              <div className="segblock__media">
                <div className="segblock__player">
                  <img
                    src={segmentImages[seg.id]}
                    alt={`Apresentação em vídeo do segmento ${seg.label}`}
                    className="segblock__img"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    className="segblock__play"
                    aria-label={`Assistir vídeo sobre ${seg.label}`}
                  >
                    <PlayIcon />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ))}
    </div>
  );
}
