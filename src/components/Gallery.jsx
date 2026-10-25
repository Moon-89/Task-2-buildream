export default function Gallery({ id, title, items }) {
  return (
    <section className="gallery" id={id}>
      <h2 className="title">{title}</h2>
      <div className="grid">
        {items.map(([name, img]) => (
          <div className="item" key={name}>
            <div className="img" style={{ backgroundImage: `url("${img}")` }} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
