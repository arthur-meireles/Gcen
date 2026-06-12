import Hero from '../components/Hero';
import About from '../components/About';
import MVV from '../components/MVV';
import ParallaxSection from '../components/ParallaxSection';
import Segments from '../components/Segments';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Founders from '../components/Founders';
import CTA from '../components/CTA';
import { paralaxSections } from '../data/segments';

export default function Home() {
  return (
    <>
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
    </>
  );
}
