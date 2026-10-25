import { useEffect, useState } from 'react';
import { slides } from '../data.js';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const go = (n) => setCurrent((n + slides.length) % slides.length);

  // Auto-advance every 5s; the timer restarts whenever the slide changes
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="hero" id="home">
      <div className="slides">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url("${s.img}")` }}
          >
            <div className="container">
              <h1>{s.title}</h1>
              <p className="sub-text">{s.text}</p>
              <div className="hero-btns">
                <a href="#about" className="btn">View More <i className="fa-solid fa-angle-right" /></a>
                <a href="#contact" className="btn red">Book Now <i className="fa-solid fa-angle-right" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow prev" aria-label="Previous" onClick={() => go(current - 1)}>
        <i className="fa-solid fa-angle-left" />
      </button>
      <button className="arrow next" aria-label="Next" onClick={() => go(current + 1)}>
        <i className="fa-solid fa-angle-right" />
      </button>
    </section>
  );
}
