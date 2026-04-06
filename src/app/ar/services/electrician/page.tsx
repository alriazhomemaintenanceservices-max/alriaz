import Link from "next/link";
import { Zap, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Wrench, ShieldAlert, BadgeCheck, Star, Lightbulb, ThermometerSun, AlertTriangle, ZapOff, Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Accordion from "@/components/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "كهربائي في السعودية – إصلاح كهرباء طارئ 24 ساعة",
    description: "هل تحتاج إلى كهربائي في السعودية؟ فنيون مرخصون، استجابة سريعة للطوارئ، وصيانة كهربائية بأسعار معقولة. انقطاع الكهرباء؟ اتصل الآن للإصلاح الآمن!",
    alternates: {
        canonical: '/ar/services/electrician'
    }
};

export default function ArabicElectricianPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "أحتاج إلى كهربائي خبير لإصلاح طارئ.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main dir="rtl" style={{ paddingTop: '100px', background: '#ffffff', color: 'var(--foreground)', fontFamily: 'var(--font-cairo)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/ar">الرئيسية</Link> / <Link href="/ar/services">الخدمات</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>كهربائي</span>
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
                                 خدمات الكهرباء السكنية والتجارية
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                            }}>
    كهربائي خبير 24/7 في السعودية
</h1>
                            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '40px', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: '750px' }}>
                                هل تبحث عن كهربائي معتمد في السعودية؟ نحن نقدم <strong>صيانة سكنية وتجارية فاخرة</strong> مع ضمان الوصول خلال 45 دقيقة. من التماسات الكهربائية الطارئة إلى الإضاءة الصناعية، نضمن <strong>الحل في نفس اليوم</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> احجز الآن
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    اتصل الآن
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Service Summary Block */}
            <section style={{ background: '#f8fafc', padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="card hover-lift" style={{ border: '2px solid #25D366', background: 'white', padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#166534', marginBottom: '15px' }}>
                            <Zap size={20} fill="#25D366" color="#25D366" /> ملخص التكلفة والتوفر
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#1e293b', margin: 0 }}>
                            الاستعانة بكهربائي معتمد يضمن لك السلامة والجودة. يقدم خبراء المنزل السعودي خدمات في نفس اليوم على مدار الساعة طوال أيام الأسبوع في جميع أنحاء المملكة مع عروض أسعار شفافة تماماً ولا توجد رسوم خفية.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>لماذا تختار خبراء المنزل السعودي؟</h2>
                        <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '0 auto' }}>مع أكثر من عقد من الخبرة الميدانية، قمنا بتطوير خدماتنا لتلبية أعلى المعايير المتوقعة في المملكة.</p>
                    </div>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#eff6ff', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <BadgeCheck size={40} color="var(--primary)" />
                            </div>
                            <h3>12+ سنة خبرة</h3>
                            <p style={{ color: 'var(--muted)' }}>تعاملنا مع المخططات الكهربائية لآلاف الفلل والاشقق منذ عام 2012.</p>
                        </div>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#ecfdf5', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <ThermometerSun size={40} color="#10b981" />
                            </div>
                            <h3>خبرة في المناخ المحلي</h3>
                            <p style={{ color: 'var(--muted)' }}>نحن متخصصون في موازنة الأحمال الصيفية لأنظمة التكييف، مما يمنع الأحمال الزائدة خلال موجات الحر.</p>
                        </div>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#fffbeb', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <ShieldAlert size={40} color="#f59e0b" />
                            </div>
                            <h3>فلسفة السلامة أولاً</h3>
                            <p style={{ color: 'var(--muted)' }}>يتبع فنيونا بروتوكولات سلامة صارمة لضمان عدم وجود خطر حريق لممتلكاتك.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Common Problems */}
            <section className="section animate-fade-in" style={{ background: '#f1f5f9' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
                        <div style={{ padding: '40px', background: 'white', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ marginBottom: '30px' }}>حلول حقيقية للمشاكل الكهربائية الشائعة</h2>
                            <p style={{ marginBottom: '20px', lineHeight: 1.8 }}>يواجه كل صاحب منزل تحديات كهربائية عاجلاً أم آجلاً. من خبرتنا، تسبب البيئة المحلية أعطالاً معينة في المكونات لا يدركها المصلحون العاديون.</p>
                            <ul style={{ display: 'grid', gap: '20px' }}>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <AlertTriangle color="red" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>انقطاع القاطع الرئيسي:</strong> غالباً ما يحدث بسبب الأحمال غير المتوازنة مع عمل المكيفات بكثافة. نعيد موازنة لوحتك الكهربائية لتحقيق الاستقرار.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <ZapOff color="orange" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>احتراق العزل:</strong> الحرارة الشديدة يمكن أن تذيب الأسلاك منخفضة الجودة. نستبدلها بكابلات ساسو المقاومة للحرارة.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <Sparkles color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>أعطال النجف الفاخر:</strong> تحتاج الثريات الراقية غالباً إلى تثبيت جهد متخصص للتعامل مع تقلبات الشبكة.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>نحن لا نصلح المشاكل فحسب؛ بل نهندس حلولاً دائمَة.</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '30px' }}>عملية التشخيص لدينا هي ما يميزنا. نستخدم كاميرات التصوير الحراري لرصد "النقاط الساخنة" في جدرانك قبل أن تتحول إلى حرائق كهربائية.</p>
                            <Link href="/ar/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                احجز فحص السلامة <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Section */}
            <section className="section animate-fade-in" id="pricing">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>استراتيجية تسعير شفافة</h2>
                        <p style={{ color: 'var(--muted)' }}>تعرف التكلفة قبل البدء. لا توجد رسوم خفية.</p>
                    </div>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>احصل على عرض سعر مخصص</h3>
                            <p style={{ lineHeight: 1.7, color: 'var(--muted)', marginBottom: '30px' }}>
                                نحن نقدم عروض أسعار عادلة ومفصلة بعد تشخيص المشكلة. يضمن ذلك إمكانية إرسال فني خبير ومعتمد مع ورشة عمل مجهزة بالكامل إلى موقعك على الفور.
                            </p>
                            <a href={whatsappUrl} className="btn btn-accent" style={{ background: '#25D366', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                <WhatsAppIcon size={20} /> احصل على عرض سعر
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Process Section */}
            <section className="section animate-fade-in" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>كيف تحجز كهربائي في 3 خطوات بسيطة</h2>
                    <div className="grid grid-3" style={{ gap: '40px', textAlign: 'center' }}>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>1</div>
                            <h3>حجز فوري</h3>
                            <p style={{ opacity: 0.8 }}>راسلنا على واتساب بموقعك وصورة للمشكلة. نؤكد موعدك بسرعة.</p>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>2</div>
                            <h3>تشخيص الخبير</h3>
                            <p style={{ opacity: 0.8 }}>يصل كهربائينا الخبير، ويشخص العطل بأدوات حديثة، ويعطيك عرض سعر ثابتاً.</p>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>3</div>
                            <h3>إصلاح معتمد</h3>
                            <p style={{ opacity: 0.8 }}>يتم إكمال العمل باستخدام قطع غيار ساسو. نختبر الاستقرار، ونقدم ضماناً، ونترك مكانك مرتباً.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQs Section */}
            <section id="faq" className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>إجابات الخبراء (الأسئلة الشائعة)</h2>
                    <Accordion items={[
                        {
                            title: "هل هناك رسوم إضافية لمكالمات الطوارئ بعد منتصف الليل؟",
                            content: "نحن نحافظ على تسعير عادل لمكالمات ما بعد ساعات العمل. يتعامل مركز الاتصال لدينا مع حالات الطوارئ في منتصف الليل برسوم قياسية لضمان إمكانية الوصول للجميع."
                        },
                        {
                            title: "هل تقومون بتركيب مفاتيح المنزل الذكي؟",
                            content: "نعم. نحن متخصصون في تحديث الفلل التقليدية بمفاتيح ذكية وضمان أن نظامك الكهربائي آمن."
                        }
                    ]} />
                </div>
            </section>

            {/* 10. Final CTAs */}
            <section className="section animate-fade-in" style={{ textAlign: 'center', background: 'var(--grad-primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>هل أنت جاهز لاستعادة الكهرباء؟</h2>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: 0.9 }}>متاحون 24/7 في جميع أنحاء المملكة. فرق الطوارئ في أهبة الاستعداد الآن.</p>
                    <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white', padding: '25px 60px', fontSize: '1.4rem' }}>
                            <WhatsAppIcon size={30} /> احجز الآن
                        </a>
                        <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white', padding: '25px 60px', fontSize: '1.4rem' }}>
                            <Phone size={30} /> اتصل بخط المساعدة
                        </a>
                    </div>
                </div>
            </section>

        </main >
    );
}
