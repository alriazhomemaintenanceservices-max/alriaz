import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | Saudi Home Experts Riyadh",
    alternates: {
        canonical: '/site-map/'
    },
    description: "Explore all pages and services provided by Saudi Home Experts in Riyadh, including electrician, plumbing, and intercom services.",
};

// Single source of truth — must match src/app/sitemap.ts and the area lists in
// src/app/page.tsx and src/app/services/*. Each entry corresponds to real route
// directories under src/app/ (e.g. /سباك-aqiq, /كهربائي-aqiq, /انتركوم-aqiq).
const services = [
    { type: 'plumber', name: 'Plumber', slugAr: 'سباك' },
    { type: 'electrician', name: 'Electrician', slugAr: 'كهربائي' },
    { type: 'intercom', name: 'Intercom', slugAr: 'انتركوم' },
];

// Lists every live area page. The first block is the currently-promoted set;
// the second holds older areas kept live for SEO (reachable via direct URL).
const areas = [
    { name: 'Al Yasmin', slug: 'yasmin' },
    { name: 'Al Arid', slug: 'arid' },
    { name: 'Al Qirawan', slug: 'qirawan' },
    { name: 'Banban', slug: 'banban' },
    { name: 'Al Rabee', slug: 'rabee' },
    { name: 'Al Sahafa', slug: 'sahafa' },
    { name: 'Al Malqa', slug: 'malqa' },
    { name: 'Al Nada', slug: 'nada' },
    { name: 'Al Wadi', slug: 'wadi' },
    { name: 'Al Nafal', slug: 'nafal' },
    { name: 'Al Narjis', slug: 'narjis' },
    { name: 'Qurtubah', slug: 'qurtubah' },
    { name: 'Granada', slug: 'granada' },
    { name: 'Al Falah', slug: 'falah' },
    { name: 'Ishbiliyah', slug: 'ishbiliyah' },
    { name: 'Hittin', slug: 'hittin' },
    { name: 'Al Aqiq', slug: 'aqiq' },
    { name: 'Al-Hay Al-Sadis', slug: 'sadis' },
];

const mainPages = [
    { name: "Homepage", href: "/" },
    { name: "Our Services", href: "/services/" },
    { name: "Electrician Service Hub", href: "/services/electrician/" },
    { name: "Plumber Service Hub", href: "/services/plumber/" },
    { name: "Intercom Service Hub", href: "/services/intercom/" },
    { name: "About Us", href: "/about-us/" },
    { name: "Contact Us", href: "/contact/" },
    { name: "Privacy Policy", href: "/privacy-policy/" },
    { name: "Terms of Service", href: "/terms-of-service/" },
    { name: "Cookie Policy", href: "/cookie-policy/" },
    { name: "Disclaimer", href: "/disclaimer/" },
];

export default function SitemapPage() {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Site map</span>
            </nav>
            <div className="container">
                <h1 style={{ marginBottom: '40px', textAlign: 'center', fontSize: '3rem' }}>Sitemap</h1>
                <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '60px', fontSize: '1.2rem' }}>
                    All our services across every district we cover in Riyadh.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '60px' }}>

                    {/* Main Pages */}
                    <div>
                        <h3 style={{ marginBottom: '25px', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Main Pages
                        </h3>
                        <ul style={{ display: 'grid', gap: '15px', listStyle: 'none', padding: 0 }}>
                            {mainPages.map((page, i) => (
                                <li key={i}>
                                    <Link href={page.href} style={{ color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Real area pages, grouped by service */}
                    {services.map((service) => (
                        <div key={service.type}>
                            <h3 style={{ marginBottom: '25px', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>
                                {service.name} Locations
                            </h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', listStyle: 'none', padding: 0 }}>
                                {areas.map((area) => (
                                    <li key={area.slug}>
                                        <Link href={`/${service.slugAr}-${area.slug}/`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem' }}>
                                            {service.name} {area.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div style={{ marginTop: '100px', textAlign: 'center', padding: '60px', background: '#f8fafc', borderRadius: '40px' }}>
                    <h2 style={{ marginBottom: '20px' }}>Need Instant Assistance?</h2>
                    <p style={{ marginBottom: '30px', opacity: 0.8 }}>Our dispatch team is ready to send an expert to your location within 60 minutes.</p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="https://wa.me/966508901536" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '15px 40px' }}>
                            WhatsApp Us
                        </a>
                        <a href="tel:+966508901536" className="btn" style={{ border: '2px solid var(--border)', padding: '15px 40px' }}>
                            Call Help Line
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
