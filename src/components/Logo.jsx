export default function Logo({ dark = false }) {
  return (
    <a href="#home" className={`logo ${dark ? 'logo-dark' : ''}`}>
      <b>BUILD</b>
      <span>REAM</span>
      <small>CONTRACTORS &amp; RENOVATION (PVT) LIMITED</small>
    </a>
  );
}
