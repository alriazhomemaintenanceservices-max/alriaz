import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | Saudi Home Experts Riyadh",
    alternates: {
        canonical: '/site-map/'
    },
    description: "Explore all pages and services provided by Saudi Home Experts in Riyadh, including electrician, plumbing, and intercom services.",
};

export default function SitemapPage() {
    const services = [
        { slug: 'plumber', name: 'Plumber' },
        { slug: 'electrician', name: 'Electrician' },
        { slug: 'intercom-installation', name: 'Intercom Installation' }
    ];

    const cities = [
        { slug: 'riyadh', name: 'Riyadh' },
        { slug: 'al-falah', name: 'Al Falah' },
        { slug: 'al-yarmouk', name: 'Al Yarmouk' },
        { slug: 'al-yasmin', name: 'Al Yasmin' },
        { slug: 'granada', name: 'Granada' },
        { slug: 'al-narjis', name: 'Al Narjis' },
        { slug: 'qurtubah', name: 'Qurtubah' },
        { slug: 'al-sahafah', name: 'Al Sahafah' },
        { slug: 'al-nada', name: 'Al Nada' },
        { slug: 'ishbiliyah', name: 'Ishbiliyah' },
        { slug: 'al-rabee', name: 'Al Rabee' },
        { slug: 'jeddah', name: 'Jeddah' },
        { slug: 'dammam', name: 'Dammam' },
        { slug: 'khobar', name: 'Khobar' },
        { slug: 'mecca', name: 'Mecca' },
        { slug: 'medina', name: 'Medina' },
        { slug: 'taif', name: 'Taif' },
        { slug: 'tabuk', name: 'Tabuk' },
        { slug: 'abha', name: 'Abha' },
        { slug: 'jubail', name: 'Jubail' },
        { slug: 'hail', name: 'Hail' },
        { slug: 'buraidah', name: 'Buraidah' },
        { slug: 'najran', name: 'Najran' },
        { slug: 'yanbu', name: 'Yanbu' },
        { slug: 'jizan', name: 'Jizan' },
        { slug: 'hofuf', name: 'Al Hofuf' },
        { slug: 'dhahran', name: 'Dhahran' },
        { slug: 'alkharj', name: 'Al Kharj' },
        { slug: 'rabigh', name: 'Rabigh' },
        { slug: 'sakaka', name: 'Sakaka' }
    ];

    const mainPages = [
        { name: "Homepage", href: "/" },
        { name: "Our Services", href: "/services" },
        { name: "Electrician Service Hub", href: "/services/electrician" },
        { name: "Plumber Service Hub", href: "/services/plumber" },
        { name: "Intercom Service Hub", href: "/services/intercom" },
        { name: "About Us", href: "/#about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Disclaimer", href: "/disclaimer" }
    ];

    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Site map</span>
            </nav>
            <div className="container">
                <h1 style={{ marginBottom: '40px', textAlign: 'center', fontSize: '3rem' }}>Sitemap</h1>
                <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '60px', fontSize: '1.2rem' }}>Comprehensive guide to our experts and services across Saudi Arabia.</p>

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

                    {/* Services by City */}
                    {services.map((service, i) => (
                        <div key={i}>
                            <h3 style={{ marginBottom: '25px', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>
                                {service.name} Locations
                            </h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', listStyle: 'none', padding: 0 }}>
                                {cities.map((city, j) => (
                                    <li key={j}>
                                        <Link href={`/${service.slug}-${city.slug}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem' }}>
                                            {service.name} {city.name}
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
