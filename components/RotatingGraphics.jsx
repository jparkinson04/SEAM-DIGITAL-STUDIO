'use client';

import { useEffect, useState } from 'react';

const HOLD_MS = 4000;

// 5-point star, outer radius 13, drawn around (0,0)
const STAR =
  'M0 -13 L3.23 -4.45 L12.36 -4.02 L5.23 1.72 L7.64 10.52 L0 5.5 L-7.64 10.52 L-5.23 1.72 L-12.36 -4.02 L-3.23 -4.45 Z';

const SLIDES = [
  {
    key: 'web',
    label: 'WEB DESIGN',
    caption: 'One website. Every screen.',
    aria: 'Line drawing of a laptop, tablet and phone all showing the same simple website layout',
    art: (
      <>
        {/* laptop */}
        <rect x="90" y="44" width="190" height="122" rx="8" pathLength={1} data-d="0" />
        <path d="M78 176 L90 166 M292 176 L280 166 M70 176 H300" pathLength={1} data-d="1" />
        <rect x="112" y="64" width="70" height="8" rx="3" pathLength={1} data-d="2" />
        <rect x="112" y="86" width="146" height="30" rx="4" pathLength={1} data-d="3" />
        <rect x="112" y="126" width="98" height="24" rx="4" pathLength={1} data-d="4" />
        {/* tablet */}
        <rect x="268" y="72" width="104" height="152" rx="10" pathLength={1} data-d="3" />
        <rect x="286" y="94" width="48" height="7" rx="3" pathLength={1} data-d="4" />
        <rect x="286" y="114" width="68" height="42" rx="4" pathLength={1} data-d="5" />
        <circle cx="320" cy="206" r="3" pathLength={1} data-d="6" />
        {/* phone */}
        <rect x="196" y="138" width="76" height="126" rx="12" pathLength={1} data-d="5" />
        <rect x="212" y="158" width="34" height="6" rx="3" pathLength={1} data-d="6" />
        <rect x="212" y="176" width="44" height="32" rx="4" pathLength={1} data-d="7" />
        <path d="M222 248 H246" pathLength={1} data-d="7" />
      </>
    ),
  },
  {
    key: 'brand',
    label: 'BRANDING',
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
    key: 'messaging',
    label: 'MESSAGING',
    caption: 'Messaging that sounds like you.',
    aria: 'Line drawing of two overlapping speech bubbles, one with text lines and one with a spark',
    art: (
      <>
        <path
          d="M98 70 H244 A14 14 0 0 1 258 84 V154 A14 14 0 0 1 244 168 H150 L124 194 V168 H98 A14 14 0 0 1 84 154 V84 A14 14 0 0 1 98 70 Z"
          pathLength={1}
          data-d="0"
        />
        <path d="M112 102 H210" pathLength={1} data-d="1" />
        <path d="M112 120 H232" pathLength={1} data-d="2" />
        <path d="M112 138 H180" pathLength={1} data-d="3" />
        <path
          d="M276 46 H336 A12 12 0 0 1 348 58 V106 A12 12 0 0 1 336 118 H316 V142 L294 118 H276 A12 12 0 0 1 264 106 V58 A12 12 0 0 1 276 46 Z"
          pathLength={1}
          data-d="4"
        />
        <path d="M306 66 V98 M290 82 H322 M295 71 L317 93 M317 71 L295 93" strokeWidth="2.5" pathLength={1} data-d="6" />
      </>
    ),
  },
  {
    key: 'reviews',
    label: 'REVIEWS',
    caption: 'Reviews working for your SEO.',
    aria: 'Line drawing of a customer review card with five stars, an avatar and two lines of text',
    art: (
      <>
        <rect x="76" y="50" width="268" height="180" rx="12" pathLength={1} data-d="0" />
        <path d={STAR} transform="translate(118 100)" className="rg-fill" pathLength={1} data-d="1" />
        <path d={STAR} transform="translate(160 100)" className="rg-fill" pathLength={1} data-d="2" />
        <path d={STAR} transform="translate(202 100)" className="rg-fill" pathLength={1} data-d="3" />
        <path d={STAR} transform="translate(244 100)" className="rg-fill" pathLength={1} data-d="4" />
        <path d={STAR} transform="translate(286 100)" pathLength={1} data-d="5" />
        <circle cx="118" cy="178" r="17" pathLength={1} data-d="6" />
        <path d="M150 170 H286" pathLength={1} data-d="7" />
        <path d="M150 188 H238" pathLength={1} data-d="7" />
      </>
    ),
  },
  {
    key: 'social',
    label: 'SOCIAL',
    caption: 'Content with a plan.',
    aria: 'Line drawing of a three by three social feed grid with one enlarged tile playing a video',
    art: (
      <>
        <rect x="126" y="44" width="52" height="52" rx="10" pathLength={1} data-d="0" />
        <rect x="190" y="44" width="52" height="52" rx="10" pathLength={1} data-d="1" />
        <rect x="254" y="44" width="52" height="52" rx="10" pathLength={1} data-d="2" />
        <rect x="126" y="108" width="52" height="52" rx="10" pathLength={1} data-d="2" />
        <rect x="190" y="108" width="52" height="52" rx="10" pathLength={1} data-d="3" />
        <rect x="126" y="172" width="52" height="52" rx="10" pathLength={1} data-d="4" />
        <rect x="190" y="172" width="52" height="52" rx="10" pathLength={1} data-d="5" />
        <rect x="254" y="172" width="52" height="52" rx="10" pathLength={1} data-d="6" />
        {/* enlarged tile with play mark */}
        <rect x="248" y="102" width="84" height="84" rx="14" strokeWidth="2.5" pathLength={1} data-d="5" />
        <path d="M280 128 L308 144 L280 160 Z" pathLength={1} data-d="7" />
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

export default function RotatingGraphics() {
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
    <section className={`rg${paused ? ' is-paused' : ''}`} aria-labelledby="rg-title">
      <div className="container">
        <header className="rg-head">
          <p className="section-label">WHAT WE MAKE</p>
          <h2 id="rg-title" className="section-headline">
            Cut from the same cloth.
          </h2>
        </header>

        <div
          className="rg-stage"
          aria-live="off"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setCycle((c) => c + 1);
          }}
        >
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
                <p className="rg-slide-label">{s.label}</p>
                <p className="rg-caption">
                  <Bracket />
                  {s.caption}
                  <Bracket flip />
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="rg-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              className={`rg-dot${i === active ? ' is-active' : ''}`}
              aria-label={`Show ${s.label.toLowerCase()} graphic`}
              onClick={() => jump(i)}
            >
              {i === active && <span key={cycle} className="rg-dot-fill"></span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
