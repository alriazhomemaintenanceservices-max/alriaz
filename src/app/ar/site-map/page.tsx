import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "خريطة الموقع | خبراء المنزل السعودي بالرياض",
    alternates: {
        canonical: '/ar/site-map/'
    },
    description: "استكشف جميع الصفحات والخدمات التي يقدمها خبراء المنزل السعودي في الرياض، بما في ذلك خدمات الكهرباء والسباكة والانتركم.",
};

export default function ArabicSitemapPage() {
    const services = [
        { slug: 'plumber', name: 'سباك' },
        { slug: 'electrician', name: 'كهربائي' },
        { slug: 'intercom-installation', name: 'تركيب انتركم' }
    ];

    const cities = [
        { slug: 'riyadh', name: 'الرياض' },
        { slug: 'al-falah', name: 'الفلاح' },
        { slug: 'al-yarmouk', name: 'اليرموك' },
        { slug: 'al-yasmin', name: 'الياسمين' },
        { slug: 'granada', name: 'غرناطة' },
        { slug: 'al-narjis', name: 'النرجس' },
        { slug: 'qurtubah', name: 'قرطبة' },
        { slug: 'al-sahafah', name: 'الصحافة' },
        { slug: 'al-nada', name: 'الندى' },
        { slug: 'ishbiliyah', name: 'إشبيلية' },
        { slug: 'al-rabee', name: 'الربيع' },
        { slug: 'jeddah', name: 'جدة' },
        { slug: 'dammam', name: 'الدمام' },
        { slug: 'khobar', name: 'الخبر' },
        { slug: 'mecca', name: 'مكة' },
        { slug: 'medina', name: 'المدينة' },
        { slug: 'taif', name: 'الطائف' },
        { slug: 'tabuk', name: 'تبوك' },
        { slug: 'abha', name: 'أبها' },
        { slug: 'jubail', name: 'الجبيل' },
        { slug: 'hail', name: 'حائل' },
        { slug: 'buraidah', name: 'بريدة' },
        { slug: 'najran', name: 'نجران' },
        { slug: 'yanbu', name: 'ينبع' },
        { slug: 'jizan', name: 'جيزان' },
        { slug: 'hofuf', name: 'الهفوف' },
        { slug: 'dhahran', name: 'الظهران' },
        { slug: 'alkharj', name: 'الخرج' },
        { slug: 'rabigh', name: 'رابغ' },
        { slug: 'sakaka', name: 'سكاكا' }
    ];

    const mainPages = [
        { name: "الصفحة الرئيسية", href: "/ar" },
        { name: "خدماتنا", href: "/ar/services" },
        { name: "مركز خدمة الكهربائي", href: "/ar/services/electrician" },
        { name: "مركز خدمة السباك", href: "/ar/services/plumber" },
        { name: "مركز خدمة الانتركم", href: "/ar/services/intercom" },
        { name: "من نحن", href: "/ar/about-us" },
        { name: "اتصل بنا", href: "/ar/contact" },
        { name: "سياسة الخصوصية", href: "/ar/privacy-policy" },
        { name: "شروط الخدمة", href: "/ar/terms-of-service" },
        { name: "سياسة الكوكيز", href: "/ar/cookie-policy" },
        { name: "إخلاء المسؤولية", href: "/ar/disclaimer" }
    ];

    return (
        <main dir="rtl" style={{ paddingTop: '120px', paddingBottom: '80px', fontFamily: 'var(--font-cairo)' }}>
            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/ar">الرئيسية</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>خريطة الموقع</span>
            </nav>
            <div className="container">
                <h1 style={{ marginBottom: '40px', textAlign: 'center', fontSize: '3rem' }}>خريطة الموقع</h1>
                <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '60px', fontSize: '1.2rem' }}>دليل شامل لخبرائنا وخدماتنا في جميع أنحاء المملكة العربية السعودية.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '60px' }}>
                    
                    {/* Main Pages */}
                    <div>
                        <h3 style={{ marginBottom: '25px', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            الصفحات الرئيسية
                        </h3>
                        <ul style={{ display: 'grid', gap: '15px', listStyle: 'none', padding: 0 }}>
                            {mainPages.map((page, i) => (
                                <li key={i}>
                                    <Link href={page.href} style={{ color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services by City */}
                    {services.map((service, i) => (
                        <div key={i}>
                            <h3 style={{ marginBottom: '25px', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>
                                مواقع {service.name}
                            </h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', listStyle: 'none', padding: 0 }}>
                                {cities.map((city, j) => (
                                    <li key={j}>
                                        <Link href={`/ar/${service.slug}-${city.slug}`} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.95rem' }}>
                                            {service.name} {city.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div style={{ marginTop: '100px', textAlign: 'center', padding: '60px', background: '#f8fafc', borderRadius: '40px' }}>
                    <h2 style={{ marginBottom: '20px' }}>هل تحتاج إلى مساعدة فورية؟</h2>
                    <p style={{ marginBottom: '30px', opacity: 0.8 }}>فريقنا جاهز لإرسال خبير إلى موقعك في غضون 60 دقيقة.</p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="https://wa.me/966508901536" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '15px 40px' }}>
                            راسلنا عبر واتساب
                        </a>
                        <a href="tel:+966508901536" className="btn" style={{ border: '2px solid var(--border)', padding: '15px 40px' }}>
                            اتصل بخط المساعدة
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
