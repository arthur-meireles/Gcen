import './ParallaxSection.css';

export default function ParallaxSection({ image, tag, title, text, ctaLabel, ctaHref }) {
  return (
    <div
      className="parallax"
      style={{ backgroundImage: `url(${image})` }}
      role="region"
      aria-label={title}
    >
      <div className="parallax__overlay" aria-hidden="true" />
      <div className="parallax__content">
        <span className="parallax__tag">{tag}</span>
        <p className="parallax__title">{title}</p>
        {text && <p className="parallax__text">{text}</p>}
        {ctaLabel && ctaHref && (
          <a href={ctaHref} className="parallax__cta geo-shape">
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
}