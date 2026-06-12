import './About.css';

export default function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <div className="about__text">
          <span className="section-tag">Quem somos</span>
          <h2 id="about-heading" className="about__title">
            Todo agronegócio é, antes de mais nada,{' '}
            <span className="accent-ribbon">um negócio</span>
          </h2>
          <p className="about__desc">
            A GCEN é um grupo de consultores estratégicos com mais de 30 anos de atuação no
            agronegócio brasileiro. Reunimos especialistas em consórcio, seguro rural, investimento,
            consultoria, imóveis rurais, máquinas agrícolas e marketplace — tudo sob um mesmo guarda-chuva.
          </p>
          <p className="about__desc">
            Estamos presentes em todos os estados brasileiros, simplificando o acesso a produtos e
            serviços para produtores rurais, investidores e empresas do agro.
          </p>

          <div className="about__acronym" role="list" aria-label="Significado da sigla GCEN">
            <div className="about__acronym-item" role="listitem">
              <strong aria-label="G de Grupo e Global">G</strong>
              <span>Grupo<span className="about__acronym-plus"> + </span>Global</span>
            </div>
            <div className="about__acronym-item" role="listitem">
              <strong aria-label="C de Consultores">C</strong>
              <span>Consultores<em>(ramo agrícola)</em></span>
            </div>
            <div className="about__acronym-item" role="listitem">
              <strong aria-label="E de Executivos">E</strong>
              <span>Executivos<em>(ramo urbano)</em></span>
            </div>
            <div className="about__acronym-item" role="listitem">
              <strong aria-label="N de Negócio">N</strong>
              <span>Negócio<em>(agro + cidade)</em></span>
            </div>
          </div>

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
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="about__media">
          <div className="about__video-wrapper">
            <iframe
              className="about__video"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="Vídeo institucional: Sobre a GCEN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}