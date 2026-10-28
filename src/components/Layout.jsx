import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ShareBar from './ShareBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ToTop from './ToTop.jsx';
import useScrollAnimation from '../useScrollAnimation.js';

export default function Layout() {
  const { pathname } = useLocation();
  useScrollAnimation(pathname);

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
