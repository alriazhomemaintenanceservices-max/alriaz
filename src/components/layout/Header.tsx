'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Home, Users, Mail, Wrench, Newspaper, HelpCircle } from 'lucide-react';
import Button from '@/components/shared/Button';
import Logo from '@/components/shared/Logo';
import LanguageToggle from '@/components/shared/LanguageToggle';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { trackPhoneClick } from '@/lib/tracking';

const PHONE = '+966508901536';
const PHONE_DISPLAY = '050 890 1536';

export default function Header() {
  const { t, language } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAr = language === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', icon: <Home size={18} />, label: t('breadcrumb-home') },
    { href: '/services/', icon: <Wrench size={18} />, label: t('nav-services') },
    { href: isAr ? '/blog/' : '/en/blog/', icon: <Newspaper size={18} />, label: isAr ? 'المدونة' : 'Blog' },
    { href: '/faq/', icon: <HelpCircle size={18} />, label: isAr ? 'الأسئلة الشائعة' : 'FAQ' },
    { href: '/about-us/', icon: <Users size={18} />, label: t('nav-about') },
    { href: '/contact/', icon: <Mail size={18} />, label: t('nav-contact') },
  ];

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      {/* Utility top bar */}
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          <span className="header-topbar-info">
            <span className="dot" />
            {t('available-247-prayers')}
          </span>
          <span className="header-topbar-actions">
            <a
              href={`tel:${PHONE}`}
              className="header-topbar-phone"
              onClick={() => trackPhoneClick('topbar')}
            >
              <Phone size={14} />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <LanguageToggle dark />
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="header-main">
        <div className="container header-main-inner">
          <Link href="/" aria-label={t('saudi-home-experts')} style={{ textDecoration: 'none' }}>
            <Logo size={44} />
          </Link>

          <nav className="header-nav mobile-hidden">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="header-nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Button
              href={`tel:${PHONE}`}
              variant="emergency"
              size="medium"
              icon={<Phone size={18} />}
              onClick={() => trackPhoneClick('header')}
              className="mobile-hidden"
            >
              {isAr ? 'اتصل الآن' : 'Call Now'}
            </Button>

            {/* Compact phone (mobile only) */}
            <a
              href={`tel:${PHONE}`}
              className="header-icon-btn header-icon-phone desktop-hidden"
              aria-label={isAr ? 'اتصل الآن' : 'Call Now'}
              onClick={() => trackPhoneClick('header-mobile')}
            >
              <Phone size={20} />
            </a>

            <button
              className="header-menu-btn desktop-hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="header-mobile-menu desktop-hidden">
          <nav>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="header-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="ico">{l.icon}</span>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="header-mobile-cta">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2px' }}>
              <LanguageToggle />
            </div>
            <Button
              href={`tel:${PHONE}`}
              variant="emergency"
              size="large"
              icon={<Phone size={18} />}
              onClick={() => { trackPhoneClick('header-menu'); setMenuOpen(false); }}
              fullWidth
            >
              {t('contact-call-btn')}
            </Button>
            <Button
              href={`https://wa.me/966508901536?text=${encodeURIComponent(t('whatsapp-photo-message'))}`}
              variant="whatsapp"
              size="large"
              external
              icon={<WhatsAppSvg size={18} />}
              onClick={() => setMenuOpen(false)}
              fullWidth
            >
              {t('send-photo')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
