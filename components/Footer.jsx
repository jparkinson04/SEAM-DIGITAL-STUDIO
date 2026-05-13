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
              <li><a href="mailto:[YOUR EMAIL]">[YOUR EMAIL]</a></li>
              <li><a href="#contact">Book a call</a></li>
              <li><a href="#">Doncaster, UK</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} SEAM DIGITAL STUDIO · ALL RIGHTS RESERVED</p>
          <div className="footer-socials">
            <a
              href="https://instagram.com/[YOUR HANDLE]"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG
            </a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
