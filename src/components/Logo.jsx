import { useState } from 'react';
import { Link } from 'react-router-dom';

// Uses /public/images/logo.png when it exists, otherwise falls back to the text logo.
export default function Logo({ dark = false }) {
  const [missing, setMissing] = useState(false);

  return (
    <Link to="/" className={`logo ${dark ? 'logo-dark' : ''}`}>
      {missing ? (
        <>
          <b>BUILD</b>
          <span>REAM</span>
          <small>CONTRACTORS &amp; RENOVATION (PVT) LIMITED</small>
        </>
      ) : (
        <img src="/images/logo.png" alt="Buildream Contractors & Renovation" onError={() => setMissing(true)} />
      )}
    </Link>
  );
}
