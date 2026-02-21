import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Link from "next/link";
import { Zap, MapPin, CheckCircle, ShieldCheck, Star, BadgeCheck, ArrowRight, Clock, Wrench, Shield, Droplets } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Licensed Electrician in Al Narjis, Riyadh | 24/7 Professional Repair"
    },
    alternates: {
        canonical: '/riyadh/narjis/electrician/'
    },
    description: "Certified electrician in Al Narjis, Riyadh City. 24/7 emergency electrical fixes, villa rewiring, DB box maintenance, and lighting installation. Saudi Home Experts #1 choice. Book now!",
};

export default function ElectricianNarjisPage() {
    return (
        <main style={{ paddingTop: '100px', lineHeight: '1.8', color: '#1e293b' }}>


            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <Link href="/services/electrician">Electrician</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Narjis</span>
            </nav>

            <section className="section animate-fade-in" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#ecfdf5', color: '#059669', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
                                <BadgeCheck size={16} /> Certified & Licensed in Riyadh
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#0f172a' }}>
                                Licensed <span style={{ color: 'var(--primary)' }}>Electrician in Al Narjis</span>, Riyadh — Fast 24/7 Support
                            </h1>
                            <p style={{ fontSize: '1.3rem', color: '#444', marginBottom: '40px', maxWidth: '600px' }}>
                                Experiencing a maintenance emergency in Al Narjis? Saudi Home Experts provides elite-level electrician services for luxury villas and prestigious apartments near King Salman Road and the North Expansion zones. Join 15,000+ satisfied clients across Riyadh who trust us for safety and precision.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href="https://wa.me/966508901536?text=I%20need%20an%20expert%20electrician%20in%20Al Narjis%20Riyadh" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '18px 40px', fontSize: '1.1rem', boxShadow: '0 10px 15px -3px rgba(34, 197, 94, 0.4)' }}>
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
                                    Our Electrician experts in Al Narjis are rigorously vetted. We handle specialized electrical architectures of high-end Riyadh villas with absolute professionalism.
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '20px' }}>
                                    <Star size={24} fill="currentColor" />
                                    <span style={{ fontWeight: 800, fontSize: '1.4rem', color: '#0f172a' }}>5.0 Rating in Al Narjis</span>
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
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Comprehensive Electrician Solutions for Al Narjis Homes</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>From emergency short circuits to complete villa security overhauls, our specialized district teams are equipped with the latest diagnostic tools to serve the Al Narjis community 24/7.</p>
                        {/* INTERNAL LINK 2: HOME */}
                        <p style={{ marginTop: '10px' }}>Part of our <Link href="/" style={{ color: 'var(--primary)', fontWeight: 600 }}>Saudi Home Experts Maintenance Network</Link>.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Short Circuit Location & Repair</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Short Circuit Location & Repair in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Distribution Board (DB) Balancing</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Distribution Board (DB) Balancing in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Luxury Chandelier & Fixture Installation</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Luxury Chandelier & Fixture Installation in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Villa Rewiring & Safety Audits</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Villa Rewiring & Safety Audits in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Pool & Garden Lighting Systems</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Pool & Garden Lighting Systems in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Smart Switch & System Configuration</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Smart Switch & System Configuration in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Surge Protection Installation</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Surge Protection Installation in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Emergency Power Supply Maintenance</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Emergency Power Supply Maintenance in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>AC Breaker & Wiring Upgrades</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of AC Breaker & Wiring Upgrades in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Socket & Switch Replacement</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Socket & Switch Replacement in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                        <div className="card hover-lift" style={{ padding: '30px', background: 'white', borderRadius: '24px', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <CheckCircle size={24} color="var(--primary)" />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Industrial Electrical Troubleshooting</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Professional handling of Industrial Electrical Troubleshooting in the Al Narjis area, ensuring full compliance with Saudi Electrical & Building codes (SASO).</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. LOCALIZED CONTEXT SECTION */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ background: '#0f172a', color: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 30px 60px -15px rgba(15,23,42,0.3)' }}>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '25px' }}>Trusted District Coverage in Al Narjis, Riyadh City</h2>
                            <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '30px' }}>
                                Riyadh's northern and eastern expansion areas like Al Narjis require a maintenance team that understands modern villa architecture. Whether you reside in the newer developments near King Salman Road and the North Expansion zones, or the established residential blocks, our technicians are locals who know the fastest routes to your doorstep.
                            </p>
                            <div className="grid grid-2" style={{ gap: '40px' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Riyadh Safety Standards</h4>
                                    <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>We exclusively use approved SASO parts. For every electrical or plumbing job in Al Narjis, we provide a digital safety report and a workload balancing analysis to prevent future outages.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Rapid District Dispatch</h4>
                                    <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>Our dispatch center near Northern Ring Road ensures that an expert electrician in Al Narjis is never more than 40 minutes away from any emergency call.</p>
                                </div>
                            </div>
                            {/* LONG-TAIL INTERNAL LINKS (5) */}
                            <div style={{ marginTop: '40px', borderTop: '1px dotted rgba(255,255,255,0.2)', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                                <Link href="/riyadh/yasmin/plumber" style={{ color: 'var(--primary)', fontWeight: 600 }}>Emergency plumber in Al Yasmin</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/sahafa/intercom" style={{ color: 'var(--primary)', fontWeight: 600 }}>Reliable intercom for Al Sahafah Villas</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/falah/electrician" style={{ color: 'var(--primary)', fontWeight: 600 }}>Best electrician in Al Falah</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/granada/plumber" style={{ color: 'var(--primary)', fontWeight: 600 }}>Verified plumber Granada</Link>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <Link href="/riyadh/rabee/intercom" style={{ color: 'var(--primary)', fontWeight: 600 }}>Top-rated intercom Unit in Al Rabee</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ACCORDION FAQ - MOBILE OPTIMIZED */}
            <section className="section animate-fade-in" style={{ background: '#fdfdfd' }}>
                <div className="container" style={{ maxWidth: '850px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>PAA (People Also Ask) for Al Narjis</h2>
                        <p style={{ color: '#64748b' }}>Expert answers to community questions regarding home maintenance in Riyadh.</p>
                    </div>
                    <div style={{ display: 'grid', gap: '16px' }}>
                        {[
                            { q: "How quickly can an Saudi Home Experts electrician arrive in Al Narjis?", a: "With our dedicated response unit stationed near Al Narjis, we typically reach your villa within 35 to 45 minutes for emergency calls." },
                            { q: "Do you handle specialized electrical loads for larger villas?", a: "Yes, we specialize in high-capacity DB balancing and villa rewiring specifically tailored for large residential properties near King Salman Road and the North Expansion zones." },
                            { q: "Are your technicians licensed by Saudi authorities?", a: "Absolutely. Every plumber and electrician on our team is fully licensed and follows SASO (Saudi Standards, Metrology and Quality Organization) protocols." },
                            { q: "Can I get a detailed estimate before any work starts?", a: "Transparency is our priority. Our 'Get Quote' button allows you to share photos of the issue, and we provide a fixed estimate before physical arrival." },
                            { q: "What landmarks do you cover in the Al Narjis area?", a: "We provide full coverage across Al Narjis, including all streets near residential complexes and commercial zones near King Salman Road and the North Expansion zones." },
                            { q: "Do you offer emergency support on weekends and holidays?", a: "Yes, Saudi Home Experts operates 24/7, 365 days a year to ensure your home's vital systems never fail you." },
                            { q: "Is any warranty provided for the repair work?", a: "We offer a standard 30-day workmanship warranty. If the same issue persists, our team will fix it at zero additional cost." },
                            { q: "Do you handle smart home and intercom integrations?", a: "Yes, we have specialists for video doorbells, smart lighting, and centralized villa security systems." },
                            { q: "How can I pay for the services in Riyadh?", a: "We accept all major credit/debit cards, bank transfers, and cash for your convenience." },
                            { q: "Why is Saudi Home Experts considered the best in Al Narjis?", a: "Our combination of local district knowledge, SASO-certified parts, and a customer-first rapid arrival policy makes us the top-rated choice in Riyadh." }
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
                        <h2 style={{ fontSize: '3rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Professional Electrician in Al Narjis</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '40px', position: 'relative', zIndex: 1 }}>Don't let a small leak or a short circuit become a major expensive headache. Safe, clean, and reliable maintenance is a click away.</p>
                        <a href="https://wa.me/966508901536?text=I%20need%20an%20expert%20electrician%20in%20Al Narjis%20Riyadh" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#22c55e', color: 'white', border: 'none', padding: '20px 60px', fontSize: '1.4rem', borderRadius: '100px', fontWeight: 700, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)', position: 'relative', zIndex: 1 }}>
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
