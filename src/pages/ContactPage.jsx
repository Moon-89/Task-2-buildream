import PageBanner from '../components/PageBanner.jsx';
import Contact from '../components/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <Contact />
      <iframe
        className="page-map"
        title="Office location"
        loading="lazy"
        src="https://maps.google.com/maps?q=DHA%20Phase%202%20Karachi&output=embed"
      />
    </>
  );
}
