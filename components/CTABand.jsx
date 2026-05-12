import RevealOnScroll from './RevealOnScroll';

export default function CTABand() {
  return (
    <div className="cta-band" id="contact">
      <RevealOnScroll className="cta-inner">
        <h2 className="cta-text">
          Ready to get <em>sorted?</em>
        </h2>
        <div className="cta-actions">
          <a href="mailto:[YOUR EMAIL]?subject=Discovery%20Call" className="cta-btn">
            BOOK YOUR DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
          </a>
          <p className="cta-meta">
            30 minutes · No obligation · Doncaster &amp; surrounding areas
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
}
