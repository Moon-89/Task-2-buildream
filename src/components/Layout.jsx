import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ShareBar from './ShareBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ToTop from './ToTop.jsx';

export default function Layout() {
  const { pathname } = useLocation();

  // Start every page at the top
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <ShareBar />
      <Header />
      <Outlet />
      <Footer />
      <ToTop />
    </>
  );
}
