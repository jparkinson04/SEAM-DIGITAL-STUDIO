import Logo from './Logo';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <p className="hero-eyebrow">DIGITAL SETUP FOR BEAUTY &amp; WELLNESS</p>

        <Logo size="lg" as="h1" id="hero-title" style={{ color: 'var(--cream)' }} />

        <p className="hero-sub">
          Everything your salon or wellness business needs online — website, bookings, reviews, and content. All connected. All sorted.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn btn-primary">
            BOOK A DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href="#services" className="btn btn-outline">
            SEE THE WORK
          </a>
        </div>
      </div>
    </section>
  );
}
