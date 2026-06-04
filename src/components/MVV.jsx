import { mvv, excellenceItems } from '../data/segments';
import './MVV.css';

const EXCELLENCE_ICONS = {
  shield: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  eye: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  award: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  target: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  heart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
};

export default function MVV() {
  return (
    <>
      <section id="mvv" className="mvv">
        <div className="mvv__inner">
          <div className="mvv__header">
            <h2 className="mvv__title">Pilares da GCEN</h2>
          </div>

          <div className="mvv__pillars">
            <div className="mvv__card mvv__card--mission">
              <div className="mvv__card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
              </div>
              <h3 className="mvv__card-title">Missão</h3>
              <p className="mvv__card-text">{mvv.mission}</p>
            </div>

            <div className="mvv__card mvv__card--vision">
              <div className="mvv__card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="mvv__card-title">Visão</h3>
              <p className="mvv__card-text">{mvv.vision}</p>
            </div>

            <div className="mvv__card mvv__card--values">
              <div className="mvv__card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="mvv__card-title">Valores</h3>
              <ul className="mvv__values-list">
                {mvv.values.map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mvv__connectors">
            <div className="mvv__connector-line"></div>
            <div className="mvv__connector-line"></div>
            <div className="mvv__connector-line"></div>
          </div>

          <div className="mvv__purpose">
            <div className="mvv__card mvv__card--purpose">
              <div className="mvv__card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="mvv__card-title">Propósito</h3>
              <p className="mvv__card-text">{mvv.purpose}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="excellence">
        <div className="excellence__inner">
          <div className="excellence__header">
            <span className="section-tag section-tag--light">Compromisso</span>
            <h2 className="excellence__title">
              Compromisso com a<br />
              <span className="accent-ribbon"><span>Excelência</span></span>
            </h2>
            <p className="excellence__lead">
              Na GCEN, entendemos que cada operação no agronegócio é única.
              Nossa missão é garantir que cada transação seja conduzida com:
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
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}