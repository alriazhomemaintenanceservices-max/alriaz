"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-pattern" style={{
            position: 'relative',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        background: 'rgba(225, 29, 72, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: '30px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        marginBottom: '30px',
                        border: '1px solid rgba(225, 29, 72, 0.2)'
                    }}>
                        #1 MAINTENANCE SERVICE IN RIYADH
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '25px',
                        fontWeight: 800,
                        color: '#1e293b',
                        letterSpacing: '-2px'
                    }}>
                        Professional <span style={{ color: 'var(--primary)' }}>Electrician</span>, <br />
                        Plumber & Intercom <br />
                        Services in Riyadh
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.8 }}>
                        Your trusted partner for all home maintenance needs. From extensive electrical repairs and plumbing fixes to smart intercom installations. We handle every kind of household work with professionalism.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link href="/services" className="btn btn-primary" style={{ padding: '16px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700 }}>
                            Explore Services
                        </Link>
                        <Link href="/contact" className="btn" style={{ background: 'white', color: '#334155', border: '1px solid #cbd5e1', padding: '16px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700 }}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
