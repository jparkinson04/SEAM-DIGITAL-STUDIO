import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo
              size="sm"
              as="a"
              href="#top"
              aria-label="Seam Digital Studio — home"
              style={{ color: 'var(--cream)' }}
            />
            <p>
              Digital setup for local beauty and wellness businesses. Based in Doncaster, working across South Yorkshire.
            </p>
          </div>

          <div className="footer-col">
            <h5>NAVIGATE</h5>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>SERVICES</h5>
            <ul>
              <li><a href="#services">The Full Setup</a></li>
              <li><a href="#services">Monthly Care</a></li>
              <li><a href="#services">Content</a></li>
              <li><a href="#contact">Enquire</a></li>
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
          <p>&copy; {year} SEAM STUDIO · ALL RIGHTS RESERVED</p>
          <div className="footer-socials">
            <a
              href="https://instagram.com/[YOUR HANDLE]"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG
            </a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
