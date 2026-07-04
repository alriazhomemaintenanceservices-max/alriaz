import Link from 'next/link';

const AREAS = [
  { ar: 'الياسمين', slug: 'yasmin' },
  { ar: 'النرجس', slug: 'narjis' },
  { ar: 'الصحافة', slug: 'sahafa' },
  { ar: 'الملقا', slug: 'malqa' },
  { ar: 'قرطبة', slug: 'qurtubah' },
  { ar: 'العارض', slug: 'arid' },
];

export default function NotFound() {
  return (
    <section className="section home-section dark" style={{ minHeight: '72vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '680px', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: 'clamp(4.5rem, 14vw, 8rem)', fontWeight: 900, color: '#fff', lineHeight: 1, textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>404</div>
        <h1 style={{ color: '#fff', marginTop: '8px' }}>الصفحة غير موجودة</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.15rem', margin: '10px auto 30px', maxWidth: '520px' }}>
          يمكن أن الرابط قديم أو تم نقله. تواصل معنا مباشرة ونوصلك فني خلال ساعة.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <a href="tel:+966508901536" className="btn btn-emergency btn-lg">اتصل الآن: 050 890 1536</a>
          <a href="https://wa.me/966508901536" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">راسلنا واتساب</a>
        </div>

        <div className="footer-areas" style={{ justifyContent: 'center', marginBottom: '20px' }}>
          <Link className="footer-area-chip" href="/">الرئيسية</Link>
          <Link className="footer-area-chip" href="/services/">خدماتنا</Link>
          {AREAS.map((a) => (
            <Link key={a.slug} className="footer-area-chip" href={`/كهربائي-${a.slug}/`}>{a.ar}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
