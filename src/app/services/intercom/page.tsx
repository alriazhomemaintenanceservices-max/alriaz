import Link from "next/link";
import { Shield, MapPin, CheckCircle, ArrowRight, Video, Smartphone, Lock, BadgeCheck, Star, ShieldCheck, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Intercom System Riyadh | Smart Home Security & Video Entry - Al Riaz"
    },
    alternates: {
        canonical: '/services/intercom'
    },
    description: "Expert intercom system installation in Riyadh. We specialize in video doorbell, multi-apartment entry, and smart lock integration. Same-day service in Hittin and Malqa!",
};

export default function IntercomPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "I need an expert for Intercom System in Riyadh. Please provide a quote.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main style={{ paddingTop: '100px', background: '#ffffff' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Intercom</span>
            </nav>

            {/* 1. HERO SECTION */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div className="animate-fade-in">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                                SMART SECURITY SOLUTIONS
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                                letterSpacing: '-1.5px'
                            }}>
                                Smart <span style={{ color: 'var(--primary)' }}>Intercom System</span> <br />
                                Riyadh - Video Entry
                            </h1>
                            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px', maxWidth: '550px', lineHeight: 1.7 }}>
                                Secure your villa with a premium intercom system in Riyadh. Al Riaz specializes in video doorbells, multi-apartment entry systems, and smart lock integration for luxury projects.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> WHATSAPP SECURITY EXPERT
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    CALL NOW
                                </a>
                            </div>
                        </div>

                        <div style={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '500px',
                                height: '550px',
                                background: '#f1f5f9',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-card)'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'url("https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '10%',
                                    left: '-10%',
                                    width: '120%',
                                    height: '80px',
                                    background: 'var(--primary)',
                                    transform: 'rotate(-10deg)',
                                    opacity: 0.8,
                                    zIndex: 3
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. AI Overview / Pricing Table (Removed) */}

            {/* 3. EEAT Section */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '20px' }}>Why Choose Al Riaz for Home Security?</h2>
                            <p style={{ marginBottom: '20px', color: 'var(--muted)', lineHeight: '1.6' }}>
                                With over a decade of experience installing intercom systems in Riyadh, we understand the specific security needs of the Kingdom's luxury compounds and independent villas. Our technicians are factory-trained for brands like Hikvision, Dahua, and Commax.
                            </p>
                            <div style={{ display: 'grid', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={20} color="var(--primary)" /> Certified Security Technicians</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={20} color="var(--primary)" /> 1700+ Installations in Riyadh</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={20} color="var(--primary)" /> 12-Month Quality Guarantee</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ background: 'var(--card)', border: '2px dashed var(--border)', padding: '50px', borderRadius: '40px' }}>
                                <Smartphone size={60} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h4>Full Mobile Integration</h4>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Unlock your door from anywhere in the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Process Clarification */}
            <section className="section animate-fade-in" style={{ background: 'var(--secondary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Simple 4-Step Installation</h2>
                    <div className="grid grid-4" style={{ gap: '20px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ color: 'var(--accent)' }}>01. Site Survey</h5>
                            <p style={{ fontSize: '0.85rem' }}>We check existing wiring (if any) and entry points.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ color: 'var(--accent)' }}>02. System Choice</h5>
                            <p style={{ fontSize: '0.85rem' }}>Select between Audio, Video, or Smart App systems.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ color: 'var(--accent)' }}>03. Pro Install</h5>
                            <p style={{ fontSize: '0.85rem' }}>Tidy wiring and flush-mounting of external units.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h5 style={{ color: 'var(--accent)' }}>04. Training</h5>
                            <p style={{ fontSize: '0.85rem' }}>We walk you through the app and system settings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Case Study */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div className="card hover-lift" style={{ padding: '50px', border: '1px solid var(--border)' }}>
                        <div className="grid grid-2" style={{ alignItems: 'center' }}>
                            <div style={{ borderRight: '1px solid var(--border)', paddingRight: '40px' }}>
                                <h2 style={{ marginBottom: '20px' }}>Recent Upgrade: 12-Unit Apartment in Hittin</h2>
                                <p style={{ color: 'var(--muted)' }}>
                                    An apartment building in Hittin required an upgrade from old analogue phones to IP Video intercoms. We installed a central Hikvision hub with 12 indoor monitors and face-recognition for residents. System operational in 48 hours.
                                </p>
                            </div>
                            <div style={{ paddingLeft: '40px', textAlign: 'center' }}>
                                <Star fill="var(--accent)" color="var(--accent)" size={48} />
                                <p style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '20px' }}>"The facial recognition entry is a game-changer. Perfect install!"</p>
                                <p style={{ opacity: 0.7 }}>- Building Manager, Hittin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PAA (FAQ) */}
            <section className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>People Also Ask (PAA)</h2>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        <div className="card hover-lift">
                            <h4 style={{ marginBottom: '10px' }}>Can you fix a broken intercom system in Riyadh?</h4>
                            <p style={{ color: 'var(--muted)' }}>Yes, besides new installs, we offer repair and troubleshooting for all major brands like Commax, Panasonic, and Farfisa.</p>
                        </div>
                        <div className="card hover-lift">
                            <h4>Do smart intercoms require high-speed internet?</h4>
                            <p style={{ color: 'var(--muted)' }}>For video streaming to your phone, a stable 5G or Fiber connection at the home is recommended for the best experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Service Areas Silo */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Intercom Service Areas in Riyadh</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                        {[
                            { name: 'Hittin', slug: 'intercom-riyadh-hittin' },
                            { name: 'Al Malqa', slug: 'intercom-riyadh-malqa' },
                            { name: 'Al Yasmin', slug: 'intercom-riyadh-yasmin' },
                            { name: 'An Nakheel', slug: 'intercom-riyadh-nakheel' }
                        ].map((area) => (
                            <Link key={area.name} href={`/areas/${area.slug}`} style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border)', borderRadius: '10px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <MapPin size={14} color="var(--primary)" /> Intercom in {area.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
            <section className="section animate-fade-in" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Secure Your Home Today</h2>
                    <p style={{ marginBottom: '40px' }}>Licensed Intercom Experts available across Riyadh.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white' }}>
                        <WhatsAppIcon size={24} /> GET A FREE QUOTE ON WHATSAPP
                    </a>
                </div>
            </section>
        </main>
    );
}
