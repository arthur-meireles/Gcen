import { Fragment, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
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
  const [activeId, setActiveId] = useState(segments[0].id);
  const reduce = useReducedMotion();
  const blocksRef = useRef([]);

  // Scroll-spy: destaca a aba do segmento visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    blocksRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="segpage">
      <section className="segpage__intro">
        <div className="segpage__intro-inner">
          <span className="section-tag section-tag--light">Nossos Segmentos</span>
          <h1 className="segpage__title">
            Soluções completas para <em>cada necessidade</em> do agronegócio
          </h1>
          <p className="segpage__lead">
            Conheça em detalhe cada segmento da GCEN, do consórcio ao marketplace global,
            e acesse diretamente a área de cada solução.
          </p>
        </div>
      </section>

      {/* Selector sticky de segmentos */}
      <nav className="segpage__nav" aria-label="Navegar entre segmentos">
        <div className="segpage__nav-track">
          {segments.map((seg) => (
            <a
              key={seg.id}
              href={`#${seg.id}`}
              className={`segpage__nav-link ${activeId === seg.id ? 'is-active' : ''}`}
              aria-current={activeId === seg.id ? 'true' : undefined}
            >
              {seg.label}
            </a>
          ))}
        </div>
      </nav>

      {segments.map((seg, i) => (
        <Fragment key={seg.id}>
          <ParallaxSection image={segmentImages[seg.id]} title={seg.label} />

          <section
            className={`segblock ${i % 2 === 1 ? 'segblock--reverse' : ''}`}
            id={seg.id}
            ref={(el) => { blocksRef.current[i] = el; }}
            aria-labelledby={`seg-h-${seg.id}`}
          >
            <div className="segblock__inner">
              <motion.div
                className="segblock__text"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 id={`seg-h-${seg.id}`} className="segblock__title">{seg.label}</h2>
                <p className="segblock__desc">{seg.description}</p>

                {seg.features && (
                  <ul className="segblock__features">
                    {seg.features.map((f, idx) => (
                      <li key={idx}><CheckIcon />{f}</li>
                    ))}
                  </ul>
                )}

                {seg.partners && seg.partners.length > 0 && (
                  <div className="segblock__partners">
                    <span className="segblock__partners-label">Parceiros e referências</span>
                    <div className="segblock__partners-chips">
                      {seg.partners.map((p) => (
                        <span key={p} className="segblock__chip">{p}</span>
                      ))}
                    </div>
                  </div>
                )}

                <a href={seg.cta} className="segblock__btn geo-shape">
                  Acessar {seg.label}
                  <ArrowIcon />
                </a>
              </motion.div>

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

      <section className="segpage__back">
        <Link to="/" className="segpage__back-btn">
          Voltar para a página inicial
          <ArrowIcon />
        </Link>
      </section>
    </div>
  );
}
