import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';

const PREVIEWS = [
  {
    label: 'THE FULL SETUP',
    title: 'Everything you need to look professional and start booking.',
    body: 'A complete digital foundation, built around your brand, your story, and your customers.',
    href: '/services',
  },
  {
    label: 'MONTHLY CARE',
    title: 'Ongoing maintenance, without the hassle.',
    body: 'Updates, fixes and improvements, all handled by one trusted contact.',
    href: '/services',
  },
  {
    label: 'CONTENT',
    title: 'Content that works as hard as you do.',
    body: 'Captions, visuals and a posting rhythm, built around your goals and your audience.',
    href: '/content',
  },
];

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <RevealOnScroll className="container">
        <header className="services-head">
          <p className="section-label">WHAT I DO</p>
          <h2 id="services-title" className="section-headline">
            Your full digital setup, sorted.
          </h2>
          <p className="section-intro">
            Three services that work together, or stand alone.
          </p>
        </header>
      </RevealOnScroll>

      <RevealOnScroll className="container">
        <div className="services-preview-grid">
          {PREVIEWS.map((p) => (
            <Link key={p.label} href={p.href} className="service-preview-card">
              <p className="service-card-label">{p.label}</p>
              <h3 className="service-preview-title">{p.title}</h3>
              <p className="service-preview-body">{p.body}</p>
              <span className="link-arrow">
                LEARN MORE <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
