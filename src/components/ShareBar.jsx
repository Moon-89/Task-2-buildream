import { useLocation } from 'react-router-dom';

const buttons = [
  ['fb', 'Facebook', 'fa-brands fa-facebook-f', (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`],
  ['tw', 'Twitter', 'fa-brands fa-twitter', (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`],
  ['li', 'LinkedIn', 'fa-brands fa-linkedin-in', (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
  ['pi', 'Pinterest', 'fa-brands fa-pinterest-p', (u, t) => `https://pinterest.com/pin/create/button/?url=${u}&description=${t}`],
  ['wa', 'WhatsApp', 'fa-brands fa-whatsapp', (u, t) => `https://wa.me/?text=${t}%20${u}`],
  ['mo', 'More (email)', 'fa-solid fa-plus', (u, t) => `mailto:?subject=${t}&body=${u}`],
];

// Share buttons: each one shares the page the visitor is currently on
export default function ShareBar() {
  useLocation(); // re-render on navigation so the shared link stays current
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  return (
    <div className="share">
      {buttons.map(([cls, label, icon, link]) => (
        <a key={cls} href={link(url, title)} className={cls} aria-label={`Share on ${label}`} target="_blank" rel="noopener noreferrer">
          <i className={icon} />
        </a>
      ))}
    </div>
  );
}
