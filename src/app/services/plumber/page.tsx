import Link from "next/link";
import { Droplets, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Wrench, Waves, BadgeCheck, Star, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Accordion from "@/components/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plumber Saudi Arabia – 24/7 Emergency Plumbing Repair",
    description: "Looking for a plumber in Saudi Arabia? Fast leak repairs, licensed technicians, and affordable 24 hour plumbing services. Call now for emergency pipe repair.",
    alternates: {
        canonical: '/services/plumber'
    }
};

export default function PlumbingPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "I need an expert plumber for emergency repair.";
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
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="animate-fade-in">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                                 RESIDENTIAL & COMMERCIAL PLUMBING
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                                letterSpacing: '-1.5px'
                            }}>
    24/7 Expert Plumber in Saudi Arabia
</h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '40px', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '750px' }}>
                                Searching for a certified plumber in Saudi Arabia? We provide <strong>residential and commercial plumbing solutions</strong> with a 45-minute arrival guarantee. From villa leak detection to retail maintenance, we ensure <strong>same-day restoration</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> GET INSTANT QUOTE
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    CALL NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Expert Plumber Service Across the Kingdom</h2>
                    <div className="card hover-lift" style={{ padding: '40px' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '30px', textAlign: 'center' }}>
                            Need a quote for your plumbing project? Since every repair is unique, we offer Free Instant Quotes via WhatsApp. Simply share a photo or description of the issue, and our plumbing experts will provide a transparent estimate.
                        </p>
                        <div className="grid grid-2" style={{ gap: '20px' }}>
                            <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '15px' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.2rem' }}>✓ Why Choose Saudi Home Experts?</h3>
                                <ul style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                    <li>SASO Compliant Pressure Testing</li>
                                    <li>Same-Day Leak Detection & Fix</li>
                                    <li>Villa & High-Rise Expertise</li>
                                    <li>Emergency 24/7 Response</li>
                                </ul>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="https://wa.me/966508901536?text=I%20need%20a%20plumber%20quote" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', border: 'none', padding: '20px', fontSize: '1.1rem' }}>
                                    <WhatsAppIcon size={24} style={{ marginRight: '10px' }} /> GET INSTANT QUOTE
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
                            <h2 style={{ marginBottom: '20px' }}>Fighting Hard Water Issues</h2>
                            <p style={{ marginBottom: '20px', color: 'var(--muted)', lineHeight: 1.6 }}>
                                Saudi Arabia's water supply can be high in minerals, leading to rapid scale buildup in your pipes and water heaters. As your trusted plumbing partner, we offer specialized decalcification services and high-end water filtration installations to protect your villa's luxury fittings and appliances.
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
                                <p style={{ fontSize: '1.2rem' }}>Leaks Fixed Across Saudi Arabia</p>
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
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>01. Book</h3>
                            <p style={{ opacity: 0.8 }}>Message us with your problem and location.</p>
                        </div>
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>02. Track</h3>
                            <p style={{ opacity: 0.8 }}>Get a tracking link for your technician's arrival.</p>
                        </div>
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>03. Resolve</h3>
                            <p style={{ opacity: 0.8 }}>Pay via Tap (Card) or Apple Pay after completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Case Study */}
            <section className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Case Study: Central Leak Detection</h2>
                    <div className="card hover-lift" style={{ padding: '0', overflow: 'hidden' }}>
                        <div className="grid grid-2">
                            <div style={{ padding: '40px', background: '#f8fafc' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.3rem' }}>The Problem</h3>
                                <p style={{ fontSize: '0.95rem' }}>A family villa noticed a sudden 300% spike in their water bill with no visible leaks. Traditional plumbers failed to find the source.</p>
                            </div>
                            <div style={{ padding: '40px' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.3rem' }}>The Result</h3>
                                <p style={{ fontSize: '0.95rem' }}>Our team used ultrasonic sensors to find a hairline fracture in the underground main line. Fixed in 4 hours with minimal excavation. Client saved thousands on future bills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Informational Section: Top Emergencies (Inspired by Competitor Success) */}
            <section className="section animate-fade-in" style={{ background: '#fff' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Top 5 Most Common Plumbing Emergencies</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: 'Burst Water Pipes', text: 'Highly common in peak summer or due to ground pressure changes. Requires immediate isolation and PEX-certified repair.' },
                            { title: 'Sewage Backups', text: 'Hazardous scenarios involving main sewer line blockages. Our team uses root cutters and high-pressure jetting.' },
                            { title: 'Water Heater Failure', text: 'Critical during winter. Leaking tanks can cause electrical shorts and significant flood damage if not replaced instantly.' },
                            { title: 'Low Pressure & Leakage', text: 'Often caused by internal pinhole leaks in PPR pipes within walls. We utilize thermal imaging for non-invasive detection.' },
                            { title: 'Clogged Drainage Systems', text: 'Hair, grease, and debris accumulate over time. Expert clearing with mechanical snakes ensures a long-term solution.' }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '24px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: '#0f172a' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>People Also Ask (PAA)</h2>
                    <Accordion items={[
                        {
                            title: "Do you provide plumbing services on Fridays/Weekends?",
                            content: "Yes! We have an emergency dispatch team available every Friday and Saturday to handle bursts and emergencies across KSA."
                        },
                        {
                            title: "How do I know if my water heater needs repair?",
                            content: "Rust-colored water, strange noises, or insufficient heat are key signals. A plumbing expert should inspect it immediately to avoid tank bursts."
                        }
                    ]} />
                </div>
            </section>

            {/* 7. Service Areas Silo */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Major Service Areas</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                        {[
                            { name: 'Riyadh', slug: 'plumber-riyadh' },
                            { name: 'Jeddah', slug: 'plumber-jeddah' },
                            { name: 'Dammam', slug: 'plumber-dammam' },
                            { name: 'Mecca', slug: 'plumber-mecca' }
                        ].map((city) => (
                            <Link key={city.name} href={`/${city.slug}`} style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border)', borderRadius: '10px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <MapPin size={14} color="var(--primary)" /> Plumber in {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Final WhatsApp Sticky CTA Silo */}
            <section className="section animate-fade-in" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Top-Rated Plumbing Support</h2>
                    <p style={{ marginBottom: '40px' }}>Get a response within 5 minutes on WhatsApp.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white' }}>
                        <WhatsAppIcon size={24} /> MESSAGE US
                    </a>
                </div>
            </section>
        
            {/* SEO Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do you provide plumbing services on Fridays/Weekends?","acceptedAnswer":{"@type":"Answer","text":"Yes! We have an emergency dispatch team available every Friday and Saturday to handle bursts and emergencies."}},{"@type":"Question","name":"How do I know if my water heater needs repair?","acceptedAnswer":{"@type":"Answer","text":"Rust-colored water, strange noises, or insufficient heat are key signals. A plumber should inspect it immediately to avoid tank bursts."}}]})}} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to book Plumber","description":"Step by step guide to booking our Plumber services.","step":[{"@type":"HowToStep","name":"Choose service","text":"Select the Plumber service on our website."},{"@type":"HowToStep","name":"Contact us","text":"Send us a message on WhatsApp or call our emergency number."},{"@type":"HowToStep","name":"Confirm booking","text":"Receive your fixed quote and wait for our technician to arrive."}]})}} />
        </main>
    );
}
