import './ParallaxSection.css';

export default function ParallaxSection({ image, tag, title }) {
  return (
    <div
      className="parallax"
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={title}
    >
      <div className="parallax__overlay" aria-hidden="true" />
      <div className="parallax__content">
        <span className="parallax__tag">{tag}</span>
        <p className="parallax__title">{title}</p>
      </div>
    </div>
  );
}