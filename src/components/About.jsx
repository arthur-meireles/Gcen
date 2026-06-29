import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import logo from '../assets/gcen-logo.png';
import Reveal from './Reveal';
import './About.css';

/* Sigla GCEN (4 letras, decisão travada na esteira) */
const ACRONYM = [
  { letter: 'G', word: 'Grupo Global', meaning: 'Grupo de alcance global, presente em todos os estados brasileiros.' },
  { letter: 'C', word: 'Consultores', meaning: 'Consultores especializados no agronegócio e no ramo agrícola.' },
  { letter: 'E', word: 'Executivos', meaning: 'Visão executiva de negócios, conectando o campo ao mercado urbano.' },
  { letter: 'N', word: 'Negócio', meaning: 'Todo agronegócio é, antes de tudo, um negócio. Cuidamos dele com você.' },
];

export default function About() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();
  const revealed = active !== null;
  const current = revealed ? ACRONYM[active] : null;

  return (
    <section id="sobre" className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <Reveal as="div" className="about__header">
          <span className="section-tag">Quem somos</span>
          <h2 id="about-heading" className="about__title">
            Todo agronegócio é, antes de mais nada,{' '}
            <span className="accent-ribbon"><span>um negócio</span></span>
          </h2>
          <p className="about__desc about__desc--center">
            A GCEN é um grupo de consultores estratégicos com mais de 30 anos de atuação no
            agronegócio brasileiro, reunindo num só lugar consórcio, seguro rural, investimento,
            consultoria, imóveis rurais, máquinas agrícolas e marketplace.
          </p>
        </Reveal>

        <div
          className="about__acro"
          role="group"
          aria-label="Sigla GCEN — selecione uma letra para revelar a marca"
        >
          {ACRONYM.map((item, i) => (
            <button
              key={item.letter}
              type="button"
              className={`about__acro-item ${active === i ? 'is-active' : ''}`}
              aria-pressed={active === i}
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className="about__acro-letter">{item.letter}</span>
              <span className="about__acro-word">{item.word}</span>
            </button>
          ))}
        </div>

        <div className={`about__stage ${revealed ? 'is-revealed' : ''}`} aria-live="polite">
          <AnimatePresence mode="wait">
            {revealed ? (
              <motion.div
                key="logo"
                className="about__logo-wrap"
                initial={reduce ? false : { opacity: 0, y: 24, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.img
                  src={logo}
                  alt="GCEN — Grupo Global de Consultores Estratégicos Executivos de Negócio"
                  className="about__logo-img"
                  animate={reduce ? undefined : { y: [0, -10, 0] }}
                  transition={reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <p className="about__logo-meaning">
                  <strong>{current.letter}</strong> {current.meaning}
                </p>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                className="about__stage-hint"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Clique nas letras acima para revelar a marca GCEN
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="about__sep" aria-hidden="true" />

        <Reveal as="div" className="about__footer" delay={0.05}>
          <p className="about__desc about__desc--center">
            Estamos presentes em todos os estados brasileiros, simplificando o acesso a produtos e
            serviços para produtores rurais, investidores e empresas do agro. Do campo ao mercado,
            estamos ao seu lado em cada etapa da sua operação.
          </p>
          <a href="#segmentos" className="about__btn">
            Conheça nossos segmentos
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
              focusable="false"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
