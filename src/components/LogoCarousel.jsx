import { useEffect, useState } from 'react';
import { logos } from '../data.js';

// How many logos fit on screen at the current width
const visibleCount = () => {
  const w = window.innerWidth;
  if (w <= 575) return 1;
  if (w <= 991) return 3;
  if (w <= 1199) return 4;
  return 5;
};

export default function LogoCarousel() {
  const [visible, setVisible] = useState(visibleCount);
  const [pos, setPos] = useState(0);
  const max = logos.length - visible;
  const dotCount = Math.min(4, max + 1);
  const activeDot = Math.round((pos * (dotCount - 1)) / Math.max(max, 1));

  useEffect(() => {
    const onResize = () => {
      setVisible(visibleCount());
      setPos(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Slide forward every 3.5s, then loop back to the start
  useEffect(() => {
    const timer = setInterval(() => setPos((p) => (p >= max ? 0 : p + 1)), 3500);
    return () => clearInterval(timer);
  }, [max, pos]);

  return (
    <section className="logos">
      <div className="viewport">
        <div className="track" style={{ transform: `translateX(-${pos * (100 / visible)}%)` }}>
          {logos.map((src, i) => (
            <div className="logo-card" key={i}>
              <div style={{ backgroundImage: `url("${src}")` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: dotCount }, (_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            className={i === activeDot ? 'on' : ''}
            onClick={() => setPos(Math.round((i * max) / Math.max(dotCount - 1, 1)))}
          />
        ))}
      </div>
    </section>
  );
}
