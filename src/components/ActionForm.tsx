"use client";

import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Send, CheckCircle2 } from 'lucide-react';

import { usePathname } from 'next/navigation';

interface ActionFormProps {
  /** Optional override — pass true/false to control language externally (e.g. from landing page LangContext).
   *  Falls back to pathname-based detection when omitted. */
  isArabic?: boolean;
}

export default function ActionForm({ isArabic: isArabicProp }: ActionFormProps = {}) {
    const pathname = usePathname();
    const isArabic = isArabicProp ?? pathname?.startsWith('/ar') ?? false;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: isArabic ? 'كهربائي' : 'Electrician',
        location: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const whatsappNumber = "966508901536";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct message
        const message = isArabic 
            ? `*طلب جديد من الموقع*%0A%0A` +
              `*الاسم:* ${formData.name}%0A` +
              `*الهاتف:* ${formData.phone}%0A` +
              `*الخدمة:* ${formData.service}%0A` +
              `*الموقع:* ${formData.location}%0A` +
              `*المشكلة:* ${formData.description}`
            : `*New Lead from Website*%0A%0A` +
              `*Name:* ${formData.name}%0A` +
              `*Phone:* ${formData.phone}%0A` +
              `*Service:* ${formData.service}%0A` +
              `*Location:* ${formData.location}%0A` +
              `*Problem:* ${formData.description}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Small delay for UX
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            window.open(whatsappUrl, '_blank');
        }, 800);
    };

    const content = {
        title: isArabic ? 'احصل على تقدير مجاني' : 'Free Estimate',
        responseTime: isArabic ? 'رد خلال 5 دقائق —' : '— Response in 5m',
        subtitle: isArabic ? 'حجز مباشر عبر الواتساب لجميع مناطق الرياض.' : 'Direct WhatsApp booking for all Riyadh districts.',
        nameLabel: isArabic ? 'اسمك' : 'Your Name',
        namePlaceholder: isArabic ? 'الاسم الكامل' : 'Full Name',
        phoneLabel: isArabic ? 'رقم الهاتف' : 'Phone Number',
        phonePlaceholder: isArabic ? '05xxxxxxx' : '05xxxxxxx',
        serviceLabel: isArabic ? 'الخدمة المطلوبة' : 'Service Needed',
        locationLabel: isArabic ? 'الحي (الرياض)' : 'District (Riyadh)',
        locationPlaceholder: isArabic ? 'مثلاً: قرطبة' : 'e.g. Qurtubah',
        descLabel: isArabic ? 'وصف المشكلة' : 'Problem Description',
        descPlaceholder: isArabic ? 'أدخل تفاصيل المشكلة (مثلاً: تسرب مياه، ماس كهربائي...)' : 'Describe the issue (e.g. water leak, short circuit...)',
        submitButton: isArabic ? 'احجز الآن' : 'BOOK NOW',
        processing: isArabic ? 'جاري التحويل...' : 'Processing...',
        successTitle: isArabic ? 'تم تجهيز الطلب!' : 'Request Prepared!',
        successText: isArabic ? 'جاري فتح الواتساب لإرسال طلبك مباشرة إلى فريقنا...' : 'Opening WhatsApp to send your request directly to our team...',
        sendAnother: isArabic ? 'إرسال طلب آخر' : 'Send Another Request'
    };

    if (isSuccess) {
        return (
            <div dir={isArabic ? 'rtl' : 'ltr'} style={{ 
                textAlign: 'center', 
                padding: '40px 20px', 
                background: 'white', 
                borderRadius: '24px',
                border: '2px solid #22c55e',
                fontFamily: isArabic ? 'var(--font-cairo)' : 'inherit'
            }}>
                <div style={{ color: '#22c55e', marginBottom: '20px' }}>
                    <CheckCircle2 size={64} style={{ margin: '0 auto' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{content.successTitle}</h3>
                <p style={{ color: '#64748b' }}>{content.successText}</p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    style={{ marginTop: '20px', background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}
                >
                    {content.sendAnother}
                </button>
            </div>
        );
    }

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '24px', 
            border: '1px solid #e2e8f0', 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', 
            fontFamily: isArabic ? 'var(--font-cairo)' : 'inherit',
            color: '#1e293b' // Explicit dark color for all text
        }}>
            <h2 style={{ marginBottom: '10px', fontSize: '1.8rem', color: '#0f172a' }}>
                {isArabic ? (
                    <>{content.title} <span style={{ color: '#25D366', fontSize: '0.9rem', verticalAlign: 'middle', marginRight: '10px' }}>{content.responseTime}</span></>
                ) : (
                    <>{content.title} <span style={{ color: '#25D366', fontSize: '0.9rem', verticalAlign: 'middle', marginLeft: '10px' }}>{content.responseTime}</span></>
                )}
            </h2>
            <p style={{ color: '#64748b', marginBottom: '30px', fontSize: '0.95rem' }}>{content.subtitle}</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#475569' }}>{content.nameLabel}</label>
                        <input 
                            required
                            type="text" 
                            placeholder={content.namePlaceholder} 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none', color: '#1e293b' }} 
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#475569' }}>{content.phoneLabel}</label>
                        <input 
                            required
                            type="tel" 
                            placeholder={content.phonePlaceholder} 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none', color: '#1e293b' }} 
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#475569' }}>{content.serviceLabel}</label>
                        <select 
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', background: '#f8fafc', cursor: 'pointer', outline: 'none', color: '#1e293b' }}
                        >
                            {isArabic ? (
                                <>
                                    <option>كهربائي</option>
                                    <option>سباك</option>
                                    <option>نظام انتركم</option>
                                    <option>إصلاح مكيفات</option>
                                    <option>صيانة عامة</option>
                                </>
                            ) : (
                                <>
                                    <option>Electrician</option>
                                    <option>Plumber</option>
                                    <option>Intercom System</option>
                                    <option>AC Repair</option>
                                    <option>General Maintenance</option>
                                </>
                            )}
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#475569' }}>{content.locationLabel}</label>
                        <input 
                            required
                            type="text" 
                            placeholder={content.locationPlaceholder} 
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none', color: '#1e293b' }} 
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#475569' }}>{content.descLabel}</label>
                    <textarea 
                        required
                        placeholder={content.descPlaceholder} 
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #cbd5e1', background: '#f8fafc', minHeight: '100px', outline: 'none', resize: 'vertical', color: '#1e293b' }}
                    ></textarea>
                </div>

                <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ 
                        marginTop: '10px', 
                        width: '100%', 
                        padding: '18px', 
                        borderRadius: '12px', 
                        fontSize: '1.1rem',
                        background: isSubmitting ? '#ccc' : '#25D366',
                        borderColor: isSubmitting ? '#ccc' : '#25D366',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                    }}
                >
                    {isSubmitting ? content.processing : (
                        <>
                            <WhatsAppIcon size={24} /> {content.submitButton}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
