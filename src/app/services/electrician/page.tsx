import Link from "next/link";
import { Zap, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Wrench, ShieldAlert, BadgeCheck, Star, Lightbulb, ThermometerSun, AlertTriangle, ZapOff, Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Accordion from "@/components/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Electrician Saudi Arabia – 24/7 Emergency Electrical Repair",
    description: "Need an electrician in Saudi Arabia? Licensed technicians, fast emergency response, and affordable electrical maintenance. Power outage? Call now for safe repair!",
    alternates: {
        canonical: '/services/electrician'
    }
};

export default function ElectricianPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "I need an expert electrician for an emergency repair.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Expert Electrical Repair & Installation Saudi Arabia",
        "serviceType": "Electrician",
        "description": "24/7 emergency electrical services in Saudi Arabia by Saudi Home Experts. Specialized in short circuit repair, DB load balancing, and smart home lighting for luxury villas.",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Saudi Home Experts",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Olaya District",
                "addressLocality": "Riyadh",
                "addressRegion": "Riyadh Province",
                "addressCountry": "SA",
                "postalCode": "11564"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "Riyadh" },
            { "@type": "City", "name": "Jeddah" },
            { "@type": "City", "name": "Dammam" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Electrical Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Short Circuit Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DB Box Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chandelier Installation" } }
            ]
        }
    };

    return (
        <main style={{ paddingTop: '100px', background: '#ffffff', color: 'var(--foreground)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Electrician</span>
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
                                 RESIDENTIAL & COMMERCIAL ELECTRICAL
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
    24/7 Expert Electrician in Saudi Arabia
</h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '40px', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '750px' }}>
                                Searching for a certified electrician in Saudi Arabia? We provide <strong>premium residential and commercial maintenance</strong> with 45-minute arrival. From emergency short circuits to industrial lighting, we guarantee <strong>same-day resolution</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> BOOK NOW
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    CALL NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Service Summary Block */}
            <section style={{ background: '#f8fafc', padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="card hover-lift" style={{ border: '2px solid #25D366', background: 'white', padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#166534', marginBottom: '15px' }}>
                            <Zap size={20} fill="#25D366" color="#25D366" /> COST & AVAILABILITY SUMMARY
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#1e293b', margin: 0 }}>
                            Hiring a certified electrician guarantees safety and quality. Saudi Home Experts provides 24/7 same-day service across the Kingdom with no hidden charges and fully transparent quotes.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Why Choose Saudi Home Experts?</h2>
                        <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '0 auto' }}>With over a decade of hands-on experience, we have refined our services to meet the highest standards expected in the Kingdom.</p>
                    </div>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#eff6ff', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <BadgeCheck size={40} color="var(--primary)" />
                            </div>
                            <h3>12+ Years Experience</h3>
                            <p style={{ color: 'var(--muted)' }}>We have navigated the electrical blueprints of thousands of villas and apartments since 2012.</p>
                        </div>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#ecfdf5', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <ThermometerSun size={40} color="#10b981" />
                            </div>
                            <h3>Climate-Specific Expertise</h3>
                            <p style={{ color: 'var(--muted)' }}>We specialize in summer load balancing for AC systems, preventing overloads during peak heatwaves.</p>
                        </div>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#fffbeb', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <ShieldAlert size={40} color="#f59e0b" />
                            </div>
                            <h3>Safety-First Philosophy</h3>
                            <p style={{ color: 'var(--muted)' }}>Our technicians follow strict safety protocols to ensure zero fire risk for your property.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Common Problems */}
            <section className="section animate-fade-in" style={{ background: '#f1f5f9' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
                        <div style={{ padding: '40px', background: 'white', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ marginBottom: '30px' }}>Real Solutions for Common Electrical Woes</h2>
                            <p style={{ marginBottom: '20px', lineHeight: 1.8 }}>Every homeowner eventually faces electrical challenges. From our experience, the local environment causes specific component failures that generic repairmen often miss.</p>
                            <ul style={{ display: 'grid', gap: '20px' }}>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <AlertTriangle color="red" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Tripping Main Breakers:</strong> Usually caused by unbalanced loads across phases as ACs work overtime. We rebalance your DB board for stability.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <ZapOff color="orange" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Burnt Insulation:</strong> Intense heat can melt low-quality wiring. We replace them with heat-resistant SASO cables.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <Sparkles color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Luxury Chandelier Failures:</strong> High-end fixtures often need specialized voltage stabilization to handle grid fluctuations.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>We don't just patch problems; we engineer them out.</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '30px' }}>Our diagnostic process is what sets us apart. We use thermal imaging cameras to spot "hot spots" in your walls before they turn into electrical fires.</p>
                            <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                BOOK A SAFETY AUDIT <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Section */}
            <section className="section animate-fade-in" id="pricing">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Transparent Pricing Strategy</h2>
                        <p style={{ color: 'var(--muted)' }}>No hidden fees. We provide a full quote before any work starts.</p>
                    </div>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Get a Custom Quote</h3>
                            <p style={{ lineHeight: 1.7, color: 'var(--muted)', marginBottom: '30px' }}>
                                We provide fair and detailed quotes after diagnosing the issue. This ensures we can dispatch an expert, licensed technician with a fully equipped workshop to your location immediately.
                            </p>
                            <a href={whatsappUrl} className="btn btn-accent" style={{ background: '#25D366', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                <WhatsAppIcon size={20} /> GET A QUOTE
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Process Section */}
            <section className="section animate-fade-in" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>How to Book an Electrician in 3 Simple Steps</h2>
                    <div className="grid grid-3" style={{ gap: '40px', textAlign: 'center' }}>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>1</div>
                            <h3>Instant Booking</h3>
                            <p style={{ opacity: 0.8 }}>Message us on WhatsApp with your location and a photo of the problem. We confirm your appointment quickly.</p>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>2</div>
                            <h3>Expert Diagnosis</h3>
                            <p style={{ opacity: 0.8 }}>Our expert electrician arrives, diagnoses the fault with modern tools, and gives you a fixed-price quote.</p>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>3</div>
                            <h3>Certified Fix</h3>
                            <p style={{ opacity: 0.8 }}>Work is completed using SASO parts. We test stability, provide a warranty, and leave your place tidy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQs Section */}
            <section id="faq" className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Expert Answers (FAQs)</h2>
                    <Accordion items={[
                        {
                            title: "Is there an extra charge for emergency calls after midnight?",
                            content: "We maintain fair pricing for after-hours calls. Our dispatch center handles midnight emergencies with standard expert fees to ensure accessibility."
                        },
                        {
                            title: "Do you install smart home switches?",
                            content: "Yes. We specialize in retrofitting traditional villas with smart switches and ensuring your electrical ecosystem is secure."
                        }
                    ]} />
                </div>
            </section>

            {/* 9. Testimonials */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Recommended by Your Neighbors</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        <div className="card hover-lift">
                            <div style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Star size={18} fill="currentColor" /> <span style={{ fontWeight: 600 }}>5.0 Rating</span>
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"The only electrician I trust. They fixed our complex lighting issue that others couldn't handle."</p>
                            <strong>- Resident</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* Major Service Areas */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Major Service Areas</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                        {[
                            { name: 'Riyadh', slug: 'electrician-riyadh' },
                            { name: 'Jeddah', slug: 'electrician-jeddah' },
                            { name: 'Dammam', slug: 'electrician-dammam' },
                            { name: 'Mecca', slug: 'electrician-mecca' }
                        ].map((city) => (
                            <Link key={city.name} href={`/${city.slug}`} style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border)', borderRadius: '10px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <MapPin size={14} color="var(--primary)" /> Electrician in {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Final CTAs */}
            <section className="section animate-fade-in" style={{ textAlign: 'center', background: 'var(--grad-primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Ready to Get Your Power Back?</h2>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: 0.9 }}>Available 24/7 across the Kingdom. Emergency dispatch active now.</p>
                    <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white', padding: '25px 60px', fontSize: '1.4rem' }}>
                            <WhatsAppIcon size={30} /> BOOK NOW
                        </a>
                        <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white', padding: '25px 60px', fontSize: '1.4rem' }}>
                            <Phone size={30} /> CALL HELP LINE
                        </a>
                    </div>
                </div>
            </section>

        </main >
    );
}
