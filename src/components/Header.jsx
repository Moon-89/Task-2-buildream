import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { menu, socials } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const isMobile = () => window.innerWidth <= 991;
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar-in">
          <ul className="contact-line">
            <li><i className="fa-regular fa-envelope" /> <a href="mailto:info@we-build-dream.com">info@we-build-dream.com</a></li>
            <li><i className="fa-solid fa-location-dot" /> Karachi, Pakistan.</li>
            <li><i className="fa-solid fa-phone" /> <a href="tel:+923002424517">+92 300 2424517</a></li>
          </ul>
          <div className="social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                <i className={`fa-brands ${s.icon}`} />
              </a>
            ))}
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
                <Link
                  to={m.href}
                  onClick={(e) => {
                    if (!m.sub) return close();
                    // on mobile the parent only opens its submenu
                    if (isMobile()) {
                      e.preventDefault();
                      setSubOpen(!subOpen);
                    } else close();
                  }}
                >
                  {m.label} {m.sub && <i className="fa-solid fa-angle-down" />}
                </Link>
                {m.sub && (
                  <ul className="sub">
                    {m.sub.map((s) => (
                      <li key={s.label}>
                        <Link to={s.href} onClick={close}>{s.label}</Link>
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
