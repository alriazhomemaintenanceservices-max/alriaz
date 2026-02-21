import Link from "next/link";
import {
    Droplets,
    Waves,
    ShieldCheck,
    Sparkles,
    Phone,
    CheckCircle,
    AlertTriangle,
    ThumbsUp,
    Microscope,
    Home,
    Zap,
    Activity
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Water Tank Cleaning Riyadh | Municipality Approved Disinfection"
    },
    description: "Professional water tank cleaning and disinfection services in Riyadh. Remove sludge, bacteria, and algae. Municipality approved sanitization.",
    alternates: {
        canonical: '/services/water-tank-cleaning/'
    },
};

export default function WaterTankPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "Hello, I would like to book a Water Tank Cleaning service in Riyadh.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main style={{ background: '#FCFCFD', color: 'var(--foreground)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Water Tank Cleaning</span>
            </nav>

            {/* 1. HERO SECTION */}
            <section style={{
                background: '#fff',
                padding: '0 0 60px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '50px' }}>
                        <div>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: 1.1,
                                fontWeight: 800,
                                color: '#1E293B',
                                marginBottom: '20px'
                            }}>
                                Water Tank Cleaning in Riyadh
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '30px' }}>
                                Ensure your family's safety with medical-grade water tank disinfection and sludge removal.
                            </p>
                            <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '40px', lineHeight: 1.6 }}>
                                Contaminated water causes 80% of household diseases. Our municipality-approved process removes algae, bacteria, and years of sediment buildup from your underground and overhead tanks.
                            </p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <a href="tel:+966508901536" className="btn" style={{ background: 'var(--secondary)', color: 'white', border: 'none', padding: '15px 30px', fontWeight: 700, borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Phone size={18} /> Call Us
                                </a>
                                <a href={whatsappUrl} className="btn" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '15px 30px', fontWeight: 700, borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <WhatsAppIcon size={18} /> WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            {/* Placeholder for video/image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: '#f1f5f9',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                {/* <img
                                    src="https://images.unsplash.com/photo-1538350863004-954f9a066487?q=80&w=2070&auto=format&fit=crop"
                                    alt="Water Tank Cleaning"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                /> */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'rgba(255,255,255,0.9)',
                                    padding: '20px 40px',
                                    borderRadius: '10px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>PURE WATER</div>
                                    <div style={{ color: 'var(--primary)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700 }}>GUARANTEED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INTRODUCTION SECTION */}
            <section style={{ padding: '60px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ maxWidth: '900px', margin: '0 auto 30px', fontSize: '2rem', color: '#334155' }}>
                        Is your tap water really clean?
                    </h2>
                    <p style={{ maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.8, color: '#64748B' }}>
                        In Riyadh's hot climate, water tanks are breeding grounds for bacteria, algae, and mosquitoes. Over time, sand and sediment from the municipality supply settle at the bottom, creating a sludge layer that contaminates fresh water. Saudi Home Experts uses high-pressure rotary jets and safe chlorine-based disinfection agents to sanitize every inch of your tank walls. We don't just clean; we sterilize.
                    </p>
                    <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                        Get A Free Inspection
                    </Link>
                </div>
            </section>

            {/* 3. CAROUSEL SERVICES */}
            <section style={{ padding: '60px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <h2 style={{ color: '#334155', marginBottom: '40px', fontSize: '1.8rem' }}>Our Tank Cleaning Process</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: "Sludge Extraction" },
                            { title: "High-Pressure Scrub" },
                            { title: "UV/Chlorine Sanitization" }
                        ].map((service, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <div style={{ width: '100%', height: '100%', background: '#e2e8f0' }}></div>
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ fontSize: '1.1rem', color: '#1E293B', fontWeight: 600 }}>{service.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CONSEQUENCES BLOCK */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.8rem', color: '#334155', marginBottom: '30px' }}>Risks of Neglected Water Tanks</h2>
                    <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '40px' }}>
                        Sediment accumulation is not just a hygiene issue; it is a health crisis waiting to happen. Unclean tanks can harbor E. coli, Legionella, and other harmful pathogens. This leads to stomach infections, hair loss due to hard water deposits, and skin irritation. Moreover, the sludge can clog your home's piping system, destroying expensive pressure pumps and water heaters.
                    </p>

                    <div style={{ background: 'rgba(225, 29, 72, 0.05)', border: '1px solid var(--border)', borderRadius: '10px', padding: '30px', textAlign: 'center', marginBottom: '60px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                            "Clean water ensures softer hair, healthier skin, and a longer lifespan for your plumbing appliances!"
                        </p>
                    </div>

                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#334155', marginBottom: '50px' }}>Signs Your Tank Needs Cleaning</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
                        {[
                            { title: "Bad Odor / Smell", icon: <AlertTriangle size={50} color="var(--primary)" /> },
                            { title: "Discolored Water", icon: <Droplets size={50} color="var(--primary)" /> },
                            { title: "Sand in Taps", icon: <Waves size={50} color="var(--primary)" /> },
                            { title: "Skin Irritation", icon: <Activity size={50} color="var(--primary)" /> },
                        ].map((sign, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                                {sign.icon}
                                <span style={{ fontWeight: 600, color: '#475569' }}>{sign.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Benefits Section */}
            <section style={{ padding: '80px 0', textAlign: 'center', background: '#F8FAFC' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '60px' }}>Benefits of Professional Tank Sterilization</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '50px' }}>
                        {[
                            { title: "Safe Drinking Quality", icon: <ShieldCheck size={60} color="var(--primary)" /> },
                            { title: "No Algae Growth", icon: <Microscope size={60} color="var(--primary)" /> },
                            { title: "Protect Pipes/Heaters", icon: <Home size={60} color="var(--primary)" /> },
                            { title: "Municipality Compliant", icon: <CheckCircle size={60} color="var(--primary)" /> },
                        ].map((benefit, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                                <div style={{ marginBottom: '10px' }}>{benefit.icon}</div>
                                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155' }}>{benefit.title}</h4>
                            </div>
                        ))}
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                        Request A Quote
                    </Link>
                </div>
            </section>

            {/* 6. Professional Service Block */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '20px' }}>Certified by Riyadh Municipality</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                Saudi Home Experts follows the strict health and safety guidelines set by the Saudi Ministry of Health. Our 6-step cleaning process ensures zero residue of toxic chemicals while guaranteeing 99.9% elimination of bacteria. We use food-grade cleaning agents standard for potable water systems.
                            </p>
                            <Link href="/contact" className="btn" style={{ border: '2px solid var(--primary)', color: 'var(--primary)', padding: '12px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                                VIEW CERTIFICATIONS
                            </Link>
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <div style={{ width: '100%', height: '400px', background: '#e2e8f0' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section style={{ padding: '80px 0', background: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '50px' }}>FAQs</h2>
                    <div className="grid grid-2" style={{ gap: '20px' }}>
                        {[
                            "How long does the tank cleaning process take?",
                            "Do you use chemicals that are safe for drinking water?",
                            "How often should I clean my underground tank?",
                            "Is the tank usable immediately after cleaning?"
                        ].map((faq, i) => (
                            <div key={i} style={{ padding: '20px', background: '#F1F5F9', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                <span style={{ fontWeight: 600, color: '#334155' }}>{faq}</span>
                                <span style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 900 }}>+</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. BOTTOM BANNER */}
            <section style={{ padding: '60px 0', background: 'var(--secondary)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '10px' }}>Healthy Home, Healthy Life</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Clean water is the foundation of a healthy home. Book your tank inspection today.</p>
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '15px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none', border: '1px solid var(--primary)' }}>
                        Book Inspection
                    </Link>
                </div>
            </section>

        </main>
    );
}
