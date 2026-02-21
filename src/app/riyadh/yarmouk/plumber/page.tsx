import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Link from "next/link";
import { Droplets, MapPin, CheckCircle, ShieldCheck, Star, BadgeCheck, ArrowRight, Clock, Wrench, Shield, Zap } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Professional Plumber in Al Yarmouk, Riyadh | 24/7 Leak Repair"
    },
    alternates: {
        canonical: '/riyadh/yarmouk/plumber/'
    },
    description: "Expert plumber in Al Yarmouk, Riyadh City. 24/7 emergency leak detection, water tank cleaning, pipe repair, and heater installation. High-quality Saudi Home Experts service.",
};

export default function PlumberYarmoukPage() {
    return (
        <main style={{ paddingTop: '100px', lineHeight: '1.8', color: '#1e293b' }}>


            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <Link href="/services/plumber">Plumber</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Yarmouk</span>
            </nav>

            <section className="section animate-fade-in" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#ecfdf5', color: '#059669', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
                                <BadgeCheck size={16} /> Certified & Licensed in Riyadh
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#0f172a' }}>
                                Licensed <span style={{ color: 'var(--primary)' }}>Plumber in Al Yarmouk</span>, Riyadh — Fast 24/7 Support
                            </h1>
                            <p style={{ fontSize: '1.3rem', color: '#444', marginBottom: '40px', maxWidth: '600px' }}>
                                Experiencing a maintenance emergency in Al Yarmouk? Saudi Home Experts provides elite-level plumber services for luxury villas and prestigious apartments close to the metro tracks and Prince Bandar Road. Join 15,000+ satisfied clients across Riyadh who trust us for safety and precision.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href="https://wa.me/966508901536?text=I%20need%20an%20expert%20plumber%20in%20Al Yarmouk%20Riyadh" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '18px 40px', fontSize: '1.1rem', boxShadow: '0 10px 15px -3px rgba(34, 197, 94, 0.4)' }}>
                                    <WhatsAppIcon size={22} /> Instant WhatsApp Quote
                                </a>
                                <a href="#quote" className="btn" style={{ border: '2px solid var(--border)', padding: '18px 40px' }}>Book Site Inspection</a>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ background: 'white', padding: '50px', borderRadius: '40px', border: '1px solid var(--border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}>
                                <ShieldCheck size={60} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>Saudi Home Experts Quality Guarantee</h3>
                                <p style={{ fontSize: '1.05rem', color: '#64748b', marginBottom: '25px' }}>
                                    Our Plumber experts in Al Yarmouk are rigorously vetted. We handle specialized electrical architectures of high-end Riyadh villas with absolute professionalism.
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '20px' }}>
                                    <Star size={24} fill="currentColor" />
                                    <span style={{ fontWeight: 800, fontSize: '1.4rem', color: '#0f172a' }}>5.0 Rating in Al Yarmouk</span>
                                </div>
                                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                                    {/* INTERNAL LINK 1: HOME */}
                                    <Link href="/" style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        Browse Best Home Maintenance in Riyadh <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE SERVICE GRID - 2000 WORDS CONTENT INFRASTRUCTURE */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Comprehensive Plumber Solutions for Al Yarmouk Homes</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>From emergency short circuits to complete villa security overhauls, our specialized district teams are equipped with the latest diagnostic tools to serve the Al Yarmouk community 24/7.</p>
                        {/* INTERNAL LINK 2: HOME */}
                        <p style={{ marginTop: '10px' }}>Part of our <Link href="/" style={{ color: 'var(--primary)', fontWeight: 600 }}>Saudi Home Experts Maintenance Network</Link>.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Leak Detection using Ultrasonic Sensors</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Leak Detection using Ultrasonic Sensors in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Water Tank Cleaning & Sanitization</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Water Tank Cleaning & Sanitization in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Water Heater Repair & Installation</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Water Heater Repair & Installation in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Pipe Burst & Emergency Repair</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Pipe Burst & Emergency Repair in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Fixture & Faucet Replacement</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Fixture & Faucet Replacement in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Blocked Drain & Sewer Cleaning</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Blocked Drain & Sewer Cleaning in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Pressure Pump Maintenance</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Pressure Pump Maintenance in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Toilet & Bathroom Renovation</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Toilet & Bathroom Renovation in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>External Pipe Rerouting</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of External Pipe Rerouting in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Kitchen Plumbing Upgrades</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Kitchen Plumbing Upgrades in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Irrigation System Installation</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Irrigation System Installation in the Al Yarmouk area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. LOCALIZED CONTEXT SECTION */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ background: '#0f172a', color: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 30px 60px -15px rgba(15,23,42,0.3)' }}>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '25px' }}>Trusted District Coverage in Al Yarmouk, Riyadh City</h2>
                            <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '30px' }}>
                                Riyadh's northern and eastern expansion areas like Al Yarmouk require a maintenance team that understands modern villa architecture. Whether you reside in the newer developments close to the metro tracks and Prince Bandar Road, or the established residential blocks, our technicians are locals who know the fastest routes to your doorstep.
                            </p>
                            <div className="grid grid-2" style={{ gap: '40px' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Riyadh Safety Standards</h4>
                                    <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>We exclusively use approved SASO parts. For every electrical or plumbing job in Al Yarmouk, we provide a digital safety report and a workload balancing analysis to prevent future outages.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Rapid District Dispatch</h4>
                                    <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>Our dispatch center near Northern Ring Road ensures that an expert plumber in Al Yarmouk is never more than 40 minutes away from any emergency call.</p>
                                </div>
                            </div>
                            {/* LONG-TAIL INTERNAL LINKS (5) */}
                            <div style={{ marginTop: '40px', borderTop: '1px dotted rgba(255,255,255,0.2)', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                                <Link href="/riyadh/narjis/intercom" style={{ color: 'var(--primary)', fontWeight: 600 }}>Emergency intercom in Al Narjis</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/yasmin/electrician" style={{ color: 'var(--primary)', fontWeight: 600 }}>Reliable electrician for Al Yasmin Villas</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/sahafa/plumber" style={{ color: 'var(--primary)', fontWeight: 600 }}>Best plumber in Al Sahafah</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/falah/intercom" style={{ color: 'var(--primary)', fontWeight: 600 }}>Verified intercom Al Falah</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/granada/electrician" style={{ color: 'var(--primary)', fontWeight: 600 }}>Top-rated electrician Unit in Granada</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ACCORDION FAQ - MOBILE OPTIMIZED */}
            <section className="section animate-fade-in" style={{ background: '#fdfdfd' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>PAA (People Also Ask) for Al Yarmouk</h2>
                        <p style={{ color: '#64748b' }}>Expert answers to community questions regarding home maintenance in Riyadh.</p>
                    </div>
                    <div style={{ display: 'grid', gap: '16px' }}>
                        {[
                            { q: "How quickly can an Saudi Home Experts plumber arrive in Al Yarmouk?", a: "With our dedicated response unit stationed near Al Yarmouk, we typically reach your villa within 35 to 45 minutes for emergency calls." },
                            { q: "Do you handle specialized electrical loads for larger villas?", a: "Yes, we specialize in high-capacity DB balancing and villa rewiring specifically tailored for large residential properties close to the metro tracks and Prince Bandar Road." },
                            { q: "Are your technicians licensed by Saudi authorities?", a: "Absolutely. Every plumber and electrician on our team is fully licensed and follows SASO (Saudi Standards, Metrology and Quality Organization) protocols." },
                            { q: "Can I get a detailed estimate before any work starts?", a: "Transparency is our priority. Our 'Get Quote' button allows you to share photos of the issue, and we provide a fixed estimate before physical arrival." },
                            { q: "What landmarks do you cover in the Al Yarmouk area?", a: "We provide full coverage across Al Yarmouk, including all streets near residential complexes and commercial zones close to the metro tracks and Prince Bandar Road." },
                            { q: "Do you offer emergency support on weekends and holidays?", a: "Yes, Saudi Home Experts operates 24/7, 365 days a year to ensure your home's vital systems never fail you." },
                            { q: "Is any warranty provided for the repair work?", a: "We offer a standard 30-day workmanship warranty. If the same issue persists, our team will fix it at zero additional cost." },
                            { q: "Do you handle smart home and intercom integrations?", a: "Yes, we have specialists for video doorbells, smart lighting, and centralized villa security systems." },
                            { q: "How can I pay for the services in Riyadh?", a: "We accept all major credit/debit cards, bank transfers, and cash for your convenience." },
                            { q: "Why is Saudi Home Experts considered the best in Al Yarmouk?", a: "Our combination of local district knowledge, SASO-certified parts, and a customer-first rapid arrival policy makes us the top-rated choice in Riyadh." }
                        ].map((item, i) => (
                            <details key={i} style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '20px', cursor: 'pointer', background: 'white' }}>
                                <summary style={{ fontWeight: 700, fontSize: '1.15rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                                    {item.q} <PlusIcon />
                                </summary>
                                <div style={{ marginTop: '16px', color: '#444', fontSize: '1.05rem', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FINAL CALL TO ACTION */}
            <section className="section animate-fade-in" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div style={{ background: 'var(--primary)', color: 'white', padding: '80px 40px', borderRadius: '40px', position: 'relative', overflow: 'hidden' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Professional Plumber in Al Yarmouk</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '40px', position: 'relative', zIndex: 1 }}>Don't let a small leak or a short circuit become a major expensive headache. Safe, clean, and reliable maintenance is a click away.</p>
                        <a href="https://wa.me/966508901536?text=I%20need%20an%20expert%20plumber%20in%20Al Yarmouk%20Riyadh" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#22c55e', color: 'white', border: 'none', padding: '20px 60px', fontSize: '1.4rem', borderRadius: '100px', fontWeight: 700, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)', position: 'relative', zIndex: 1 }}>
                            <WhatsAppIcon size={24} /> Chat with Saudi Home Experts Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

function PlusIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s ease' }}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    );
}
