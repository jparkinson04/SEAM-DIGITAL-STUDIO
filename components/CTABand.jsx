import Script from 'next/script';
import RevealOnScroll from './RevealOnScroll';

export default function CTABand() {
  return (
    <section className="cta-band" id="contact">
      <RevealOnScroll className="cta-inner">
        <div className="cta-head">
          <p className="section-label">GET IN TOUCH</p>
          <h2 className="cta-text">Ready to get sorted?</h2>
          <p className="cta-sub">
            Pick a time below for a free 20-minute discovery call. No pressure, no pitch, just a conversation.
          </p>
        </div>

        <div className="tidycal-wrapper">
          <div
            className="tidycal-embed"
            data-path="jessie-parkinson/discovery-call-seam-digital-studios"
          ></div>
        </div>

        <p className="cta-fallback">
          Trouble loading the calendar?{' '}
          <a
            href="https://tidycal.com/jessie-parkinson/discovery-call-seam-digital-studios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book directly on TidyCal →
          </a>
        </p>
      </RevealOnScroll>

      <Script
        src="https://asset-tidycal.b-cdn.net/js/embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
