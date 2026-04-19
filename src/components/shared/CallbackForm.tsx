'use client';

import { useState } from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';

type TKey = keyof typeof translations.ar;

const AREAS = [
  { ar: 'النرجس', en: 'Al Narjis' },
  { ar: 'الياسمين', en: 'Al Yasmin' },
  { ar: 'قرطبة', en: 'Qurtubah' },
  { ar: 'غرناطة', en: 'Granada' },
  { ar: 'الفلاح', en: 'Al Falah' },
  { ar: 'الندى', en: 'Al Nada' },
  { ar: 'الربيع', en: 'Al Rabee' },
  { ar: 'اشبيلية', en: 'Ishbiliyah' },
  { ar: 'حطين', en: 'Hittin' },
  { ar: 'الملقا', en: 'Al Malqa' },
  { ar: 'العقيق', en: 'Al Aqiq' },
  { ar: 'القيروان', en: 'Al Qirawan' },
  { ar: 'العارض', en: 'Al Arid' },
  { ar: 'أخرى', en: 'Other' },
];

const PROBLEMS = [
  { ar: 'المكيف ما يبرد', en: 'AC Not Cooling', icon: '❄️' },
  { ar: 'الكهرب يفصل', en: 'Power Cuts', icon: '⚡' },
  { ar: 'تسريب مياه', en: 'Water Leak', icon: '💧' },
  { ar: 'المجاري مسدودة', en: 'Drain Blocked', icon: '🚿' },
  { ar: 'السخان خربان', en: 'Heater Broken', icon: '🔥' },
  { ar: 'تركيب انتركوم', en: 'Intercom Install', icon: '🔒' },
  { ar: 'مشكلة أخرى', en: 'Other Problem', icon: '🔧' },
];

interface Props {
  preselectedArea?: string;
  preselectedProblem?: string;
  variant?: 'full' | 'compact';
}

export default function CallbackForm({ preselectedArea, preselectedProblem, variant = 'full' }: Props) {
  const { t, language } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState(preselectedArea || '');
  const [problem, setProblem] = useState(preselectedProblem || '');
  const [submitted, setSubmitted] = useState(false);

  const isAr = language === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !area || !problem) return;

    // Fire Google Ads conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18063458010/RsaxCP6r5J4cENr9qaVD',
        'value': 100.0,
        'currency': 'SAR',
      });
      (window as any).gtag('event', 'form_submission', {
        'event_category': 'lead',
        'event_label': `${area}_${problem}`,
        'value': 100,
      });
    }

    // Build WhatsApp message with all details
    const areaLabel = AREAS.find(a => a.en === area || a.ar === area);
    const areaName = areaLabel ? (isAr ? areaLabel.ar : areaLabel.en) : area;
    const problemLabel = PROBLEMS.find(p => p.en === problem || p.ar === problem);
    const problemName = problemLabel ? (isAr ? problemLabel.ar : problemLabel.en) : problem;

    const msg = isAr
      ? `طلب اتصال جديد:\n\nالاسم: ${name}\nالجوال: ${phone}\nالحي: ${areaName}\nالمشكلة: ${problemName}\n\nيرجى الاتصال بالعميل خلال 30 دقيقة`
      : `New Callback Request:\n\nName: ${name}\nPhone: ${phone}\nArea: ${areaName}\nProblem: ${problemName}\n\nPlease call the customer within 30 minutes`;

    const whatsappUrl = `https://wa.me/966508901536?text=${encodeURIComponent(msg)}`;

    setSubmitted(true);

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');
  };

  if (submitted) {
    return (
      <div style={{
        padding: '32px',
        background: '#F0FDF4',
        borderRadius: '16px',
        border: '2px solid #BBF7D0',
        textAlign: 'center',
      }}>
        <CheckCircle size={48} style={{ color: '#16a34a', marginBottom: '16px' }} />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a', marginBottom: '8px' }}>
          {isAr ? 'تم إرسال طلبك بنجاح!' : 'Request Sent Successfully!'}
        </h3>
        <p style={{ color: 'var(--gray-600)', marginBottom: '16px' }}>
          {isAr ? 'سنتصل بك خلال 30 دقيقة إن شاء الله' : 'We will call you within 30 minutes InshaAllah'}
        </p>
        <button
          onClick={() => { setSubmitted(false); setName(''); setPhone(''); setArea(''); setProblem(''); }}
          style={{ background: 'none', border: 'none', color: 'var(--primary-blue)', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}
        >
          {isAr ? 'إرسال طلب آخر' : 'Send Another Request'}
        </button>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid var(--gray-300)',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: 500,
    outline: 'none',
    transition: 'border-color 0.2s',
    direction: 'ltr',
    fontFamily: 'inherit',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    appearance: 'none' as const,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23666\' d=\'M6 8L1 3h10z\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: language === 'ar' ? '16px center' : 'right 16px center',
    paddingRight: language === 'ar' ? '16px' : '40px',
    paddingLeft: language === 'ar' ? '40px' : '16px',
    cursor: 'pointer',
  };

  return (
    <div style={{
      padding: variant === 'compact' ? '24px' : '32px',
      background: 'white',
      borderRadius: '16px',
      border: '2px solid var(--primary-blue)',
      boxShadow: '0 4px 20px rgba(29, 78, 216, 0.1)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <Phone size={24} style={{ color: 'var(--primary-blue)' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
            {isAr ? 'اطلب اتصال — نتصل بك خلال 30 دقيقة' : 'Request Callback — We Call You in 30 Minutes'}
          </h3>
        </div>
        <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', margin: 0 }}>
          {isAr ? 'املأ البيانات وفريقنا يتواصل معك' : 'Fill in your details and our team contacts you'}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="text"
          placeholder={isAr ? 'الاسم' : 'Your Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder={isAr ? 'رقم الجوال' : 'Phone Number'}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          dir="ltr"
          style={inputStyle}
        />

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
          style={{ ...selectStyle, color: area ? 'var(--dark)' : 'var(--gray-500)' }}
        >
          <option value="">{isAr ? 'اختر الحي' : 'Select Area'}</option>
          {AREAS.map((a) => (
            <option key={a.en} value={a.en}>{isAr ? a.ar : a.en}</option>
          ))}
        </select>

        <select
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
          style={{ ...selectStyle, color: problem ? 'var(--dark)' : 'var(--gray-500)' }}
        >
          <option value="">{isAr ? 'وش المشكلة؟' : 'What\'s the Problem?'}</option>
          {PROBLEMS.map((p) => (
            <option key={p.en} value={p.en}>{p.icon} {isAr ? p.ar : p.en}</option>
          ))}
        </select>

        <button
          type="submit"
          style={{
            padding: '16px',
            background: 'var(--primary-blue)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'background 0.2s',
          }}
        >
          <WhatsAppSvg size={20} />
          {isAr ? 'اطلب اتصال الحين' : 'Request Callback Now'}
        </button>

        <p style={{ textAlign: 'center', color: 'var(--gray-500)', fontSize: '0.8rem', margin: '4px 0 0' }}>
          {isAr ? 'مجاني — بدون التزام — نتصل بك خلال 30 دقيقة' : 'Free — No obligation — We call you within 30 minutes'}
        </p>
      </form>
    </div>
  );
}
