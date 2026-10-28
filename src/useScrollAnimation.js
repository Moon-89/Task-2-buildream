import { useEffect } from 'react';

// Everything that should zoom/fade in when it scrolls into view
const SELECTOR = [
  '.title',
  '.svc',
  '.item',
  '.feat',
  '.cta h2',
  '.cta p',
  '.cta a',
  '.person',
  '.contact form',
  '.page-intro',
  '.page-main',
  '.side-menu',
  '.foot-grid > div',
].join(',');

// Call once in the layout; pass the current path so new pages get their elements animated too.
export default function useScrollAnimation(path) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.classList.contains('in')) return;
      el.classList.add('reveal');
      // neighbours in a row/grid appear one after another
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${Math.min(index, 5) * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [path]);
}
