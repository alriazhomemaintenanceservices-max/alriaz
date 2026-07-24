'use client';

import Link from 'next/link';
import { Phone, MapPin, Clock, ChevronLeft, ShieldCheck, Zap, BadgeCheck } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';

const PHONE = '+966508901536';
const PHONE_DISPLAY = '050 890 1536';

// Promoted areas — link to the Arabic area URLs (proxy-rewritten). Service is
// rotated per area so plumber/intercom district pages get sitewide footer
// link equity too, instead of every chip pointing at electrician only.
const SERVICE_ROTATION = [
  { slugAr: 'كهربائي', nameAr: 'كهربائي', nameEn: 'Electrician' },
  { slugAr: 'سباك', nameAr: 'سباك', nameEn: 'Plumber' },
  { slugAr: 'انتركوم', nameAr: 'انتركوم', nameEn: 'Intercom' },
] as const;

const AREAS = [
  { ar: 'الياسمين', en: 'Al Yasmin', slug: 'yasmin' },
  { ar: 'النرجس', en: 'Al Narjis', slug: 'narjis' },
  { ar: 'الصحافة', en: 'Al Sahafa', slug: 'sahafa' },
  { ar: 'الملقا', en: 'Al Malqa', slug: 'malqa' },
  { ar: 'قرطبة', en: 'Qurtubah', slug: 'qurtubah' },
  { ar: 'العارض', en: 'Al Arid', slug: 'arid' },
  { ar: 'الندى', en: 'Al Nada', slug: 'nada' },
  { ar: 'حطين', en: 'Hittin', slug: 'hittin' },
].map((area, i) => ({ ...area, service: SERVICE_ROTATION[i % SERVICE_ROTATION.length] }));

export default function Footer() {
  const { t, language } = useTranslation();
  const isAr = language === 'ar';
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-cols">
          {/* Brand */}
          <div className="footer-col-brand">
            <Logo size={52} dark />
            <p className="footer-brand-desc">{t('professional-service-desc')}</p>
            <a href={`tel:${PHONE}`} className="footer-phone-cta">
              <Phone size={20} />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <div className="footer-trust">
              <span className="footer-trust-badge"><Zap size={13} />{isAr ? 'خدمة 24/7' : '24/7 Service'}</span>
              <span className="footer-trust-badge"><ShieldCheck size={13} />{isAr ? 'ضمان 30 يوم' : '30-Day Warranty'}</span>
              <span className="footer-trust-badge"><BadgeCheck size={13} />{isAr ? 'فنيون معتمدون' : 'Certified Techs'}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">{t('our-services')}</h4>
            <ul className="footer-links">
              <li><Link className="footer-link" href="/services/electrician/"><ChevronLeft className="chev" size={14} />{t('electrician-riyadh')}</Link></li>
              <li><Link className="footer-link" href="/services/plumber/"><ChevronLeft className="chev" size={14} />{t('plumber-riyadh')}</Link></li>
              <li><Link className="footer-link" href="/services/intercom/"><ChevronLeft className="chev" size={14} />{isAr ? 'انتركوم وكاميرات' : 'Intercom & Cameras'}</Link></li>
              <li><Link className="footer-link" href="/services/"><ChevronLeft className="chev" size={14} />{t('view-all-services')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">{isAr ? 'الشركة' : 'Company'}</h4>
            <ul className="footer-links">
              <li><Link className="footer-link" href="/about-us/"><ChevronLeft className="chev" size={14} />{t('nav-about')}</Link></li>
              <li><Link className="footer-link" href={isAr ? '/blog/' : '/en/blog/'}><ChevronLeft className="chev" size={14} />{isAr ? 'المدونة' : 'Blog'}</Link></li>
              <li><Link className="footer-link" href="/faq/"><ChevronLeft className="chev" size={14} />{isAr ? 'الأسئلة الشائعة' : 'FAQ'}</Link></li>
              <li><Link className="footer-link" href="/contact/"><ChevronLeft className="chev" size={14} />{t('nav-contact')}</Link></li>
              <li><Link className="footer-link" href="/site-map/"><ChevronLeft className="chev" size={14} />{isAr ? 'خريطة الموقع' : 'Site Map'}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">{t('contact-us')}</h4>
            <a href={`tel:${PHONE}`} className="footer-contact-item" style={{ textDecoration: 'none' }}>
              <span className="fc-ico"><Phone size={16} /></span>
              <span>
                <span style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8' }}>{isAr ? 'اتصل بنا الآن' : 'Call us now'}</span>
                <span className="footer-phone-big" dir="ltr">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a href="https://wa.me/966508901536" target="_blank" rel="noopener noreferrer" className="footer-contact-item" style={{ textDecoration: 'none' }}>
              <span className="fc-ico" style={{ background: 'rgba(37,211,102,0.12)', color: '#25D366', borderColor: 'rgba(37,211,102,0.25)' }}><WhatsAppSvg size={16} /></span>
              <span>
                <span style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8' }}>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                <span style={{ color: '#fff', fontWeight: 700 }} dir="ltr">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <div className="footer-contact-item">
              <span className="fc-ico"><MapPin size={16} /></span>
              <span>{t('riyadh-saudi')}</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-ico"><Clock size={16} /></span>
              <span>{t('available-247-prayers')}</span>
            </div>
          </div>
        </div>

        {/* Areas served */}
        <div style={{ marginTop: '40px' }}>
          <h4 className="footer-heading" style={{ marginBottom: '14px' }}>{isAr ? 'أحياء نخدمها في الرياض' : 'Areas We Serve in Riyadh'}</h4>
          <div className="footer-areas">
            {AREAS.map((a) => (
              <Link key={a.slug} className="footer-area-chip" href={`/${a.service.slugAr}-${a.slug}/`}>
                {isAr ? `${a.service.nameAr} ${a.ar}` : `${a.service.nameEn} ${a.en}`}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">© {year} {t('saudi-home-experts')} — {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
          <div className="footer-legal">
            <Link href="/privacy-policy/">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
            <Link href="/terms-of-service/">{isAr ? 'الشروط والأحكام' : 'Terms of Service'}</Link>
            <Link href="/cookie-policy/">{isAr ? 'ملفات الارتباط' : 'Cookie Policy'}</Link>
            <Link href="/disclaimer/">{isAr ? 'إخلاء المسؤولية' : 'Disclaimer'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
