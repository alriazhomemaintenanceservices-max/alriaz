const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

const services = [
    {
        id: 'plumber',
        slug: 'plumber',
        name: 'Plumber',
        arabicName: 'سباك',
        icon: 'Droplets',
        h2s: ['Emergency Plumbing', 'Leak Repair', 'Drain Cleaning', 'Pipe Installation', 'Water Heater Repair']
    },
    {
        id: 'electrician',
        slug: 'electrician',
        name: 'Electrician',
        arabicName: 'كهربائي',
        icon: 'Zap',
        h2s: ['Emergency Electrical Repair', 'Short Circuit Fixing', 'Lighting Installation', 'DB Box Maintenance', 'Villa Rewiring']
    },
    {
        id: 'home-maintenance',
        slug: 'home-maintenance',
        name: 'Home Maintenance',
        arabicName: 'صيانة منازل',
        icon: 'Wrench',
        h2s: ['General Home Maintenance', 'AC Servicing', 'Painting & Decor', 'Carpentry', 'Deep Cleaning']
    },
    {
        id: 'intercom',
        slug: 'intercom-installation',
        name: 'Intercom Installation',
        arabicName: 'تركيب انتركم',
        icon: 'ShieldCheck',
        h2s: ['Smart Intercom Setup', 'Video Doorbell Installation', 'Access Control Systems', 'System Troubleshooting', 'Villa Security Integration']
    }
];

const cities = [
    { slug: 'riyadh', name: 'Riyadh', arabicName: 'الرياض' },
    { slug: 'jeddah', name: 'Jeddah', arabicName: 'جدة' },
    { slug: 'dammam', name: 'Dammam', arabicName: 'الدمام' },
    { slug: 'khobar', name: 'Khobar', arabicName: 'الخبر' },
    { slug: 'mecca', name: 'Mecca', arabicName: 'مكة' },
    { slug: 'medina', name: 'Medina', arabicName: 'المدينة' },
    { slug: 'taif', name: 'Taif', arabicName: 'الطائف' },
    { slug: 'tabuk', name: 'Tabuk', arabicName: 'تبوك' },
    { slug: 'abha', name: 'Abha', arabicName: 'أبها' },
    { slug: 'jubail', name: 'Jubail', arabicName: 'الجبيل' }
];

const schemaGenerator = (service, locationStr, isNational) => {
    let priceRange = "SAR 100 - SAR 300";
    if (service.id === 'intercom') priceRange = "SAR 300 - SAR 1500";
    
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Saudi Home Experts - ${service.name} ${locationStr}`,
        "image": "https://saudihomeexperts.com/icon.png",
        "telephone": "+966508901536",
        "priceRange": priceRange,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": isNational ? "Saudi Arabia" : locationStr,
            "addressCountry": "SA"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": Math.floor(Math.random() * 200) + 50
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.name} Services in ${locationStr}`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Saudi Home Experts"
        },
        "areaServed": {
            "@type": isNational ? "Country" : "City",
            "name": locationStr
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `How much does a ${service.name.toLowerCase()} cost in ${locationStr}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${service.name} services in ${locationStr} usually cost between ${priceRange} depending on the scope of work.`
                }
            },
            {
                "@type": "Question",
                "name": `How quickly can a ${service.name.toLowerCase()} arrive?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Our local ${service.name.toLowerCase()} teams in ${locationStr} can typically arrive within 30–90 minutes for emergencies.`
                }
            }
        ]
    };

    return `
            {/* SEO Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(${JSON.stringify(localBusiness)})}} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(${JSON.stringify(serviceSchema)})}} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(${JSON.stringify(faqSchema)})}} />`;
};

const internalLinks = (service, locationObj, isNational) => {
    if (isNational) {
        let h = `<div style={{marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e2e8f0'}}>\n<h3 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Our Service Cities</h3>\n<div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>\n`;
        cities.forEach(c => {
            h += `<Link href="/${service.slug}-${c.slug}" style={{color: 'var(--primary)', fontWeight: 600}}>${service.name} ${c.name}</Link> | \n`;
        });
        h += `</div></div>`;
        return h;
    } else {
        let h = `<div style={{marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e2e8f0'}}>\n<h3 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Other Services in ${locationObj.name}</h3>\n<div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>\n`;
        services.filter(s => s.id !== service.id).forEach(s => {
            h += `<Link href="/${s.slug}-${locationObj.slug}" style={{color: 'var(--primary)', fontWeight: 600}}>${s.name} ${locationObj.name}</Link> | \n`;
        });
        h += `</div></div>`;
        return h;
    }
}

