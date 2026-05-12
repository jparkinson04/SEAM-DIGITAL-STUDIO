/* Seam Digital Studio — main.js
   Small interactions only: header style on scroll, mobile nav toggle, footer year. */

(function () {
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const yearEl = document.getElementById('year');

  /* Footer year */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Header gets a subtle border once the user starts scrolling */
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobile nav toggle */
  if (navToggle && primaryNav) {
    const closeNav = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      primaryNav.classList.remove('is-open');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeNav();
      } else {
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Close menu');
        primaryNav.classList.add('is-open');
      }
    });

    /* Close menu after tapping a link on mobile */
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });
  }
})();
