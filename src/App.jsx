import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MVV from './components/MVV';
import ParallaxSection from './components/ParallaxSection';
import Segments from './components/Segments';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Founders from './components/Founders';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { paralaxSections } from './data/segments';
import './App.css';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ir para o conteúdo principal</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ParallaxSection {...paralaxSections[0]} />
        <MVV />
        <Segments />
        <ParallaxSection {...paralaxSections[1]} />
        <Stats />
        <Testimonials />
        <ParallaxSection {...paralaxSections[2]} />
        <Founders />
        <CTA />
      </main>
      <Footer />
    </>
  );
}