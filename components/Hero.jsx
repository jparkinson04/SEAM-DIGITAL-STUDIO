import Logo from './Logo';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Drifting glow orbs — soft luminous motion behind the content */}
      <div className="hero-glows" aria-hidden="true">
        <span className="hero-glow hero-glow--a"></span>
        <span className="hero-glow hero-glow--b"></span>
        <span className="hero-glow hero-glow--c"></span>
      </div>

      <div className="hero-inner">
        <Logo size="lg" as="h1" id="hero-title" style={{ color: 'var(--cream)' }} />

        <p className="hero-tagline">
          Websites that look right, and sound right.
        </p>

        <p className="hero-sub">
          Website design, branding and messaging for small businesses. Built around your story, and how your customers actually think.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn btn-primary">
            BOOK A DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href="/services" className="btn btn-outline">
            SEE WHAT WE DO
          </a>
        </div>
      </div>
    </section>
  );
}
