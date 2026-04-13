'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Home, Users, Mail, Wrench } from 'lucide-react';
import Button from '@/components/shared/Button';
import LanguageToggle from '@/components/shared/LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';
import { trackPhoneClick } from '@/lib/tracking';

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-300)', zIndex: 20 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px' }}>

        {/* Logo + KSA badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/" style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary-blue)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            {t('saudi-home-experts')}
          </Link>
          <span className="badge badge-gold" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>{t('saudi-badge')}</span>
        </div>

        {/* Desktop Nav - ONLY on desktop */}
        <nav className="mobile-hidden" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gray-600)', textDecoration: 'none' }}>{t('breadcrumb-home')}</Link>
          <Link href="/services/" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gray-600)', textDecoration: 'none' }}>{t('nav-services')}</Link>
          <Link href="/about-us/" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gray-600)', textDecoration: 'none' }}>{t('nav-about')}</Link>
          <Link href="/contact/" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gray-600)', textDecoration: 'none' }}>{t('nav-contact')}</Link>
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LanguageToggle />

          {/* Call button - desktop only */}
          <Button href="tel:0508901536" variant="emergency" size="small" icon={<Phone size={16} />} onClick={() => trackPhoneClick('header')} className="mobile-hidden">
            {t('call-now')}
          </Button>

          {/* Hamburger - mobile only */}
          <button
            className="desktop-hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background: 'none', border: '1px solid var(--gray-300)', borderRadius: '8px', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark)' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="desktop-hidden" style={{ borderTop: '1px solid var(--gray-300)', background: 'var(--white)', padding: '8px 16px 12px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[
              { href: '/', icon: <Home size={18} />, label: t('breadcrumb-home') },
              { href: '/services/', icon: <Wrench size={18} />, label: t('nav-services') },
              { href: '/about-us/', icon: <Users size={18} />, label: t('nav-about') },
              { href: '/contact/', icon: <Mail size={18} />, label: t('nav-contact') },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '1rem' }}>
                <span style={{ color: 'var(--primary-blue)' }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--gray-200)' }}>
            <Button href="tel:0508901536" variant="emergency" size="large" icon={<Phone size={18} />} onClick={() => { trackPhoneClick('header-menu'); setMenuOpen(false); }} fullWidth>
              {t('contact-call-btn')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
