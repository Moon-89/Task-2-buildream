import ShareBar from './components/ShareBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import LogoCarousel from './components/LogoCarousel.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Different from './components/Different.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ToTop from './components/ToTop.jsx';
import { galleries } from './data.js';

export default function App() {
  return (
    <>
      <ShareBar />
      <Header />
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
      <Footer />
      <ToTop />
    </>
  );
}
