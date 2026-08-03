'use client';

import { useEffect, useRef, useState } from 'react';

const WORDS = ['website', 'branding', 'messaging', 'socials', 'story'];
const HOLD_MS = 2500;
const SWAP_MS = 500;
const START_DELAY_MS = 1400; // let the hero entrance finish first

export default function RotatingWord() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [animate, setAnimate] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let interval;
    let clearLeaving;
    const start = setTimeout(() => {
      setAnimate(true);
      interval = setInterval(() => {
        const prev = idx.current;
        idx.current = (prev + 1) % WORDS.length;
        setLeaving(prev);
        setCurrent(idx.current);
        clearTimeout(clearLeaving);
        clearLeaving = setTimeout(() => setLeaving(null), SWAP_MS + 80);
      }, HOLD_MS);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
      clearTimeout(clearLeaving);
    };
  }, []);

  return (
    <span className="rw">
      {/* Invisible sizers: the container is always as wide as the longest word,
          so the surrounding line never shifts */}
      {WORDS.map((w) => (
        <span key={`s-${w}`} className="rw-size" aria-hidden="true">
          {w}
        </span>
      ))}
      {leaving !== null && (
        <span key={`out-${leaving}`} className="rw-word rw-word--out" aria-hidden="true">
          {WORDS[leaving]}
        </span>
      )}
      <span key={`in-${current}`} className={`rw-word${animate ? ' rw-word--in' : ''}`}>
        {WORDS[current]}
      </span>
    </span>
  );
}
