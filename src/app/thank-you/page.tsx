import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'تم استلام طلبك — نتصل بك خلال 30 دقيقة',
  description: 'تم استلام طلبك بنجاح. سيتواصل معك فريق خبراء المنزل السعودي خلال 30 دقيقة.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thank-you/' },
};

export default function ThankYouPage() {
  return (
    <section className="section home-section dark" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '8px' }}>✅</div>
        <h1 style={{ color: '#fff' }}>تم استلام طلبك بنجاح</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.15rem', margin: '10px auto 30px', maxWidth: '520px' }}>
          سيتواصل معك فريقنا خلال 30 دقيقة إن شاء الله. إذا كانت الحالة طارئة، اتصل بنا مباشرة الآن.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
          <a href="tel:+966508901536" className="btn btn-emergency btn-lg">اتصل الآن: 050 890 1536</a>
          <a href="https://wa.me/966508901536" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">راسلنا واتساب</a>
        </div>
        <Link className="footer-area-chip" href="/">العودة للرئيسية</Link>
      </div>
    </section>
  );
}
