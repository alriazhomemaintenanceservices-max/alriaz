'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import Button from '@/components/shared/Button';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import { Phone, Clock, Shield, Users, CheckCircle, Star, Zap, Droplet, ShowerHead, Flame, Lightbulb, ChevronLeft, MapPin, Timer, ShieldCheck, Home, Wrench, Video, type LucideIcon } from 'lucide-react';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import CallbackForm from '@/components/shared/CallbackForm';

// Area detection handled inside component for language support

// Hero background slides — branded service photography (optimized in /public/hero).
const HERO_SLIDES = [
  '/hero/repairman-uniform.jpg',
  '/hero/electrician-switchboard.jpg',
  '/hero/plumber-sink.jpg',
  '/hero/sockets-install.jpg',
  '/hero/electrician-office.jpg',
  '/hero/electrician-building.jpg',
  '/hero/water-damage-call.jpg',
  '/hero/clogged-sink.jpg',
  '/hero/radiator.jpg',
];

// Faint abstract icon watermarks layered into each home section background.
function SectionDecor({ Top, Bottom }: { Top: LucideIcon; Bottom: LucideIcon }) {
  return (
    <div className="home-decor" aria-hidden="true">
      <Top className="glyph glyph-top" size={280} strokeWidth={1} />
      <Bottom className="glyph glyph-bottom" size={240} strokeWidth={1} />
    </div>
  );
}

