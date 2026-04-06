'use client';

import { useState } from 'react';
import { useLang } from './LanguageContext';
import styles from './BookingForm.module.css';

const SERVICES_AR = ['كهربائي', 'سباك', 'إنترفون وأمن', 'صيانة عامة'];
const SERVICES_EN = ['Electrician', 'Plumber', 'Intercom & Security', 'General Maintenance'];
const CITIES_AR = ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة', 'أبها', 'الطائف', 'تبوك'];
const CITIES_EN = ['Riyadh', 'Jeddah', 'Dammam', 'Makkah', 'Madinah', 'Abha', 'Taif', 'Tabuk'];

export default function BookingForm() {
  const { t } = useLang();

  return (
    <section id="booking" className={`section ${styles.section}`}>
      <div className="section-inner">
        <div className={`reveal ${styles.header}`}>
          <span className="section-tag">{t('احجز الآن', 'BOOK NOW')}</span>
          <h2 className="section-h2">{t('احجز موعدك — رد خلال ٥ دقائق', 'Book Your Appointment — Reply in 5 Min')}</h2>
          <p className={styles.intro}>{t('تحدث مباشرة مع فريقنا الفني للحصول على سعر فوري وموعد في أقل من 45 دقيقة', 'Chat directly with our technical team for an instant quote and appointment in under 45 minutes')}</p>
        </div>

        <div className={`reveal ${styles.ctaWrapper}`}>
          <div className={styles.ctaCard}>
            <div className={styles.directContact}>
              <div className={styles.phoneLabel}>{t('اتصل مباشرة برقمنا الموحد', 'Call our uniform number directly')}</div>
              <a href="tel:+966508901536" className={styles.phoneNumber}>050 <span style={{ color: 'var(--gold)' }}>890</span> 1536</a>
            </div>

            <div className={styles.divider}>
              <span>{t('أو عبر واتساب', 'OR VIA WHATSAPP')}</span>
            </div>

            <a
              className={styles.bigWaBtn}
              href="https://wa.me/966508901536?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D9%85%D9%86%D8%B2%D9%84%D9%8A"
            >
              <WaIcon />
              <div className={styles.btnText}>
                <span className={styles.btnMainText}>{t('ابدأ المحادثة الآن', 'Start Chat Now')}</span>
                <span className={styles.btnSubText}>{t('متصل الآن - استجابة فورية', 'Online Now - Instant Response')}</span>
              </div>
            </a>

            <div className={styles.trustFooter}>
              <div className={styles.trustItem}>
                <ClockIcon />
                <span>24/7</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <CheckIcon />
                <span>{t('ادفع بعد الإصلاح', 'Pay After Fix')}</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <ShieldIcon />
                <span>{t('ضمان 30 يوم', '30-Day Warranty')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.85L.073 23.927l6.235-1.635A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.359-.213-3.721.975.992-3.625-.233-.372A9.774 9.774 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
