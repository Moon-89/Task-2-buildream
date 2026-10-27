import { Link } from 'react-router-dom';

export default function Gallery({ id, title, page, items }) {
  return (
    <section className="gallery" id={id}>
      <h2 className="title">{title}</h2>
      <div className="grid">
        {items.map(([name, img]) => (
          <Link className="item" key={name} to={page}>
            <div className="img" style={{ backgroundImage: `url("${img}")` }} />
            <p>{name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
