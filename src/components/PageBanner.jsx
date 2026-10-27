export default function PageBanner({ title }) {
  return (
    <section className="page-banner" style={{ backgroundImage: 'url("/images/banner.jpg")' }}>
      <h1>{title}</h1>
    </section>
  );
}
