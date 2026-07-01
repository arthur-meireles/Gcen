import { motion, useReducedMotion } from 'motion/react';
import { founders } from '../data/segments';
import './Founders.css';

const EASE = [0.16, 1, 0.3, 1];

export default function Founders() {
  const reduce = useReducedMotion();

  return (
    <section id="fundadores" className="founders">
      <div className="founders__inner">
        <div className="founders__header">
          <span className="section-tag section-tag--light">Liderança</span>
          <h2 className="founders__title">
            Nossa <em>liderança</em>
          </h2>
        </div>

        <div className="founders__grid">
          {founders.map((f, i) => (
            <motion.article
              key={f.id}
              className="founder-card"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
            >
              <div className="founder-card__photo">
                {f.photo ? (
                  <img src={f.photo} alt={f.name} loading="lazy" width="400" height="400" />
                ) : (
                  <span className="founder-card__initials" aria-hidden="true">
                    {f.initials}
                  </span>
                )}
              </div>
              <div className="founder-card__info">
                <h3 className="founder-card__name">{f.name}</h3>
                <span className="founder-card__role">{f.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
