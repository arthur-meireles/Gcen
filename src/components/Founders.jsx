import { founders } from '../data/segments';
import './Founders.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25h4.5V23h-4.5V8.25zM8.5 8.25H12.8v2.02h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.29c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32V23H8.5V8.25z" />
  </svg>
);

export default function Founders() {
  return (
    <section id="fundadores" className="founders bg-dots">
      <div className="founders__inner">
        <div className="founders__header">
          <span className="eyebrow">Liderança</span>
          <h2 className="founders__title">
            Quem conduz a <span className="accent-ribbon"><span>GCEN</span></span>
          </h2>
          <p className="founders__lead">
            Sócios-fundadores que unem décadas de vivência no agronegócio a uma visão
            executiva de negócios, do campo ao mercado.
          </p>
        </div>

        <div className="founders__grid">
          {founders.map((f) => (
            <article key={f.id} className="founder-card">
              <div className="founder-card__photo img-cine">
                {f.photo ? (
                  <img src={f.photo} alt={f.name} loading="lazy" width="600" height="700" />
                ) : (
                  <span className="founder-card__initials" aria-hidden="true">
                    {f.initials}
                  </span>
                )}
                <a
                  href="#contato"
                  className="founder-card__social"
                  aria-label={`LinkedIn de ${f.name}`}
                >
                  <LinkedInIcon />
                </a>
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
