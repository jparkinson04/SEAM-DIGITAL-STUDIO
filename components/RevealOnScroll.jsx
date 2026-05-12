'use client';

import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  as: Element = 'div',
  className = '',
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const composed = `animate-on-scroll${visible ? ' visible' : ''}${className ? ' ' + className : ''}`;

  return (
    <Element ref={ref} className={composed} {...props}>
      {children}
    </Element>
  );
}
