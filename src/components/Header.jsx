import { useState } from 'react';
import Logo from './Logo.jsx';
import { menu } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const isMobile = () => window.innerWidth <= 991;

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar-in">
          <ul className="contact-line">
            <li><i className="fa-regular fa-envelope" /> info@we-build-dream.com</li>
            <li><i className="fa-solid fa-location-dot" /> Karachi, Pakistan.</li>
            <li><i className="fa-solid fa-phone" /> +92 300 2424517</li>
          </ul>
          <div className="social">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter" /></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
          </div>
        </div>
      </div>
      <div className="container navwrap">
        <nav className="navbar">
          <Logo />
          <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars" />
          </button>
          <ul className={`menu ${open ? 'open' : ''}`}>
            {menu.map((m) => (
              <li key={m.label} className={m.sub ? `has-sub ${subOpen ? 'open' : ''}` : ''}>
                <a
                  href={m.href}
                  onClick={(e) => {
                    if (m.sub) {
                      if (isMobile()) {
                        e.preventDefault();
                        setSubOpen(!subOpen);
                      }
                    } else setOpen(false);
                  }}
                >
                  {m.label} {m.sub && <i className="fa-solid fa-angle-down" />}
                </a>
                {m.sub && (
                  <ul className="sub">
                    {m.sub.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} onClick={() => setOpen(false)}>{s.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
