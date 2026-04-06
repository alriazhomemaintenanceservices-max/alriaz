"use client";

import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function MobileActionCenter() {
    const [isVisible, setIsVisible] = useState(false);
    const whatsappNumber = "966508901536";
    const phoneNum = "+966508901536";

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Only show on small screens
    return (
        <div style={{
            position: 'fixed',
            bottom: isVisible ? '0' : '-100px',
            left: '0',
            right: '0',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            padding: '12px 16px env(safe-area-inset-bottom)',
            display: 'flex',
            gap: '12px',
            zIndex: 9998,
            transition: 'bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '0 -10px 25px rgba(0,0,0,0.05)',
        }} className="mobile-only-flex">
            <style jsx>{`
                @media (min-width: 768px) {
                    .mobile-only-flex {
                        display: none !important;
                    }
                }
            `}</style>
            
            <a href={`tel:${phoneNum}`} style={{
                flex: 1,
                background: '#1e293b',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem'
            }}>
                <Phone size={18} fill="currentColor" /> CALL NOW
            </a>
            
            <a href={`https://wa.me/${whatsappNumber}?text=Emergency Repair Riyadh`} target="_blank" rel="noopener noreferrer" style={{
                flex: 1,
                background: '#25D366',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem'
            }}>
                <WhatsAppIcon size={20} /> BOOK NOW </a>
        </div>
    );
}
