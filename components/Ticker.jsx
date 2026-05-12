const ITEMS = [
  'CUSTOM WEBSITE',
  'BOOKING INTEGRATION',
  'GOOGLE REVIEWS',
  'LIVE INSTAGRAM FEED',
  '15-POST CONTENT PACK',
  'ONGOING SUPPORT',
];

export default function Ticker() {
  // Duplicate the list so the CSS marquee can loop seamlessly via translateX(-50%)
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-label="Included in the setup package">
      <div className="ticker-track" aria-hidden="true">
        {track.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
