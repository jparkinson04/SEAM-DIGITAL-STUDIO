import Image from 'next/image';
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
            <div
              className="case-study-cover case-study-cover--image"
              role="img"
              aria-label="Bohemia Wellness website hero screenshot"
            >
              <Image
                src="/bohemia-website.jpg"
                alt=""
                fill
                sizes="(max-width: 1000px) 100vw, 620px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority={false}
              />
              <span className="case-study-soon-badge">PREVIEW · LIVE SOON</span>
            </div>

            <div className="case-study-meta">
              <p className="case-study-tag">RECENT BUILD</p>
              <h3 className="case-study-title">A wellness studio, fully set up online.</h3>
              <p className="case-study-body">
                [PLACEHOLDER, JESSIE TO REPLACE: A complete digital setup for Claire Whitfield&apos;s wellness sanctuary. Custom website, booking integration, reviews and ongoing content. Designed to feel as warm and grounded as the studio itself.]
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
                  <dd>Going live soon</dd>
                </div>
              </dl>

              <p className="link-arrow link-arrow--soon">
                LIVE SITE COMING SOON
              </p>
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
