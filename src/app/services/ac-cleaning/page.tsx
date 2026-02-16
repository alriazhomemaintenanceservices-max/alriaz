import Link from "next/link";
import {
    Wind,
    Zap,
    MapPin,
    ArrowRight,
    ShieldCheck,
    Clock,
    CheckCircle,
    Star,
    Phone,
    Droplets,
    Snowflake,
    Fan,
    ThermometerSun,
    Home,
    Sofa,
    Activity
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "AC Cleaning Services Riyadh | Eco-Friendly Air Conditioning Maintenance"
    },
    description: "Enhance your indoor air quality with Al Riaz's premium AC cleaning services in Riyadh. Eco-friendly, deep cleaning for ducts and coils. Book a consultation today.",
    alternates: {
        canonical: '/services/ac-cleaning'
    },
};

export default function AcCleaningPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "Hello, I would like to book an AC Cleaning service in Riyadh.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main style={{ paddingTop: '100px', background: '#FCFCFD', color: 'var(--foreground)' }}>

            {/* Breadcrumbs - Primary only */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>AC Cleaning</span>
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
                            {/* Secondary breadcrumb removed as per request */}
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: 1.1,
                                fontWeight: 800,
                                color: '#1E293B',
                                marginBottom: '20px'
                            }}>
                                AC Cleaning Services in Saudi Arabia
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '30px' }}>
                                Breathe cleaner air in your living space with Pure Air® AC cleaning services.
                            </p>
                            <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '40px', lineHeight: 1.6 }}>
                                Experience premium AC cleaning services in KSA with the Al Riaz Standard. Be sure to improve the performance of AC units, reduce AC bills, and more.
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
                                <img
                                    src="https://images.unsplash.com/photo-1621905235277-22649a379201?q=80&w=2070&auto=format&fit=crop"
                                    alt="AC Cleaning"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
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
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>AL RIAZ</div>
                                    <div style={{ color: 'var(--primary)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700 }}>HOME MAINTENANCE</div>
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
                        Enhance indoor air quality with eco-friendly AC cleaning services in Saudi Arabia
                    </h2>
                    <p style={{ maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.8, color: '#64748B' }}>
                        When it comes to air conditioning cleaning services, you wouldn’t want to hire just any service provider. You need reliable AC maintenance and cleaning services that provide you the most reliability and efficiency. Clean and healthy indoor air is essential for your health and well-being. Our Safe AC Cleaning Technology cleans your AC significantly to reduce triggers like dust, bacteria and microbes using only eco-friendly products and techniques. Our specialized AC cleaning and disinfection service uses advanced methods ensuring your AC units are counting fresh healthy air instantly. With regular maintenance and professional deep cleaning, including coil and duct cleaning, Al Riaz extends the lifespan of your AC units components, ultimately reducing the need for frequent AC replacements and repairs.
                    </p>
                    <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                        Request A Consultation
                    </Link>
                </div>
            </section>

            {/* 3. CAROUSEL SERVICES */}
            <section style={{ padding: '60px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <h2 style={{ color: '#334155', marginBottom: '40px', fontSize: '1.8rem' }}>Our AC Cleaning Services</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: "AC Duct Cleaning", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070" },
                            { title: "AC Coil Cleaning", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070" },
                            { title: "Full AC System Cleaning", img: "https://images.unsplash.com/photo-1621905235277-22649a379201?auto=format&fit=crop&q=80&w=2070" }
                        ].map((service, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <h2 style={{ fontSize: '1.8rem', color: '#334155', marginBottom: '30px' }}>The consequences of neglecting AC cleaning service in KSA</h2>
                    <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '40px' }}>
                        There are numerous consequences of neglecting regular AC service in Saudi Arabia, especially considering the region's climate. Without routine cleaning, dust, mold, and bacteria can accumulate within the system. This accumulation not only reduces the efficiency of the AC unit but also circulates contaminated air throughout your home, potentially triggering allergies and respiratory issues. Furthermore, a dirty AC unit has to work harder to maintain cool temperatures, leading to higher energy consumption and increased electricity bills. Neglect can also result in frequent breakdowns and a shortened lifespan for your cooling system, ultimately costing you more in repairs and replacements.
                    </p>

                    <div style={{ background: 'rgba(225, 29, 72, 0.05)', border: '1px solid #FFEDD5', borderRadius: '10px', padding: '30px', textAlign: 'center', marginBottom: '60px' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                            "A cleaner air conditioner can cool your room up to 2X faster, immediately decreasing energy costs and strain on the system!"
                        </p>
                    </div>

                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#334155', marginBottom: '50px' }}>Signs you need to clean your AC</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
                        {[
                            { title: "Mold growth", icon: <ThermometerSun size={50} color="var(--primary)" /> },
                            { title: "Reduced AC cooling", icon: <Snowflake size={50} color="var(--primary)" /> },
                            { title: "Allergy triggers", icon: <Activity size={50} color="var(--primary)" /> },
                            { title: "Foul smells", icon: <Wind size={50} color="var(--primary)" /> },
                        ].map((sign, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                                {sign.icon}
                                <span style={{ fontWeight: 600, color: '#475569' }}>{sign.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. IMPORTANCE TEXT */}
            <section style={{ padding: '40px 0' }}>
                <div className="container">
                    <h3 style={{ fontSize: '1.5rem', color: '#334155', marginBottom: '20px', fontWeight: 700 }}>The importance of cleaning your AC system</h3>
                    <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '20px' }}>
                        In Saudi Arabia’s climate characterized by extreme heat and dust, regular maintenance of air conditioning units is crucial. Continuous operation in such conditions leads to the accumulation of dust and debris within the AC systems, resulting in reduced efficiency, unpleasant odors, and higher chances of breakdowns. Moreover, a dirty AC unit contributes to poor indoor air quality, which can exacerbate respiratory issues. To combat these challenges, professional AC cleaning services are essential. At Al Riaz Home Maintenance, we specialize in comprehensive AC cleaning services designed to ensure optimal air quality and comfort. In addition to our standard cleaning, we offer specialized disinfection contracts to provide comprehensive protection and quality.
                    </p>
                    <p style={{ lineHeight: 1.8, color: '#64748B' }}>
                        As part of our mission to enhance health and wellness via effective indoor environmental quality management, we provide AC duct cleaning and disinfection treatments to improve the air quality in your home and improve overall wellbeing.
                    </p>
                </div>
            </section>

            {/* 6. BENEFITS SECTION */}
            <section style={{ padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '60px' }}>Benefits of AC cleaning services</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '50px' }}>
                        {[
                            { title: "Improved indoor air quality", icon: <Home size={60} color="var(--primary)" /> },
                            { title: "Odour elimination", icon: <Wind size={60} color="var(--primary)" /> },
                            { title: "Improved energy levels", icon: <Activity size={60} color="var(--primary)" /> },
                            { title: "Reduced energy bills", icon: <Zap size={60} color="var(--primary)" /> },
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

            {/* 7. PROFESSIONAL SERVICE VIDEO */}
            <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '20px' }}>Professional AC cleaning services in KSA</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                The Al Riaz team offers the best AC cleaning services in Saudi Arabia. We use the latest cleaning and sanitation equipment to ensure you can feel the difference. We have been one of the leading providers of home wellness services in KSA since 2012. Call us now to schedule your eco-friendly air duct cleaning & sanitation services.
                            </p>
                            <Link href="/contact" className="btn" style={{ border: '2px solid var(--primary)', color: 'var(--primary)', padding: '12px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                                KNOW MORE NOW
                            </Link>
                        </div>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1581094794329-cd1361ddee38?auto=format&fit=crop&q=80&w=2070" style={{ width: '100%', display: 'block' }} alt="Technician working" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ SECTION */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '50px' }}>FAQs</h2>
                    <div className="grid grid-2" style={{ gap: '20px' }}>
                        {[
                            "How often should I clean my AC filters in Saudi Arabia?",
                            "What are the benefits of professional AC cleaning?",
                            "Can dirty AC cause health problems / allergies / coughs?",
                            "What equipment do you use for AC cleaning services?"
                        ].map((faq, i) => (
                            <div key={i} style={{ padding: '20px', background: '#F1F5F9', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                <span style={{ fontWeight: 600, color: '#334155' }}>{faq}</span>
                                <span style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 900 }}>+</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. BOTTOM BANNER */}
            <section style={{ padding: '60px 0', background: 'var(--secondary)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '10px' }}>Creating healthy Living</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Explore our premium home wellness services to help you sleep better, breathe easier, and live healthier.</p>
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '15px 30px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none', border: '1px solid var(--primary)' }}>
                        Premium Service Check
                    </Link>
                </div>
            </section>

        </main>
    );
}
