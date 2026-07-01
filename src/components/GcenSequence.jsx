import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { gcenAcronym } from '../data/segments';
import logo from '../assets/gcen-logo.png';
import './GcenSequence.css';

const STAGES = 6; // 4 letras + morph + anéis
const STAGE = 1 / STAGES;

/* Letra gigante que entra/sai conforme o scroll avança no seu estágio.
   Todos os offsets usam frações de STAGE para garantir monotonicidade
   independentemente do número de estágios. */
function LetterStage({ i, item, scrollYProgress, reduce }) {
  const s = i * STAGE;
  const e = s + STAGE;

  const opacity = useTransform(
    scrollYProgress,
    [s, s + STAGE * 0.35, e - STAGE * 0.1, e + STAGE * 0.35],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [s, s + STAGE * 0.45, e, e + STAGE * 0.45],
    [1.35, 1, 1, 1.18]
  );
  const y = useTransform(scrollYProgress, [s, s + STAGE * 0.45], [120, 0]);

  const wordOpacity = useTransform(
    scrollYProgress,
    [s + STAGE * 0.4, s + STAGE * 0.7, e - STAGE * 0.1, e + STAGE * 0.25],
    [0, 1, 1, 0]
  );
  const wordY = useTransform(scrollYProgress, [s + STAGE * 0.4, s + STAGE * 0.85], [16, 0]);
  const meaningOpacity = useTransform(
    scrollYProgress,
    [s + STAGE * 0.6, s + STAGE * 0.9, e - STAGE * 0.05, e + STAGE * 0.3],
    [0, 1, 1, 0]
  );

  if (reduce) {
    return (
      <div className="gcen-seq__static-letter">
        <span className="gcen-seq__letter">{item.letter}</span>
        <span className="gcen-seq__word">{item.word}</span>
        <p className="gcen-seq__meaning">{item.meaning}</p>
      </div>
    );
  }

  return (
    <motion.div className="gcen-seq__panel" style={{ opacity, scale, y }}>
      <span className="gcen-seq__letter">{item.letter}</span>
      <motion.span className="gcen-seq__word" style={{ opacity: wordOpacity, y: wordY }}>
        {item.word}
      </motion.span>
      <motion.p className="gcen-seq__meaning" style={{ opacity: meaningOpacity }}>
        {item.meaning}
      </motion.p>
    </motion.div>
  );
}

/* Indicador lateral: 4 traços que preenchem por letra. */
function Indicator({ scrollYProgress, reduce }) {
  if (reduce) return null;
  return (
    <div className="gcen-seq__indicator" aria-hidden="true">
      {gcenAcronym.map((_, i) => {
        const s = i * STAGE;
        const e = s + STAGE;
        return <IndicatorBar key={i} i={i} s={s} e={e} scrollYProgress={scrollYProgress} />;
      })}
    </div>
  );
}

function IndicatorBar({ i, s, e, scrollYProgress }) {
  const scaleX = useTransform(scrollYProgress, [s, e], [0, 1]);
  return (
    <span className="gcen-seq__ind-bar">
      <motion.span className="gcen-seq__ind-fill" style={{ scaleX }} />
      <span className="gcen-seq__ind-num">{gcenAcronym[i].letter}</span>
    </span>
  );
}

