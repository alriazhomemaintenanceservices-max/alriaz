import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | Al Riaz Home Maintenance Services Riyadh",
  alternates: {
    canonical: '/site-map'
  },
    description: "Explore all pages and services provided by Al Riaz Home Maintenance Services in Riyadh, including electrician, plumbing, and intercom services.",
};

export default function SitemapPage() {
    const links = [
        {
            title: "Main Pages",
  alternates: {
    canonical: '/site-map'
  }, items: [
                { name: "Homepage", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Contact Us", href: "/contact" }
            ]
        },
        {
            title: "Our Services",
  alternates: {
    canonical: '/site-map'
  }, items: [
                { name: "Electrician Services", href: "/services/electrician" },
                { name: "Plumbing Services", href: "/services/plumber" },
                { name: "Intercom Installation", href: "/services/intercom" }
            ]
        },
        {
            title: "Priority Service Areas",
  alternates: {
    canonical: '/site-map'
  }, items: [
                { name: "Electrician in Qurtubah", href: "/riyadh/qurtubah/electrician" },
                { name: "Electrician in Ishbiliyah", href: "/riyadh/ishbiliyah/electrician" },
                { name: "Electrician in Al Yarmouk", href: "/riyadh/yarmouk/electrician" },
                { name: "Electrician in Al Narjis", href: "/riyadh/narjis/electrician" },
                { name: "Electrician in Al Yasmin", href: "/riyadh/yasmin/electrician" },
                { name: "Electrician in Al Sahafah", href: "/riyadh/sahafa/electrician" },
                { name: "Electrician in Al Falah", href: "/riyadh/falah/electrician" },
                { name: "Electrician in Granada", href: "/riyadh/granada/electrician" },
                { name: "Electrician in Al Rabee", href: "/riyadh/rabee/electrician" },
                { name: "Electrician in Al Nada", href: "/riyadh/nada/electrician" },
                { name: "Plumber in Qurtubah", href: "/riyadh/qurtubah/plumber" },
                { name: "Plumber in Al Narjis", href: "/riyadh/narjis/plumber" },
                { name: "Intercom in Al Yasmin", href: "/riyadh/yasmin/intercom" },
                { name: "Intercom in Al Sahafah", href: "/riyadh/sahafa/intercom" }
            ]
        },
        {
            title: "Legal & Information",
  alternates: {
    canonical: '/site-map'
  }, items: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Cookie Policy", href: "/cookie-policy" },
                { name: "Disclaimer", href: "/disclaimer" }
            ]
        }
    ];

    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                        {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Site map</span>
            </nav>
            <div className="container">
                <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>Sitemap</h1>
                <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '60px' }}>Navigate through our complete list of services and area-specific pages in Riyadh.</p>

                <div className="grid grid-4" style={{ gap: '40px' }}>
                    {links.map((section, i) => (
                        <div key={i}>
                            <h3 style={{ marginBottom: '20px', color: 'var(--primary)', borderBottom: '2px solid var(--border)', paddingBottom: '10px' }}>{section.title}</h3>
                            <ul style={{ display: 'grid', gap: '12px' }}>
                                {section.items.map((item, j) => (
                                    <li key={j}>
                                        <Link href={item.href} style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '80px', textAlign: 'center' }}>
                    <p>Can't find what you're looking for?</p>
                    <a href="https://wa.me/966508901536" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '20px', background: '#25D366', border: 'none' }}>
                        Contact us on WhatsApp
                    </a>
                </div>
            </div>
        </main>
    );
}
