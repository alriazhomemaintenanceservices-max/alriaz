import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, Zap, Droplets, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type Props = {
    params: Promise<{ slug: string }>;
};

const locations: { [key: string]: string } = {
    'qurtubah': 'Qurtubah',
    'ishbiliyah': 'Ishbiliyah',
    'al-yarmouk': 'Al Yarmouk',
    'al-narjis': 'Al Narjis',
    'al-yasmin': 'Al Yasmin',
    'al-sahafah': 'Al Sahafah',
    'al-falah': 'Al Falah',
    'granada': 'Granada',
    'al-rabee': 'Al Rabee',
    'al-nada': 'Al Nada',
    'hittin': 'Hittin',
    'al-malqa': 'Al Malqa',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const locationName = locations[slug];
    if (!locationName) return { title: 'Location Not Found' };

    return {
        title: `Best Electrician & Plumber in ${locationName} - Saudi Home Experts Repairs`,
        description: `Leading home maintenance services in ${locationName}, Riyadh. Expert electrician, plumber, and intercom installation available 24/7 in your neighborhood.`,
    };
}

export default async function LocationPage({ params }: Props) {
    const { slug } = await params;
    const locationName = locations[slug];

    if (!locationName) {
        notFound();
    }

    const whatsappNumber = "966508901536";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello, I need service in ${locationName}`;

    return (
        <main>
            {/* HERO SECTION */}
            <section style={{
                position: 'relative',
                padding: '120px 0 80px',
                background: '#f8fafc',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 20px',
                        background: 'white',
                        borderRadius: '30px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        marginBottom: '30px',
                        color: 'var(--primary)',
                        fontWeight: 600
                    }}>
                        <MapPin size={18} /> Serving {locationName}, Riyadh
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        fontWeight: 800,
                        color: '#1e293b'
                    }}>
                        Expert Home Maintenance in <br />
                        <span style={{ color: 'var(--primary)' }}>{locationName}</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.6 }}>
                        Need a reliable electrician or plumber in {locationName}?
                        Saudi Home Experts provides fast, SASO-certified repairs right in your neighborhood.
                        We are just around the corner.
                    </p>
                    <div className="hero-btn-group" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ flex: '1 1 200px', maxWidth: '280px', textAlign: 'center', justifyContent: 'center' }}>
                            <WhatsAppIcon size={20} /> BOOK IN {locationName.toUpperCase()}
                        </a>
                        <a href="tel:+966508901536" className="btn btn-lg" style={{ background: 'white', color: '#333', border: '1px solid #e2e8f0', flex: '1 1 200px', maxWidth: '280px', textAlign: 'center', justifyContent: 'center' }}>
                            <Phone size={20} /> CALL NOW
                        </a>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Services Available in {locationName}</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        <div className="card hover-lift" style={{ textAlign: 'center', padding: '40px 20px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}><Zap size={40} /></div>
                            <h3>Electrician in {locationName}</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '10px' }}>Emergency short circuit repair, lighting installation, and breaker fixes.</p>
                            <Link href="/services/electrician" style={{ display: 'block', marginTop: '20px', fontWeight: 700, color: 'var(--primary)' }}>View Details &rarr;</Link>
                        </div>
                        <div className="card hover-lift" style={{ textAlign: 'center', padding: '40px 20px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}><Droplets size={40} /></div>
                            <h3>Plumber in {locationName}</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '10px' }}>Leak detection, water heater repair, and pump maintenance.</p>
                            <Link href="/services/plumber" style={{ display: 'block', marginTop: '20px', fontWeight: 700, color: 'var(--primary)' }}>View Details &rarr;</Link>
                        </div>
                        <div className="card hover-lift" style={{ textAlign: 'center', padding: '40px 20px' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}><ShieldCheck size={40} /></div>
                            <h3>Intercom Systems</h3>
                            <p style={{ color: 'var(--muted)', marginTop: '10px' }}>Smart video entry installation and repair for villas and apartments.</p>
                            <Link href="/services/intercom" style={{ display: 'block', marginTop: '20px', fontWeight: 700, color: 'var(--primary)' }}>View Details &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="section" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '50px' }}>
                        <div>
                            <h2 style={{ marginBottom: '20px' }}>Why {locationName} Residents Trust Us</h2>
                            <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '30px' }}>
                                We have been serving families in {locationName} for over 10 years. Our technicians are familiar with the area's specific building types and electrical grids.
                            </p>
                            <ul style={{ display: 'grid', gap: '15px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle color="var(--primary)" size={20} /> <strong>Fast Arrival:</strong> We are already in the area.</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle color="var(--primary)" size={20} /> <strong>Code Compliant:</strong> Familiar with local standards.</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle color="var(--primary)" size={20} /> <strong>24/7 Support:</strong> Always ready for emergencies.</li>
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '20px' }}>Emergency in {locationName}?</h3>
                            <p style={{ marginBottom: '30px', color: '#64748b' }}>Don't wait. Our mobile unit can reach your villa in minutes.</p>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <WhatsAppIcon size={20} /> WHATSAPP US
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
