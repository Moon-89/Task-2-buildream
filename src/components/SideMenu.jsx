import { Link } from 'react-router-dom';
import { flatMenu } from '../data.js';

export default function SideMenu() {
  return (
    <aside className="side-menu">
      <h2>Menu</h2>
      <ul>
        {flatMenu.map((l) => (
          <li key={l.label} className={l.sub ? 'sub' : ''}>
            <Link to={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
