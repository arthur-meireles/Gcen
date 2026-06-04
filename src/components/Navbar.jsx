import { useState, useEffect } from 'react';
import logo from '../assets/gcen-logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Números', href: '#numeros' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
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
        <a href="#hero" className="navbar__logo" aria-label="GCEN — página inicial">
          <img src={logo} alt="GCEN" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="navbar__cta">Fale Conosco</a>
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