import { features } from '../data.js';

export default function Different() {
  return (
    <section className="different">
      <div className="container">
        <h2 className="title">How Are We Different?</h2>
        <div className="feat-grid">
          {features.map(([icon, title, text]) => (
            <div className="feat" key={title}>
              <i className={`fa-solid ${icon}`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
