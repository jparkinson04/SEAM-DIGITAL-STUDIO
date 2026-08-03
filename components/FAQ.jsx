'use client';

import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const ITEMS = [
  {
    q: 'How long does a website take?',
    a: "Around two weeks from discovery call to live site, in most cases. You'll get a firm timeline upfront so you know exactly when you're going live.",
  },
  {
    q: 'Who do you work with?',
    a: "Independent business owners and small teams whose website isn't pulling its weight. Anyone from a beauty studio or wellness practitioner to a freelance specialist, a small services firm, or a one-person shop. Mostly based within an hour of Doncaster, but I work remotely with clients further afield too.",
  },
  {
    q: 'What if I already have a website?',
    a: "If your existing site works for you, great. I can help with the branding, messaging and extras around it. If it isn't pulling its weight, I'll build something that does. The discovery call covers exactly this.",
  },
  {
    q: 'Am I locked into the monthly retainer?',
    a: "No. The monthly retainer is rolling. Cancel any time with 30 days' notice. Most clients stay because the value's clear, not because they have to.",
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
          Things people actually ask.
        </h2>

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
