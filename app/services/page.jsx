import RevealOnScroll from '@/components/RevealOnScroll';
import HowItWorks from '@/components/HowItWorks';

export const metadata = {
  title: 'Services, Seam Digital Studio',
  description:
    'The Full Setup and Monthly Care. A complete digital setup for small businesses, built around your brand and your customers.',
};

const FULL_SETUP_FEATURES = [
  'Custom website design and build',
  'Booking system integration',
  'Customer reviews',
  'Integrated social media',
  'On-brand copywriting throughout',
  'Mobile optimised',
  'Hosting and domain support',
];

const MONTHLY_CARE_FEATURES = [
  'Updates and changes whenever you need',
  'New sections or pages added',
  'Technical maintenance and hosting',
  'One point of contact, no faff',
];

export default function ServicesPage() {
  return (
    <>
      {/* Combined hero with browser mockup + floating integration chips */}
      <section className="services-hero">
        <RevealOnScroll className="container">
          <div className="services-hero-grid">
            <div className="services-hero-text">
              <p className="section-label">SERVICES</p>
              <h1 className="page-hero-title">A digital setup that talks to itself.</h1>
              <p className="page-hero-sub">
                One website, fully connected. Bookings, reviews, social, and content, all working from the same brain. Built once, kept growing.
              </p>
              <div className="content-hero-ctas">
                <a href="#contact" className="btn-solid btn-solid--ink">
                  BOOK A DISCOVERY CALL <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a href="#full-setup" className="link-arrow">
                  SEE WHAT&apos;S INSIDE <span aria-hidden="true">↓</span>
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
                    <div className="mock-cta">BOOK</div>
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

              {/* Floating integration chips — visual proof of "everything connected" */}
              <div className="integration-chip integration-chip--booking">Ticket Tailor</div>
              <div className="integration-chip integration-chip--fresha">Fresha</div>
              <div className="integration-chip integration-chip--reviews">5.0 ★ Reviews</div>
              <div className="integration-chip integration-chip--tiktok">TikTok</div>
              <div className="integration-chip integration-chip--social">@ Instagram</div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="services-detail" id="full-setup">
        <RevealOnScroll className="container">
          <article className="primary-service">
            <div className="label-row">
              <span className="service-label-pill">THE FULL SETUP</span>
              <span className="service-label-flag">ONE-TIME BUILD</span>
            </div>

            <h2 className="primary-service-title">
              Everything you need to look professional, capture leads, and start booking.
            </h2>
            <p className="primary-service-body">
              Built around your brand, your story, and your customers. The full foundation, designed to work together from day one, not bolted on as you go.
            </p>

            <ul className="primary-service-features">
              {FULL_SETUP_FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="primary-service-footer">
              <p className="primary-service-meta">One-time · 50% up front, 50% on completion</p>
              <a href="#contact" className="btn-solid">
                ENQUIRE FOR A QUOTE <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="secondary-service">
            <div className="secondary-service-head">
              <p className="service-card-label">PAIR WITH · MONTHLY CARE</p>
              <h2 className="secondary-service-title">Keep it growing.</h2>
              <p className="secondary-service-body">
                Your website kept current, technically sound, and quietly improving. Without you having to think about it.
              </p>
            </div>
            <div className="secondary-service-right">
              <ul className="secondary-service-features">
                {MONTHLY_CARE_FEATURES.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="secondary-service-cta">
                <a href="#contact" className="link-arrow">
                  ENQUIRE <span aria-hidden="true">→</span>
                </a>
                <p className="secondary-service-meta">Rolling monthly · cancel anytime</p>
              </div>
            </div>
          </article>

          <p className="content-mention">
            <strong>Also offering content support.</strong> Captions, visuals, and a posting rhythm built around your goals.{' '}
            <a href="#contact">Get in touch to find out more</a>.
          </p>
        </RevealOnScroll>
      </section>

      <HowItWorks />
    </>
  );
}
