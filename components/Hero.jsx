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
          Your full digital setup, in one place.
        </p>

        <p className="hero-sub">
          Website, bookings, reviews and content. Built around your business. Working together from day one.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn btn-primary">
            BOOK A DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href="/services" className="btn btn-outline">
            SEE WHAT I DO
          </a>
        </div>
      </div>
    </section>
  );
}
