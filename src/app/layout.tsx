import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Link from 'next/link';
import "./globals.css";
import { Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import MobileNav from '@/components/MobileNav';

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
    absolute: "Professional Electrician, Plumber & Intercom Riyadh | Al Riaz"
  },
  description: "Expert Professional Electrician, Plumber, and Intercom installation services in Riyadh. We also handle detailed general home maintenance for all districts.",
  keywords: "Electrician Riyadh, Plumber Riyadh, Intercom System Riyadh, Home Maintenance Saudi Arabia, Riyadh Professional Services",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav className="nav" style={{ background: 'var(--grad-glass-light)', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo" style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--secondary)', letterSpacing: '-1px' }}>
              <Link href="/">AL RIAZ<span style={{ color: 'var(--primary)' }}>.</span></Link>
            </div>
            {/* Desktop nav links */}
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
                <Link href="/contact" className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', width: 'auto' }}>
                  Book Now
                </Link>
              </div>
            </div>
            {/* Mobile hamburger menu */}
            <div className="mobile-nav-actions">
              <MobileNav />
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
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
              <div>
                <div className="logo" style={{ fontWeight: 900, fontSize: '1.7rem', color: 'white', letterSpacing: '-1px', marginBottom: '25px' }}>
                  AL RIAZ<span style={{ color: 'var(--primary)' }}>.</span>
                </div>
                <p style={{ opacity: 0.7, lineHeight: 1.8, marginBottom: '30px' }}>
                  The gold standard for residential and commercial maintenance in Riyadh. Providing safe, reliable, and professional solutions since 2012.
                </p>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {[1, 2, 3, 4].map(s => (
                    <div key={s} style={{ width: '35px', height: '35px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'white' }}></div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: 800, borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '8px' }}>Useful Links</h3>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  <li><Link href="/services" style={{ opacity: 0.7 }}>Our Services</Link></li>
                  <li><Link href="/#about" style={{ opacity: 0.7 }}>About Us</Link></li>
                  <li><Link href="/contact" style={{ opacity: 0.7 }}>Contact Us</Link></li>
                  <li><Link href="/privacy-policy" style={{ opacity: 0.7 }}>Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" style={{ opacity: 0.7 }}>Terms & Conditions</Link></li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: 800, borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '8px' }}>Services</h3>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  <li><Link href="/services/electrician" style={{ opacity: 0.7 }}>Electrician Services</Link></li>
                  <li><Link href="/services/plumber" style={{ opacity: 0.7 }}>Plumbing Services</Link></li>
                  <li><Link href="/services/intercom" style={{ opacity: 0.7 }}>Intercom Installation</Link></li>
                  <li><Link href="/services" style={{ opacity: 0.7 }}>General Maintenance</Link></li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: 800, borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '8px' }}>Service Areas</h3>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  <li><Link href="/locations/qurtubah" style={{ opacity: 0.7 }}>Qurtubah</Link></li>
                  <li><Link href="/locations/al-yasmin" style={{ opacity: 0.7 }}>Al Yasmin</Link></li>
                  <li><Link href="/locations/ishbiliyah" style={{ opacity: 0.7 }}>Ishbiliyah</Link></li>
                  <li><Link href="/locations/al-malqa" style={{ opacity: 0.7 }}>Al Malqa</Link></li>
                  <li><Link href="/locations/hittin" style={{ opacity: 0.7 }}>Hittin</Link></li>
                  <li><Link href="/locations/al-narjis" style={{ opacity: 0.7 }}>Al Narjis</Link></li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: 800, borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '8px' }}>Contact</h3>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}><MapPin size={20} /></div>
                    <p style={{ opacity: 0.7 }}>Riyadh, Saudi Arabia</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Phone size={20} /></div>
                    <a href="tel:+966508901536" style={{ color: 'white', fontWeight: 700 }}>+966 50 890 1536</a>
                  </div>
                  <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noopener noreferrer" style={{
                    marginTop: '6px',
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    textDecoration: 'none',
                    gap: '8px',
                    transition: 'background 0.3s'
                  }}>
                    <MapPin size={16} /> View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom" style={{ marginTop: '60px', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <p style={{ opacity: 0.5, fontSize: '0.85rem', overflowWrap: 'break-word', maxWidth: '100%' }}>© {new Date().getFullYear()} Al Riaz Services. All Rights Reserved.</p>
              <div style={{ display: 'flex', gap: '20px', opacity: 0.5, fontSize: '0.85rem', flexShrink: 0 }}>
                <Link href="/site-map">Sitemap</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
