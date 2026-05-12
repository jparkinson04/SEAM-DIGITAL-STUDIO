const DASH_COUNTS = { xs: 7, sm: 9, lg: 15 };

export default function Logo({ size = 'sm', as: Element = 'span', className = '', ...props }) {
  const dashCount = DASH_COUNTS[size] ?? DASH_COUNTS.sm;
  return (
    <Element className={`logo size-${size} ${className}`.trim()} {...props}>
      <div className="seam">SEAM</div>
      <div className="dashes" aria-hidden="true">
        <div className="tick"></div>
        {Array.from({ length: dashCount }).map((_, i) => (
          <div key={i} className="dash"></div>
        ))}
        <div className="tick"></div>
      </div>
      <div className="studio">STUDIO</div>
    </Element>
  );
}
