import RevealOnScroll from './RevealOnScroll';

const STEPS = [
  {
    num: '01',
    title: 'DISCOVERY',
    body: 'A 30-minute call to understand your business, your customers and what you actually need online.',
  },
  {
    num: '02',
    title: 'BUILD',
    body: 'I design and build the site, the brand and the words. You stay in the loop, but I handle the work. No back-and-forth.',
  },
  {
    num: '03',
    title: 'LAUNCH',
    body: 'Everything goes live, properly tested, with you walked through how it all works.',
  },
  {
    num: '04',
    title: 'KEEP IT GROWING',
    body: 'Optional monthly retainer for maintenance, updates and improvements as you grow.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how" aria-labelledby="how-title">
      <RevealOnScroll className="container">
        <p className="section-label">HOW IT WORKS</p>
        <h2 id="how-title" className="section-headline">
          Four steps. Roughly two weeks.
        </h2>
        <p className="section-intro">
          A clear, structured process so you always know exactly where things stand.
        </p>

        <ol className="how-grid">
          {STEPS.map((step) => (
            <li key={step.num} className="how-card">
              <div className="how-num" aria-hidden="true">{step.num}</div>
              <h3 className="how-title">{step.title}</h3>
              <p className="how-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </RevealOnScroll>
    </section>
  );
}
