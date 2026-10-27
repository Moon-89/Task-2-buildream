import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import LogoCarousel from '../components/LogoCarousel.jsx';
import Services from '../components/Services.jsx';
import Gallery from '../components/Gallery.jsx';
import Different from '../components/Different.jsx';
import CTA from '../components/CTA.jsx';
import Contact from '../components/Contact.jsx';
import { galleries } from '../data.js';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <LogoCarousel />
      <Services />
      {galleries.map((g) => (
        <Gallery key={g.id} {...g} />
      ))}
      <Different />
      <CTA />
      <Contact />
    </>
  );
}
