import { useState } from 'react';
import Reveal from './Reveal';
import thumb from '../assets/home1.png';
import './About.css';

export default function About() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="sobre" className="about" aria-labelledby="about-heading">
      <div className="about__grid">
        <div className="about__text">
          <Reveal as="div" className="about__text-inner">
            <span className="section-tag">Quem somos</span>
            <h2 id="about-heading" className="about__title">
              Somos a Global Marketplace
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
          </Reveal>
        </div>

        <div className="about__media">
          <Reveal as="div" className="about__video-wrap" delay={0.1}>
            <div className="about__video-thumb" onClick={() => setPlaying(true)}>
              <img src={thumb} alt="GCEN - Global Marketplace" className="about__video-img" />
              {!playing && (
                <button className="about__play-btn" aria-label="Reproduzir vídeo">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" fill="white" fillOpacity="0.9" />
                    <path d="M9.5 7.5v9l7-4.5-7-4.5z" fill="#1a3a2a" />
                  </svg>
                </button>
              )}
              {playing && (
                <video
                  className="about__video"
                  autoPlay
                  controls
                  playsInline
                  poster={thumb}
                >
                  <source src="/assets/about.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
