import logo from '../assets/gcen-logo.png';
import './Footer.css';

/* ──────────────────────────────────────────────
   Column data — mirrors Global Marketplace layout
   ────────────────────────────────────────────── */
const COL_SOBRE = [
  { label: 'Quem somos',           href: '#sobre' },
  { label: 'Missão, visão e valores', href: '#mvv' },
  { label: 'Contatos',             href: '#contato' },
];

const COL_POLITICAS = [
  { label: 'Termos de uso',           href: '#termos' },
  { label: 'Política de privacidade', href: '#privacidade' },
  { label: 'Políticas de publicação', href: '#publicacao' },
  { label: 'Outros',                  href: '#outros' },
];

const COL_MINHA_CONTA = [
  { label: 'Minha conta',      href: '#minha-conta' },
  { label: 'Favoritos',        href: '#favoritos' },
  { label: 'Meus anúncios',   href: '#anuncios' },
  { label: 'Comprar anúncios', href: '#comprar-anuncios' },
  { label: 'Criar conta',      href: '#criar-conta' },
];

const COL_ANUNCIOS = [
  { label: 'Quero comprar', href: '#quero-comprar' },
  { label: 'Quero vender',  href: '#quero-vender' },
  { label: 'Meus logins',   href: '#logins' },
  { label: 'Publicidade',   href: '#publicidade' },
];

const LEGAL_LINKS = [
  { label: 'Termos e condições',       href: '#termos' },
  { label: 'Políticas de privacidade', href: '#privacidade' },
  { label: 'Políticas de publicação',  href: '#publicacao' },
];

/* ──────────────────────────────────────────────
   SVG helpers — all inline, no external images
   ────────────────────────────────────────────── */

/** Cadeado — Seal SSL */
function SealSSL() {
  return (
    <svg
      className="footer__seal-icon"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="34" height="34" rx="6" fill="#EAF3EA" stroke="#559550" strokeWidth="1.5"/>
      <rect x="9" y="17" width="18" height="13" rx="2" fill="none" stroke="#559550" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17V13a6 6 0 0 1 12 0v4" stroke="#559550" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="23" r="1.5" fill="#559550"/>
    </svg>
  );
}

/** Escudo com check — Site Seguro */
function SealSiteSeguro() {
  return (
    <svg
      className="footer__seal-icon"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="34" height="34" rx="6" fill="#EAF3EA" stroke="#559550" strokeWidth="1.5"/>
      <path d="M18 7l-9 3.5v6c0 5.25 3.825 10.155 9 11.5 5.175-1.345 9-6.25 9-11.5v-6L18 7z" fill="none" stroke="#559550" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="14,18 17,21 22,15" stroke="#559550" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Social icons — reused from existing file */
function SocialIcon({ name }) {
  const icons = {
    Facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    LinkedIn: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    Instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    WhatsApp: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

/* ──────────────────────────────────────────────
   Reusable link list
   ────────────────────────────────────────────── */
function LinkList({ title, links }) {
  return (
    <nav className="footer__col" aria-label={title}>
      <h3 className="footer__col-title">{title}</h3>
      <ul className="footer__links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   Main component
   ────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer id="rodape" className="footer">

      {/* ── FAIXA PRINCIPAL: 5 colunas + logo central ── */}
      <div className="footer__main">
        <div className="footer__main-inner">

          {/* Coluna 1 — Sobre nós */}
          <LinkList title="Sobre nós" links={COL_SOBRE} />

          {/* Coluna 2 — Políticas */}
          <LinkList title="Políticas" links={COL_POLITICAS} />

          {/* Centro — Logo */}
          <div className="footer__logo-col">
            <a href="#inicio" aria-label="GCEN - Página inicial">
              <img
                src={logo}
                alt="GCEN"
                className="footer__logo-img"
              />
            </a>
            {/* Selos de segurança — abaixo da logo, centro */}
            <div className="footer__seals" aria-label="Certificações de segurança">
              <div className="footer__seal">
                <SealSSL />
                <span className="footer__seal-label">SSL</span>
              </div>
              <div className="footer__seal">
                <SealSiteSeguro />
                <span className="footer__seal-label">Site Seguro<br/><small>Auditado</small></span>
              </div>
            </div>
          </div>

          {/* Coluna 4 — Minha conta */}
          <LinkList title="Minha conta" links={COL_MINHA_CONTA} />

          {/* Coluna 5 — Anúncios */}
          <LinkList title="Anúncios" links={COL_ANUNCIOS} />

        </div>
      </div>

      {/* ── FAIXA INTERMEDIÁRIA — dados legais ── */}
      <div className="footer__legal">
        <p className="footer__legal-text">
          GCEN - Grupo de Consultores Estratégicos Executivos de Negócio LTDA.
          &nbsp;&nbsp;CNPJ: 00.000.000/0001-00
          &nbsp;&nbsp;Rua Camapuã, 948 - Bairro Espatódia - CEP 79560-000 - Chapadão do Sul - MS
        </p>
      </div>

      {/* ── FAIXA INFERIOR — copyright + links + sociais ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">

          {/* Copyright + links legais */}
          <div className="footer__bottom-left">
            <span className="footer__copyright">
              © GCEN ® 2026 - Todos os direitos reservados.
            </span>
            <span className="footer__bottom-sep" aria-hidden="true"/>
            <nav className="footer__bottom-links" aria-label="Links legais">
              {LEGAL_LINKS.map(({ label, href }, i) => (
                <span key={label} className="footer__bottom-link-wrap">
                  {i > 0 && <span className="footer__bottom-pipe" aria-hidden="true">|</span>}
                  <a href={href}>{label}</a>
                </span>
              ))}
            </nav>
          </div>

          {/* Redes sociais */}
          <nav className="footer__social" aria-label="Redes sociais">
            {['Facebook', 'LinkedIn', 'Instagram', 'WhatsApp'].map((name) => (
              <a
                key={name}
                href="#"
                className="footer__social-link"
                aria-label={name}
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </nav>

        </div>
      </div>

    </footer>
  );
}
