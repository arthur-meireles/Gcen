import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gcen-logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Segmentos', to: '/segmentos' },
  { label: 'Números', to: '/#numeros' },
  { label: 'Depoimentos', to: '/#depoimentos' },
  { label: 'Contato', to: '/#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="GCEN — página inicial" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="GCEN" className="navbar__logo-img" />
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/#contato" className="navbar__cta" onClick={() => setMenuOpen(false)}>Fale Conosco</Link>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}