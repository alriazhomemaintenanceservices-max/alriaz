'use client';

import { useState } from 'react';
import { useLang } from './LanguageContext';
import styles from './Cities.module.css';

const CITIES = [
  { ar: 'الرياض',      en: 'Riyadh'    },
  { ar: 'جدة',         en: 'Jeddah'    },
  { ar: 'الدمام',      en: 'Dammam'    },
  { ar: 'مكة المكرمة', en: 'Makkah'    },
  { ar: 'المدينة المنورة', en: 'Madinah' },
  { ar: 'أبها',        en: 'Abha'      },
  { ar: 'الطائف',      en: 'Taif'      },
  { ar: 'تبوك',        en: 'Tabuk'     },
  { ar: 'حائل',        en: 'Hail'      },
  { ar: 'بريدة',       en: 'Buraidah'  },
  { ar: 'نجران',       en: 'Najran'    },
  { ar: 'جازان',       en: 'Jazan'     },
  { ar: 'ينبع',        en: 'Yanbu'     },
  { ar: 'الجبيل',      en: 'Jubail'    },
  { ar: 'الخبر',       en: 'Al-Khobar' },
  { ar: 'الظهران',     en: 'Dhahran'   },
  { ar: 'الأحساء',     en: 'Al-Ahsa'   },
  { ar: 'الخرج',       en: 'Al-Kharj'  },
  { ar: 'رابغ',        en: 'Rabigh'    },
  { ar: 'سكاكا',       en: 'Sakaka'    },
];

export default function Cities() {
  const { t } = useLang();
  const [activeIdx, setActiveIdx] = useState(0);

  const active = CITIES[activeIdx];
  const waHref = `https://wa.me/966508901536?text=${encodeURIComponent('أحتاج فني في ' + active.ar)}`;

  return (
    <section id="cities" className={`section ${styles.section}`}>
      <div className="section-inner">
        <div className={`reveal ${styles.header}`}>
          <span className="section-tag">{t('التغطية الجغرافية', 'COVERAGE AREA')}</span>
          <h2 className="section-h2">{t('نخدم جميع مناطق المملكة', 'We Serve All KSA Regions')}</h2>
        </div>

        <div className={`reveal ${styles.pills}`}>
          {CITIES.map((city, i) => (
            <button
              key={i}
              className={`${styles.pill} ${i === activeIdx ? styles.active : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              {t(city.ar, city.en)}
            </button>
          ))}
        </div>

        <div className={`reveal ${styles.status}`}>
          <div className={styles.statusText}>
            <span className={styles.dot} />
            {t(
              <>الفنيون متوفرون في <strong>{active.ar}</strong> · خدمة ٢٤ ساعة / ٧ أيام</>,
              <>Technicians available in <strong>{active.en}</strong> · 24/7 service</>
            )}
          </div>
          <a className={styles.waBtn} href={waHref}>
            {t(`احجز في ${active.ar}`, `Book in ${active.en}`)}
          </a>
        </div>
      </div>
    </section>
  );
}
