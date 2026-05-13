const PROBLEMS = [
  'OUTDATED WEBSITE',
  'MISSED BOOKINGS',
  'NO ONLINE REVIEWS',
  'SCATTERED SOCIAL CONTENT',
  "TOOLS THAT DON'T TALK",
  'INCONSISTENT BRANDING',
  'ADMIN OVERLOAD',
  'LOST LEADS',
];

export default function Marquee() {
  // Duplicate for seamless loop (track scrolls translateX(-50%))
  const track = [...PROBLEMS, ...PROBLEMS];

  return (
    <div className="marquee" aria-label="Common problems Seam helps with">
      <div className="marquee-track" aria-hidden="true">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
