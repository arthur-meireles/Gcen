import { motion, useReducedMotion } from 'motion/react';
import './ValueStrip.css';

/* Faixa de valores logo abaixo do hero — cinturão de posicionamento que
   ancora a página com autoridade (padrão da apresentação comercial). */
const VALUES = [
  {
    key: 'consultiva',
    title: 'Atuação consultiva',
    text: 'Especialistas ao seu lado, com foco em resultado real.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    key: 'integradas',
    title: 'Soluções integradas',
    text: 'Consórcio, seguro, investimento e mais, num só grupo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="12" r="3" /><path d="M8.6 7.5l6.8 3M8.6 16.5l6.8-3" />
      </svg>
    ),
  },
  {
    key: 'performance',
    title: 'Foco em performance',
    text: 'Decisões orientadas por dados e por resultado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="20" x2="4" y2="12" /><line x1="10" y1="20" x2="10" y2="4" /><line x1="16" y1="20" x2="16" y2="9" /><line x1="22" y1="20" x2="2" y2="20" />
      </svg>
    ),
  },
  {
    key: 'nacional',
    title: 'Presença nacional',
    text: 'Do campo à cidade, em todos os estados do Brasil.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: 'parceria',
    title: 'Parceria de longo prazo',
    text: 'Relacionamento com transparência e compromisso.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.34l-.77-.76a5.4 5.4 0 1 0-7.65 7.65l.77.76L12 21l7.65-8.01.77-.76a5.4 5.4 0 0 0 0-7.65z" />
      </svg>
    ),
  },
];

export default function ValueStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="vstrip" aria-label="Diferenciais da GCEN">
      <div className="vstrip__inner">
        {VALUES.map((v, i) => (
          <motion.div
            key={v.key}
            className="vstrip__item"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="icon-badge icon-badge--onDark vstrip__icon">{v.icon}</span>
            <div className="vstrip__body">
              <h3 className="vstrip__title">{v.title}</h3>
              <p className="vstrip__text">{v.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
