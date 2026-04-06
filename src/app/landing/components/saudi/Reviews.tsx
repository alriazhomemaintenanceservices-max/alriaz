'use client';

import React from 'react';
import { useLang } from './LanguageContext';
import styles from './Reviews.module.css';

const REVIEWS = [
  {
    quoteAr: '"كان الفني عندنا خلال ٤٠ دقيقة بالضبط. أصلح المشكلة الكهربائية بسرعة واحترافية عالية. السعر كان منطقي ومحدد مسبقاً. سأتصل بهم دائماً لأي صيانة."',
    quoteEn: '"The technician was with us within exactly 40 minutes. He fixed the electrical issue quickly and professionally. The price was reasonable and pre-determined. I will always call them for any maintenance."',
    nameAr: 'خالد العمري', nameEn: 'Khalid Al-Omari',
    cityAr: 'الرياض', cityEn: 'Riyadh',
    serviceAr: 'كهربائي', serviceEn: 'Electrician',
    avatar: 'خع',
    dateAr: 'قبل يومين', dateEn: '2 days ago',
  },
  {
    quoteAr: '"كانت عندي مشكلة تسرب في الحمام من أسبوعين وكل المحاولات السابقة فشلت. فني سعودي هوم إكسبيرتس شخّص المشكلة في دقائق وحلّها بدون تكسير. شكراً لكم."',
    quoteEn: '"I had a bathroom leak problem for two weeks and all previous attempts failed. The Saudi Home Experts technician diagnosed the problem in minutes and solved it without breaking anything. Thank you."',
    nameAr: 'فاطمة الشمري', nameEn: 'Fatima Al-Shammari',
    cityAr: 'جدة', cityEn: 'Jeddah',
    serviceAr: 'سباك', serviceEn: 'Plumber',
    avatar: 'فش',
    dateAr: 'الأسبوع الماضي', dateEn: 'last week',
  },
  {
    quoteAr: '"ركّبوا لنا نظام إنترفون بالفيديو وأقفال بصمة للفيلا. الشغل احترافي وعالي الجودة، والسعر كان أوفر من غيرهم. ما توقعت الجودة هذي بهذا السعر. شكراً جزيلاً."',
    quoteEn: '"They installed a video intercom system and fingerprint locks for the villa. Professional, high-quality work, and the price was more affordable than competitors. I did not expect this quality at this price."',
    nameAr: 'سارة المطيري', nameEn: 'Sara Al-Mutairi',
    cityAr: 'الدمام', cityEn: 'Dammam',
    serviceAr: 'إنترفون', serviceEn: 'Intercom',
    avatar: 'سم',
    dateAr: 'قبل ٥ أيام', dateEn: '5 days ago',
  },
  {
    quoteAr: '"لقد كانت تجربتي مع فريق سعودي هوم إكسبيرتس استثنائية. الفني كان دقيقاً جداً في عمله وشرح لي كل التفاصيل بوضوح. الالتزام بالمواعيد والجودة هما ما يميزهم فعلاً. أنصح بشدة بالتعامل معهم لأي شخص يبحث عن الاحترافية."',
    quoteEn: '"My experience with the Saudi Home Experts team was exceptional. The technician was very precise in his work and clearly explained all the details to me. Punctuality and quality are what truly set them apart. I highly recommend them to anyone looking for professionalism."',
    nameAr: 'جوهيني نغوين', nameEn: 'Johini Nguyen',
    cityAr: 'الرياض', cityEn: 'Riyadh',
    serviceAr: 'صيانة عامة', serviceEn: 'General Maintenance',
    avatar: 'جن',
    dateAr: 'قبل ٣ أيام', dateEn: '3 days ago',
  },
  {
    quoteAr: '"سرعة الاستجابة خرافية. اتصلت بهم الساعة ٢ صباحاً بسبب تسرب مياه كبير، وكان الفني عندي في أقل من ٤٠ دقيقة. أنقذوا الموقف فعلاً والسعر كان عادلاً جداً رغم الوقت المتأخر."',
    quoteEn: '"The response speed is incredible. I called them at 2 AM due to a major water leak, and the technician was at my place in less than 40 minutes. They really saved the situation and the price was very fair despite the late hour."',
    nameAr: 'محمد القحطاني', nameEn: 'Mohammed Al-Qahtani',
    cityAr: 'جدة', cityEn: 'Jeddah',
    serviceAr: 'سباكة طوارئ', serviceEn: 'Emergency Plumbing',
    avatar: 'مق',
    dateAr: 'قبل ١٠ ساعات', dateEn: '10 hours ago',
  },
  {
    quoteAr: '"فنيين محترفين وأدوات حديثة. قاموا بفحص شامل للكهرباء في المنزل واكتشفوا أعطالاً كانت مخفية. العمل كان نظيفاً ومرتباً جداً. شكراً جزيلاً."',
    quoteEn: '"Professional technicians and modern tools. They did a comprehensive electrical check of the house and discovered hidden faults. The work was very clean and tidy. Thank you very much."',
    nameAr: 'عبدالله العتيبي', nameEn: 'Abdullah Al-Otaibi',
    cityAr: 'الدمام', cityEn: 'Dammam',
    serviceAr: 'فحص كهرباء', serviceEn: 'Electrical Inspection',
    avatar: 'عا',
    dateAr: 'قبل أسبوعين', dateEn: '2 weeks ago',
  },
  {
    quoteAr: '"تجربة رائعة مع فريق التركيب. قاموا بتثبيت كاميرات المراقبة والإنترفون في فيلتي الجديدة باحترافية عالية. المعاملة كانت راقية جداً والأسعار منافسة."',
    quoteEn: '"A great experience with the installation team. They installed surveillance cameras and the intercom in my new villa with high professionalism. The treatment was very classy and the prices were competitive."',
    nameAr: 'فهد الدوسري', nameEn: 'Fahad Al-Dossari',
    cityAr: 'مكة المكرمة', cityEn: 'Makkah',
    serviceAr: 'أنظمة أمنية', serviceEn: 'Security Systems',
    avatar: 'فد',
    dateAr: 'قبل ٤ أيام', dateEn: '4 days ago',
  },
  {
    quoteAr: '"كان لدي عطل مفاجئ في لوحة الكهرباء الرئيسية. حضر الفني في وقت قياسي وقام بإصلاح العطل وتغيير القواطع التالفة بقطع أصلية. أنصح بهم بشدة للأعطال الطارئة."',
    quoteEn: '"I had a sudden failure in the main electrical panel. The technician arrived in record time, repaired the fault, and replaced the damaged breakers with original parts. I highly recommend them for emergency faults."',
    nameAr: 'سلطان الحربي', nameEn: 'Sultan Al-Harbi',
    cityAr: 'أبها', cityEn: 'Abha',
    serviceAr: 'كهرباء طوارئ', serviceEn: 'Emergency Electrical',
    avatar: 'سح',
    dateAr: 'قبل ٢٠ ساعة', dateEn: '20 hours ago',
  },
  {
    quoteAr: '"خدمة ممتازة ونظافة في العمل. قام السباك بتغيير بيبات المغاسل والخلاطات بسرعة وبدون أي فوضى. أعجبني التزامهم بوضع أغطية الأحذية قبل الدخول للمنزل."',
    quoteEn: '"Excellent service and cleanliness in work. The plumber changed the sink pipes and mixers quickly and without any mess. I liked their commitment to putting on shoe covers before entering the house."',
    nameAr: 'نورة العتيبي', nameEn: 'Noura Al-Otaibi',
    cityAr: 'الرياض', cityEn: 'Riyadh',
    serviceAr: 'سباكة', serviceEn: 'Plumbing',
    avatar: 'نع',
    dateAr: 'قبل يومين', dateEn: '2 days ago',
  },
];

