'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { href: '/services', label: 'SERVICES' },
  { href: '/work', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="nav" aria-label="Primary">
      <Link href="/" aria-label="Seam Digital Studio, home" onClick={close}>
        <Logo size="sm" />
      </Link>

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
          <Link key={l.href} href={l.href} onClick={close}>
            {l.label}
          </Link>
        ))}
        <a href="#contact" onClick={close} className="nav-cta">
          BOOK A CALL
        </a>
      </div>
    </nav>
  );
}
