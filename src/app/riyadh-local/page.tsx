'use client';

import { useEffect } from 'react';
import './globals.css';
import styles from './page.module.css';

export default function RiyadhLocalPage() {
  useEffect(() => {
    // Track phone clicks for conversion
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-18063458010/PHONE_CLICK',
            'value': 50.0,
            'currency': 'SAR'
          });
        }
      });
    });
  }, []);

  return (
    <>
      {/* Header Bar */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.logo}>خبراء المنزل السعودي</span>
          <a href="tel:0508901536" className={styles.headerPhone}>
            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            050 890 1536
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.urgentBadge}>
          <span className={styles.urgentDot}></span>
          متوفر الآن في منطقتك
        </div>
        
        <h1 className={styles.mainTitle}>
          المكيف خرب؟ المويه تسرب؟
        </h1>
        
        <p className={styles.subtitle}>
          فني يجيك البيت خلال ساعة - شمال الرياض
        </p>

        <a href="tel:0508901536" className={styles.mainCTA}>
          <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          اتصل الآن: 050 890 1536
        </a>

        <p className={styles.whatsappText}>
          أو أرسل واتساب باسمك والحي والمشكلة
        </p>

        <div className={styles.availability}>
          <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>متوفر الآن - نصلك خلال ساعة</span>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trust}>
        <h2 className={styles.sectionTitle}>ليش تختارنا؟</h2>
        
        <div className={styles.trustGrid}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💰</span>
            <span>الكشف 50 ريال فقط</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🕌</span>
            <span>نجي بعد صلاة المغرب</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>👨‍🔧</span>
            <span>فني خبرة 10+ سنين بالسعودية</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span>نعرف كل أحياء شمال الرياض</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🤝</span>
            <span>أسعار معقولة - نتفاهم</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🏠</span>
            <span>نحترم خصوصية البيت السعودي</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>خدماتنا</h2>
        
        <div className={styles.serviceColumns}>
          <div className={styles.serviceColumn}>
            <h3 className={styles.serviceTitle}>
              <span className={styles.serviceBullet}>⚡</span>
              كهربائي
            </h3>
            <ul className={styles.serviceList}>
              <li>المكيف ما يبرد (تعبئة فريون)</li>
              <li>الكهرب يفصل كل شوي</li>
              <li>مفاتيح الكهرب خربانة</li>
              <li>إنارة المجلس ضعيفة</li>
              <li>تركيب لمبات وثريات</li>
              <li>صيانة الطبلون الكهربائي</li>
            </ul>
          </div>
          
          <div className={styles.serviceColumn}>
            <h3 className={styles.serviceTitle}>
              <span className={styles.serviceBullet}>💧</span>
              سباك
            </h3>
            <ul className={styles.serviceList}>
              <li>المويه تسرب من السقف</li>
              <li>المجاري مسدودة</li>
              <li>السخان ما يشتغل</li>
              <li>خلاط المطبخ يسرب</li>
              <li>تركيب فلاتر المياه</li>
              <li>صيانة دورات المياه</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className={styles.areas}>
        <h2 className={styles.sectionTitle}>نغطي هذي المناطق</h2>
        
        <div className={styles.areaGrid}>
          {['النرجس', 'الياسمين', 'قرطبة', 'غرناطة', 'الفلاح', 'الندى', 
            'الربيع', 'اشبيلية', 'حطين', 'الملقا', 'العقيق', 'القيروان', 
            'الشهداء', 'الازدهار', 'العارض', 'المونسية'].map(area => (
            <span key={area} className={styles.areaTag}>
              {area}
            </span>
          ))}
        </div>
        
        <p className={styles.areaNote}>
          وجميع أحياء شمال وشرق الرياض
        </p>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <div className={styles.pricingCard}>
          <h2 className={styles.pricingTitle}>الأسعار واضحة</h2>
          
          <div className={styles.priceGrid}>
            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>الكشف</span>
              <span className={styles.priceValue}>50 ريال</span>
            </div>
            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>تعبئة فريون</span>
              <span className={styles.priceValue}>150-250 ريال</span>
            </div>
            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>تسليك مجاري</span>
              <span className={styles.priceValue}>100-200 ريال</span>
            </div>
            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>إصلاحات كهرب</span>
              <span className={styles.priceValue}>80-300 ريال</span>
            </div>
          </div>
          
          <p className={styles.priceNote}>
            الأسعار حسب المشكلة - نتفق قبل البدء
          </p>
        </div>
      </section>

      {/* Emergency Section */}
      <section className={styles.emergency}>
        <h2 className={styles.emergencyTitle}>عندك طوارئ؟</h2>
        <p className={styles.emergencyText}>
          المكيف وقف والحر 45 درجة؟<br/>
          المويه غرقت البيت؟<br/>
          الكهرب انقطع؟
        </p>
        <p className={styles.emergencyUrgent}>
          لا تنتظر - فني يجيك الحين!
        </p>
        
        <a href="tel:0508901536" className={styles.emergencyCTA}>
          <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          اتصل الآن: 050 890 1536
        </a>
        
        <div className={styles.workHours}>
          <svg className={styles.clockIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>متوفرين 24/7 - حتى أيام الجمعة والعطل</span>
        </div>
      </section>

      {/* Floating Call Button - Mobile */}
      <a href="tel:0508901536" className={styles.floatingCall}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </a>
    </>
  );
}