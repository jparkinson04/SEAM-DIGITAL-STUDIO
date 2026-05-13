import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <RevealOnScroll className="container">
        <div className="about-grid">
          <div className="about-photo-wrapper">
            <Image
              src="/me.jpeg"
              alt="Jessie, founder of Seam Digital Studio"
              fill
              sizes="(max-width: 1000px) 360px, 480px"
              style={{ objectFit: 'cover' }}
              priority={false}
            />
          </div>

          <div className="about-text">
            <p className="section-label">ABOUT</p>
            <h2 id="about-title" className="section-headline">
              I build digital setups that work for the people who run them.
            </h2>

            <div className="about-body">
              <p>
                I&apos;m Jessie. I come from a background in marketing and psychology, and what that taught me is simple. A great digital setup isn&apos;t about looking good, or having the right tools. It&apos;s about understanding people. Your customers. How they find you, what builds their trust, what makes them come back.
              </p>
              <p>
                That&apos;s the lens I bring. I think about your story, your voice, why you do what you do, and then I build a setup that tells it clearly.
              </p>
            </div>

            <div className="founder-card">
              <div>
                <p className="founder-name">Jessie</p>
                <p className="founder-title">FOUNDER, SEAM DIGITAL STUDIO</p>
              </div>
              <Link href="/about" className="link-arrow" style={{ marginLeft: 'auto' }}>
                READ MORE <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
