import Link from "next/link";
import {
    Armchair,
    Sparkles,
    ShieldCheck,
    Phone,
    CheckCircle,
    AlertTriangle,
    Sofa,
    Dog,
    Coffee,
    Palette,
    Wind
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Furniture & Sofa Cleaning Riyadh | Upholstery Shampoo"
    },
    description: "Professional furniture cleaning in Riyadh. Sofa shampooing, carpet steam cleaning, and upholstery stain removal. Revitalize your living room today.",
    alternates: {
        canonical: '/services/furniture-cleaning/'
    },
};

export default function FurnitureCleaningPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "Hello, I would like to book a Furniture Cleaning service in Riyadh.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main style={{ background: '#FCFCFD', color: 'var(--foreground)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Furniture Cleaning</span>
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
                                Furniture & Upholstery Cleaning in Riyadh
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '30px' }}>
                                Restore the beauty and comfort of your sofas, carpets, and armchairs.
                            </p>
                            <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '40px', lineHeight: 1.6 }}>
                                Dust, spills, and everyday use can make your furniture look dull and tired. Saudi Home Experts uses advanced shampooing and steam extraction techniques to lift deep stains and brighten fabrics without damaging delicate fibers.
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
                                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
                                    alt="Furniture Cleaning"
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
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>BRAND NEW</div>
                                    <div style={{ color: 'var(--primary)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700 }}>LOOK & FEEL</div>
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
                        Don't replace your furniture, revive it.
                    </h2>
                    <p style={{ maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.8, color: '#64748B' }}>
                        Quality furniture is an investment. Replacing a sofa set or Persian carpet is expensive. Often, what looks like worn-out fabric is just a layer of trapped dust and oil. Our professional cleaning service removes this layer, restoring the vibrant colors and soft texture of your upholstery for a fraction of the cost of buying new.
                    </p>
                    <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                        Get A Quote
                    </Link>
                </div>
            </section>

            {/* 3. CAROUSEL SERVICES */}
            <section style={{ padding: '60px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <h2 style={{ color: '#334155', marginBottom: '40px', fontSize: '1.8rem' }}>Furniture Care Services</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: "Sofa Shampooing" },
                            { title: "Carpet Steam Clean" },
                            { title: "Curtain Cleaning" }
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
                    <h2 style={{ fontSize: '1.8rem', color: '#334155', marginBottom: '30px' }}>Why DIY Cleaning Often Fails</h2>
                    <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '40px' }}>
                        Using supermarket sprays or excessive water can watermark fabrics, cause shrinkage, or lead to mildew growth inside the foam. Professional extraction prevents over-wetting, ensuring deep cleaning without the risk of ruining your precious items.
                    </p>

                    <div style={{ background: 'rgba(225, 29, 72, 0.05)', border: '1px solid var(--border)', borderRadius: '10px', padding: '30px', textAlign: 'center', marginBottom: '60px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                            "Professional steam cleaning removes 99% of pet dander and odors that vacuuming misses."
                        </p>
                    </div>

                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#334155', marginBottom: '50px' }}>Signs Your Furniture Needs Help</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
                        {[
                            { title: "Coffee/Food Stains", icon: <Coffee size={50} color="var(--primary)" /> },
                            { title: "Pet Hair/Odors", icon: <Dog size={50} color="var(--primary)" /> },
                            { title: "Faded Colors", icon: <Palette size={50} color="var(--primary)" /> },
                            { title: "Dust Allergies", icon: <Wind size={50} color="var(--primary)" /> },
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
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '60px' }}>The "New Furniture" Effect</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '50px' }}>
                        {[
                            { title: "Brighter Colors", icon: <Sparkles size={60} color="var(--primary)" /> },
                            { title: "Soft Texture", icon: <Sofa size={60} color="var(--primary)" /> },
                            { title: "No Odors", icon: <Wind size={60} color="var(--primary)" /> },
                            { title: "Hygienic Clean", icon: <ShieldCheck size={60} color="var(--primary)" /> },
                        ].map((benefit, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                                <div style={{ marginBottom: '10px' }}>{benefit.icon}</div>
                                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155' }}>{benefit.title}</h4>
                            </div>
                        ))}
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                        Restore Your Furniture
                    </Link>
                </div>
            </section>

            {/* 6. Professional Service Block */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '20px' }}>Safe for All Fabrics</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                Whether you have delicate silk curtains, velvet sofas, or durable synthetic carpets, our technicians are trained to identify the fabric type and choose the appropriate cleaning method (steam, dry foam, or solvent) to prevent damage.
                            </p>
                            <Link href="/contact" className="btn" style={{ border: '2px solid var(--primary)', color: 'var(--primary)', padding: '12px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                                SEE OUR WORK
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
                            "Will the cleaning remove ink or wine stains?",
                            "How long until I can sit on the sofa?",
                            "Do you clean office chairs and commercial furniture?",
                            "Is the shampoo safe for pets and children?"
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
                        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '10px' }}>Refresh Your Home</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>A clean living room brings peace of mind. Let us handle the details.</p>
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '15px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none', border: '1px solid var(--primary)' }}>
                        Schedule Visit
                    </Link>
                </div>
            </section>

        </main>
    );
}
