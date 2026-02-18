'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, X, Menu, Zap, Droplets, ShieldCheck, Wrench, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/#about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const SERVICE_LINKS = [
    { href: '/services/electrician', label: 'Electrician', icon: <Zap size={16} /> },
    { href: '/services/plumber', label: 'Plumbing', icon: <Droplets size={16} /> },
    { href: '/services/intercom', label: 'Intercom', icon: <ShieldCheck size={16} /> },
    { href: '/services', label: 'General Maintenance', icon: <Wrench size={16} /> },
];

const whatsappUrl = `https://wa.me/966508901536?text=Hello%20Al%20Riaz,%20I%20need%20a%20technician.`;

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Mobile nav bar: WhatsApp + Hamburger */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>

                {/* WhatsApp button with label */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp us"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        height: '40px',
                        padding: '0 14px',
                        background: '#25D366',
                        borderRadius: '10px',
                        flexShrink: 0,
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        letterSpacing: '0.2px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(37,211,102,0.4)',
                        textDecoration: 'none',
                    }}
                >
                    <WhatsAppIcon size={18} color="#ffffff" />
                    WhatsApp
                </a>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '40px',
                        height: '40px',
                        background: isOpen ? 'var(--primary)' : '#f1f5f9',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        color: isOpen ? 'white' : 'var(--secondary)',
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                    }}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.4)',
                        zIndex: 998,
                        top: '65px',
                    }}
                />
            )}

            {/* Slide-down Menu */}
            <div
                style={{
                    position: 'fixed',
                    top: '65px',
                    left: 0,
                    right: 0,
                    background: 'white',
                    zIndex: 999,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-110%)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    maxHeight: 'calc(100vh - 65px)',
                    overflowY: 'auto',
                    borderTop: '2px solid var(--primary)',
                }}
            >
                <div style={{ padding: '20px 16px 30px' }}>

                    {/* Main Nav Links */}
                    <nav style={{ marginBottom: '24px' }}>
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    display: 'block',
                                    padding: '14px 0',
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: pathname === link.href ? 'var(--primary)' : 'var(--secondary)',
                                    borderBottom: '1px solid var(--border)',
                                    letterSpacing: '-0.3px',
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Services Quick Links */}
                    <div style={{ marginBottom: '24px' }}>
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            letterSpacing: '2px',
                            color: 'var(--muted)',
                            marginBottom: '12px',
                            textTransform: 'uppercase',
                        }}>
                            Our Services
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            {SERVICE_LINKS.map((s) => (
                                <Link
                                    key={s.href}
                                    href={s.href}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '12px',
                                        background: '#f8fafc',
                                        borderRadius: '10px',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        color: 'var(--secondary)',
                                        border: '1px solid var(--border)',
                                    }}
                                >
                                    <span style={{ color: 'var(--primary)' }}>{s.icon}</span>
                                    {s.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                padding: '15px',
                                background: '#25D366',
                                color: 'white',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '1rem',
                            }}
                        >
                            <WhatsAppIcon size={20} /> WhatsApp Us
                        </a>
                        <a
                            href="tel:+966508901536"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                padding: '15px',
                                background: 'var(--secondary)',
                                color: 'white',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '1rem',
                            }}
                        >
                            <Phone size={18} /> +966 50 890 1536
                        </a>
                    </div>

                    {/* Location */}
                    <div style={{
                        marginTop: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--muted)',
                        fontSize: '0.85rem',
                    }}>
                        <MapPin size={14} color="var(--primary)" />
                        Serving all Riyadh districts — 24/7
                    </div>
                </div>
            </div>
        </>
    );
}
