import React from 'react';
import Link from 'next/link';
import { Zap, Droplets, ShieldCheck, ArrowRight, CheckCircle, Clock, MapPin, Wrench, Shield, Smartphone, Star, BadgeCheck, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "All Home Maintenance Services | Electrician, Plumber & Intercom Riyadh"
    },
    alternates: {
        canonical: '/services'
    },
    description: "Expert Professional Electrician, Plumber, and Intercom installation services in Riyadh. We also provide comprehensive General Maintenance for all home needs.",
};

const SERVICES = [
    {
        title: "Electrical Services",
        description: "Professional electrical solutions for Riyadh's luxury villas and commercial properties. We specialize in complex troubleshooting and safety-first repairs.",
        features: [
            "24/7 Emergency Short Circuit Fix",
            "CB & DB Box Load Balancing",
            "Luxury Chandelier Installation",
            "Smart Lighting & Dimmer Setup",
            "SASO-Certified Safety Audits"
        ],
        icon: <Zap size={32} />,
        href: "/services/electrician",
        color: "#3b82f6",
        bg: "#eff6ff"
    },
    {
        title: "Plumbing Services",
        description: "Expert plumbing and leak detection services across all Riyadh districts. We use ultrasonic technology to find and fix leaks with zero damage.",
        features: [
            "Ultrasonic Leak Detection",
            "Water Tank Deep Cleaning",
            "Pressure Pump Install & Repair",
            "Ariston/Milano Heater Support",
            "Central Filtration Systems"
        ],
        icon: <Droplets size={32} />,
        href: "/services/plumber",
        color: "#06b6d4",
        bg: "#ecfeff"
    },
    {
        title: "Intercom & Security",
        description: "Modernize your home security with high-definition video entry and smart access controls integrated with your smartphone.",
        features: [
            "4K Video Doorbell Install",
            "Multi-Unit Access Control",
            "Smartphone App Integration",
            "Biometric Door Lock Setup",
            "Intercom Repair & Maintenance"
        ],
        icon: <ShieldCheck size={32} />,
        href: "/services/intercom",
        color: "#6366f1",
        bg: "#eef2ff"
    },
    {
        title: "General Maintenance",
        description: "Comprehensive handyman services for all your home repair needs. From painting to carpentry, we handle it all.",
        features: [
            "Painting & Drywall Repair",
            "Furniture Assembly",
            "Door & Window Fixes",
            "General Handyman Tasks",
            "Emergency Repairs"
        ],
        icon: <Wrench size={32} />,
        href: "/services",
        color: "#14b8a6",
        bg: "#f0fdfa"
    }
];

export default function ServicesPage() {
    const whatsappNumber = "966508901536";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Al%20Riaz,%20I%20am%20interested%20in%20your%20services.`;

    return (
        <main style={{ paddingTop: '80px', background: '#fff' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Services</span>
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
                                COMPREHENSIVE SOLUTIONS
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                                letterSpacing: '-1.5px'
                            }}>
                                Expert <span style={{ color: 'var(--primary)' }}>Home Maintenance</span> <br />
                                & Repairs in Riyadh
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '40px', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '700px' }}>
                                Your trusted partner for specialized electrical, plumbing, and security solutions. Licensed technicians available 24/7 across the capital.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> BOOK A SERVICE NOW
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    CALL CUSTOMER CARE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section style={{ background: '#f8fafc', padding: '30px 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="grid grid-4" style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <BadgeCheck size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>SASO Certified</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <Clock size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>24/7 Emergency</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <Shield size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>30-Day Warranty</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <MapPin size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>All Districts</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services list */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div style={{ display: 'grid', gap: '80px' }}>
                        {SERVICES.map((service, index) => (
                            <div key={index} className="grid grid-2" style={{ alignItems: 'center', gap: '60px', direction: index % 2 === 1 ? 'rtl' : 'ltr' }}>
                                <div style={{ direction: 'ltr' }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: service.bg, color: service.color, borderRadius: '12px', marginBottom: '25px', fontWeight: 800 }}>
                                        {service.icon} {service.title.split(' ')[0].toUpperCase()}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{service.title}</h2>
                                    <p style={{ fontSize: '1.2rem', color: 'var(--muted)', marginBottom: '30px', lineHeight: 1.6 }}>
                                        {service.description}
                                    </p>
                                    <ul style={{ display: 'grid', gap: '15px', marginBottom: '40px' }}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                                                <CheckCircle size={20} color="#22c55e" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={service.href} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 35px' }}>
                                        VIEW FULL DETAILS <ArrowRight size={20} />
                                    </Link>
                                </div>
                                <div style={{ background: 'var(--card)', padding: '50px', borderRadius: '40px', border: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: service.color, opacity: 0.05, borderRadius: '50%' }}></div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', color: service.color }}>PROFESSIONAL CHOICE</div>
                                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--muted)', marginBottom: '30px' }}>
                                        "Our specialized teams use the latest diagnostics to ensure your {service.title.toLowerCase()} are safe, efficient, and long-lasting."
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', color: 'var(--accent)', marginBottom: '10px' }}>
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <div style={{ fontWeight: 800 }}>5.0 Rating in Riyadh</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section animate-fade-in" style={{ background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '750px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Don't Wait for a Maintenance Disaster</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>
                            Whether it's a flickering light, a hidden leak, or a security upgrade, get an instant quote and same-day support today.
                        </p>
                        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white' }}>
                                <WhatsAppIcon size={24} /> MESSAGE US ON WHATSAPP
                            </a>
                            <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white' }}>
                                CALL HELP LINE
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
