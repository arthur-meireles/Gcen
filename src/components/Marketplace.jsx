import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { segmentImages } from '../data/segments';
import './Marketplace.css';

const POINTS = [
  '14 segmentos de negócio integrados numa só plataforma',
  'Conexão direta entre comprador e fornecedor',
  'Marketplace B2B e B2C com rastreabilidade e segurança',
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Marketplace() {
  return (
    <section id="marketplace" className="mkt">
      <div className="mkt__inner">
        <Reveal as="div" className="mkt__header">
          <span className="section-tag">Global Marketplace</span>
          <h2 className="mkt__title">
            O ecossistema digital do <em>agronegócio</em>
          </h2>
          <p className="mkt__lead">
            Uma única plataforma que conecta o campo ao mercado, reunindo compradores
            e fornecedores com segurança em cada transação.
          </p>
        </Reveal>

        <Reveal as="div" className="mkt__box" delay={0.05}>
          <div className="mkt__media img-cine">
            <img
              src={segmentImages.marketplace}
              alt="Plataforma Global Marketplace da GCEN"
              loading="lazy"
              width="1200"
              height="800"
            />
            <button type="button" className="mkt__play" aria-label="Assistir vídeo sobre o Global Marketplace">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <div className="mkt__content">
            <h3 className="mkt__content-title">14 segmentos. Uma só plataforma.</h3>
            <p className="mkt__content-text">
              Do agro à aviação, o Global Marketplace é o coração digital do ecossistema GCEN:
              conecta compradores e fornecedores e encurta as distâncias entre campo e cidade.
            </p>
            <ul className="mkt__points">
              {POINTS.map((p) => (
                <li key={p}>
                  <CheckIcon />
                  {p}
                </li>
              ))}
            </ul>
            <Link to="/segmentos#marketplace" className="mkt__btn">
              Conhecer o marketplace
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
