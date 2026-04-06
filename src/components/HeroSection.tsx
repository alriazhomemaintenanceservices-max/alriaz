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
                        #1 MAINTENANCE SERVICE IN SAUDI ARABIA
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '25px',
                        fontWeight: 900,
                        color: '#1e293b',
                        letterSpacing: '-2px'
                    }}>
                        Residential & Commercial<br />
                        Maintenance in Saudi Arabia
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.8, maxWidth: '750px', margin: '0 auto 40px' }}>
                        Trusted by 5,000+ villas and businesses across the Kingdom. We provide <strong>45-minute arrival & same-day resolution</strong> for electrical failures, plumbing bursts, and security system repairs. <strong>Licensed technicians for homes, offices, and retail.</strong>
                    </p>
                    <div className="hero-btn-group" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/966508901536?text=Emergency%20Repair%20Service%20Booking" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', borderColor: '#25D366', padding: '16px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700, flex: '1 1 200px', maxWidth: '280px', textAlign: 'center' }}>
                           BOOK NOW
                        </a>
                        <a href="tel:+966508901536" className="btn" style={{ background: '#1e293b', color: 'white', border: 'none', padding: '16px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700, flex: '1 1 200px', maxWidth: '280px', textAlign: 'center' }}>
                            CALL 050 890 1536
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
