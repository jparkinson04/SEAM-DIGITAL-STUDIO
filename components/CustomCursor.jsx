'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return undefined;

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    dot.style.transform = 'translate3d(-100px, -100px, 0)';
    ring.style.transform = 'translate3d(-100px, -100px, 0)';
    document.body.append(dot, ring);
    document.body.classList.add('has-cursor');

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };
    const onOver = (e) => {
      ring.classList.toggle('is-hover', Boolean(e.target.closest('a, button')));
    };
    const onLeave = () => {
      dot.classList.add('is-out');
      ring.classList.add('is-out');
    };
    const onEnter = () => {
      dot.classList.remove('is-out');
      ring.classList.remove('is-out');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      dot.remove();
      ring.remove();
      document.body.classList.remove('has-cursor');
    };
  }, []);

  return null;
}
