import RevealOnScroll from './RevealOnScroll';

const PILLARS = [
  {
    title: 'YOUR STORY, TOLD WELL',
    body: 'Copywriting and structure built around your vision, not a generic template.',
  },
  {
    title: 'DESIGNED FOR YOUR CLIENTS',
    body: 'Built with psychology in mind — for how real people navigate and decide.',
  },
  {
    title: 'ALL SEAMED TOGETHER',
    body: 'Website, booking, social, reviews — one system, not six separate tools.',
  },
  {
    title: 'BUILT TO BE FOUND',
    body: 'Google reviews, local SEO and content that helps new clients discover you.',
  },
];

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <RevealOnScroll className="container">
        <p className="section-label">ABOUT</p>
        <h2 id="about-title" className="section-headline">
          I built Seam because small businesses deserve a digital presence that <em>actually works for them</em> — not against them.
        </h2>

        <div className="about-body">
          <p>
            Running a small business is full-on. You're delivering your service, building client relationships, managing the day-to-day — and somewhere in between, you're supposed to be keeping your website updated, staying consistent on social media, chasing reviews, and making sure your booking system doesn't let anyone fall through the cracks.
          </p>
          <p>
            I know that feeling well. And I know the usual answer — a website here, an Instagram there, a booking tool bolted on — ends up feeling scattered. Nothing talks to each other. Nothing feels like you.
          </p>
          <p>
            <strong>I'm Jessie.</strong> I come from a background in marketing and psychology, and what that taught me is that a great digital setup isn't just about looking good or having the right tools — it's about understanding people. Your clients. How they find you, what builds their trust, what makes them come back.
          </p>
          <p>
            That's the lens I bring to every project. I think about your story — your vision, your voice, why you do what you do — and I build a digital system that tells it clearly. Then I think about your customers: how they'll actually use it, what they need to feel confident booking with you, and how to make that journey seamless from the moment they discover you.
          </p>
        </div>

        <p className="about-pullquote">
          Everything connected. <em>Everything intentional.</em> Nothing left to chance.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="container" style={{ padding: 0 }}>
        <div className="pillars-grid">
          {PILLARS.map((p) => (
            <article key={p.title} className="pillar">
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </article>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="container">
        <div className="founder-card">
          <div className="founder-avatar" aria-hidden="true">J</div>
          <div>
            <p className="founder-name">Jessie</p>
            <p className="founder-title">FOUNDER, SEAM DIGITAL STUDIO</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
