import './CTA.css';

export default function CTA() {
  return (
    <section id="parceiros" className="cta">
      <div className="cta__overlay" aria-hidden="true" />
      <div className="cta__inner">
        <span className="cta__tag">Seja parceiro</span>
        <h2 className="cta__title">
          O agronegócio brasileiro<br />
          precisa de você.{' '}
          <span className="accent-ribbon"><span>Venha ser Global</span></span>
        </h2>
        <p className="cta__text">
          Junte-se à rede GCEN e expanda seus negócios com o suporte de um grupo com mais de 30 anos no agronegócio brasileiro.
          Consultores, corretores e parceiros de todo o Brasil já fazem parte da nossa história.
        </p>
        <div className="cta__actions">
          <a href="#contato" className="cta__btn cta__btn--primary">
            Quero ser parceiro
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#segmentos" className="cta__btn cta__btn--secondary">
            Conheça os segmentos
          </a>
        </div>
      </div>
    </section>
  );
}