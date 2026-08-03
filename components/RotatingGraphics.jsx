'use client';

import { useEffect, useState } from 'react';

const HOLD_MS = 4000;

const SLIDES = [
  {
    key: 'branding',
    title: 'Branding',
    body: 'Logo, colours and type, with the assets to use them consistently. A look that fits who you are, everywhere it shows up.',
    long: 'Logo, colours and type, designed from scratch or tidied up from what you already have. You get the assets and simple guidelines to use them consistently, so your site, socials and everything in between look like the same company.',
    caption: 'A brand that holds together.',
    aria: 'Line drawing of a brand board with a logo circle, colour swatches and typography rules',
    art: (
      <>
        <circle cx="120" cy="104" r="44" pathLength={1} data-d="0" />
        <path d="M104 104 H136" strokeWidth="2.5" pathLength={1} data-d="1" />
        <rect x="210" y="66" width="38" height="38" rx="6" pathLength={1} data-d="2" />
        <rect x="258" y="66" width="38" height="38" rx="6" className="rg-fill" pathLength={1} data-d="3" />
        <rect x="306" y="66" width="38" height="38" rx="6" pathLength={1} data-d="4" />
        <path d="M210 142 H366" strokeWidth="7" pathLength={1} data-d="5" />
        <path d="M210 166 H318" strokeWidth="2.5" pathLength={1} data-d="6" />
        <path d="M210 184 H286" pathLength={1} data-d="7" />
        <path d="M96 176 H144" pathLength={1} data-d="7" />
      </>
    ),
  },
  {
    key: 'web',
    title: 'Website design and creation',
    body: 'Fast, modern sites designed around how your customers browse and decide. Built from scratch, made to look right on every screen.',
    long: 'A fast, modern site built from scratch around how your customers actually browse and decide. Written and structured so the next step is always obvious, mobile first, quick to load, and easy to grow as your business does.',
    caption: 'One website. Every screen.',
    aria: 'Line drawing of a laptop, tablet and phone all showing the same simple website layout',
    art: (
      <>
        <rect x="90" y="44" width="190" height="122" rx="8" pathLength={1} data-d="0" />
        <path d="M78 176 L90 166 M292 176 L280 166 M70 176 H300" pathLength={1} data-d="1" />
        <rect x="112" y="64" width="70" height="8" rx="3" pathLength={1} data-d="2" />
        <rect x="112" y="86" width="146" height="30" rx="4" pathLength={1} data-d="3" />
        <rect x="112" y="126" width="98" height="24" rx="4" pathLength={1} data-d="4" />
        <rect x="268" y="72" width="104" height="152" rx="10" pathLength={1} data-d="3" />
        <rect x="286" y="94" width="48" height="7" rx="3" pathLength={1} data-d="4" />
        <rect x="286" y="114" width="68" height="42" rx="4" pathLength={1} data-d="5" />
        <circle cx="320" cy="206" r="3" pathLength={1} data-d="6" />
        <rect x="196" y="138" width="76" height="126" rx="12" pathLength={1} data-d="5" />
        <rect x="212" y="158" width="34" height="6" rx="3" pathLength={1} data-d="6" />
        <rect x="212" y="176" width="44" height="32" rx="4" pathLength={1} data-d="7" />
        <path d="M222 248 H246" pathLength={1} data-d="7" />
      </>
    ),
  },
  {
    key: 'uiux',
    title: 'UI & UX',
    body: 'Layouts, journeys and the little details, shaped by user psychology. Easy to navigate, and always clear about what to do next.',
    long: 'The layouts, journeys and little details, shaped by user psychology. We plan how people move through the site, what they see first and where they go next, so visitors find what they need and turn into enquiries.',
    caption: 'Designed around real people.',
    aria: 'Line drawing of a browser window wireframe with a cursor clicking a button',
    art: (
      <>
        <rect x="84" y="48" width="252" height="180" rx="10" pathLength={1} data-d="0" />
        <path d="M84 86 H336" pathLength={1} data-d="1" />
        <circle cx="104" cy="67" r="4" pathLength={1} data-d="1" />
        <circle cx="120" cy="67" r="4" pathLength={1} data-d="2" />
        <circle cx="136" cy="67" r="4" pathLength={1} data-d="2" />
        <rect x="104" y="106" width="62" height="102" rx="6" pathLength={1} data-d="3" />
        <path d="M116 126 H154 M116 144 H144 M116 162 H150" pathLength={1} data-d="4" />
        <rect x="184" y="106" width="132" height="34" rx="6" pathLength={1} data-d="5" />
        <rect x="184" y="154" width="92" height="26" rx="8" pathLength={1} data-d="6" />
        <path d="M200 167 H244" pathLength={1} data-d="6" />
        <path d="M258 160 L258 196 L268 187 L276 202 L284 197 L276 183 L289 181 Z" strokeWidth="2.5" pathLength={1} data-d="7" />
      </>
    ),
  },
  {
    key: 'hosting',
    title: 'Hosting',
    body: 'Your site kept fast, secure and online, with domains and the technical bits handled. One less thing to think about.',
    long: 'Your site kept fast, secure and online. Domains, security certificates and the technical setup all handled under one roof, with plain answers instead of jargon and one point of contact when you need something.',
    caption: 'Fast, secure, always on.',
    aria: 'Line drawing of a stack of servers with status lights and a signal above',
    art: (
      <>
        <path d="M186 58 A34 34 0 0 1 234 58" pathLength={1} data-d="0" />
        <path d="M170 42 A62 62 0 0 1 250 42" pathLength={1} data-d="1" />
        <circle cx="210" cy="70" r="3" className="rg-fill" pathLength={1} data-d="2" />
        <rect x="130" y="88" width="160" height="42" rx="8" pathLength={1} data-d="3" />
        <circle cx="154" cy="109" r="4" pathLength={1} data-d="4" />
        <path d="M240 109 H268" pathLength={1} data-d="4" />
        <rect x="130" y="140" width="160" height="42" rx="8" pathLength={1} data-d="5" />
        <circle cx="154" cy="161" r="4" className="rg-fill" pathLength={1} data-d="6" />
        <path d="M240 161 H268" pathLength={1} data-d="6" />
        <rect x="130" y="192" width="160" height="42" rx="8" pathLength={1} data-d="6" />
        <circle cx="154" cy="213" r="4" pathLength={1} data-d="7" />
        <path d="M240 213 H268" pathLength={1} data-d="7" />
        <path d="M116 252 H304" pathLength={1} data-d="7" />
      </>
    ),
  },
  {
    key: 'care',
    title: 'Ongoing maintenance',
    body: 'Updates, tweaks and support after launch, so the site keeps improving without you having to think about it.',
    long: 'Updates, tweaks and support after launch, on a simple rolling basis. New sections, fresh content and technical upkeep, all handled quietly in the background, so the site keeps improving without you having to think about it.',
    caption: 'Kept sharp, long after launch.',
    aria: 'Line drawing of a circular refresh arrow around a tick mark',
    art: (
      <>
        <path d="M210 66 A74 74 0 1 1 143 108" pathLength={1} data-d="0" />
        <path d="M143 108 L139 88 M143 108 L162 102" strokeWidth="2.5" pathLength={1} data-d="2" />
        <circle cx="210" cy="140" r="36" pathLength={1} data-d="3" />
        <path d="M193 140 L206 153 L229 125" strokeWidth="2.5" pathLength={1} data-d="5" />
        <path d="M286 76 L296 66 M296 76 L286 66" pathLength={1} data-d="6" />
        <path d="M128 196 H152 M140 184 V208" pathLength={1} data-d="7" />
      </>
    ),
  },
];

