import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Link from 'next/link';
import "./globals.css";
import { Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alriazhomemaintenanceservices.com'),
  title: {
    absolute: "Electrician & Plumber Riyadh | Al Riaz Home Maintenance"
  },
  description: "24/7 Professional electrician and plumbing services in Riyadh. Emergency repairs for Olaya, Malaz, and Hittin. Certified technicians, fast arrival.",
  keywords: "Electrician Riyadh, Plumber Riyadh, Home Maintenance Saudi Arabia, Riyadh Home Services",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Top-Rated Maintenance Services in Riyadh | Al Riaz",
    description: "Your trusted partner for home repairs and maintenance in Riyadh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = "966508901536"; // Update with actual number
  const whatsappMsg = "Hello Al Riaz Services, I need a professional technician in Riyadh.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <nav className="nav" style={{ background: 'var(--grad-glass-light)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo" style={{ fontWeight: 900, fontSize: '1.7rem', color: 'var(--secondary)', letterSpacing: '-1px' }}>
              AL RIAZ<span style={{ color: 'var(--primary)' }}>.</span>
            </div>
            <div className="nav-links hide-mobile" style={{ display: 'flex', gap: '40px', fontWeight: 600, alignItems: 'center', fontSize: '0.95rem' }}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/#about">About</Link>
              <Link href="/contact">Contact</Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '20px' }}>
                <a href="tel:+966508901536" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--secondary)' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={16} color="var(--primary)" />
                  </div>
                  +966 50 890 1536
                </a>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Floating WhatsApp Button for Mobile/Desktop */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#25D366',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 9999,
          }}
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon size={32} />
        </a>

        <footer className="footer" style={{ padding: '80px 0 20px', background: 'var(--grad-dark)', color: 'white' }}>
          <div className="container">
            <div className="grid grid-4" style={{ gap: '60px' }}>
              <div>
                <div className="logo" style={{ fontWeight: 900, fontSize: '1.7rem', color: 'white', letterSpacing: '-1px', marginBottom: '25px' }}>
                  AL RIAZ<span style={{ color: 'var(--primary)' }}>.</span>
                </div>
                <p style={{ opacity: 0.7, lineHeight: 1.8, marginBottom: '30px' }}>
                  The gold standard for residential and commercial maintenance in Riyadh. Providing safe, reliable, and professional solutions since 2012.
                </p>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {/* Social links placeholders as styled bullets */}
                  {[1, 2, 3, 4].map(s => (
                    <div key={s} style={{ width: '35px', height: '35px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'white' }}></div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: 800, borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '10px' }}>Useful Links</h3>
                <ul style={{ display: 'grid', gap: '15px' }}>
                  <li><Link href="/services" style={{ opacity: 0.7 }}>Our Services</Link></li>
                  <li><Link href="/#about" style={{ opacity: 0.7 }}>About Us</Link></li>
                  <li><Link href="/contact" style={{ opacity: 0.7 }}>Contact Us</Link></li>
                  <li><Link href="/privacy-policy" style={{ opacity: 0.7 }}>Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" style={{ opacity: 0.7 }}>Terms & Conditions</Link></li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: 800, borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '10px' }}>Services</h3>
                <ul style={{ display: 'grid', gap: '15px' }}>
                  <li><Link href="/services/electrician" style={{ opacity: 0.7 }}>Electrician Riyadh</Link></li>
                  <li><Link href="/services/plumber" style={{ opacity: 0.7 }}>Plumber Riyadh</Link></li>
                  <li><Link href="/services/intercom" style={{ opacity: 0.7 }}>Intercom System</Link></li>
                  <li><Link href="/services" style={{ opacity: 0.7 }}>Smart Security</Link></li>
                  <li><Link href="/services" style={{ opacity: 0.7 }}>Home Maintenance</Link></li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: 800, borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '10px' }}>Contact Bar</h3>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)' }}><MapPin size={24} /></div>
                    <p style={{ opacity: 0.7 }}>Olaya District, Riyadh, Saudi Arabia</p>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)' }}><Phone size={24} /></div>
                    <a href="tel:+966508901536" style={{ color: 'white', fontWeight: 700 }}>+966 50 890 1536</a>
                  </div>
                  <div style={{ marginTop: '10px', width: '100%', height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>Map Location Riyadh</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '80px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© 2026 Al Riaz Services. All Rights Reserved.</p>
              <div style={{ display: 'flex', gap: '30px', opacity: 0.5, fontSize: '0.9rem' }}>
                <Link href="/site-map">Sitemap</Link>
                <Link href="/privacy-policy">Social Bar</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
