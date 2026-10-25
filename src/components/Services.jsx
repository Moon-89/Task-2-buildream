import { services } from '../data.js';

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="title">Explore Our Services</h2>
      <div className="svc-grid">
        {services.map(({ title, text, img }) => (
          <div className="svc" key={title} style={{ backgroundImage: `url("${img}")` }}>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contact">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
