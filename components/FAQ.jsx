'use client';

import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const ITEMS = [
  {
    q: 'How long does the setup take?',
    a: "Two weeks from discovery call to live site, in most cases. We'll give you a firm timeline upfront so you know exactly when you're going live.",
  },
  {
    q: 'Do I have to use a specific booking system?',
    a: "No. We integrate with whatever you already use — Ticket Tailor, Fresha, Treatwell, Square, or anything else. If you don't have one yet, we'll recommend the right fit for your business.",
  },
  {
    q: 'Am I locked into the retainer?',
    a: "No long-term contracts. The monthly retainer is rolling — cancel any time with 30 days' notice. Most clients stay because the value's clear, not because they have to.",
  },
  {
    q: 'What if I already have a website?',
    a: "If your existing site works for you, great — we can connect everything else around it. If it isn't pulling its weight, we'll build something that does. The discovery call covers exactly this.",
  },
  {
    q: 'Who do you work with?',
    a: "Local beauty, wellness, and salon businesses, mostly within 30 minutes of Doncaster. Independent owners, small teams, and anyone who wants their digital setup to actually feel sorted.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <RevealOnScroll className="container">
        <p className="section-label">QUESTIONS</p>
        <h2 id="faq-title" className="section-headline">
          Things people <em>actually ask.</em>
        </h2>
        <p className="section-intro">
          If your question isn't here, message us. We answer everything.
        </p>

        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  type="button"
                >
                  <h3>{item.q}</h3>
                  <span className="faq-toggle" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <p className="faq-a">{item.a}</p>
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </section>
  );
}
