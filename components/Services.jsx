import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';

const PREVIEWS = [
  {
    label: 'WEBSITE DESIGN AND BUILD',
    title: 'Fast, modern sites, designed around your customers.',
    body: 'Built for how real people browse and decide, not just for looks. Clear, quick, and easy to act on.',
    href: '/services',
  },
  {
    label: 'BRANDING',
    title: 'A look that fits, everywhere it shows up.',
    body: 'Logo, colours and visual identity, with the assets to use them consistently across your site and socials.',
    href: '/services',
  },
  {
    label: 'MESSAGING AND STORYTELLING',
    title: 'The right words, for the right people.',
    body: 'Copy and positioning shaped by user psychology. Your story, told so your customers see themselves in it.',
    href: '/services',
  },
];

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <RevealOnScroll className="container">
        <header className="services-head">
          <p className="section-label">WHAT I DO</p>
          <h2 id="services-title" className="section-headline">
            The website, the look, the words.
          </h2>
          <p className="section-intro">
            Three things, done properly. Everything else is optional.
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

        <p className="content-mention">
          <strong>Need more than that?</strong> Bookings, reviews, social content, shoots, email and ongoing care are all on offer too.{' '}
          <Link href="/services#more">See what else I can do</Link>.
        </p>
      </RevealOnScroll>
    </section>
  );
}
