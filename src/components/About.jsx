import Reveal from './Reveal';
import aboutImg from '../assets/paralax1.jpg';
import './About.css';

export default function About() {
  return (
    <section id="sobre" className="about bg-topo" aria-labelledby="about-heading">
      <div className="about__inner">
        <Reveal as="div" className="about__intro">
          <div className="about__intro-text">
            <span className="eyebrow">Quem somos</span>
            <h2 id="about-heading" className="about__title">
              Todo agronegócio é, antes de mais nada,{' '}
              <span className="accent-ribbon"><span>um negócio</span></span>
            </h2>
            <p className="about__desc">
              A GCEN é um grupo de consultores estratégicos com mais de 30 anos de atuação no
              agronegócio brasileiro, reunindo num só lugar consórcio, seguro rural, investimento,
              consultoria, imóveis rurais, máquinas agrícolas e marketplace.
            </p>
            <p className="about__desc">
              Estamos presentes em todos os estados brasileiros, simplificando o acesso a produtos e
              serviços para produtores rurais, investidores e empresas do agro. Do campo ao mercado,
              estamos ao seu lado em cada etapa da sua operação.
            </p>
            <div className="about__intro-badges">
              <span className="about__badge"><strong>+30</strong> anos de atuação</span>
              <span className="about__badge"><strong>7</strong> segmentos integrados</span>
              <span className="about__badge"><strong>27</strong> estados + DF</span>
            </div>
            <a href="#segmentos" className="about__btn btn-wipe">
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
          </div>
          <div className="about__intro-media img-cine">
            <img src={aboutImg} alt="Produtor rural acompanhando a operação no campo" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
