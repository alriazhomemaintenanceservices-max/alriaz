import Link from "next/link";
import { Droplets, MapPin, CheckCircle, ShieldCheck, Phone, BadgeCheck, Clock, ArrowRight, Languages } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Plumber in Qurtubah | Licensed Plumber Service",
    description: "Expert plumber in Qurtubah. Specialized in leak detection, pipe repair & tank cleaning. 24/7 service, fair pricing, and professional techniques.",
    alternates: {
        canonical: "https://saudihomeexperts.com/plumber-qurtubah",
        languages: {
            'ar-SA': "https://saudihomeexperts.com/ar/plumber-qurtubah"
        }
    }
};

export default function PlumberQurtubahPage() {
    const whatsappUrl = "https://wa.me/966508901536?text=I%20need%20Plumber%20service%20in%20Qurtubah";

    return (
        <main style={{ paddingTop: '100px', lineHeight: '1.8', color: '#1e293b' }}>
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
                <div><Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Plumber Qurtubah</span></div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <Link href="/plumber-qurtubah" style={{ fontWeight: 800, color: 'var(--primary)', borderBottom: '2px solid' }}>English</Link>
                    <Link href="/ar/plumber-qurtubah" style={{ fontWeight: 500 }}>العربية</Link>
                </div>
            </nav>

            <section className="section animate-fade-in" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#ecfdf5', color: '#059669', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
                                <BadgeCheck size={16} /> Licensed Service in Qurtubah
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#0f172a' }}>
                                Expert Plumber in Qurtubah
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '40px', maxWidth: '600px' }}>
                                Looking for a professional <strong>plumber</strong> in Qurtubah? Saudi Home Experts provides top-rated maintenance for villas, apartments, and commercial properties.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '20px 40px', fontSize: '1.2rem', fontWeight: 700 }}>
                                    <WhatsAppIcon size={24} style={{ marginRight: '10px' }} /> BOOK NOW
                                </a>
                                <a href="tel:+966508901536" className="btn" style={{ border: '2px solid var(--border)', padding: '20px 40px', fontSize: '1.2rem', fontWeight: 700 }}>
                                    <Phone size={24} style={{ marginRight: '10px' }} /> CALL EXPERT
                                </a>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }} className="hide-mobile">
                             <div style={{ background: '#f8fafc', padding: '50px', borderRadius: '40px', border: '1px solid var(--border)' }}>
                                <Droplets size={80} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Professional Plumber Care</h2>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px', color: '#475569', textAlign: 'left' }}>
                                    <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}><Clock size={24} color="var(--primary)" /> <div>Fast arrival across Qurtubah districts.</div></li>
                                    <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}><ShieldCheck size={24} color="var(--primary)" /> <div>SASO Approved Parts Used.</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#0f172a', color: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Working Process</h2>
                    </div>
                    <div className="grid grid-4" style={{ gap: '30px' }}>
                        
                        <div key={0} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>STEP 01</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>On-Site Diagnosis</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>Our mobile workshop arrives within 45 mins.</p>
                        </div>
                        <div key={1} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>STEP 02</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>Technical Consultation</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>We provide a transparent, fixed-price quote.</p>
                        </div>
                        <div key={2} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>STEP 03</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>Certified Repair</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>Repairs are done using SASO-approved parts.</p>
                        </div>
                        <div key={3} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>STEP 04</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>Warranty & Support</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>All repairs come with a satisfaction guarantee.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Comprehensive Solutions in Qurtubah</h2>
                    <div className="grid grid-2" style={{ gap: '40px' }}>
                        
                        <div className="card" style={{ padding: '40px', background: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0f172a' }}>Emergency Plumbing & Sewer Services</h3>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Fast Leak Detection
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Burst Pipe Repair
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Sewage Network Unblocking
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ padding: '40px', background: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0f172a' }}>Residential & Commercial Solutions</h3>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Water Tank Cleaning
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Bathroom & Kitchen Plumbing
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Sanitary Ware Installation
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ padding: '40px', background: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0f172a' }}>Riyadh Specialist Services</h3>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> South/North Riyadh Plumber
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Mobile Service Vehicles
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> Original Spare Parts Replacement
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Districts We Cover in Qurtubah</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                        <span style={{ background: 'white', border: '1px solid #e2e8f0', padding: '12px 30px', borderRadius: '50px', fontWeight: 600 }}>Qurtubah District</span>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>FAQ</h2>
                    <div style={{ display: 'grid', gap: '30px' }}>
                        
                        <div style={{ background: '#f8fafc', padding: '35px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#0f172a', fontWeight: 800 }}>How much does a plumber cost in Qurtubah?</h3>
                            <p style={{ color: '#444', fontSize: '1.1rem' }}>Most repairs in Qurtubah start from SAR 150. Transparent pricing based on parts and labor.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Get Expert Help Today</h2>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: 'white', color: 'var(--primary)', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 800, borderRadius: '50px' }}>
                            WhatsApp
                        </a>
                        <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 800, borderRadius: '50px' }}>
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