export default function Reviews() {
  const { t } = useLang();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const slide = React.useCallback((dir: 'l' | 'r') => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    if (dir === 'r') {
      const isEnd = Math.abs(scrollLeft + clientWidth - scrollWidth) < 10;
      if (isEnd) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
      }
    } else {
      const isStart = scrollLeft < 10;
      if (isStart) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -clientWidth, behavior: 'smooth' });
      }
    }
  }, []);

  // Auto-play for "continuous" feel
  React.useEffect(() => {
    const interval = setInterval(() => {
      slide('r');
    }, 5000);
    return () => clearInterval(interval);
  }, [slide]);



  return (
    <section id="reviews" className={`section ${styles.section}`}>
      <div className="section-inner">
        <div className={`reveal ${styles.header}`}>
          <span className="section-tag">{t('آراء العملاء', 'CUSTOMER REVIEWS')}</span>
          <h2 className="section-h2">{t('ماذا يقول عملاؤنا؟', 'What Our Clients Say')}</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            {t(
              '٩٢٠+ تقييم حقيقي من عملاء راضين في جميع أنحاء المملكة',
              '920+ real reviews from satisfied customers across the Kingdom'
            )}
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <button className={`${styles.navBtn} ${styles.prev}`} onClick={() => slide('l')} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.grid} ref={scrollRef}>
            {REVIEWS.map((r, i) => (
              <div key={i} className={`${styles.card} reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.verified}>
                    <VerifiedIcon />
                    {t('موثق', 'Verified')}
                  </span>
                </div>
                <p className={styles.quote}>{t(r.quoteAr, r.quoteEn)}</p>
                <div className={styles.date}>{t(r.dateAr, r.dateEn)}</div>
                <div className={styles.footer}>
                  <div className={styles.avatar}>{r.avatar}</div>
                  <div>
                    <div className={styles.name}>{t(r.nameAr, r.nameEn)}</div>
                    <div className={styles.meta}>
                      <span className={styles.badgeCity}>{t(r.cityAr, r.cityEn)}</span>
                      <span className={styles.badgeService}>{t(r.serviceAr, r.serviceEn)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.next}`} onClick={() => slide('r')} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

function VerifiedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronLeft({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
