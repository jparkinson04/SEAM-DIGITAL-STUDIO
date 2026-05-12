import RevealOnScroll from './RevealOnScroll';

export default function Testimonial() {
  return (
    <section className="testimonial" aria-label="Client testimonial">
      <RevealOnScroll>
        <div className="testimonial-mark" aria-hidden="true">&ldquo;</div>
        <p className="quote">
          Everything finally feels <em>connected.</em> My clients can book, leave a review, and find me on Instagram — all from one place. It just works.
        </p>
        <p className="quote-attr">[CLIENT NAME] &nbsp;·&nbsp; [BUSINESS NAME]</p>
      </RevealOnScroll>
    </section>
  );
}
