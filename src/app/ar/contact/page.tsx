import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, Map, Star } from 'lucide-react';
import ActionForm from "@/components/ActionForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "اتصل بنا | خبراء المنزل السعودي بالرياض"
    },
    alternates: {
        canonical: '/ar/contact/'
    },
    description: "اتصل بخبراء المنزل السعودي لخدمات الكهرباء والسباكة والانتركم على مدار الساعة في الرياض. حجز سريع عبر واتساب وتقديرات مجانية.",
};

export default function ArabicContactPage() {
    const whatsappNumber = "966508901536";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=مرحباً، أحتاج إلى فني في الرياض.`;

    return (
        <main dir="rtl" style={{ paddingTop: '120px', paddingBottom: '80px', fontFamily: 'var(--font-cairo)' }}>
            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/ar">الرئيسية</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>اتصل بنا</span>
            </nav>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>تواصل معنا</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted)', fontSize: '1.1rem' }}>
                        أسرع طريقة للوصول إلينا هي عبر واتساب. فريق الدعم الميداني لدينا متاح 24/7 لإصلاحات الطوارئ في جميع أحياء الرياض.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '60px', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ marginBottom: '30px' }}>معلومات الاتصال</h2>
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ padding: '15px', background: 'var(--card)', borderRadius: '15px', color: 'var(--primary)' }}>
                                    <WhatsAppIcon size={30} />
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <h4 style={{ marginBottom: '5px' }}>واتساب (24/7)</h4>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary)' }}>
                                        966 50 890 1536+
                                    </a>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>استجابة فورية للحالات الطارئة.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ padding: '15px', background: 'var(--card)', borderRadius: '15px', color: 'var(--primary)' }}>
                                    <MapPin size={30} />
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <h4 style={{ marginBottom: '5px' }}>منطقة الخدمة</h4>
                                    <p style={{ fontSize: '1.1rem' }}>الرياض، المملكة العربية السعودية</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>نخدم: قرطبة، إشبيلية، اليرموك، النرجس، الياسمين، الصحافة، الفلاح، غرناطة، الربيع، الندى.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ padding: '15px', background: 'var(--card)', borderRadius: '15px', color: 'var(--primary)' }}>
                                    <Clock size={30} />
                                </div>
                                <div style={{ marginRight: '20px' }}>
                                    <h4 style={{ marginBottom: '5px' }}>أوقات العمل</h4>
                                    <p style={{ fontSize: '1.1rem' }}>مفتوح 24 ساعة / 7 أيام</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>الأولوية لحالات طوارئ الكهرباء وتسربات السباكة.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '50px', padding: '30px', background: 'var(--grad-primary)', borderRadius: '30px', color: 'white' }}>
                            <h3 style={{ marginBottom: '15px' }}>حالة طوارئ؟</h3>
                            <p style={{ marginBottom: '20px', opacity: 0.9 }}>أرسل موقعك عبر واتساب وسنقوم بإرسال أقرب فني إليك فوراً.</p>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ background: '#25D366', color: 'white', border: 'none', marginTop: '8px' }}>
                                راسلنا على واتساب
                            </a>
                        </div>
                    </div>

                    <div style={{ background: 'transparent' }}>
                        <ActionForm />
                    </div>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--border)' }}>
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '20px' }}>شاركنا تجربتك</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '20px' }}>
                                هل أنت راضٍ عن خدمة صيانة خبراء المنزل السعودي؟ ملاحظاتك تساعد جيرانك في العثور على مساعدة موثوقة.
                            </p>
                            <div style={{ display: 'flex', gap: '5px', color: 'var(--accent)', marginBottom: '20px' }}>
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '2px solid var(--secondary)', background: 'transparent', color: 'var(--secondary)', display: 'inline-flex' }}>
                                قيمنا على جوجل
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
