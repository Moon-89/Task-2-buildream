import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="cta">
      <h2>Let us do the leg work for you- Replace it will the following CTA</h2>
      <p>Schedule a visit, tell us your requirement, and get an accurate cost estimation today!!</p>
      <Link to="/contact-us" className="btn-outline">
        Book Now <i className="fa-solid fa-angles-right" />
      </Link>
    </section>
  );
}
