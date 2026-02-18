import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, Map, Star } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Us | Al Riaz Home Maintenance Services Riyadh"
    },
    alternates: {
        canonical: '/contact'
    },
    description: "Contact Al Riaz Home Maintenance Services for 24/7 electrician, plumbing, and intercom services in Riyadh. Quick WhatsApp booking and free estimates.",
};

export default function ContactPage() {
    const whatsappNumber = "966508901536";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello, I need a technician in Riyadh.`;

    return (
        <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Contact</span>
            </nav>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Get in Touch</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted)', fontSize: '1.1rem' }}>
                        Fastest way to reach us is via WhatsApp. Our dispatch team is available 24/7 for emergency repairs across all Riyadh districts.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '60px', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ marginBottom: '30px' }}>Contact Information</h2>
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ padding: '15px', background: 'var(--card)', borderRadius: '15px', color: 'var(--primary)' }}>
                                    <WhatsAppIcon size={30} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>WhatsApp (24/7)</h4>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary)' }}>
                                        +966 50 890 1536
                                    </a>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Instant response for emergencies.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ padding: '15px', background: 'var(--card)', borderRadius: '15px', color: 'var(--primary)' }}>
                                    <MapPin size={30} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Service Area</h4>
                                    <p style={{ fontSize: '1.1rem' }}>Riyadh, Saudi Arabia</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Serving: Qurtubah, Ishbiliyah, Al Yarmouk, Al Narjis, Al Yasmin, Al Sahafah, Al Falah, Granada, Al Rabee, Al Nada.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ padding: '15px', background: 'var(--card)', borderRadius: '15px', color: 'var(--primary)' }}>
                                    <Clock size={30} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Working Hours</h4>
                                    <p style={{ fontSize: '1.1rem' }}>Open 24 Hours / 7 Days</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Priority for emergency electrical and plumbing leaks.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '50px', padding: '30px', background: 'var(--grad-primary)', borderRadius: '30px', color: 'white' }}>
                            <h3 style={{ marginBottom: '15px' }}>Emergency?</h3>
                            <p style={{ marginBottom: '20px', opacity: 0.9 }}>Send your location on WhatsApp and we will dispatch the nearest technician immediately.</p>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ background: '#25D366', color: 'white', border: 'none', marginTop: '8px' }}>
                                MESSAGE ON WHATSAPP
                            </a>
                        </div>
                    </div>

                    <div style={{ background: 'var(--card)', padding: '30px', borderRadius: '24px', border: '1px solid var(--border)' }}>
                        <h2 style={{ marginBottom: '30px' }}>Request a Free Estimate</h2>
                        <form style={{ display: 'grid', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Your Name</label>
                                <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number</label>
                                <input type="tel" placeholder="+966" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Service Needed</label>
                                <select style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'white' }}>
                                    <option>Electrician</option>
                                    <option>Plumber</option>
                                    <option>Intercom System</option>
                                    <option>General Home Maintenance</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Location (District)</label>
                                <input type="text" placeholder="e.g. Qurtubah" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Description</label>
                                <textarea placeholder="Tell us about the problem..." style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'white', minHeight: '100px' }}></textarea>
                            </div>
                            <button type="button" className="btn btn-primary" style={{ marginTop: '10px' }}>Send Request</button>
                        </form>
                    </div>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--border)' }}>
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '20px' }}>Share Your Experience</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '20px' }}>
                                Satisfied with our Riyadh maintenance service? Your feedback helps other neighbors in districts like Al Yasmin and Qurtubah find reliable help.
                            </p>
                            <div style={{ display: 'flex', gap: '5px', color: 'var(--accent)', marginBottom: '20px' }}>
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <a href="https://g.page/r/your-google-review-link" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '2px solid var(--secondary)', background: 'transparent', color: 'var(--secondary)', display: 'inline-flex' }}>
                                REVIEW US ON GOOGLE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