function Bracket({ flip = false }) {
  return (
    <span className={`rg-bracket${flip ? ' rg-bracket--r' : ''}`} aria-hidden="true">
      <span className="t"></span>
      <span className="d"></span>
      <span className="d"></span>
      <span className="d"></span>
    </span>
  );
}

export default function RotatingGraphics({ id, label = 'WHAT WE MAKE', detailed = false }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);

  // Pause while the tab is hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Auto-rotate; `cycle` restarts the hold after manual jumps or resume
  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % SLIDES.length);
      setCycle((c) => c + 1);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [active, paused, cycle]);

  const jump = (i) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  return (
    <section id={id} className={`rg${paused ? ' is-paused' : ''}`} aria-label={label.toLowerCase()}>
      <div className="container">
        <div
          className="rg-grid"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setCycle((c) => c + 1);
          }}
        >
          <div className="rg-left">
            <p className="section-label">{label}</p>

            <div className="rg-tabs">
              {SLIDES.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  className={`rg-tab${i === active ? ' is-active' : ''}`}
                  aria-expanded={i === active}
                  onClick={() => jump(i)}
                >
                  <span className="rg-tab-row">
                    <span className="rg-tab-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="rg-tab-title">{s.title}</span>
                  </span>
                  <span className="rg-tab-bodywrap">
                    <span className="rg-tab-reveal">
                      <span className="rg-tab-body">{detailed ? s.long : s.body}</span>
                      {i === active && (
                        <span className="rg-tab-progress" aria-hidden="true">
                          <span key={cycle} className="rg-tab-fill"></span>
                        </span>
                      )}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rg-stage" aria-live="off">
            <div className="rg-glow" aria-hidden="true"></div>

            {SLIDES.map((s, i) => (
              <figure key={s.key} className={`rg-slide${i === active ? ' is-active' : ''}`}>
                <svg
                  viewBox="0 0 420 280"
                  role="img"
                  aria-label={s.aria}
                  stroke="var(--cream)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.art}
                </svg>
                <figcaption>
                  <p className="rg-caption">
                    <Bracket />
                    {s.caption}
                    <Bracket flip />
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
