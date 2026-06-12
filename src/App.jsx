import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SegmentsPage from './pages/SegmentsPage';
import './App.css';

/* Scrolls to top on route change, or smoothly to a #hash target when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ir para o conteúdo principal</a>
      <ScrollManager />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/segmentos" element={<SegmentsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
