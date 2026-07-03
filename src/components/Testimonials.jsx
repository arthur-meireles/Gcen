import { useState } from 'react';
import { testimonials, segments } from '../data/segments';
import './Testimonials.css';

const FILTERS = [
  { id: 'all', label: 'Todos' },
  ...segments.map((s) => ({ id: s.id, label: s.label })),
];

function Stars({ count }) {
  return (
    <span className="stars" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);

  const filtered = filter === 'all' ? testimonials : testimonials.filter((t) => t.segment === filter);
  const perPage = 3;
  const totalPages = Math.ceil(filtered.length / perPage);
  const visible = filtered.slice(page * perPage, page * perPage + perPage);

  const handleFilter = (id) => {
    setFilter(id);
    setPage(0);
  };

  return (
    <section id="depoimentos" className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="testimonials__title">
            <span className="testimonials__title-line">Conheça a opinião de quem é</span>
            <span className="testimonials__title-line"><em>referência no agro</em></span>
          </h2>
          <p className="testimonials__lead">
            Histórias reais de produtores rurais, investidores e empresas que encontraram soluções com a GCEN.
          </p>
        </div>

        <div className="testimonials__filters" role="group" aria-label="Filtrar por segmento">
          {FILTERS.slice(0, 6).map((f) => (
            <button
              key={f.id}
              className={`testimonials__filter ${filter === f.id ? 'testimonials__filter--active' : ''}`}
              onClick={() => handleFilter(f.id)}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="testimonials__grid" aria-live="polite" aria-label="Depoimentos filtrados">
          {visible.map((t) => {
            const seg = segments.find((s) => s.id === t.segment);
            return (
              <article key={t.id} className="tcard">
                <div className="tcard__top">
                  <Stars count={t.rating} />
                  {seg && (
                    <span className="tcard__badge" style={{ '--seg-color': seg.color }}>
                      {seg.label}
                    </span>
                  )}
                </div>
                <blockquote className="tcard__text">&ldquo;{t.text}&rdquo;</blockquote>
                <footer className="tcard__footer">
                  <div className="tcard__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div className="tcard__author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </footer>
              </article>
            );
          })}
          {visible.length === 0 && (
            <p className="testimonials__empty">Nenhum depoimento para este segmento ainda.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="testimonials__pagination" aria-label="Paginação de depoimentos">
            <button
              className="testimonials__nav"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Página anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <span className="testimonials__page-info" aria-live="polite">
              {page + 1} / {totalPages}
            </span>
            <button
              className="testimonials__nav"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Próxima página"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}