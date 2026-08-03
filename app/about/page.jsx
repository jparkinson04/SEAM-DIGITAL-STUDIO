import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'About, Seam Digital Studio',
  description:
    'Jessie, founder of Seam Digital Studio. A background in marketing and psychology, building websites, brands and messaging that work for the people who run them.',
};

const PILLARS = [
  {
    title: 'YOUR STORY, TOLD WELL',
    body: 'Copywriting and structure built around your vision, not a generic template.',
  },
  {
    title: 'DESIGNED FOR YOUR CLIENTS',
    body: 'Built with psychology in mind, for how real people navigate and decide.',
  },
  {
    title: 'ALL SEAMED TOGETHER',
    body: 'Design, branding and words working as one, so everything feels like it came from you.',
  },
  {
    title: 'BUILT TO BE FOUND',
    body: 'Google reviews, local SEO and content that helps new clients discover you.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <RevealOnScroll className="container">
          <p className="section-label">ABOUT</p>
          <h1 className="page-hero-title">
            I build websites that work for the people who run them.
          </h1>
        </RevealOnScroll>
      </section>

      <section className="about">
        <RevealOnScroll className="container">
          <div className="about-grid">
            <div className="about-photo-wrapper about-photo-wrapper--large">
              <Image
                src="/me.jpeg"
                alt="Jessie, founder of Seam Digital Studio"
                fill
                sizes="(max-width: 1000px) 360px, 520px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="about-text">
              <div className="about-body">
                <p>
                  I built Seam because small businesses deserve a digital presence that actually works for them, not against them.
                </p>
                <p>
                  Running a small business is full-on. You&apos;re delivering your service, building client relationships, managing the day-to-day, and somewhere in between, you&apos;re supposed to be keeping your website updated, staying consistent on social media, chasing reviews, and making sure no enquiry falls through the cracks.
                </p>
                <p>
                  I know that feeling well. And I know the usual answer. A website from years ago, an Instagram that doesn&apos;t match it, words written in a hurry. It ends up feeling scattered. Nothing matches. Nothing sounds like you.
                </p>
                <p>
                  <strong>I&apos;m Jessie.</strong> I come from a background in marketing and psychology, and what that taught me is simple. A great website isn&apos;t about looking good, or having the right tools. It&apos;s about understanding people. Your customers. How they find you, what builds their trust, what makes them come back.
                </p>
                <p>
                  That&apos;s the lens I bring to every project. I think about your story, your vision, your voice, why you do what you do, and I build a website that tells it clearly. Then I think about your customers, how they&apos;ll actually use it, what they need to feel confident choosing you, and how to make that journey feel seamless from the moment they discover you.
                </p>
              </div>

              <p className="about-pullquote">
                Everything considered. Everything intentional. Nothing left to chance.
              </p>

              <div className="founder-card">
                <div>
                  <p className="founder-name">Jessie</p>
                  <p className="founder-title">FOUNDER, SEAM DIGITAL STUDIO</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="about-pillars">
        <RevealOnScroll className="container">
          <header className="services-head">
            <p className="section-label">HOW I APPROACH IT</p>
            <h2 className="section-headline">Four principles, every project.</h2>
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
    </>
  );
}
