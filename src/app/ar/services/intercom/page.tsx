import Link from "next/link";
import { Shield, MapPin, CheckCircle, ArrowRight, Video, Smartphone, Lock, BadgeCheck, Star, ShieldCheck, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Accordion from "@/components/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "تركيب انتركم في السعودية – فنيون معتمدون – خبراء المنزل السعودي",
    description: "هل تحتاج إلى نظام انتركم في السعودية؟ فنيون مرخصون، استجابة سريعة، وأسعار معقولة. اتصل الآن للحصول على خدمة في نفس اليوم في جميع أنحاء المملكة.",
    alternates: {
        canonical: '/ar/services/intercom'
    }
};

export default function ArabicIntercomPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "أحتاج إلى خبير لنظام الانتركم. يرجى تقديم عرض سعر.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main dir="rtl" style={{ paddingTop: '100px', background: '#ffffff', fontFamily: 'var(--font-cairo)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/ar">الرئيسية</Link> / <Link href="/ar/services">الخدمات</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>انتركم</span>
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
                                حلول أمنية ذكية
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                            }}>
                                أفضل تركيب انتركم في السعودية – أمن ذكي
</h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '40px', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '700px' }}>
                                امن منزلك بنظام انتركم متميز في المملكة العربية السعودية. خبراء المنزل السعودي متخصصون في أجراس الأبواب بالفيديو، أنظمة دخول المجمعات السكنية، وتكامل الأقفال الذكية للمشاريع الفاخرة.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> راسل خبير الأمن
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    اتصل الآن
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EEAT Section */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '20px' }}>لماذا تختار خبراء المنزل السعودي؟</h2>
                            <p style={{ marginBottom: '20px', color: 'var(--muted)', lineHeight: '1.6' }}>
                                مع أكثر من عقد من الخبرة في تركيب أنظمة الانتركم، نحن نفهم الاحتياجات الأمنية المحددة للمجمعات الفاخرة والفلل المستقلة في المملكة. فنيونا مدربون من قبل المصنع لأهم العلامات التجارية العالمية.
                            </p>
                            <div style={{ display: 'grid', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={20} color="var(--primary)" /> فنيو أمن مرخصون</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={20} color="var(--primary)" /> أكثر من 1700 تركيب ناجح</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={20} color="var(--primary)" /> ضمان جودة لمدة 12 شهراً</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ background: 'var(--card)', border: '2px dashed var(--border)', padding: '50px', borderRadius: '40px' }}>
                                <Smartphone size={60} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '1.4rem' }}>تكامل كامل مع الجوال</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>افتح بابك من أي مكان في العالم.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Process Clarification */}
            <section className="section animate-fade-in" style={{ background: 'var(--secondary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>تركيب بسيط في 4 خطوات</h2>
                    <div className="grid grid-4" style={{ gap: '20px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>01. معاينة الموقع</h3>
                            <p style={{ fontSize: '0.85rem' }}>نفحص الأسلاك الموجودة ونقاط الدخول.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>02. اختيار النظام</h3>
                            <p style={{ fontSize: '0.85rem' }}>اختر بين أنظمة الصوت، الفيديو، أو التطبيقات الذكية.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>03. تركيب احترافي</h3>
                            <p style={{ fontSize: '0.85rem' }}>تنظيم الأسلاك وتركيب الوحدات الخارجية بشكل لائق.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>04. التدريب</h3>
                            <p style={{ fontSize: '0.85rem' }}>نقوم بشرح التطبيق وإعدادات النظام لك.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Case Study */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div className="card hover-lift" style={{ padding: '50px', border: '1px solid var(--border)' }}>
                        <div className="grid grid-2" style={{ alignItems: 'center' }}>
                            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '40px' }}>
                                <h2 style={{ marginBottom: '20px' }}>تطوير حديث: مجمع سكني</h2>
                                <p style={{ color: 'var(--muted)' }}>
                                    قمنا مؤخراً بترقية مبنى سكني من هواتف تماثلية قديمة إلى انتركم فيديو IP. قمنا بتركيب موزع مركزي مع شاشات داخلية وخاصية التعرف على الوجوه للسكان. تم تشغيل النظام في 48 ساعة.
                                </p>
                            </div>
                            <div style={{ paddingRight: '40px', textAlign: 'center' }}>
                                <Star fill="var(--accent)" color="var(--accent)" size={48} />
                                <p style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '20px' }}>"الدخول عبر التعرف على الوجوه غير قواعد اللعبة. تركيب مثالي!"</p>
                                <p style={{ opacity: 0.7 }}>- مدير المبنى</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PAA (FAQ) */}
            <section className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>إجابات الخبراء (الأسئلة الشائعة)</h2>
                    <Accordion items={[
                        {
                            title: "هل يمكنك إصلاح نظام انتركم معطل؟",
                            content: "نعم، بالإضافة إلى التركيبات الجديدة، نقدم خدمات إصلاح واستكشاف أخطاء لجميع العلامات التجارية الكبرى مثل Commax و Panasonic و Farfisa."
                        },
                        {
                            title: "هل تتطلب أجهزة الانتركم الذكية إنترنت عالي السرعة؟",
                            content: "لبث الفيديو إلى هاتفك، يوصى باتصال إنترنت مستقر في المنزل للحصول على أفضل تجربة."
                        }
                    ]} />
                </div>
            </section>

            {/* 8. Final CTA */}
            <section className="section animate-fade-in" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>أمن منزلك اليوم</h2>
                    <p style={{ marginBottom: '40px' }}>خبراء انتركم مرخصون متاحون في جميع أنحاء المملكة.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white' }}>
                        <WhatsAppIcon size={24} /> احصل على عرض سعر مجاني
                    </a>
                </div>
            </section>
        </main>
    );
}
