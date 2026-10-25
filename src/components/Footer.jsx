import Logo from './Logo.jsx';

const links = [
  ['Home', '#home'],
  ['About us', '#about'],
  ['Construction', '#construction'],
  ['Residential Construction', '#construction', true],
  ['Commercial Construction', '#construction', true],
  ['Architect', '#architect'],
  ['Real Estate', '#services'],
  ['Interior Designs', '#interior'],
  ['Renovations', '#renovation'],
  ['Contact us', '#contact'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div className="f-about">
          <Logo dark />
          <h4>About us</h4>
          <p>
            The foundation of a dream house is often laid in the imagination, where individuals conceive their
            ideal surroundings. It could be a sanctuary of tranquility, a hub for creativity, or a space for
            social gatherings.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="qlinks">
            {links.map(([label, href, sub]) => (
              <li key={label + href} className={sub ? 'sub' : ''}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Location</h4>
          <iframe
            title="Office location"
            loading="lazy"
            src="https://maps.google.com/maps?q=DHA%20Phase%202%20Karachi&output=embed"
          />
        </div>
        <div className="f-contact">
          <h4>Contact Info</h4>
          <h5>OFFICE ADDRESS</h5>
          <p>
            <i className="fa-solid fa-address-card" /> Suit # 1 , Plot # 25-C , Sunset Lane 1 DHA Phase 2 Behind
            A-One Snaks Karachi City, Sindh 75500.
          </p>
          <h5>EMAIL US</h5>
          <p>
            <i className="fa-solid fa-envelope" /> <a href="mailto:info@we-build-dream.com">info@we-build-dream.com</a>
          </p>
          <h5>PHONE</h5>
          <p>
            <i className="fa-brands fa-whatsapp" /> +92 300 2424517
          </p>
        </div>
      </div>
      <div className="copy">
        <div className="container copy-in">
          <span>
            © All Right Reserved Website Designed by <a href="#">Awesome Marketing Services</a>
          </span>
          <span className="copy-links">
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact us</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
