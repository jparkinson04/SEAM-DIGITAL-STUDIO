import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import { PROJECTS } from './projects';

export const metadata = {
  title: 'Work, Seam Digital Studio',
  description:
    'Our work at Seam Digital Studio. Recent builds and in-progress projects, with a closer look at each one.',
};

const CAPABILITIES = [
  {
    label: 'WEBSITES',
    body: 'Custom website design and build. Editorial-led, conversion-aware, fast.',
  },
  {
    label: 'BRANDING',
    body: 'Logo, visual identity and the assets to use it consistently, from your site to your socials.',
  },
  {
    label: 'MESSAGING',
    body: 'Copy and positioning shaped by user psychology, so the right people feel at home the moment they land.',
  },
  {
    label: 'THE EXTRAS',
    body: 'Bookings, Google reviews, social content, shoots, email and ongoing care, added when they earn their place.',
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <RevealOnScroll className="container">
          <p className="section-label">WORK</p>
          <h1 className="page-hero-title">Our Work.</h1>
          <p className="page-hero-sub">
            Recent and in-progress builds. Click a project for a closer look.
          </p>
        </RevealOnScroll>
      </section>

      <section className="selected-work">
        <RevealOnScroll className="container">
          {PROJECTS.map((p, i) => (
            <div key={p.slug}>
              <header className="selected-work-head">
                <p className="section-label">CASE STUDY · {String(i + 1).padStart(2, '0')}</p>
                <h2 className="section-headline">{p.name}.</h2>
              </header>

              <Link href={`/work/${p.slug}`} className="case-study-link" aria-label={`${p.name}, view project`}>
                <article className="case-study-card">
                  <div
                    className="case-study-cover case-study-cover--image"
                    role="img"
                    aria-label={p.imageAlt}
                  >
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 1000px) 100vw, 620px"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      priority={false}
                    />
                    <span className="case-study-soon-badge">PREVIEW · LIVE SOON</span>
                  </div>

                  <div className="case-study-meta">
                    <p className="case-study-tag">{p.tag}</p>
                    <h3 className="case-study-title">{p.title}</h3>
                    <p className="case-study-body">{p.teaser}</p>

                    <dl className="case-study-meta-list">
                      <div>
                        <dt>SCOPE</dt>
                        <dd>{p.scope}</dd>
                      </div>
                    </dl>

                    <span className="link-arrow">
                      VIEW PROJECT <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          ))}
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
