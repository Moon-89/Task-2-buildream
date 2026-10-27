import PageBanner from '../components/PageBanner.jsx';
import Gallery from '../components/Gallery.jsx';
import CTA from '../components/CTA.jsx';
import { galleries } from '../data.js';

export default function ServicePage({ title, text, gallery, img }) {
  const set = galleries.find((g) => g.id === gallery);

  return (
    <>
      <PageBanner title={title} />
      <section className="page-intro">
        <p>{text}</p>
        {img && <img className="page-img" src={img} alt={title} />}
      </section>
      {set && <Gallery {...set} />}
      <CTA />
    </>
  );
}
