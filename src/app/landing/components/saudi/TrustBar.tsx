'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from './LanguageContext';
import styles from './TrustBar.module.css';

interface StatItem {
  target: number;
  suffix: string;
  labelAr: string;
  labelEn: string;
  subAr: string;
  subEn: string;
}

const STATS: StatItem[] = [
  { target: 5000, suffix: '+', labelAr: 'عميل راضٍ',  labelEn: 'Happy Clients',      subAr: 'في جميع أنحاء المملكة', subEn: 'Across the Kingdom'  },
  { target: 12,   suffix: '',  labelAr: 'سنة خبرة',   labelEn: 'Years Experience',    subAr: 'في السوق السعودي',       subEn: 'In Saudi Market'      },
  { target: 920,  suffix: '+', labelAr: 'تقييم موثق', labelEn: 'Verified Reviews',    subAr: 'تقييم 5 نجوم',          subEn: '5-Star Rating'        },
  { target: 45,   suffix: '',  labelAr: 'دقيقة وصول', labelEn: 'Min Arrival',         subAr: 'متوسط وقت الاستجابة',   subEn: 'Average response time'},
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 1500;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={styles.num}>
      {suffix}{count.toLocaleString('en-US')}
    </div>
  );
}

export default function TrustBar() {
  const { t } = useLang();

  return (
    <section id="trust-bar" className={styles.bar}>
      <div className={styles.grid}>
        {STATS.map((stat, i) => (
          <div key={i} className={styles.item}>
            <Counter target={stat.target} suffix={stat.suffix} />
            <div className={styles.label}>{t(stat.labelAr, stat.labelEn)}</div>
            <div className={styles.sub}>{t(stat.subAr, stat.subEn)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
