import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="Seam Digital Studio, home">
              <Logo size="sm" style={{ color: 'var(--cream)' }} />
            </Link>
            <p style={{ marginTop: 20 }}>
              The complete digital setup for small businesses. Based in Doncaster, working with clients across the UK.
            </p>
          </div>

          <div className="footer-col">
            <h5>NAVIGATE</h5>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/content">Content</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>SERVICES</h5>
            <ul>
              <li><Link href="/services">The Full Setup</Link></li>
              <li><Link href="/services">Monthly Care</Link></li>
              <li><Link href="/content">Content</Link></li>
              <li><a href="#contact">Book a call</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>CONTACT</h5>
            <ul>
              <li><a href="mailto:jessie@expert-voice.co.uk">jessie@expert-voice.co.uk</a></li>
              <li><a href="#contact">Book a call</a></li>
              <li><a href="#">Doncaster, UK</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} SEAM DIGITAL STUDIO · ALL RIGHTS RESERVED</p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/seamdigitalstudio"
              aria-label="Instagram, opens in new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
