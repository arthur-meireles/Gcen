import { founders } from '../data/segments';
import './Founders.css';

export default function Founders() {
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
          {founders.map((f) => (
            <article key={f.id} className="founder-card">
              <div className="founder-card__photo">
                {f.photo ? (
                  <img src={f.photo} alt={f.name} />
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}