import RevealOnScroll from './RevealOnScroll';

const FULL_SETUP = [
  'Custom design and build (up to 5 pages)',
  'Booking system integration (Ticket Tailor, Fresha, and others)',
  'Social media links and cross-linking',
  'Google reviews section',
  '15 content posts — starter pack included',
  'On-brand copywriting throughout',
  'Mobile optimised',
];

const MONTHLY_CARE = [
  'Text, image and layout updates',
  'New sections or pages added',
  'Technical maintenance',
  'One point of contact — no faff',
];

const CONTENT_TILES = [
  {
    title: 'PURPOSE-LED',
    body: 'Built around what your content needs to do — not just what looks nice.',
  },
  {
    title: 'PLATFORM-RIGHT',
    body: 'Instagram, LinkedIn, or both — structured for where your audience actually is.',
  },
  {
    title: 'PROPERLY WRITTEN',
    body: 'Captions, visuals, and scheduling — all handled.',
  },
  {
    title: 'TAILORED TO YOU',
    body: 'Your tone, your story, your clients. Never generic.',
  },
];

function TickList({ items }) {
  return (
    <ul className="tier-list">
      {items.map((item, i) => (
        <li key={i}>
          <span className="tier-tick" aria-hidden="true">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <RevealOnScroll className="container">
        <p className="section-label">WHAT I OFFER</p>
        <h2 id="services-title" className="section-headline">
          Everything your business needs online, <em>all in one place.</em>
        </h2>
      </RevealOnScroll>

      <RevealOnScroll className="container" style={{ padding: 0 }}>
        <div className="tier-grid">
          <article className="tier tier--featured">
            <span className="tier-badge">MOST POPULAR</span>
            <p className="tier-eyebrow">THE FULL SETUP</p>
            <h3 className="tier-name">The Full Setup</h3>
            <p className="tier-note">50% upfront · 50% on completion</p>
            <p className="tier-desc">
              A complete digital foundation for your business — built around your brand, your story, and your customers.
            </p>
            <div className="tier-rule"></div>
            <TickList items={FULL_SETUP} />
            <a href="#contact" className="tier-btn">
              ENQUIRE FOR A QUOTE <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="tier">
            <p className="tier-eyebrow">MONTHLY CARE</p>
            <h3 className="tier-name">Monthly Care</h3>
            <p className="tier-note">&nbsp;</p>
            <p className="tier-desc">
              Your website, looked after. I handle the updates so you never have to think about it.
            </p>
            <div className="tier-rule"></div>
            <TickList items={MONTHLY_CARE} />
            <a href="#contact" className="tier-btn">
              ENQUIRE FOR A QUOTE <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>

        <article className="content-card">
          <div className="content-card-head">
            <p className="content-card-eyebrow">CONTENT</p>
            <h3 className="content-card-title">Content that works as hard as you do</h3>
            <p className="content-card-desc">
              Every business needs content — but not the same content. Whether you're trying to fill a booking calendar, build a community, or move into the corporate world, the content I create is built around your goals, your platform, and your audience.
            </p>
          </div>

          <div className="content-tiles">
            {CONTENT_TILES.map((tile) => (
              <div key={tile.title} className="content-tile">
                <h4 className="content-tile-title">{tile.title}</h4>
                <p className="content-tile-body">{tile.body}</p>
              </div>
            ))}
          </div>

          <div className="content-card-cta">
            <a href="#contact" className="tier-btn">
              ENQUIRE ABOUT CONTENT <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </RevealOnScroll>
    </section>
  );
}
