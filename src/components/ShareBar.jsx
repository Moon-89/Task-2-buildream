const items = [
  ['fb', 'Facebook', 'fa-brands fa-facebook-f'],
  ['tw', 'Twitter', 'fa-brands fa-twitter'],
  ['li', 'LinkedIn', 'fa-brands fa-linkedin-in'],
  ['pi', 'Pinterest', 'fa-brands fa-pinterest-p'],
  ['wa', 'WhatsApp', 'fa-brands fa-whatsapp'],
  ['mo', 'More', 'fa-solid fa-plus'],
];

export default function ShareBar() {
  return (
    <div className="share">
      {items.map(([cls, label, icon]) => (
        <a key={cls} href="#" className={cls} aria-label={label}>
          <i className={icon} />
        </a>
      ))}
    </div>
  );
}
