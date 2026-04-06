import Link from "next/link";
import { Droplets, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Wrench, Waves, BadgeCheck, Star, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Accordion from "@/components/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "سباك في السعودية – إصلاح سباكة طارئ 24 ساعة",
    description: "هل تبحث عن سباك في السعودية؟ إصلاحات سريعة للتسربات، فنيون مرخصون، وخدمات سباكة بأسعار معقولة على مدار 24 ساعة. اتصل الآن لإصلاح الأنابيب الطارئ.",
    alternates: {
        canonical: '/ar/services/plumber'
    }
};

export default function ArabicPlumbingPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "أحتاج إلى سباك خبير لإصلاح طارئ.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main dir="rtl" style={{ paddingTop: '100px', background: '#ffffff', fontFamily: 'var(--font-cairo)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/ar">الرئيسية</Link> / <Link href="/ar/services">الخدمات</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>سباك</span>
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
                                 خدمات السباكة السكنية والتجارية
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                            }}>
    سباك خبير 24/7 في السعودية
</h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '40px', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '750px' }}>
                                هل تبحث عن سباك معتمد في السعودية؟ نحن نقدم <strong>حلول سباكة سكنية وتجارية</strong> مع ضمان الوصول خلال 45 دقيقة. من كشف تسربات الفلل إلى صيانة المحلات، نضمن <strong>إعادة التشغيل في نفس اليوم</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> احصل على سعر فوري
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    اتصل الآن
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>خدمة سباك خبير في جميع أنحاء المملكة</h2>
                    <div className="card hover-lift" style={{ padding: '40px' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '30px', textAlign: 'center' }}>
                            هل تحتاج إلى عرض سعر لمشروع السباكة الخاص بك؟ بما أن كل إصلاح فريد من نوعه، فإننا نقدم عروض أسعار فورية مجانية عبر واتساب. ما عليك سوى مشاركة صورة أو وصف للمشكلة، وسيقوم خبراؤنا بتقديم تقدير شفاف.
                        </p>
                        <div className="grid grid-2" style={{ gap: '20px' }}>
                            <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '15px' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.2rem' }}>✓ لماذا تختار خبراء المنزل السعودي؟</h3>
                                <ul style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                    <li>فحص الضغط المتوافق مع ساسو</li>
                                    <li>كشف وإصلاح التسربات في نفس اليوم</li>
                                    <li>خبرة في الفلل والأبراج السكنية</li>
                                    <li>استجابة طوارئ على مدار الساعة</li>
                                </ul>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', border: 'none', padding: '20px', fontSize: '1.1rem' }}>
                                    <WhatsAppIcon size={24} style={{ marginLeft: '10px' }} /> احصل على عرض سعر فوري
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section animate-fade-in">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '20px' }}>مكافحة مشاكل المياه العسرة</h2>
                            <p style={{ marginBottom: '20px', color: 'var(--muted)', lineHeight: 1.6 }}>
                                يمكن أن تكون إمدادات المياه في السعودية عالية المعادن، مما يؤدي إلى تراكم سريع للقشور في الأنابيب وسخانات المياه. كشريك سباكة موثوق، نقدم خدمات إزالة الترسبات المتخصصة وتركيبات فلاتر المياه عالية الجودة لحماية تركيبات الفلل الفاخرة والأجهزة.
                            </p>
                            <div style={{ display: 'grid', gap: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Waves size={20} color="var(--primary)" /> تنظيف وتعقيم عميق للخزانات</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Waves size={20} color="var(--primary)" /> تركيب وإصلاح مضخات الضغط</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Waves size={20} color="var(--primary)" /> إزالة الترسبات من السخانات المركزية</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ background: 'var(--grad-primary)', padding: '50px', borderRadius: '40px', color: 'white' }}>
                                <h3 style={{ fontSize: '3rem', marginBottom: '10px' }}>5000+</h3>
                                <p style={{ fontSize: '1.2rem' }}>تسرب تم إصلاحه في السعودية</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section animate-fade-in" style={{ background: 'var(--secondary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>احجز سباكك فوراً</h2>
                    <div className="grid grid-3">
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>01. احجز</h3>
                            <p style={{ opacity: 0.8 }}>راسلنا بمشكلتك وموقعك.</p>
                        </div>
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>02. تتبع</h3>
                            <p style={{ opacity: 0.8 }}>احصل على رابط تتبع لوصول الفني.</p>
                        </div>
                        <div className="card hover-lift" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none' }}>
                            <h3 style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>03. أنجز</h3>
                            <p style={{ opacity: 0.8 }}>ادفع عبر مدى أو Apple Pay بعد الانتهاء.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section animate-fade-in" style={{ background: '#fff' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>أكثر 5 حالات طوارئ سباكة شيوعاً</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: 'انفجار أنابيب المياه', text: 'شائع جداً في ذروة الصيف أو بسبب تغيرات ضغط الأرض. يتطلب عزلاً فورياً وإصلاحاً معتمداً.' },
                            { title: 'انسداد الصرف الصحي', text: 'سيناريوهات خطيرة تشمل انسداد خطوط الصرف الرئيسية. نستخدم قواطع الجذور ونفث الضغط العالي.' },
                            { title: 'عطل سخان المياه', text: 'أمر بالغ الأهمية خلال الشتاء. يمكن أن تسبب الخزانات المسربة تماساً كهربائياً وأضراراً كبيرة بسبب الفيضانات.' },
                            { title: 'ضعف الضغط والتسريب', text: 'غالباً ما يكون بسبب تسربات ثقب الدبوس الداخلية في أنابيب PPR داخل الجدران. نستخدم التصوير الحراري للكشف.' },
                            { title: 'انسداد أنظمة التصريف', text: 'يتراكم الشعر والشحوم والحطام بمرور الوقت. التطهير الاحترافي يضمن حلاً طويل الأمد.' }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '24px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: '#0f172a' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>الأسئلة الشائعة</h2>
                    <Accordion items={[
                        {
                            title: "هل تقدمون خدمات السباكة في أيام الجمعة/نهاية الأسبوع؟",
                            content: "نعم! لدينا فريق طوارئ متاح كل جمعة وسبت للتعامل مع الانفجارات وحالات الطوارئ في جميع أنحاء المملكة."
                        },
                        {
                            title: "كيف أعرف إذا كان سخان المياه الخاص بي يحتاج إلى إصلاح؟",
                            content: "الماء الملون بالصدأ، الأصوات الغريبة، أو عدم كفاية الحرارة هي إشارات رئيسية. يجب أن يفحصه خبير سباكة فوراً لتجنب انفجار الخزان."
                        }
                    ]} />
                </div>
            </section>

            <section className="section animate-fade-in" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>دعم سباكة عالي التقييم</h2>
                    <p style={{ marginBottom: '40px' }}>احصل على رد خلال 5 دقائق عبر واتساب.</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white' }}>
                        <WhatsAppIcon size={24} /> راسلنا الآن
                    </a>
                </div>
            </section>
        
        </main>
    );
}
