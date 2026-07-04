import { ImageResponse } from 'next/og';

// Branded 1200×630 Open Graph image — fixes blank WhatsApp / social previews.
// Latin text is used so it renders reliably without loading an Arabic webfont.
export const alt = 'Saudi Home Experts — Electrician, Plumber & Intercom in Riyadh';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b1220 0%, #17408b 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 12, background: 'linear-gradient(90deg,#3B82F6,#F59E0B,#10B981)', display: 'flex' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: '#34D399', display: 'flex' }} />
          <div style={{ fontSize: 30, color: '#cbd5e1' }}>Riyadh · Available 24/7</div>
        </div>

        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.1, display: 'flex', flexWrap: 'wrap' }}>
          Saudi Home Experts
        </div>

        <div style={{ fontSize: 42, color: '#FCD34D', fontWeight: 700, marginTop: 18, display: 'flex' }}>
          Electrician · Plumber · Intercom
        </div>

        <div style={{ fontSize: 34, color: '#e2e8f0', marginTop: 30, display: 'flex' }}>
          A technician at your door within the hour
        </div>

        <div
          style={{
            marginTop: 44,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 16,
            padding: '18px 30px',
            alignSelf: 'flex-start',
            fontSize: 40,
            fontWeight: 800,
          }}
        >
          Call · 050 890 1536
        </div>
      </div>
    ),
    { ...size }
  );
}