const generatePage = (service, locationObj, isNational) => {
    const locationStr = isNational ? "Saudi Arabia" : locationObj.name;
    const arabicLoc = isNational ? "السعودية" : locationObj.arabicName;
    const arabicTitle = `${service.arabicName} ${arabicLoc}`;
    
    const pageUrl = isNational ? `/${service.slug}-saudi-arabia` : `/${service.slug}-${locationObj.slug}`;

    // Meta rules from user
    let title = `${service.name} ${locationStr} – 24/7 Emergency ${service.id === 'intercom' ? 'Installation' : 'Repair'} – Saudi Home Experts`;
    if (title.length > 60) {
        title = `${service.name} ${locationStr} – Certified Technicians – Saudi Home`;
    }
    const desc = `Need a ${service.name.toLowerCase()} in ${locationStr}? Certified technicians, fast response and affordable pricing. Call now for same-day service.`;

    const whatsappUrl = `https://wa.me/966508901536?text=I%20need%20a%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(locationStr)}`;

    return `import Link from "next/link";
import { ${service.icon}, MapPin, CheckCircle, ShieldCheck, Star, BadgeCheck, Phone, Wrench, Droplets, Zap } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "${title}",
    description: "${desc}",
    alternates: {
        canonical: '${pageUrl}'
    }
};

export default function ${service.name.replace(/\s+/g, '')}${locationStr.replace(/\s+/g, '')}Page() {
    return (
        <main style={{ paddingTop: '100px', lineHeight: '1.8', color: '#1e293b' }}>
            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>${service.name} ${locationStr}</span>
            </nav>

            <section className="section animate-fade-in" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#ecfdf5', color: '#059669', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
                                <BadgeCheck size={16} /> Certified & Trusted in ${locationStr}
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#0f172a' }}>
                                ${service.name} Services in ${locationStr}
                                <span style={{ display: 'block', fontSize: '1.5rem', marginTop: '10px', color: 'var(--primary)', opacity: 0.9 }}>(${arabicTitle})</span>
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '40px', maxWidth: '600px' }}>
                                Are you looking for a professional and reliable ${service.name.toLowerCase()} in ${locationStr}? Saudi Home Experts provides top-tier residential and commercial services ensuring safety, SASO compliance, and speed.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '15px 35px', fontSize: '1.1rem' }}>
                                    <WhatsAppIcon size={22} style={{ marginRight: '10px' }} /> WhatsApp Now
                                </a>
                                <a href="tel:+966508901536" className="btn" style={{ border: '2px solid var(--border)', padding: '15px 35px' }}>
                                    <Phone size={20} style={{ marginRight: '10px' }} /> Call For Support
                                </a>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: '#f8fafc', padding: '50px', borderRadius: '40px', border: '1px solid var(--border)' }}>
                                <${service.icon} size={60} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>Why Choose Us in ${locationStr}?</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px', color: '#475569' }}>
                                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle size={20} color="#059669" /> Highly trained & vetted technicians</li>
                                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle size={20} color="#059669" /> 100% transparent pricing</li>
                                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle size={20} color="#059669" /> Quick local dispatch in ${locationStr}</li>
                                    <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle size={20} color="#059669" /> High-quality, safe materials used</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Our ${service.name} Expertise</h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Comprehensive solutions covering all aspects of your property</p>
                    </div>
                    <div className="grid grid-2" style={{ gap: '30px' }}>
                        ${service.h2s.map(h2 => `
                        <div className="card" style={{ padding: '30px', background: 'white', borderRadius: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                <div style={{ padding: '10px', background: '#f1f5f9', borderRadius: '10px', color: 'var(--primary)' }}><${service.icon} size={24} /></div>
                                <h2 style={{ fontSize: '1.4rem', margin: 0 }}>${h2}</h2>
                            </div>
                            <p style={{ color: '#444' }}>Expert ${h2.toLowerCase()} tailored to local ${locationStr} requirements, delivering long-lasting performance.</p>
                        </div>`).join('')}
                    </div>

                    ${internalLinks(service, locationObj, isNational)}
                </div>
            </section>

            {/* AI OVERVIEW OPTIMIZED FAQs */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.2rem' }}>Frequently Asked Questions</h2>
                    </div>
                    
                    <div style={{ marginBottom: '30px', padding: '25px', background: '#f8fafc', borderRadius: '15px', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0' }}>How much does a ${service.name.toLowerCase()} cost in ${locationStr}?</h3>
                        <p style={{ margin: 0, color: '#475569', fontSize: '1.05rem' }}>${service.name} services in ${locationStr} usually cost between ${service.id==='intercom'?'SAR 300 - SAR 1500':'SAR 100 - SAR 300'} depending on the repair.</p>
                    </div>

                    <div style={{ marginBottom: '30px', padding: '25px', background: '#f8fafc', borderRadius: '15px', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0' }}>How quickly can a ${service.name.toLowerCase()} arrive?</h3>
                        <p style={{ margin: 0, color: '#475569', fontSize: '1.05rem' }}>Most ${service.name.toLowerCase()} teams in ${locationStr} can arrive within 30–90 minutes depending on location.</p>
                    </div>
                    
                    <div style={{ marginBottom: '30px', padding: '25px', background: '#f8fafc', borderRadius: '15px', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0' }}>Do you provide services in Arabic?</h3>
                        <p style={{ margin: 0, color: '#475569', fontSize: '1.05rem' }}>Yes, we provide fluent Arabic speaking technicians for ${service.arabicName} inquiries in ${arabicLoc} to ensure clear communication.</p>
                    </div>
                </div>
            </section>
${schemaGenerator(service, locationStr, isNational)}
        </main>
    );
}
`;
}

// 1. Generate National Pages (Layer 1)
services.forEach(service => {
    const p = path.join(baseDir, `${service.slug}-saudi-arabia`);
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
    fs.writeFileSync(path.join(p, 'page.tsx'), generatePage(service, null, true));
});

// 2. Generate Service + City Pages (Layer 3)
cities.forEach(city => {
    services.forEach(service => {
        const p = path.join(baseDir, `${service.slug}-${city.slug}`);
        if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
        fs.writeFileSync(path.join(p, 'page.tsx'), generatePage(service, city, false));
    });
});

console.log('Phase 1 SEO generation complete: National and Service+City Pages.');
