import RevealOnScroll from '@/components/RevealOnScroll';
import RotatingGraphics from '@/components/RotatingGraphics';
import HowItWorks from '@/components/HowItWorks';

export const metadata = {
  title: 'Services, Seam Digital Studio',
  description:
    'Branding, website design and creation, UI and UX, hosting and ongoing maintenance. The core of every Seam project, with optional extras when you need them.',
};

const EXTRAS = [
  {
    title: 'BOOKING SYSTEMS',
    body: 'Online booking set up and connected to your site, for businesses that take appointments. Customers book themselves in, and nothing falls through the cracks.',
  },
  {
    title: 'GOOGLE REVIEWS AND LOCAL SEO',
    body: 'Review collection set up and running quietly in the background, plus the local search basics done properly. So nearby customers can find you, and trust what they find.',
  },
  {
    title: 'SOCIAL MEDIA CONTENT',
    body: 'A simple, consistent posting approach with content made for your audience. Captions, visuals and a rhythm you can actually keep up with.',
  },
  {
    title: 'CONTENT SHOOTS',
    body: 'Photo and video captured on location at your business. Real imagery of you and your work, ready for your site and your socials.',
  },
  {
    title: 'EMAIL AND NEWSLETTERS',
    body: 'Regular emails that keep customers coming back, written in your voice. Simple to run, easy to read, and never spammy.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Combined hero with browser mockup */}
      <section className="services-hero">
        <RevealOnScroll className="container">
          <div className="services-hero-grid">
            <div className="services-hero-text">
              <p className="section-label">SERVICES</p>
              <h1 className="page-hero-title">A website that looks right, and sounds right.</h1>
              <p className="page-hero-sub">
                Design, branding and messaging, built around how your customers think and decide. That is the core of every project. Everything else is an optional extra, there when you need it.
              </p>
              <div className="content-hero-ctas">
                <a href="#contact" className="btn-solid btn-solid--ink">
                  BOOK A DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a href="#core" className="link-arrow">
                  SEE THE CORE OFFER <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="services-visual" aria-hidden="true">
              {/* Browser mockup — a clean Seam-style website */}
              <div className="browser-mock">
                <div className="browser-chrome">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="browser-url">yourbusiness.co.uk</div>
                </div>

                <div className="browser-body">
                  <div className="mock-nav">
                    <div className="mock-logo">B.</div>
                    <div className="mock-nav-links">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mock-cta">HELLO</div>
                  </div>

                  <div className="mock-hero">
                    <span className="mock-hero-eyebrow"></span>
                    <h3 className="mock-hero-title">Welcome.</h3>
                    <div className="mock-hero-sub"></div>
                    <div className="mock-hero-buttons">
                      <div className="mock-btn mock-btn--solid"></div>
                      <div className="mock-btn mock-btn--outline"></div>
                    </div>
                  </div>

                  <div className="mock-features">
                    <div className="mock-feature">
                      <div className="mock-feature-icon"></div>
                      <div className="mock-feature-line"></div>
                      <div className="mock-feature-line short"></div>
                    </div>
                    <div className="mock-feature">
                      <div className="mock-feature-icon"></div>
                      <div className="mock-feature-line"></div>
                      <div className="mock-feature-line short"></div>
                    </div>
                    <div className="mock-feature">
                      <div className="mock-feature-icon"></div>
                      <div className="mock-feature-line"></div>
                      <div className="mock-feature-line short"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <RotatingGraphics id="core" label="THE CORE OFFER" detailed />

      <section className="services-more" id="more">
        <RevealOnScroll className="container">
          <header className="services-head">
            <p className="section-label">BEYOND THE CORE</p>
            <h2 className="section-headline">What else I can offer.</h2>
            <p className="section-intro">
              Add-ons that build on the core when they earn their place. Take what is useful, skip what is not.
            </p>
          </header>

          <div className="pillars-grid">
            {EXTRAS.map((e) => (
              <article key={e.title} className="pillar-card">
                <h3 className="pillar-title">{e.title}</h3>
                <p className="pillar-body">{e.body}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <HowItWorks />
    </>
  );
}
