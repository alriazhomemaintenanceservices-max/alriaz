import React from 'react';
import Link from 'next/link';
import { Zap, Droplets, ShieldCheck, ArrowRight, CheckCircle, Clock, MapPin, Wrench, Shield, Smartphone, Star, BadgeCheck, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "خدمات صيانة المنزل في السعودية | سباك، كهربائي وانتركم"
    },
    alternates: {
        canonical: '/ar/services'
    },
    description: "خدمات سباكة وكهرباء وتركيب انتركم ذكي معتمدة في السعودية. نقدم صيانة منزلية وإصلاح عقارات على مدار الساعة طوال أيام الأسبوع.",
};

const SERVICES = [
    {
        title: "خدمات الكهرباء",
        description: "حلول كهربائية خبيرة للفلل الفاخرة والعقارات التجارية في جميع أنحاء المملكة. نحن متخصصون في استكشاف الأخطاء المعقدة وإصلاحات السلامة أولاً.",
        features: [
            "إصلاح ماس كهربائي طارئ 24/7",
            "موازنة أحمال لوحات التوزيع",
            "تركيب نجف وثريات فاخرة",
            "إعداد الإضاءة الذكية والمفاتيح",
            "فحص السلامة المعتمد من ساسو"
        ],
        icon: <Zap size={32} />,
        href: "/ar/electrician-riyadh",
        color: "#3b82f6",
        bg: "#eff6ff"
    },
    {
        title: "خدمات السباكة",
        description: "خدمات سباكة وكشف تسربات في جميع مدن المملكة الرئيسية. نستخدم تكنولوجيا الموجات فوق الصوتية للعثور على التسربات وإصلاحها دون تكسير.",
        features: [
            "كشف التسربات بالموجات الصوتية",
            "تنظيف عميق لخزانات المياه",
            "تركيب وإصلاح مضخات الضغط",
            "صيانة سخانات أريستون وميلانو",
            "أنظمة فلاتر المياه المركزية"
        ],
        icon: <Droplets size={32} />,
        href: "/ar/plumber-riyadh",
        color: "#06b6d4",
        bg: "#ecfeff"
    },
    {
        title: "الانتركم والأمن",
        description: "حدث أمن منزلك بأنظمة دخول الفيديو عالية الدقة والتحكم الذكي من خلال هاتفك الذكي.",
        features: [
            "تركيب جرس فيديو بدقة 4K",
            "أنظمة تحكم للشقق المتعددة",
            "الربط مع تطبيقات الجوال",
            "تركيب أقفال الأبواب بالبصمة",
            "صيانة عامة لأنظمة الانتركم"
        ],
        icon: <ShieldCheck size={32} />,
        href: "/ar/intercom-installation-riyadh",
        color: "#6366f1",
        bg: "#eef2ff"
    },
];

export default function ArabicServicesPage() {
    const whatsappNumber = "966508901536";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=مرحباً خبراء المنزل السعودي، أنا مهتم بخدماتكم.`;

    return (
        <main dir="rtl" style={{ paddingTop: '80px', background: '#fff', fontFamily: 'var(--font-cairo)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/ar">الرئيسية</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>الخدمات</span>
            </nav>

            {/* 1. HERO SECTION */}
            <section style={{
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="animate-fade-in">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                                حلول متكاملة
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                            }}>
                                صيانة وإصلاح منزلية <span style={{ color: 'var(--primary)' }}>بخبرة احترافية</span> <br />
                                في المملكة العربية السعودية
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '40px', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '700px' }}>
                                شريكك الموثوق للحلول المتخصصة في الكهرباء والسباكة والأمن. فنيون مرخصون متاحون 24/7 في مدن المملكة الرئيسية.
                            </p>
                            <div className="hero-btn-group" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> اطلب الخدمة الآن
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    خدمة العملاء
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section style={{ background: '#f8fafc', padding: '30px 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="grid grid-4" style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <BadgeCheck size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>معتمد من ساسو</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <Clock size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>طوارئ 24/7</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <Shield size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>ضمان 30 يوماً</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                            <MapPin size={24} color="var(--primary)" /> <span style={{ fontWeight: 600 }}>جميع الرياض</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services list */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div style={{ display: 'grid', gap: '60px' }}>
                        {SERVICES.map((service, index) => (
                            <div key={index} className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
                                <div>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: service.bg, color: service.color, borderRadius: '12px', marginBottom: '25px', fontWeight: 800 }}>
                                        {service.icon} {service.title}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{service.title}</h2>
                                    <p style={{ fontSize: '1.2rem', color: 'var(--muted)', marginBottom: '30px', lineHeight: 1.6 }}>
                                        {service.description}
                                    </p>
                                    <ul style={{ display: 'grid', gap: '15px', marginBottom: '40px' }}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                                                <CheckCircle size={20} color="#22c55e" /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={service.href} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 35px' }}>
                                        عرض تفاصيل {service.title} <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                                    </Link>
                                </div>
                                <div style={{ background: 'var(--card)', padding: '40px 30px', borderRadius: '30px', border: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: service.color, opacity: 0.05, borderRadius: '50%' }}></div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', color: service.color }}>خيار الخبراء</div>
                                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--muted)', marginBottom: '30px' }}>
                                        "فرقنا المتخصصة تستخدم أحدث التشخيصات لضمان أن {service.title} آمنة وفعالة وطويلة الأمد."
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', color: 'var(--accent)', marginBottom: '10px' }}>
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <div style={{ fontWeight: 800 }}>تقييم 5.0 في جميع أنحاء المملكة</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section animate-fade-in" style={{ background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '750px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>لا تنتظر حدوث كارثة صيانة</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>
                            سواء كان ضوءاً يرمش، تسرباً مخفياً، أو تحديثاً أمنياً، احصل على عرض سعر فوري ودعم في نفس اليوم.
                        </p>
                        <div className="hero-btn-group" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white' }}>
                                <WhatsAppIcon size={24} /> راسلنا الآن
                            </a>
                            <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white' }}>
                                اتصل بخط المساعدة
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
