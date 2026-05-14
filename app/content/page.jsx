import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'Content, Seam Digital Studio',
  description:
    'Content that works as hard as you do. Captions, visuals, and a posting rhythm built around your goals, your platform, and your audience.',
};

const PILLARS = [
  {
    title: 'PURPOSE-LED',
    body: 'Every post has a reason to exist. Built around what your content needs to do, not just what looks nice.',
  },
  {
    title: 'PLATFORM-RIGHT',
    body: 'Instagram, LinkedIn, or both. Structured for where your audience actually is and how they actually use the platform.',
  },
  {
    title: 'PROPERLY WRITTEN',
    body: 'Captions, visuals, and scheduling, all handled. Sounds like you, reads like a brand.',
  },
  {
    title: 'TAILORED TO YOU',
    body: 'Your tone, your story, your clients. Never generic, never recycled.',
  },
];

export default function ContentPage() {
  return (
    <>
      {/* Combined hero + visuals — the page lands you straight in the work */}
      <section className="content-hero">
        <RevealOnScroll className="container">
          <div className="content-hero-grid">
            <div className="content-hero-text">
              <p className="section-label">CONTENT SERVICES</p>
              <h1 className="page-hero-title">Built to do a job, not just look nice.</h1>
              <p className="page-hero-sub">
                Captions, visuals, and a posting rhythm. Built around where your audience lives, and how they actually read each platform.
              </p>
              <div className="content-hero-ctas">
                <a href="#contact" className="btn-solid btn-solid--ink">
                  BOOK A DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a href="#how" className="link-arrow">
                  HOW IT WORKS <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="content-hero-visuals">
              <div className="visuals-stage">
                {/* INSTAGRAM */}
                <div className="visual-card ig-mock" aria-hidden="true">
                  <p className="platform-tag">INSTAGRAM</p>
                  <div className="ig-header">
                    <div className="ig-avatar">S</div>
                    <div className="ig-handle">
                      <p className="ig-handle-name">@yourbusiness</p>
                      <p className="ig-handle-meta">2,431 followers</p>
                    </div>
                    <span className="ig-follow">Following</span>
                  </div>

                  <div className="ig-grid">
                    <div className="ig-tile ig-tile--text"><p>OPEN<br />TODAY</p></div>
                    <div className="ig-tile ig-tile--photo"></div>
                    <div className="ig-tile ig-tile--quote"><p>&ldquo;It just works&rdquo;</p></div>
                    <div className="ig-tile ig-tile--photo"></div>
                    <div className="ig-tile ig-tile--accent"><p>NEW</p></div>
                    <div className="ig-tile ig-tile--photo"></div>
                    <div className="ig-tile ig-tile--photo"></div>
                    <div className="ig-tile ig-tile--text"><p>BOOK<br />NOW</p></div>
                    <div className="ig-tile ig-tile--photo"></div>
                  </div>
                </div>

                {/* LINKEDIN */}
                <div className="visual-card li-mock" aria-hidden="true">
                  <p className="platform-tag">LINKEDIN</p>
                  <div className="li-header">
                    <div className="li-avatar"></div>
                    <div className="li-meta">
                      <p className="li-name">Jessie Parkinson</p>
                      <p className="li-role">Founder, Seam Digital Studio</p>
                      <p className="li-time">2d · Public</p>
                    </div>
                  </div>
                  <p className="li-content">
                    Three things every small business needs online. And one of them isn&apos;t a logo.
                  </p>
                  <div className="li-image"></div>
                  <div className="li-engage">
                    <span><strong>247</strong> reactions</span>
                    <span>22 comments</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="content-pillars" id="how">
        <RevealOnScroll className="container">
          <header className="services-head">
            <p className="section-label">HOW IT WORKS</p>
            <h2 className="section-headline">Four things every piece of content does.</h2>
          </header>

          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <article key={p.title} className="pillar-card">
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-body">{p.body}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="content-options">
        <RevealOnScroll className="container">
          <header className="services-head">
            <p className="section-label">WAYS TO WORK TOGETHER</p>
            <h2 className="section-headline">Project, or ongoing.</h2>
            <p className="section-intro">
              Two ways to bring content into your business, depending on where you are now.
            </p>
          </header>

          <div className="content-options-grid">
            <article className="content-option-card">
              <p className="service-card-label">PROJECT</p>
              <h3 className="content-option-title">Launch pack.</h3>
              <p className="content-option-body">
                A one-time content set, designed and written around your launch (or relaunch). Branded posts, captions and a posting plan, ready to schedule the day everything goes live.
              </p>
              <p className="content-option-meta">One-time · Project rates</p>
              <a href="#contact" className="link-arrow">
                ENQUIRE <span aria-hidden="true">→</span>
              </a>
            </article>

            <article className="content-option-card content-option-card--featured">
              <p className="service-card-label">ONGOING</p>
              <h3 className="content-option-title">Monthly content.</h3>
              <p className="content-option-body">
                A rolling content service, built around your platform and your goals. Captions, visuals, scheduling and the brain behind the rhythm, all handled.
              </p>
              <p className="content-option-meta">Rolling monthly · cancel anytime</p>
              <a href="#contact" className="link-arrow">
                ENQUIRE <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
