'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { href: '#services', label: 'SERVICES' },
  { href: '#about', label: 'ABOUT' },
  { href: '#how', label: 'HOW IT WORKS' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close menu when any nav link is clicked
  const close = () => setOpen(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="nav" aria-label="Primary">
      <Logo size="sm" as="a" href="#top" aria-label="Seam Digital Studio — home" />

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links${open ? ' is-open' : ''}`} id="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={close} className="nav-cta">
          BOOK A CALL
        </a>
      </div>
    </nav>
  );
}
