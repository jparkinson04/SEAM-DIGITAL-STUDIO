'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const WORDS = ['website', 'branding', 'messaging', 'socials', 'story'];
const HOLD_MS = 2500;
const SWAP_MS = 500;
const START_DELAY_MS = 1400; // let the hero entrance finish first

export default function RotatingWord() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [width, setWidth] = useState(null);
  const idx = useRef(0);
  const measureRef = useRef(null);
  const widths = useRef([]);

  // Measure every word once (and again on resize / after fonts load) so the
  // container can ease to the exact width of the active word
  useLayoutEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      widths.current = Array.from(measureRef.current.children).map((el) => el.offsetWidth);
      setWidth(widths.current[idx.current]);
    };
    measure();
    window.addEventListener('resize', measure);
    if (document.fonts?.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

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
        setWidth(widths.current[idx.current]);
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
    <span className="rw" style={width ? { width } : undefined}>
      <span className="rw-measure" ref={measureRef} aria-hidden="true">
        {WORDS.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </span>
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
