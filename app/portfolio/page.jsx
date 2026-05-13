import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'Portfolio, Seam Digital Studio',
  description:
    'Selected projects from Seam Digital Studio. Recent work, in-progress builds, and the capabilities I bring to every project.',
};

const CAPABILITIES = [
  {
    label: 'WEB',
    body: 'Custom website design and build. Editorial-led, conversion-aware, fast.',
  },
  {
    label: 'BOOKINGS',
    body: 'Direct booking flows integrated with Ticket Tailor, Fresha, Treatwell, Square and more.',
  },
  {
    label: 'REVIEWS',
    body: 'Automated five-star Google review collection systems, quietly running in the background.',
  },
  {
    label: 'SOCIAL',
    body: 'Live Instagram feeds, social-to-site flows, and content packs that earn their keep.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <RevealOnScroll className="container">
          <p className="section-label">PORTFOLIO</p>
          <h1 className="page-hero-title">Selected work.</h1>
          <p className="page-hero-sub">
            Recent and in-progress builds. More case studies will live here as projects go public.
          </p>
        </RevealOnScroll>
      </section>

      <section className="selected-work">
        <RevealOnScroll className="container">
          <header className="selected-work-head">
            <p className="section-label">CASE STUDY · 01</p>
            <h2 className="section-headline">Bohemia Wellness.</h2>
          </header>

          <article className="case-study-card">
            <a
              href="[BOHEMIA URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-cover"
              aria-label="Visit Bohemia Wellness, opens in new tab"
            >
              <div className="case-study-cover-inner">
                <div>
                  <p className="case-study-cover-label">BOHEMIA</p>
                  <p className="case-study-cover-sub">WELLNESS</p>
                </div>
                <p className="case-study-cover-cta">VIEW LIVE SITE <span aria-hidden="true">↗</span></p>
              </div>
            </a>

            <div className="case-study-meta">
              <p className="case-study-tag">RECENT BUILD</p>
              <h3 className="case-study-title">A wellness studio, fully set up online.</h3>
              <p className="case-study-body">
                [PLACEHOLDER, JESSIE TO REPLACE: A complete digital setup for Claire&apos;s wellness studio. Custom website, booking integration, Google reviews and content support. Built to feel calm, professional, and easy to find.]
              </p>

              <dl className="case-study-meta-list">
                <div>
                  <dt>CLIENT</dt>
                  <dd>Claire Whitfield</dd>
                </div>
                <div>
                  <dt>SCOPE</dt>
                  <dd>Full Setup + Monthly Care</dd>
                </div>
                <div>
                  <dt>STATUS</dt>
                  <dd>Live</dd>
                </div>
              </dl>

              <a
                href="[BOHEMIA URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                VIEW THE LIVE SITE <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </RevealOnScroll>
      </section>

      <section className="portfolio-soon">
        <RevealOnScroll className="container">
          <div className="portfolio-soon-card">
            <p className="section-label">MORE WORK</p>
            <h2 className="section-headline">Coming soon.</h2>
            <p className="section-intro">
              More builds are underway with a small group of clients. Want to see in-progress work, or talk through how something might apply to you? Book a call below.
            </p>

            <a href="#contact" className="btn-solid btn-solid--ink">
              BOOK A DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </RevealOnScroll>
      </section>

      <section className="portfolio-capabilities">
        <RevealOnScroll className="container">
          <header className="services-head">
            <p className="section-label">WHAT I BRING</p>
            <h2 className="section-headline">Capabilities.</h2>
          </header>

          <div className="capabilities-grid">
            {CAPABILITIES.map((c) => (
              <article key={c.label} className="capability-card">
                <p className="service-card-label">{c.label}</p>
                <p className="capability-body">{c.body}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
