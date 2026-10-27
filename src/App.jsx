import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { pages } from './data.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        {pages.map((p) => (
          <Route key={p.path} path={p.path} element={<ServicePage {...p} />} />
        ))}
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
