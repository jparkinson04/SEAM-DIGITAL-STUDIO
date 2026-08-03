import { ImageResponse } from 'next/og';

export const alt = 'Seam Digital Studio, websites, branding and messaging for small businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0E0E0E',
          color: '#F2EDE6',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Soft electric-blue glow in the corner — mirrors the site's hero */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 64, 255, 0.35) 0%, rgba(0, 64, 255, 0) 70%)',
            filter: 'blur(40px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            left: -160,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242, 237, 230, 0.18) 0%, rgba(242, 237, 230, 0) 70%)',
            filter: 'blur(40px)',
            display: 'flex',
          }}
        />

        {/* SEAM wordmark */}
        <div
          style={{
            display: 'flex',
            fontSize: 220,
            fontWeight: 900,
            letterSpacing: 8,
            lineHeight: 1,
          }}
        >
          SEAM
        </div>

        {/* Dashed seam between ticks */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            margin: '28px 0',
          }}
        >
          <div style={{ width: 5, height: 36, backgroundColor: '#F2EDE6' }} />
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{ width: 30, height: 5, backgroundColor: '#F2EDE6' }} />
          ))}
          <div style={{ width: 5, height: 36, backgroundColor: '#F2EDE6' }} />
        </div>

        {/* STUDIO label */}
        <div
          style={{
            display: 'flex',
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: 28,
            paddingLeft: 28,
          }}
        >
          STUDIO
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 64,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 1,
            color: 'rgba(242, 237, 230, 0.6)',
          }}
        >
          Websites that look right, and sound right.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
