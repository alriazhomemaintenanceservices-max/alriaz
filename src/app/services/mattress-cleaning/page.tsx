import Link from "next/link";
import {
    BedDouble,
    Sparkles,
    ShieldCheck,
    Phone,
    CheckCircle,
    AlertTriangle,
    Sun,
    Flower2,
    Bug,
    Mic,
    Scan,
    Wind
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Professional Mattress Cleaning Riyadh | Deep Steam Sanitization"
    },
    description: "Expert mattress cleaning in Riyadh. Remove dust mites, stains, and allergens with our deep steam and UV sanitization process. Book now for better sleep.",
    alternates: {
        canonical: '/services/mattress-cleaning/'
    },
};

export default function MattressCleaningPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "Hello, I would like to book a Mattress Cleaning service in Riyadh.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main style={{ background: '#FCFCFD', color: 'var(--foreground)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Mattress Cleaning</span>
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
                                Mattress Deep Cleaning in Riyadh
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '30px' }}>
                                Sleep better and healthier. Eliminate 99.9% of dust mites, bacteria, and allergens from your bed.
                            </p>
                            <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '40px', lineHeight: 1.6 }}>
                                We spend a third of our lives on our mattress. Using industrial-grade steam extraction and UV-C light technology, Saudi Home Experts restores your mattress to a medically sanitized condition, free from sweat stains and microscopic pests.
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
                                    src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2070&auto=format&fit=crop"
                                    alt="Mattress Cleaning"
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
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>HYGENIC</div>
                                    <div style={{ color: 'var(--primary)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700 }}>SLEEP</div>
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
                        When was the last time you cleaned your mattress?
                    </h2>
                    <p style={{ maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.8, color: '#64748B' }}>
                        Vacuuming alone isn't enough. Over time, your mattress absorbs liters of sweat, dead skin cells, and harbors millions of dust mites. These invisible intruders are a leading cause of asthma and sleep disruptions. Our 3-stage deep cleaning process extracts deep-seated dirt that household vacuums can't reach, leaving your mattress fresh, dry, and sanitized within hours.
                    </p>
                    <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                        Book Deep Cleaning
                    </Link>
                </div>
            </section>

            {/* 3. CAROUSEL SERVICES */}
            <section style={{ padding: '60px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <h2 style={{ color: '#334155', marginBottom: '40px', fontSize: '1.8rem' }}>Our Cleaning Technologies</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: "Steam Extraction" },
                            { title: "Stain Removal" },
                            { title: "UV-C Sanitization" }
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
                    <h2 style={{ fontSize: '1.8rem', color: '#334155', marginBottom: '30px' }}>The Hidden Dangers in Your Bed</h2>
                    <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '40px' }}>
                        An uncleaned mattress can contain up to 2 million dust mites. Their waste particles are potent allergens that trigger asthma attacks, eczema, and chronic rhinitis. Additionally, moisture from sweat creates an ideal environment for mold and fungal spores, which can lead to respiratory infections.
                    </p>

                    <div style={{ background: 'rgba(225, 29, 72, 0.05)', border: '1px solid var(--border)', borderRadius: '10px', padding: '30px', textAlign: 'center', marginBottom: '60px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                            "Deep cleaning your mattress can reduce bedroom allergens by up to 90%, significantly improving sleep quality for asthma sufferers."
                        </p>
                    </div>

                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#334155', marginBottom: '50px' }}>Signs Its Time to Clean</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
                        {[
                            { title: "Waking up Sneezing", icon: <AlertTriangle size={50} color="var(--primary)" /> },
                            { title: "Yellow Stains", icon: <Scan size={50} color="var(--primary)" /> },
                            { title: "Itchy Skin", icon: <Bug size={50} color="var(--primary)" /> },
                            { title: "Musty Odor", icon: <Wind size={50} color="var(--primary)" /> },
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
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '60px' }}>Benefits of Professional Sanitization</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '50px' }}>
                        {[
                            { title: "Allergy Relief", icon: <Flower2 size={60} color="var(--primary)" /> },
                            { title: "Stain Removal", icon: <Sparkles size={60} color="var(--primary)" /> },
                            { title: "Extends Mattress Life", icon: <ShieldCheck size={60} color="var(--primary)" /> },
                            { title: "Fresh Scent", icon: <Sun size={60} color="var(--primary)" /> },
                        ].map((benefit, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                                <div style={{ marginBottom: '10px' }}>{benefit.icon}</div>
                                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155' }}>{benefit.title}</h4>
                            </div>
                        ))}
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                        Schedule Sanitization
                    </Link>
                </div>
            </section>

            {/* 6. Professional Service Block */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '20px' }}>Dry in 2-4 Hours</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                Our low-moisture steam technology ensures your mattress is dry and ready to sleep on the same day. We use eco-friendly, non-toxic shampoos that are safe for babies and pets. No harsh chemical residues, just fresh, clean fabric.
                            </p>
                            <Link href="/contact" className="btn" style={{ border: '2px solid var(--primary)', color: 'var(--primary)', padding: '12px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                                LEARN ABOUT THE PROCESS
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
                            "Can you remove old yellow sweat stains?",
                            "Is the cleaning safe for memory foam mattresses?",
                            "How long does it take to dry?",
                            "Do you clean bed headboards and frames too?"
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
                        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '10px' }}>Wake Up Refreshed</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>A clean bed is the secret to a good day. Restore your mattress today.</p>
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '15px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none', border: '1px solid var(--primary)' }}>
                        Book Now
                    </Link>
                </div>
            </section>

        </main>
    );
}
