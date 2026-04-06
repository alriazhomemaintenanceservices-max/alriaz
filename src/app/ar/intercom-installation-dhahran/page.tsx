import Link from "next/link";
import { ShieldCheck, MapPin, CheckCircle, Phone, BadgeCheck, Clock, ArrowRight, Languages } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "تركيب انتركم في الظهران | خدمة تركيب انتركم معتمدة 24 ساعة",
    description: "أفضل تركيب انتركم في الظهران. متخصصون في video intercom, ip systems & access control. خدمة 24 ساعة، قطع غيار أصلية، وأسعار تنافسية. اتصل الآن!",
    alternates: {
        canonical: "https://saudihomeexperts.com/ar/intercom-installation-dhahran",
        languages: {
            'en-US': "https://saudihomeexperts.com/intercom-installation-dhahran"
        }
    }
};

export default function ArabicIntercomInstallationDhahranPage() {
    const whatsappUrl = "https://wa.me/966508901536?text=I%20need%20Intercom Installation%20service%20in%20Dhahran";

    return (
        <main dir="rtl" style={{ paddingTop: '100px', lineHeight: '1.8', color: '#1e293b', fontFamily: 'var(--font-cairo)' }}>
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
                <div><Link href="/ar">الرئيسية</Link> / <Link href="/ar/services">الخدمات</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>تركيب انتركم الظهران</span></div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <Link href="/intercom-installation-dhahran" style={{ fontWeight: 500 }}>English</Link>
                    <Link href="/ar/intercom-installation-dhahran" style={{ fontWeight: 800, color: 'var(--primary)', borderBottom: '2px solid' }}>العربية</Link>
                </div>
            </nav>

            <section className="section animate-fade-in" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#ecfdf5', color: '#059669', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
                                <BadgeCheck size={16} /> خدمة معتمدة في الظهران
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#0f172a' }}>
                                أفضل تركيب انتركم في الظهران
                                
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '40px', maxWidth: '600px' }}>
                                هل تبحث عن <strong>تركيب انتركم ممتاز</strong> في الظهران؟ نوفر خدمات صيانة واحترافية للفلل والشقق والمباني التجارية مع ضمان الجودة.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '20px 40px', fontSize: '1.2rem', fontWeight: 700 }}>
                                    <WhatsAppIcon size={24} style={{ marginLeft: '10px' }} /> اطلب الخدمة الآن
                                </a>
                                <a href="tel:+966508901536" className="btn" style={{ border: '2px solid var(--border)', padding: '20px 40px', fontSize: '1.2rem', fontWeight: 700 }}>
                                    <Phone size={24} style={{ marginLeft: '10px' }} /> اتصل بالفني
                                </a>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }} className="hide-mobile">
                             <div style={{ background: '#f8fafc', padding: '50px', borderRadius: '40px', border: '1px solid var(--border)' }}>
                                <ShieldCheck size={80} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>صيانة تركيب انتركم احترافية</h2>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px', color: '#475569', textAlign: 'right' }}>
                                    <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}><Clock size={24} color="var(--primary)" /> <div>وصول سريع لجميع أحياء الظهران.</div></li>
                                    <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}><ShieldCheck size={24} color="var(--primary)" /> <div>استخدام قطع غيار معتمدة من ساسو.</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#0f172a', color: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>خطوات العمل الفني</h2>
                    </div>
                    <div className="grid grid-4" style={{ gap: '30px' }}>
                        
                        <div key={0} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>خطوة 01</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>تقييم الموقع</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>نحدد أفضل زوايا الكاميرا للرؤية.</p>
                        </div>
                        <div key={1} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>خطوة 02</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>تأسيس التمديدات</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>تركيب كابلات CAT6 عالية السرعة.</p>
                        </div>
                        <div key={2} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>خطوة 03</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>إعداد التطبيق</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>نربط النظام بتطبيقات الجوال للتحكم عن بعد.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>حلول متكاملة في الظهران</h2>
                    <div className="grid grid-2" style={{ gap: '40px' }}>
                        
                        <div className="card" style={{ padding: '40px', background: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0f172a' }}>أنظمة الانتركم المرئي</h3>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> انتركم هيك فيجن IP
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> الاتصال عبر التطبيق
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> جرس مرئي بليلة واضحة
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ padding: '40px', background: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0f172a' }}>أنظمة التحكم في الدخول</h3>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> أنظمة الشقق المتعددة
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> الدخول بالبصمة البيومترية
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> أنظمة كلمة المرور
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>الأحياء المشمولة في الظهران</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                        <span style={{ background: 'white', border: '1px solid #e2e8f0', padding: '12px 30px', borderRadius: '50px', fontWeight: 600 }}>Al-Dana</span><span style={{ background: 'white', border: '1px solid #e2e8f0', padding: '12px 30px', borderRadius: '50px', fontWeight: 600 }}>Al-Doha</span><span style={{ background: 'white', border: '1px solid #e2e8f0', padding: '12px 30px', borderRadius: '50px', fontWeight: 600 }}>Al-Thumamah</span>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>الأسئلة الشائعة</h2>
                    <div style={{ display: 'grid', gap: '30px' }}>
                        
                        <div style={{ background: '#f8fafc', padding: '35px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#0f172a', fontWeight: 800 }}>ما هي الماركات التي تقوم بتركيبها في الظهران؟</h3>
                            <p style={{ color: '#444', fontSize: '1.1rem' }}>نحن متخصصون في أنظمة هيك فيجن وداهوا وكوماكس.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>احصل على مساعدة خبير اليوم</h2>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: 'white', color: 'var(--primary)', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 800, borderRadius: '50px' }}>
                            واتساب
                        </a>
                        <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 800, borderRadius: '50px' }}>
                            اتصل الآن
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
