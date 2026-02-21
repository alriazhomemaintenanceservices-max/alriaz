import Link from "next/link";
import {
    Award,
    Users,
    ShieldCheck,
    Clock,
    MapPin,
    Phone,
    CheckCircle,
    Smile,
    Briefcase
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "About Us | Saudi Home Experts Riyadh"
    },
    description: "Learn about Saudi Home Experts, Riyadh's trusted partner for AC, plumbing, and electrical services since 2012. Our mission is quality, reliability, and customer satisfaction.",
    alternates: {
        canonical: '/about-us/'
    },
};

export default function AboutUsPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "Hello, I would like to know more about Saudi Home Experts services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main style={{ background: '#FCFCFD', color: 'var(--foreground)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>About Us</span>
            </nav>

            {/* 1. HERO SECTION */}
            <section style={{
                background: '#fff',
                padding: '0 0 60px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: 1.1,
                                fontWeight: 800,
                                color: '#1E293B',
                                marginBottom: '20px'
                            }}>
                                Building Trust in Riyadh Since 2012
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '30px' }}>
                                Saudi Home Experts is more than just a service provider; we are your partners in creating a safe, comfortable, and well-maintained home.
                            </p>
                            <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '40px', lineHeight: 1.6 }}>
                                Founded with a vision to professionalize the home maintenance industry in Saudi Arabia, we have grown from a small team of technicians to a leading service provider covering all major districts of Riyadh. Our commitment to punctuality, transparency, and technical excellence sets us apart.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <a href="tel:+966508901536" className="btn" style={{ background: 'var(--secondary)', color: 'white', border: 'none', padding: '15px 30px', fontWeight: 700, borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Phone size={18} /> Call Us
                                </a>
                                <a href={whatsappUrl} className="btn" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '15px 30px', fontWeight: 700, borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <WhatsAppIcon size={18} /> Chat With Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OUR MISSION / VISION */}
            <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '30px' }}>Our Mission</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                To deliver premium quality home maintenance services that Saudi families can rely on. We aim to eliminate the stress of home repairs by providing vetted experts, guaranteed workmanship, and seamless customer service.
                            </p>
                            <ul style={{ display: 'grid', gap: '20px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '50%' }}><CheckCircle size={20} color="white" /></div>
                                    <span style={{ fontWeight: 600, color: '#334155' }}>Safety Standards (SASO Compliant)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '50%' }}><CheckCircle size={20} color="white" /></div>
                                    <span style={{ fontWeight: 600, color: '#334155' }}>Transparent, Honest Dealings</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '50%' }}><CheckCircle size={20} color="white" /></div>
                                    <span style={{ fontWeight: 600, color: '#334155' }}>Respect for Your Home & Privacy</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '30px' }}>Our Vision</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                To become the most trusted household name in Riyadh for technical services, setting the benchmark for professionalism and technical expertise in the Kingdom's residential maintenance sector.
                            </p>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <Users size={30} color="var(--primary)" style={{ marginBottom: '10px' }} />
                                    <h4 style={{ fontWeight: 700, marginBottom: '5px' }}>50+ Experts</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Skilled Technicians</p>
                                </div>
                                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <Smile size={30} color="var(--primary)" style={{ marginBottom: '10px' }} />
                                    <h4 style={{ fontWeight: 700, marginBottom: '5px' }}>5,000+ Happy</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Residential Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES SECTION */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '20px' }}>Our Core Values</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 60px', color: '#64748B' }}>
                        We operate on a set of fundamental principles that guide every interaction we have with our clients.
                    </p>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: "Integrity", icon: <ShieldCheck size={40} color="var(--primary)" />, desc: "We are honest in our assessments. If a repair isn't needed, we won't sell it." },
                            { title: "Punctuality", icon: <Clock size={40} color="var(--primary)" />, desc: "We value your time. Our technicians arrive within the scheduled window, every time." },
                            { title: "Excellence", icon: <Award size={40} color="var(--primary)" />, desc: "We employ senior technicians who diagnose issues correctly the first time." },
                        ].map((value, i) => (
                            <div key={i} className="card hover-lift" style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                                <div style={{ background: 'rgba(225, 29, 72, 0.05)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                    {value.icon}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#1E293B' }}>{value.title}</h3>
                                <p style={{ color: '#64748B', lineHeight: 1.6 }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TEAM / EXPERTISE */}
            <section style={{ padding: '80px 0', background: 'var(--secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '20px' }}>Not Just "Handymen"</h2>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '30px' }}>We Are Certified Technicians</h3>
                            <p style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
                                Unlike freelance laborers found on the street, Saudi Home Experts technicians are full-time employees who undergo rigorous training. They are background-checked, uniformed, and equipped with professional-grade tools to handle complex electrical, plumbing, and HVAC systems safely.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px' }}>
                                    <h4 style={{ color: 'white', marginBottom: '5px' }}>Background Checked</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>For your family's safety</p>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px' }}>
                                    <h4 style={{ color: 'white', marginBottom: '5px' }}>Fully Insured</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Liability protection included</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LOCATIONS */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '20px' }}>Areas We Serve in Riyadh</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 50px', color: '#64748B' }}>
                        Our mobile workshops are stationed across key districts to ensure rapid response times, usually within 60 minutes for emergencies.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                        {['Qurtubah', 'Ishbiliyah', 'Al Yarmouk', 'Al Narjis', 'Al Yasmin', 'Al Sahafah', 'Al Falah', 'Granada', 'Al Rabee', 'Al Nada'].map((area, i) => (
                            <Link key={i} href={`/locations/${area.toLowerCase().replace(' ', '-')}`} style={{
                                padding: '10px 25px',
                                background: '#F1F5F9',
                                borderRadius: '30px',
                                color: '#334155',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                transition: 'background 0.2s'
                            }}>
                                <MapPin size={16} color="var(--primary)" /> {area}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. BOTTOM BANNER */}
            <section style={{ padding: '80px 0', background: '#fff', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#1E293B', marginBottom: '20px' }}>Experience the Saudi Home Experts Difference</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: '#64748B', fontSize: '1.2rem' }}>
                        Ready to upgrade your home maintenance experience? Contact our friendly team today.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link href="/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                            Book a Service
                        </Link>
                        <Link href="/services" className="btn" style={{ background: 'white', color: '#334155', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none', border: '1px solid #cbd5e1' }}>
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
