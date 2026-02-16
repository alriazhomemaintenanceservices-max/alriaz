import Link from "next/link";
import { Droplets, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Wrench, Waves, BadgeCheck, Star, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Plumber in Riyadh | Professional 24/7 Plumbing Services - Al Riaz"
    },
    alternates: {
        canonical: '/services/plumber'
    },
    description: "Certified plumber in Riyadh for emergency leak repairs, water heater maintenance, and tank cleaning. Same-day service in Olaya, Malaz, and Ar Rawdah. WhatsApp Now!",
};

export default function PlumbingPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "I need an expert plumber in Riyadh for emergency repair.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main style={{ paddingTop: '100px', background: '#ffffff' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Plumber</span>
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
                                MASTER PLUMBING SOLUTIONS
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                                letterSpacing: '-1.5px'
                            }}>
                                Expert <span style={{ color: 'var(--primary)' }}>Plumber</span> in <br />
                                Riyadh - 24/7 Repairs
                            </h1>
                            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px', maxWidth: '550px', lineHeight: 1.7 }}>
                                Searching for a certified plumber in Riyadh? Al Riaz Home Maintenance offers 24/7 emergency leak detection, water heater repair, and decorative fixture installation for luxury villas and apartments.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> WHATSAPP MASTER PLUMBER
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
                                    background: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat'
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

            {/* 2. AI Overview / Transparent Pricing */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Expert Plumber Service in Riyadh</h2>
                    <div className="card hover-lift" style={{ padding: '40px' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '30px', textAlign: 'center' }}>
                            Need a quote for your plumbing project? Since every repair is unique, we offer Free Instant Quotes via WhatsApp. Simply share a photo or description of the issue, and our Riyadh plumbing experts will provide a transparent estimate.
                        </p>
                        <div className="grid grid-2" style={{ gap: '20px' }}>
                            <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '15px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>✓ Why Choose Al Riaz?</h4>
                                <ul style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                    <li>SASO Compliant Pressure Testing</li>
                                    <li>Same-Day Leak Detection & Fix</li>
                                    <li>Villa & High-Rise Expertise</li>
                                    <li>Emergency 24/7 Response</li>
                                </ul>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="https://wa.me/966508901536?text=I%20need%20a%20plumber%20quote" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', border: 'none', padding: '20px', fontSize: '1.1rem' }}>
                                    <WhatsAppIcon size={24} style={{ marginRight: '10px' }} /> GET INSTANT QUOTE ON WHATSAPP
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Deep Maintenance Section (PAA Context) */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '20px' }}>Fighting Riyadh's Hard Water Issues</h2>
                            <p style={{ marginBottom: '20px', color: 'var(--muted)', lineHeight: 1.6 }}>
                                Riyadh's water supply can be high in minerals, leading to rapid scale buildup in your pipes and water heaters. As your trusted plumber in Riyadh, we offer specialized decalcification services and high-end water filtration installations to protect your villa's luxury fittings and appliances.
                            </p>
                            <div style={{ display: 'grid', gap: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Waves size={20} color="var(--primary)" /> Tank Deep Cleaning & Sterilization</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Waves size={20} color="var(--primary)" /> Pressure Pump Installation & Repair</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Waves size={20} color="var(--primary)" /> Central Heater Scaling Removal</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ background: 'var(--grad-primary)', padding: '50px', borderRadius: '40px', color: 'white' }}>
                                <h3 style={{ fontSize: '3rem', marginBottom: '10px' }}>5000+</h3>
                                <p style={{ fontSize: '1.2rem' }}>Leaks Fixed in Riyadh Villas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Process Clarity */}
            <section className="section animate-fade-in" style={{ background: 'var(--secondary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Book Your Plumber Instantly</h2>
                    <div className="grid grid-3">
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h4 style={{ color: 'var(--accent)' }}>Book</h4>
                            <p style={{ opacity: 0.8 }}>WhatsApp us with your problem and location.</p>
                        </div>
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h4 style={{ color: 'var(--accent)' }}>Track</h4>
                            <p style={{ opacity: 0.8 }}>Get a tracking link for your technician's arrival.</p>
                        </div>
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h4 style={{ color: 'var(--accent)' }}>Resolve</h4>
                            <p style={{ opacity: 0.8 }}>Pay via Tap (Card) or Apple Pay after completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Case Study */}
            <section className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Case Study: Central Leak Detection in An Nakheel</h2>
                    <div className="card hover-lift" style={{ padding: '0', overflow: 'hidden' }}>
                        <div className="grid grid-2">
                            <div style={{ padding: '40px', background: '#f8fafc' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>The Problem</h4>
                                <p style={{ fontSize: '0.95rem' }}>A family villa in An Nakheel district noticed a sudden 300% spike in their water bill with no visible leaks. Traditional plumbers failed to find the source.</p>
                            </div>
                            <div style={{ padding: '40px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>The Result</h4>
                                <p style={{ fontSize: '0.95rem' }}>Our team used ultrasonic sensors to find a hairline fracture in the underground main line. Fixed in 4 hours with minimal excavation. Client saved thousands on future bills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ (PAA) */}
            <section className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>People Also Ask (PAA)</h2>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        <div className="card hover-lift">
                            <h4 style={{ marginBottom: '10px' }}>Do you provide plumbing services on Fridays/Weekends?</h4>
                            <p style={{ color: 'var(--muted)' }}>Yes! We have an emergency dispatch team available in Riyadh every Friday and Saturday to handle bursts and emergencies.</p>
                        </div>
                        <div className="card hover-lift">
                            <h4 style={{ marginBottom: '10px' }}>How do I know if my water heater needs repair?</h4>
                            <p style={{ color: 'var(--muted)' }}>Rust-colored water, strange noises, or insufficient heat are key signals. A plumber in Riyadh should inspect it immediately to avoid tank bursts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Service Areas Silo */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Plumbing Service Areas in Riyadh</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                        {[
                            { name: 'Olaya', slug: 'plumber-riyadh-olaya' },
                            { name: 'Malaz', slug: 'plumber-riyadh-malaz' },
                            { name: 'Ar Rawdah', slug: 'plumber-riyadh-rawdah' },
                            { name: 'An Nakheel', slug: 'plumber-riyadh-nakheel' }
                        ].map((area) => (
                            <Link key={area.name} href={`/areas/${area.slug}`} style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border)', borderRadius: '10px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <MapPin size={14} color="var(--primary)" /> Plumber in {area.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Final WhatsApp Sticky CTA Silo */}
            <section className="section animate-fade-in" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Top-Rated Plumbing Support in Riyadh</h2>
                    <p style={{ marginBottom: '40px' }}>Get a response within 5 minutes on WhatsApp.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white' }}>
                        <WhatsAppIcon size={24} /> MESSAGE US ON WHATSAPP
                    </a>
                </div>
            </section>
        </main>
    );
}
