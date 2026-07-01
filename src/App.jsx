import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import SegmentsPage from './pages/SegmentsPage';
import './App.css';

/* Crossfade de rotas com scroll travado no topo via Lenis. */
function RouteScrollSync() {
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
  }, [lenis]);
  return null;
}

export default function App() {
  const reduce = useReducedMotion();

  const content = (
    <>
      <ScrollProgress />
      <ScrollManager />
      <RouteScrollSync />
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

  if (reduce) {
    return (
      <>
        <a href="#main-content" className="skip-link">Ir para o conteúdo principal</a>
        {content}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        smoothWheel: true,
      }}
    >
      <a href="#main-content" className="skip-link">Ir para o conteúdo principal</a>
      {content}
    </ReactLenis>
  );
}
