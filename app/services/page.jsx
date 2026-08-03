import RevealOnScroll from '@/components/RevealOnScroll';
import HowItWorks from '@/components/HowItWorks';

export const metadata = {
  title: 'Services, Seam Digital Studio',
  description:
    'Website design and build, branding, and messaging shaped by user psychology. The core of every Seam project, with optional extras when you need them.',
};

const CORE_SERVICES = [
  {
    label: 'WEBSITE DESIGN AND BUILD',
    title: 'Fast, modern sites, designed around your customers.',
    body: 'Designed around how your customers actually browse and decide, not just how things look. Quick to load, easy to navigate, clear about what to do next. Mobile first, with hosting and domain support handled.',
  },
  {
    label: 'BRANDING',
    title: 'A visual identity that fits who you are.',
    body: 'Logo, colours and type, plus the assets to use them consistently. So everything you put out, from your site to your socials, looks like it came from the same place.',
  },
  {
    label: 'MESSAGING AND STORYTELLING',
    title: 'Copy that says the right thing to the right people.',
    body: 'Positioning and copywriting shaped by user psychology. Your story and your voice, structured around how customers read, build trust and decide.',
  },
];

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
  {
    title: 'ONGOING CARE',
    body: 'Updates, tweaks and support after launch, so the site keeps working for you. One point of contact, no faff.',
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

      <section className="services-detail" id="core">
        <RevealOnScroll className="container">
          <header className="services-head">
            <p className="section-label">THE CORE OFFER</p>
            <h2 className="section-headline">What every project is built on.</h2>
            <p className="section-intro">
              Three services that work together, or stand alone.
            </p>
          </header>

          <div className="services-preview-grid">
            {CORE_SERVICES.map((s) => (
              <article key={s.label} className="service-preview-card">
                <p className="service-card-label">{s.label}</p>
                <h3 className="service-preview-title">{s.title}</h3>
                <p className="service-preview-body">{s.body}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </section>

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