export default function HomePage() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<'electrician' | 'plumber' | 'intercom'>('electrician');
  const [heroSlide, setHeroSlide] = useState(0);
  const { t, language } = useTranslation();
  const userArea = t('riyadh');

  // Auto-advance the hero slider.
  useEffect(() => {
    const id = setInterval(() => {
      setHeroSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const serviceSlugMap = {
    electrician: 'كهربائي',
    plumber: 'سباك',
    intercom: 'انتركوم',
  };

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Homepage',
        page_location: window.location.href,
      });
    }
  }, []);

  const problems = [
    { id: 'power-cut', Icon: Zap, grad: 'linear-gradient(135deg, #FBBF24, #F59E0B)', img: '/hero/electrician-switchboard.jpg', titleKey: 'power-cuts' as const, svcKey: 'electrician' as const },
    { id: 'water-leak', Icon: Droplet, grad: 'linear-gradient(135deg, #22D3EE, #0891B2)', img: '/hero/water-damage-call.jpg', titleKey: 'water-leaking' as const, svcKey: 'plumber' as const },
    { id: 'drain-blocked', Icon: ShowerHead, grad: 'linear-gradient(135deg, #2DD4BF, #0D9488)', img: '/hero/clogged-sink.jpg', titleKey: 'drain-blocked' as const, svcKey: 'plumber' as const },
    { id: 'heater-broken', Icon: Flame, grad: 'linear-gradient(135deg, #FB923C, #EF4444)', img: '/hero/radiator.jpg', titleKey: 'heater-broken' as const, svcKey: 'plumber' as const },
    { id: 'lights-not-working', Icon: Lightbulb, grad: 'linear-gradient(135deg, #FCD34D, #F59E0B)', img: '/hero/electrician-office.jpg', titleKey: 'lights-not-working' as const, svcKey: 'electrician' as const },
  ];

  const homeServices = [
    {
      key: 'electrician', Icon: Zap, grad: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
      img: '/hero/electrician-switchboard.jpg',
      titleKey: 'electrician' as const, href: '/services/electrician/',
      items: ['power-outage-repair', 'lights-installation', 'electrical-panel-maintenance', 'new-electrical-wiring', 'electrical-repairs'] as const,
    },
    {
      key: 'plumber', Icon: Droplet, grad: 'linear-gradient(135deg, #06B6D4, #0E7490)',
      img: '/hero/plumber-sink.jpg',
      titleKey: 'plumber' as const, href: '/services/plumber/',
      items: ['ceiling-water-leak-repair', 'drain-unblocking', 'heater-installation-maintenance', 'faucet-repair', 'water-filter-installation'] as const,
    },
    {
      key: 'intercom', Icon: Video, grad: 'linear-gradient(135deg, #10B981, #047857)',
      img: '/hero/sockets-install.jpg',
      titleKey: 'intercom' as const, href: '/services/intercom/',
      items: ['intercom-installation', 'security-camera-installation', 'smart-doorbell-installation', 'access-control-systems', 'intercom-repair'] as const,
    },
  ];

  const features = [
    { Icon: MapPin, grad: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', titleKey: 'local-experts', descKey: 'local-experts-desc' },
    { Icon: Timer, grad: 'linear-gradient(135deg, #10B981, #047857)', titleKey: 'quick-arrival', descKey: 'quick-arrival-desc' },
    { Icon: Clock, grad: 'linear-gradient(135deg, #F59E0B, #D97706)', titleKey: 'respect-time', descKey: 'respect-time-desc' },
    { Icon: Wrench, grad: 'linear-gradient(135deg, #6366F1, #4338CA)', titleKey: 'experienced-technicians', descKey: 'experienced-technicians-desc' },
    { Icon: ShieldCheck, grad: 'linear-gradient(135deg, #14B8A6, #0D9488)', titleKey: 'work-warranty', descKey: 'work-warranty-desc' },
    { Icon: Home, grad: 'linear-gradient(135deg, #EC4899, #BE185D)', titleKey: 'home-respect', descKey: 'home-respect-desc' },
  ] as const;

  const areas = [
    { ar: 'الياسمين', en: 'Al Yasmin', slug: 'yasmin' },
    { ar: 'العارض', en: 'Al Arid', slug: 'arid' },
    { ar: 'القيروان', en: 'Al Qirawan', slug: 'qirawan' },
    { ar: 'بنبان', en: 'Banban', slug: 'banban' },
    { ar: 'الربيع', en: 'Al Rabee', slug: 'rabee' },
    { ar: 'الصحافة', en: 'Al Sahafa', slug: 'sahafa' },
    { ar: 'الملقا', en: 'Al Malqa', slug: 'malqa' },
    { ar: 'الندى', en: 'Al Nada', slug: 'nada' },
    { ar: 'الوادي', en: 'Al Wadi', slug: 'wadi' },
    { ar: 'النفل', en: 'Al Nafal', slug: 'nafal' },
    { ar: 'النرجس', en: 'Al Narjis', slug: 'narjis' },
    { ar: 'قرطبة', en: 'Qurtubah', slug: 'qurtubah' },
    { ar: 'غرناطة', en: 'Granada', slug: 'granada' },
    { ar: 'الفلاح', en: 'Al Falah', slug: 'falah' },
    { ar: 'اشبيلية', en: 'Ishbiliyah', slug: 'ishbiliyah' },
    { ar: 'حطين', en: 'Hittin', slug: 'hittin' },
    { ar: 'العقيق', en: 'Al Aqiq', slug: 'aqiq' },
    { ar: 'الحي السادس', en: 'Al-Hay Al-Sadis', slug: 'sadis' },
  ];

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18063458010/PHONE_CONVERSION',
        'value': 50.0,
        'currency': 'SAR',
        'event_callback': () => {
          console.log('Phone conversion tracked');
        }
      });
    }
  };

  return (
    <>

      {/* Hero Section — image slider */}
      <section className="hero-slider">
        {/* Background slides */}
        {HERO_SLIDES.map((src, i) => (
          <div
            key={i}
            className={`hero-slide${i === heroSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <div className="container">
            <div className="hero-inner">
              {/* Availability badge */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
                <div className="availability-badge">
                  <Zap size={18} className="availability-icon" />
                  <span>{t('available-now-in')} {userArea}</span>
                </div>
              </div>

              {/* Social proof */}
              <div className="hero-rating">
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} />
                  ))}
                </span>
                <span className="rtext">
                  {language === 'ar' ? '٤.٩ من ٥ · أكثر من ١٢٧ تقييم' : '4.9 / 5 · 127+ reviews'}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="hero-title">
                {t('electrician-plumber')}
                <span style={{ color: '#FCD34D' }}> {t('arrives-in-hour')}</span>
              </h1>

              <p className="hero-subtitle">
                {t('instant-service-247')}
              </p>

              {/* CTA Buttons */}
              <div className="hero-btn-group" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
                <Button
                  href="tel:+966508901536"
                  variant="emergency"
                  size="large"
                  icon={<Phone size={20} />}
                  onClick={trackPhoneClick}
                >
                  {t('call-now-number')}
                </Button>

                <Button
                  href={`https://wa.me/966508901536?text=${encodeURIComponent(t('whatsapp-problem-message'))}%20${userArea}%20-%20${encodeURIComponent(t('whatsapp-photo-message'))}`}
                  variant="whatsapp"
                  size="large"
                  external
                  icon={<WhatsAppSvg size={20} />}
                >
                  {t('send-problem-photo')}
                </Button>
              </div>

              {/* Trust row */}
              <div className="hero-trust">
                <span className="hero-trust-item"><Clock size={16} />{language === 'ar' ? 'خدمة 24/7' : '24/7 Service'}</span>
                <span className="hero-trust-item"><Shield size={16} />{t('30-day-warranty')}</span>
                <span className="hero-trust-item"><Users size={16} />{t('500-customers-month')}</span>
                <span className="hero-trust-item"><CheckCircle size={16} />{language === 'ar' ? 'فنيون معتمدون' : 'Certified Techs'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Selector */}
      <section className="section home-section light">
        <SectionDecor Top={Wrench} Bottom={Zap} />
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('whats-your-problem')}</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '8px' }}>{t('choose-problem-instant')}</p>
          </div>

          <div className="problem-grid">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setSelectedProblem(problem.id)}
                className={`problem-card${selectedProblem === problem.id ? ' selected' : ''}`}
              >
                <span className="problem-thumb">
                  <span className="problem-thumb-img" style={{ backgroundImage: `url(${problem.img})` }} />
                  <span className="problem-thumb-overlay" style={{ background: problem.grad }} />
                  <problem.Icon className="problem-thumb-icon" size={26} />
                </span>
                <span>
                  <span className="p-title">{t(problem.titleKey)}</span>
                  <span className="p-sub">{t(problem.svcKey)}</span>
                </span>
                <ChevronLeft className="p-arrow" size={22} />
              </button>
            ))}
          </div>

          {selectedProblem && (
            <div className="animate-fadeIn" style={{ marginTop: '32px', padding: '24px', background: '#FEF3C7', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>
                ✅ {t('can-fix-in-hour')}
              </p>
              <Button
                href="tel:+966508901536"
                variant="emergency"
                icon={<Phone size={18} />}
                onClick={trackPhoneClick}
              >
                {t('call-instant-solution')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Callback Form */}
      <section className="section home-section dark">
        <SectionDecor Top={Phone} Bottom={Clock} />
        <div className="container" style={{ maxWidth: '550px' }}>
          <CallbackForm />
        </div>
      </section>

      {/* Areas Coverage with Service Tabs */}
      <section className="section home-section light">
        <SectionDecor Top={MapPin} Bottom={Home} />
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('cover-north-riyadh')}</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '8px' }}>{t('choose-area-services')}</p>
          </div>

          {/* Service Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { key: 'electrician' as const, icon: '⚡', labelKey: 'electrician' as const },
              { key: 'plumber' as const, icon: '💧', labelKey: 'plumber' as const },
              { key: 'intercom' as const, icon: '🔒', labelKey: 'intercom' as const },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedService(tab.key)}
                style={{
                  padding: '10px 24px',
                  border: selectedService === tab.key ? '2px solid var(--primary-blue)' : '2px solid var(--gray-300)',
                  borderRadius: '50px',
                  background: selectedService === tab.key ? 'var(--primary-blue)' : 'white',
                  color: selectedService === tab.key ? 'white' : 'var(--dark)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>{tab.icon}</span> {t(tab.labelKey)}
              </button>
            ))}
          </div>

          {/* Area Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '800px', margin: '0 auto' }}>
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/${serviceSlugMap[selectedService]}-${area.slug}`}
                style={{
                  padding: '12px 24px',
                  background: 'white',
                  border: '2px solid var(--gray-300)',
                  borderRadius: '50px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: 'var(--dark)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  e.currentTarget.style.background = '#EBF8FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-300)';
                  e.currentTarget.style.background = 'white';
                }}
              >
                {language === 'ar' ? area.ar : area.en}
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ color: 'var(--gray-500)' }}>{t('all-north-east-riyadh')}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section home-section dark">
        <SectionDecor Top={ShieldCheck} Bottom={Star} />
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('why-choose-us')}</h2>
          </div>

          <div className="feature-grid">
            {features.map((item, i) => (
              <div key={i} className="feature-card">
                <span className="icon-medallion" style={{ background: item.grad }}>
                  <item.Icon size={30} />
                </span>
                <h3>{t(item.titleKey as keyof typeof translations.ar)}</h3>
                <p>{t(item.descKey as keyof typeof translations.ar)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section home-section light">
        <SectionDecor Top={Droplet} Bottom={Zap} />
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('our-services')}</h2>
          </div>

          <div className="service-grid">
            {homeServices.map((svc) => (
              <Link key={svc.key} href={svc.href} className="service-card">
                <div className="service-card-img" style={{ backgroundImage: `url(${svc.img})` }} aria-hidden="true" />
                <div className="service-card-scrim" aria-hidden="true" />
                <div className="service-card-content">
                  <div className="service-card-titlerow">
                    <span className="service-icon-badge" style={{ background: svc.grad }}>
                      <svc.Icon size={24} />
                    </span>
                    <h3>{t(svc.titleKey)}</h3>
                  </div>
                  <div className="service-reveal">
                    <ul className="service-list">
                      {svc.items.map((serviceKey, i) => (
                        <li key={i}>
                          <CheckCircle size={18} />
                          <span>{t(serviceKey as keyof typeof translations.ar)}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="service-cta">
                      {t('view-all-services')}
                      <ChevronLeft size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button
              href="/services/"
              variant="primary"
              size="large"
            >
              {t('view-all-services')}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section home-section dark">
        <SectionDecor Top={Users} Bottom={Wrench} />
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('our-team')}</h2>
            <p style={{ color: '#94a3b8', marginTop: '8px', fontSize: '1.125rem', textAlign: 'center' }}>
              {t('pakistani-saudi-team')}
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '40px', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary-blue)' }}>
            
            {/* Flags Section */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🇵🇰</div>
                <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>{t('pakistan')}</span>
              </div>
              <div style={{ fontSize: '2rem', color: 'var(--primary-blue)' }}>🤝</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🇸🇦</div>
                <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>{t('saudi-arabia')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 grid-cols-md-3" style={{ gap: '24px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--gray-100)', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔧</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>{t('direct-service')}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('direct-service-desc')}</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--gray-100)', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🕌</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>{t('cultural-understanding')}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('cultural-understanding-desc')}</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--gray-100)', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🕐</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>{t('prayer-aware')}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('prayer-aware-desc')}</p>
              </div>
            </div>

            <div style={{ marginTop: '32px', padding: '20px', background: '#EBF8FF', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--primary-blue)', fontSize: '1.1rem' }}>
                ✅ {t('pakistani-team-desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section home-section light">
        <SectionDecor Top={Star} Bottom={CheckCircle} />
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('customer-reviews')}</h2>
          </div>

          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { textKey: 'review-1', nameKey: 'mohamed-salem', areaKey: 'narjis-area' },
              { textKey: 'review-2', nameKey: 'abdullah-shehri', areaKey: 'yasmin-area' },
              { textKey: 'review-3', nameKey: 'khalid-qahtani', areaKey: 'qurtubah-area' }
            ].map((review, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} style={{ fill: 'var(--primary-gold)', color: 'var(--primary-gold)' }} />
                  ))}
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: '12px' }}>"{t(review.textKey as keyof typeof translations.ar)}"</p>
                <div style={{ fontWeight: 600 }}>{t(review.nameKey as keyof typeof translations.ar)}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{t(review.areaKey as keyof typeof translations.ar)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '16px' }}>{t('emergency-question')}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{t('ac-stopped-45-degrees')}</p>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>{t('water-flooded-house')}</p>
          
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>{t('dont-wait-technician-now')}</div>
          
          <Button
            href="tel:+966508901536"
            variant="secondary"
            size="large"
            icon={<Phone size={20} />}
            onClick={trackPhoneClick}
            style={{ background: 'white', color: 'var(--emergency-red)' }}
          >
            {t('call-now-number')}
          </Button>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '24px', opacity: 0.9 }}>
            <Clock size={20} />
            <span>{t('available-247-prayers')}</span>
          </div>
        </div>
      </section>
    </>
  );
}