import { motion, useReducedMotion } from 'motion/react';
import { mvv, excellenceItems } from '../data/segments';
import './MVV.css';

/* ── Ícones dos 4 pilares ── */
const PILLAR_ICONS = {
  mission: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  value: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  commitment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ),
};

const PILLARS = [
  { key: 'mission', title: 'Missão', text: mvv.mission },
  { key: 'vision', title: 'Visão', text: mvv.vision },
  { key: 'value', title: 'Valor', text: mvv.value },
  { key: 'commitment', title: 'Compromisso', text: mvv.commitment },
];

const EXCELLENCE_ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

export default function MVV() {
  const reduce = useReducedMotion();

  return (
    <>
      <section id="mvv" className="mvv">
        <div className="mvv__inner">
          <div className="mvv__header">
            <div className="mvv__label-row">
              <span className="mvv__label-line" />
              <span className="mvv__label">Pilares</span>
            </div>
            <h2 className="mvv__title">
              Pilares da{' '}
              <span className="accent-ribbon"><span>GCEN</span></span>
            </h2>
            <p className="mvv__lead">
              Nossa atuação é sustentada por fundamentos sólidos que guiam cada decisão e relação.
              Conheça os princípios que definem quem somos.
            </p>
          </div>

          <div className="mvv__pillars">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.key}
                className={`mvv__card mvv__card--${p.key}`}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mvv__card-header">
                  <div className="mvv__card-icon">{PILLAR_ICONS[p.key]}</div>
                  <h3 className="mvv__card-title">{p.title}</h3>
                </div>
                <p className="mvv__card-text">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="excellence">
        <div className="excellence__inner">
          <div className="excellence__header">
            <span className="section-tag section-tag--light">Excelência</span>
            <h2 className="excellence__title">
              Compromisso com a<br />
              <span className="accent-ribbon"><span>Excelência</span></span>
            </h2>
            <p className="excellence__lead">
              Na GCEN, entendemos que cada operação no agronegócio é única.
              Nosso compromisso é garantir que cada transação seja conduzida com:
            </p>
          </div>

          <div className="excellence__grid">
            {excellenceItems.map((item) => (
              <div key={item.icon} className="excellence__card">
                <div className="excellence__card-icon">
                  {EXCELLENCE_ICONS[item.icon]}
                </div>
                <h3 className="excellence__card-title">{item.title}</h3>
                <p className="excellence__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="excellence__cta">
            <a href="#contato" className="excellence__btn">
              Fale com especialista
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
