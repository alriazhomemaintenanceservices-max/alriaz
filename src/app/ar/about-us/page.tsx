import Link from "next/link";
import { Award, Users, ShieldCheck, Clock, MapPin, Phone, CheckCircle, Smile, Briefcase } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "من نحن | خبراء المنزل السعودي بالرياض"
    },
    description: "تعرف على خبراء المنزل السعودي، الشريك الموثوق لخدمات التكييف والسباكة والكهرباء في الرياض منذ عام 2012. مهمتنا هي الجودة والموثوقية ورضا العملاء.",
    alternates: {
        canonical: '/ar/about-us/'
    },
};

export default function ArabicAboutUsPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "مرحباً، أود معرفة المزيد عن خدمات خبراء المنزل السعودي.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
        <main dir="rtl" style={{ background: '#FCFCFD', color: 'var(--foreground)', fontFamily: 'var(--font-cairo)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/ar">الرئيسية</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>من نحن</span>
            </nav>

            {/* 1. HERO SECTION */}
            <section style={{
                background: '#fff',
                padding: '0 0 60px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: 1.1,
                                fontWeight: 800,
                                color: '#1E293B',
                                marginBottom: '20px'
                            }}>
                                نبني الثقة في الرياض منذ عام 2012
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '30px' }}>
                                خبراء المنزل السعودي هم أكثر من مجرد مزود خدمة؛ نحن شركاؤك في إنشاء منزل آمن ومريح ومصان جيداً.
                            </p>
                            <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '40px', lineHeight: 1.6 }}>
                                تأسست رؤيتنا لتحويل صناعة صيانة المنازل في المملكة العربية السعودية إلى عمل احترافي، حيث تطورنا من فريق صغير من الفنيين إلى مزود خدمة رائد يغطي جميع أحياء الرياض الكبرى. التزامنا بالمواعيد والشفافية والتميز الفني هو ما يميزنا.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <a href="tel:+966508901536" className="btn" style={{ background: 'var(--secondary)', color: 'white', border: 'none', padding: '15px 30px', fontWeight: 700, borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Phone size={18} /> اتصل بنا
                                </a>
                                <a href={whatsappUrl} className="btn" style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '15px 30px', fontWeight: 700, borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <WhatsAppIcon size={18} /> تحدث معنا
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OUR MISSION / VISION */}
            <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '30px' }}>مهمتنا</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                تقديم خدمات صيانة منزلية متميزة يمكن للعائلات السعودية الاعتماد عليها. نهدف إلى القضاء على ضغوط إصلاحات المنزل من خلال توفير خبراء معتمدين، وضمان جودة العمل، وخدمة عملاء سلسة.
                            </p>
                            <ul style={{ display: 'grid', gap: '20px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '50%' }}><CheckCircle size={20} color="white" /></div>
                                    <span style={{ fontWeight: 600, color: '#334155' }}>معايير السلامة (متوافق مع ساسو)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '50%' }}><CheckCircle size={20} color="white" /></div>
                                    <span style={{ fontWeight: 600, color: '#334155' }}>تعاملات شفافة وصادقة</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '50%' }}><CheckCircle size={20} color="white" /></div>
                                    <span style={{ fontWeight: 600, color: '#334155' }}>احترام منزلك وخصوصيتك</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '30px' }}>رؤيتنا</h2>
                            <p style={{ lineHeight: 1.8, color: '#64748B', marginBottom: '30px' }}>
                                أن نصبح الاسم العائلي الأكثر ثقة في الرياض للخدمات الفنية، ونضع معياراً للاحترافية والخبرة الفنية في قطاع الصيانة السكنية في المملكة.
                            </p>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <Users size={30} color="var(--primary)" style={{ marginBottom: '10px' }} />
                                    <h4 style={{ fontWeight: 700, marginBottom: '5px' }}>+50 خبير</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#64748B' }}>فنيون مهرة</p>
                                </div>
                                <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <Smile size={30} color="var(--primary)" style={{ marginBottom: '10px' }} />
                                    <h4 style={{ fontWeight: 700, marginBottom: '5px' }}>+5,000 سعيد</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#64748B' }}>عملاء سكنيين</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES SECTION */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '20px' }}>قيمنا الجوهرية</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 60px', color: '#64748B' }}>
                        نحن نعمل بناءً على مجموعة من المبادئ الأساسية التي توجه كل تفاعل لنا مع عملائنا.
                    </p>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: "النزاهة", icon: <ShieldCheck size={40} color="var(--primary)" />, desc: "نحن صادقون في تقييماتنا. إذا لم يكن الإصلاح مطلوباً، فلن نقوم ببيعه." },
                            { title: "الالتزام بالمواعيد", icon: <Clock size={40} color="var(--primary)" />, desc: "نحن نقدر وقتك. يصل فنيونا ضمن النافذة المجدولة، في كل مرة." },
                            { title: "التميز", icon: <Award size={40} color="var(--primary)" />, desc: "نحن نوظف فنيين كبار يشخصون المشكلات بشكل صحيح من المرة الأولى." },
                        ].map((value, i) => (
                            <div key={i} className="card hover-lift" style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                                <div style={{ background: 'rgba(225, 29, 72, 0.05)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                    {value.icon}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#1E293B' }}>{value.title}</h3>
                                <p style={{ color: '#64748B', lineHeight: 1.6 }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TEAM / EXPERTISE */}
            <section style={{ padding: '80px 0', background: 'var(--secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '20px' }}>لسنا مجرد "عمال"</h2>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '30px' }}>نحن فنيون معتمدون</h3>
                            <p style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
                                على عكس العمال المستقلين الذين تجدهم في الشارع، فنيو خبراء المنزل السعودي هم موظفون بدوام كامل يخضعون لتدريب صارم. يتم فحص خلفياتهم، ويرتدون الزي الرسمي، ومجهزون بأدوات احترافية للتعامل مع أنظمة الكهرباء والسباكة والتكييف المعقدة بأمان.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px' }}>
                                    <h4 style={{ color: 'white', marginBottom: '5px' }}>فحص الخلفية</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>لسلامة عائلتك</p>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px' }}>
                                    <h4 style={{ color: 'white', marginBottom: '5px' }}>مؤمنون بالكامل</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>حماية المسؤولية مشمولة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BOTTOM BANNER */}
            <section style={{ padding: '80px 0', background: '#fff', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#1E293B', marginBottom: '20px' }}>اختبر فرق صيانة خبراء المنزل السعودي</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: '#64748B', fontSize: '1.2rem' }}>
                        هل أنت جاهز لترقية تجربة صيانة منزلك؟ اتصل بفريقنا الودود اليوم.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <Link href="/ar/contact" className="btn" style={{ background: 'var(--primary)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                            حجز خدمة
                        </Link>
                        <Link href="/ar/services" className="btn" style={{ background: 'white', color: '#334155', padding: '15px 40px', borderRadius: '30px', fontWeight: 700, textDecoration: 'none', border: '1px solid #cbd5e1' }}>
                            عرض الخدمات
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
