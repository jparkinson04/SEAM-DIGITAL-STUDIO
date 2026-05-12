import RevealOnScroll from './RevealOnScroll';

const STEPS = [
  {
    num: '01',
    title: 'DISCOVERY CALL',
    body: 'A 30-minute call to understand your business, your clients, and what you actually need online. No sales pressure, no jargon.',
  },
  {
    num: '02',
    title: 'WE BUILD IT',
    body: 'Your full digital setup designed and built within two weeks. You stay in the loop, but we handle the work. No back-and-forth.',
  },
  {
    num: '03',
    title: 'YOU GO LIVE',
    body: 'A site that converts, a booking flow that works, and a content pack ready to post on day one. Everything tested, everything live.',
  },
  {
    num: '04',
    title: 'WE KEEP IT RUNNING',
    body: 'Monthly retainer keeps everything maintained, updated, and growing. WhatsApp support whenever you need us. No silence between calls.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how" aria-labelledby="how-title">
      <RevealOnScroll className="container">
        <p className="section-label">HOW IT WORKS</p>
        <h2 id="how-title" className="section-headline" style={{ color: 'var(--cream)' }}>
          Four steps. <em>Two weeks.</em> One sorted business.
        </h2>
        <p className="section-intro">
          A clear, structured process so you always know exactly where things stand.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="container" style={{ padding: 0 }}>
        <ol className="how-grid">
          {STEPS.map((step) => (
            <li key={step.num} className="how-card">
              <div className="how-num" aria-hidden="true">{step.num}</div>
              <div className="how-content">
                <h3 className="how-title">{step.title}</h3>
                <p className="how-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </RevealOnScroll>
    </section>
  );
}