/* Anéis de saturno com bolinhas glow girando + sonar (conectividade). */
function Rings({ scrollYProgress, reduce }) {
  const r = 5 * STAGE; // 0.833 início dos anéis
  const opacity = useTransform(scrollYProgress, [r, r + STAGE * 0.35, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [r, r + STAGE * 0.5], [0.7, 1]);

  if (reduce) return null;

  const ringConfigs = [
    { size: 'clamp(150px, 27vw, 400px)', dots: [0, 120, 240], duration: '14s', reverse: false },
    { size: 'clamp(215px, 37vw, 530px)', dots: [45, 165, 285], duration: '20s', reverse: true },
    { size: 'clamp(290px, 48vw, 670px)', dots: [0, 72, 144, 216, 288], duration: '28s', reverse: false },
  ];

  return (
    <motion.div className="gcen-seq__rings" style={{ opacity, scale }} aria-hidden="true">
      {ringConfigs.map((cfg, i) => (
        <div
          key={i}
          className={`gcen-seq__ring gcen-seq__ring--${i + 1}`}
          style={{
            width: cfg.size,
            height: cfg.size,
            animationDuration: cfg.duration,
            animationDirection: cfg.reverse ? 'reverse' : 'normal',
          }}
        >
          {cfg.dots.map((angle) => (
            <div key={angle} className="gcen-seq__dot-pos" style={{ transform: `rotate(${angle}deg)` }}>
              <span className="gcen-seq__dot" />
            </div>
          ))}
        </div>
      ))}
      <span className="gcen-seq__sonar gcen-seq__sonar--1" />
      <span className="gcen-seq__sonar gcen-seq__sonar--2" />
    </motion.div>
  );
}

/* Finale: lockup GCEN morpha para o logo (crossfade + scale) + anéis.
   Sem useTransform com função lambda (blur) — WAAPI não interpola strings de filter. */
function Finale({ scrollYProgress, reduce }) {
  const f = 4 * STAGE; // 0.667 início do finale (morph)
  const me = f + STAGE; // 0.833 fim do morph / início dos anéis

  const wrapOpacity = useTransform(scrollYProgress, [f - 0.02, f + STAGE * 0.35, 1], [0, 1, 1]);

  const textOpacity = useTransform(
    scrollYProgress,
    [f - 0.02, f + STAGE * 0.3, f + STAGE * 0.6, f + STAGE * 0.9, me],
    [0, 1, 1, 0.85, 0]
  );
  const textScale = useTransform(scrollYProgress, [f + STAGE * 0.6, me], [1, 0.94]);

  const logoOpacity = useTransform(
    scrollYProgress,
    [f + STAGE * 0.7, f + STAGE * 0.9, 1],
    [0, 1, 1]
  );
  const logoScale = useTransform(scrollYProgress, [f + STAGE * 0.7, me], [1.06, 1]);

  const nameOpacity = useTransform(scrollYProgress, [f + STAGE * 0.75, me, 1], [0, 1, 1]);
  const nameY = useTransform(scrollYProgress, [f + STAGE * 0.75, me], [18, 0]);

  if (reduce) {
    return (
      <div className="gcen-seq__static-finale">
        <span className="gcen-seq__lockup">GCEN</span>
        <p className="gcen-seq__name">
          Grupo Global de Consultores Estratégicos Executivos de Negócio
        </p>
        <img src={logo} alt="GCEN" className="gcen-seq__logo" />
      </div>
    );
  }

  return (
    <motion.div className="gcen-seq__finale" style={{ opacity: wrapOpacity }}>
      <div className="gcen-seq__morph">
        <Rings scrollYProgress={scrollYProgress} reduce={reduce} />
        <motion.span
          className="gcen-seq__lockup gcen-seq__lockup--blur"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          GCEN
        </motion.span>
        <motion.img
          src={logo}
          alt="GCEN - Grupo Global de Consultores Estratégicos Executivos de Negócio"
          className="gcen-seq__logo gcen-seq__logo--float gcen-seq__logo--blur"
          style={{ opacity: logoOpacity, scale: logoScale }}
        />
      </div>
      <motion.p className="gcen-seq__name" style={{ opacity: nameOpacity, y: nameY }}>
        Grupo Global de Consultores Estratégicos Executivos de Negócio
      </motion.p>
    </motion.div>
  );
}

export default function GcenSequence() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const hintOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return (
    <section
      id="sigla-gcen"
      className={`gcen-seq ${reduce ? 'gcen-seq--static' : ''}`}
      aria-labelledby="gcen-seq-heading"
      ref={ref}
    >
      <h2 id="gcen-seq-heading" className="sr-only">
        Significado da sigla GCEN
      </h2>

      {!reduce && (
        <div className="gcen-seq__sticky">
          <div className="gcen-seq__bg" aria-hidden="true">
            <div className="gcen-seq__bg-grad" />
            <div className="gcen-seq__bg-grain" />
            <div className="gcen-seq__bg-vignette" />
          </div>

          {gcenAcronym.map((item, i) => (
            <LetterStage
              key={item.letter}
              i={i}
              item={item}
              scrollYProgress={scrollYProgress}
              reduce={reduce}
            />
          ))}

          <Finale scrollYProgress={scrollYProgress} reduce={reduce} />
          <Indicator scrollYProgress={scrollYProgress} reduce={reduce} />

          <motion.div
            className="gcen-seq__scroll-hint"
            aria-hidden="true"
            style={{ opacity: hintOpacity }}
          >
            <span>Role para revelar</span>
            <span className="gcen-seq__scroll-line" />
          </motion.div>
        </div>
      )}

      {reduce && (
        <div className="gcen-seq__static">
          <div className="gcen-seq__bg gcen-seq__bg--static" aria-hidden="true">
            <div className="gcen-seq__bg-grad" />
            <div className="gcen-seq__bg-vignette" />
          </div>
          <div className="gcen-seq__static-inner">
            {gcenAcronym.map((item, i) => (
              <LetterStage
                key={item.letter}
                i={i}
                item={item}
                scrollYProgress={scrollYProgress}
                reduce={reduce}
              />
            ))}
            <Finale scrollYProgress={scrollYProgress} reduce={reduce} />
          </div>
        </div>
      )}
    </section>
  );
}
