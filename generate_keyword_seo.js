const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

const services = [
    {
        id: 'plumber',
        slug: 'plumber',
        name: 'Plumber',
        arabicName: 'سباك',
        icon: 'Droplets',
        benefit: '24/7 Emergency & Genuine Spares',
        h1Subtitle: 'Licensed Riyadh Plumbing Experts',
        specialty: 'Leak Detection, Pipe Repair & Tank Cleaning',
        arabicSectors: ['سباكة جنوب الرياض', 'سباكة شمال الرياض', 'سباكة شرق الرياض', 'سباكة غرب الرياض'],
        h2s: [
            { 
                title: 'Emergency Plumbing & Sewer Services', 
                arabicTitle: 'خدمات السباكة والصرف الصحي الطارئة',
                h3s: ['Fast Leak Detection', 'Burst Pipe Repair', 'Sewage Network Unblocking'],
                arabicH3s: ['كشف تسربات المياه', 'إصلاح الأنابيب المنفجرة', 'تسليك مجاري الصرف الصحي']
            },
            { 
                title: 'Residential & Commercial Solutions', 
                arabicTitle: 'حلول سكنية وتجارية متكاملة',
                h3s: ['Water Tank Cleaning', 'Bathroom & Kitchen Plumbing', 'Sanitary Ware Installation'],
                arabicH3s: ['تنظيف خزانات المياه', 'سباكة الحمامات والمطابخ', 'تركيب الأدوات الصحية']
            },
            { 
                title: 'Riyadh Specialist Services', 
                arabicTitle: 'خدمات متخصصة في الرياض',
                h3s: ['South/North Riyadh Plumber', 'Mobile Service Vehicles', 'Original Spare Parts Replacement'],
                arabicH3s: ['سباك جنوب وشمال الرياض', 'سيارات الخدمة المتنقلة', 'تبديل قطع الغيار الأصلية']
            }
        ],
        steps: [
            { name: 'On-Site Diagnosis', arabicName: 'الفحص الموقعي', text: 'Our mobile workshop arrives within 45 mins.', arabicText: 'تصل ورشتنا المتنقلة خلال 45 دقيقة للفحص.' },
            { name: 'Technical Consultation', arabicName: 'الاستشارة الفنية', text: 'We provide a transparent, fixed-price quote.', arabicText: 'نقدم عرض سعر شفاف وواضح بدون تكاليف مخفية.' },
            { name: 'Certified Repair', arabicName: 'الإصلاح المعتمد', text: 'Repairs are done using SASO-approved parts.', arabicText: 'يتم الإصلاح باستخدام قطع غيار معتمدة من ساسو.' },
            { name: 'Warranty & Support', arabicName: 'الضمان والدعم', text: 'All repairs come with a satisfaction guarantee.', arabicText: 'جميع الإصلاحات تأتي مع ضمان الجودة والدعم الفني.' }
        ],
        keywords: ['plumber {city}', 'leak detection {city}', 'سباك {city}', 'كشف تسربات المياه {city}'],
        faqs: [
            { 
                q: "How much does a plumber cost in {city}?", 
                aq: "كم تكلفة السباك في {city}؟",
                a: "Most repairs in {city} start from SAR 150. Transparent pricing based on parts and labor.", 
                aa: "تبدأ معظم الإصلاحات في {city} من 150 ريال سعودي. تسعير شفاف بناءً على قطع الغيار والعمالة."
            }
        ]
    },
    {
        id: 'electrician',
        slug: 'electrician',
        name: 'Electrician',
        arabicName: 'كهربائي',
        icon: 'Zap',
        benefit: '24/7 Troubleshooting & Installation',
        h1Subtitle: 'Certified Electrical Maintenance',
        specialty: 'Short Circuit Repair & Lighting Design',
        h2s: [
            { 
                title: 'Emergency Electrical Repair', 
                arabicTitle: 'إصلاح الكهرباء الطوارئ',
                h3s: ['Short Circuit Troubleshooting', 'Power Outage Resolution', 'DB Box Replacement'],
                arabicH3s: ['فحص الماس الكهربائي', 'حل انقطاع التيار', 'تبديل لوحة المفاتيح']
            },
            { 
                title: 'Commercial & Villa Maintenance', 
                arabicTitle: 'صيانة الفلل والمباني التجارية',
                h3s: ['Factory Safety Audits', 'Mains Wiring Upgrades', 'Office Power Setup'],
                arabicH3s: ['فحص السلامة للمصانع', 'تجديد الأسلاك الرئيسية', 'تأسيس كهرباء المكاتب']
            }
        ],
        steps: [
            { name: 'Live Circuit Analysis', arabicName: 'تحليل الدوائر الحية', text: 'Our technicians measure voltage and load levels.', arabicText: 'يقوم فنيونا بقياس الجهد ومستويات الحمل.' },
            { name: 'Fault Isolation', arabicName: 'عزل الأعطال', text: 'We isolate defective wiring and breakers.', arabicText: 'نعزل الأسلاك والقواطع التالفة لضمان السلامة.' },
            { name: 'Premium Component Install', arabicName: 'تركيب قطع غيار أصلية', text: 'We use Schneider or ABB hardware.', arabicText: 'نستخدم معدات من شنايدر أو ABB للأمان العالي.' }
        ],
        keywords: ['electrician {city}', 'electrical repair {city}', 'كهربائي {city}', 'فني كهرباء {city}'],
        faqs: [
            { 
                q: "Can you fix a short circuit in {city}?", 
                aq: "هل يمكنك إصلاح الماس الكهربائي في {city}؟",
                a: "Yes, our units specialize in rapid detection in {city}.", 
                aa: "نعم، وحداتنا متخصصة في الكشف السريع في {city}."
            }
        ]
    },
    {
        id: 'intercom',
        slug: 'intercom-installation',
        name: 'Intercom Installation',
        arabicName: 'تركيب انتركم',
        icon: 'ShieldCheck',
        benefit: 'Smart Access & Remote Control',
        h1Subtitle: 'Building Security Specialists',
        specialty: 'Video Intercom, IP Systems & Access Control',
        h2s: [
            { 
                title: 'Video Door Phone Systems', 
                arabicTitle: 'أنظمة الانتركم المرئي',
                h3s: ['Hikvision IP Intercoms', 'Remote App Connectivity', 'HD Night Vision Doorbell'],
                arabicH3s: ['انتركم هيك فيجن IP', 'الاتصال عبر التطبيق', 'جرس مرئي بليلة واضحة']
            },
            { 
                title: 'Building Access Control', 
                arabicTitle: 'أنظمة التحكم في الدخول',
                h3s: ['Multi-Flat Intercom Hubs', 'Biometric Fingerprint Entry', 'Keypad Password Systems'],
                arabicH3s: ['أنظمة الشقق المتعددة', 'الدخول بالبصمة البيومترية', 'أنظمة كلمة المرور']
            }
        ],
        steps: [
            { name: 'Site Evaluation', arabicName: 'تقييم الموقع', text: 'We determine the best camera angles.', arabicText: 'نحدد أفضل زوايا الكاميرا للرؤية.' },
            { name: 'Infrastructure Wiring', arabicName: 'تأسيس التمديدات', text: 'Installation of high-speed CAT6 cables.', arabicText: 'تركيب كابلات CAT6 عالية السرعة.' },
            { name: 'App Configuration', arabicName: 'إعداد التطبيق', text: 'We link your system to mobile apps.', arabicText: 'نربط النظام بتطبيقات الجوال للتحكم عن بعد.' }
        ],
        keywords: ['intercom installation {city}', 'video intercom {city}', 'تركيب انتركم {city}', 'انتركم مرئي {city}'],
        faqs: [
            { 
                q: "Which brands do you install in {city}?", 
                aq: "ما هي الماركات التي تقوم بتركيبها في {city}؟",
                a: "We specialize in Hikvision, Dahua, and Commax.", 
                aa: "نحن متخصصون في أنظمة هيك فيجن وداهوا وكوماكس."
            }
        ]
    }
];

const cities = [
    { slug: 'riyadh', name: 'Riyadh', arabic: 'الرياض', districts: ['North Riyadh', 'South Riyadh', 'East Riyadh', 'West Riyadh', 'Olaya', 'Malaz', 'Hittin', 'Malqa', 'Al Yasmin'] },
    { slug: 'al-falah', name: 'Al Falah', arabic: 'الفلاح', districts: ['Al Falah District'] },
    { slug: 'al-yarmouk', name: 'Al Yarmouk', arabic: 'اليرموك', districts: ['Al Yarmouk District'] },
    { slug: 'al-yasmin', name: 'Al Yasmin', arabic: 'الياسمين', districts: ['Al Yasmin District'] },
    { slug: 'granada', name: 'Granada', arabic: 'غرناطة', districts: ['Granada District'] },
    { slug: 'al-narjis', name: 'Al Narjis', arabic: 'النرجس', districts: ['Al Narjis District'] },
    { slug: 'qurtubah', name: 'Qurtubah', arabic: 'قرطبة', districts: ['Qurtubah District'] },
    { slug: 'al-sahafah', name: 'Al Sahafah', arabic: 'الصحافة', districts: ['Al Sahafah District'] },
    { slug: 'al-nada', name: 'Al Nada', arabic: 'الندى', districts: ['Al Nada District'] },
    { slug: 'ishbiliyah', name: 'Ishbiliyah', arabic: 'إشبيلية', districts: ['Ishbiliyah District'] },
    { slug: 'al-rabee', name: 'Al Rabee', arabic: 'الربيع', districts: ['Al Rabee District'] },
    { slug: 'jeddah', name: 'Jeddah', arabic: 'جدة', districts: ['Al-Balad', 'Al-Rawdah', 'Ash Shati', 'Aziziyah', 'Obhur'] },
    { slug: 'dammam', name: 'Dammam', arabic: 'الدمام', districts: ['Al-Amamrah', 'Alshatea', 'Al-Faisaliyah', 'Al-Mubarakiyah'] },
    { slug: 'khobar', name: 'Khobar', arabic: 'الخبر', districts: ['Al-Rakah', 'Al-Aqrabia', 'Thuqbah', 'Al-Ulaya'] },
    { slug: 'mecca', name: 'Mecca', arabic: 'مكة', districts: ['Aziziyah', 'Al-Misfalah', 'Al-Shariyah', 'Al-Kaakiyah'] },
    { slug: 'medina', name: 'Medina', arabic: 'المدينة', districts: ['Al-Aqiq', 'Quba', 'Al-Jurf', 'Al-Wabarah'] },
    { slug: 'taif', name: 'Taif', arabic: 'الطائف', districts: ['Shubra', 'Al-Matna', 'Sadaf', 'Al-Hawiyah'] },
    { slug: 'tabuk', name: 'Tabuk', arabic: 'تبوك', districts: ['Al-Rawdah', 'Al-Murooj', 'Al-Safa'] },
    { slug: 'abha', name: 'Abha', arabic: 'أبها', districts: ['Al-Nuzha', 'Al-Muftaha', 'Al-Basra'] },
    { slug: 'jubail', name: 'Jubail', arabic: 'الجبيل', districts: ['Fanateer', 'Jalmudah', 'Al-Deffi'] },
    { slug: 'hail', name: 'Hail', arabic: 'حائل', districts: ['Al-Salam', 'Al-Wadi', 'Al-Khuwayrid'] },
    { slug: 'buraidah', name: 'Buraidah', arabic: 'بريدة', districts: ['Al-Rawdah', 'Al-Fayziyyah', 'Al-Rayyan'] },
    { slug: 'najran', name: 'Najran', arabic: 'نجران', districts: ['Al-Atheer', 'Al-Fahd', 'Al-Makhwah'] },
    { slug: 'yanbu', name: 'Yanbu', arabic: 'ينبع', districts: ['Yanbu Al-Bahr', 'Yanbu Al-Sinaiyah', 'Yanbu Al-Nakheel'] },
    { slug: 'jizan', name: 'Jizan', arabic: 'جازان', districts: ['Al-Rawthah', 'Al-Shati', 'Al-Matar'] },
    { slug: 'hofuf', name: 'Al Hofuf', arabic: 'الهفوف', districts: ['Al-Mubarraz', 'Al-Faisaliyah', 'Al-Hazm'] },
    { slug: 'dhahran', name: 'Dhahran', arabic: 'الظهران', districts: ['Al-Dana', 'Al-Doha', 'Al-Thumamah'] },
    { slug: 'alkharj', name: 'Al Kharj', arabic: 'الخرج', districts: ['Al-Khalidiyah', 'Al-Faisaliyah', 'Al-Nada'] },
    { slug: 'rabigh', name: 'Rabigh', arabic: 'رابغ', districts: ['Al-Zahrah', 'Al-Salam', 'Al-Awdah'] },
    { slug: 'sakaka', name: 'Sakaka', arabic: 'سكاكا', districts: ['Al-Qara', 'Al-Muhammadiyah', 'Al-Faisaliyah'] },
];

const generateEnglishPage = (service, cityObj) => {
    const city = cityObj.name;
    const arabicCity = cityObj.arabic;
    const pageUrl = '/' + service.slug + '-' + cityObj.slug;
    const arPageUrl = '/ar/' + service.slug + '-' + cityObj.slug;
    
    const seoTitle = `Best ${service.name} in ${city} | Licensed ${service.name} Service`;
    const metaDesc = `Expert ${service.name.toLowerCase()} in ${city}. Specialized in ${service.specialty.toLowerCase()}. 24/7 service, fair pricing, and professional techniques.`;
    
    const iconList = [service.icon, 'MapPin', 'CheckCircle', 'ShieldCheck', 'Phone', 'BadgeCheck', 'Clock', 'ArrowRight', 'Languages'];
    const uniqueIcons = [...new Set(iconList)].join(', ');

    return `import Link from "next/link";
import { ${uniqueIcons} } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "${seoTitle}",
    description: "${metaDesc}",
    alternates: {
        canonical: "https://saudihomeexperts.com${pageUrl}",
        languages: {
            'ar-SA': "https://saudihomeexperts.com${arPageUrl}"
        }
    }
};

export default function ${service.name.replace(/\s+/g, '')}${city.replace(/\s+/g, '')}Page() {
    const whatsappUrl = "https://wa.me/966508901536?text=I%20need%20${service.name}%20service%20in%20${city}";

    return (
        <main style={{ paddingTop: '100px', lineHeight: '1.8', color: '#1e293b' }}>
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
                <div><Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>${service.name} ${city}</span></div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <Link href="${pageUrl}" style={{ fontWeight: 800, color: 'var(--primary)', borderBottom: '2px solid' }}>English</Link>
                    <Link href="${arPageUrl}" style={{ fontWeight: 500 }}>العربية</Link>
                </div>
            </nav>

            <section className="section animate-fade-in" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#ecfdf5', color: '#059669', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
                                <BadgeCheck size={16} /> Licensed Service in ${city}
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#0f172a' }}>
                                Expert ${service.name} in ${city}
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '40px', maxWidth: '600px' }}>
                                Looking for a professional <strong>${service.name.toLowerCase()}</strong> in ${city}? Saudi Home Experts provides top-rated maintenance for villas, apartments, and commercial properties.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#22c55e', border: 'none', padding: '20px 40px', fontSize: '1.2rem', fontWeight: 700 }}>
                                    <WhatsAppIcon size={24} style={{ marginRight: '10px' }} /> BOOK NOW
                                </a>
                                <a href="tel:+966508901536" className="btn" style={{ border: '2px solid var(--border)', padding: '20px 40px', fontSize: '1.2rem', fontWeight: 700 }}>
                                    <Phone size={24} style={{ marginRight: '10px' }} /> CALL EXPERT
                                </a>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }} className="hide-mobile">
                             <div style={{ background: '#f8fafc', padding: '50px', borderRadius: '40px', border: '1px solid var(--border)' }}>
                                <${service.icon} size={80} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Professional ${service.name} Care</h2>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px', color: '#475569', textAlign: 'left' }}>
                                    <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}><Clock size={24} color="var(--primary)" /> <div>Fast arrival across ${city} districts.</div></li>
                                    <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}><ShieldCheck size={24} color="var(--primary)" /> <div>SASO Approved Parts Used.</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#0f172a', color: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Working Process</h2>
                    </div>
                    <div className="grid grid-4" style={{ gap: '30px' }}>
                        ${service.steps.map((step, i) => `
                        <div key={${i}} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>STEP 0${i + 1}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>${step.name}</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>${step.text}</p>
                        </div>`).join('')}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Comprehensive Solutions in ${city}</h2>
                    <div className="grid grid-2" style={{ gap: '40px' }}>
                        ${service.h2s.map(h2 => `
                        <div className="card" style={{ padding: '40px', background: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0f172a' }}>${h2.title}</h3>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                ${h2.h3s.map(h3 => `
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> ${h3}
                                    </h4>
                                </div>`).join('')}
                            </div>
                        </div>`).join('')}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Districts We Cover in ${city}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                        ${cityObj.districts.map(d => `<span style={{ background: 'white', border: '1px solid #e2e8f0', padding: '12px 30px', borderRadius: '50px', fontWeight: 600 }}>${d}</span>`).join('')}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>FAQ</h2>
                    <div style={{ display: 'grid', gap: '30px' }}>
                        ${service.faqs.map(faq => `
                        <div style={{ background: '#f8fafc', padding: '35px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#0f172a', fontWeight: 800 }}>${faq.q.replace(/{city}/g, city)}</h3>
                            <p style={{ color: '#444', fontSize: '1.1rem' }}>${faq.a.replace(/{city}/g, city)}</p>
                        </div>`).join('')}
                    </div>
                </div>
            </section>
            
            <section className="section" style={{ background: 'var(--grad-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Get Expert Help Today</h2>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: 'white', color: 'var(--primary)', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 800, borderRadius: '50px' }}>
                            WhatsApp
                        </a>
                        <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 800, borderRadius: '50px' }}>
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
`;
};

const generateArabicPage = (service, cityObj) => {
    const city = cityObj.name;
    const arabicCity = cityObj.arabic;
    const pageUrl = '/' + service.slug + '-' + cityObj.slug;
    const arPageUrl = '/ar/' + service.slug + '-' + cityObj.slug;
    
    // SEO Data
    const seoTitle = `${service.arabicName} في ${arabicCity} | خدمة ${service.arabicName} معتمدة 24 ساعة`;
    const metaDesc = `أفضل ${service.arabicName} في ${arabicCity}. متخصصون في ${service.specialty.toLowerCase()}. خدمة 24 ساعة، قطع غيار أصلية، وأسعار تنافسية. اتصل الآن!`;
    
    const iconList = [service.icon, 'MapPin', 'CheckCircle', 'ShieldCheck', 'Phone', 'BadgeCheck', 'Clock', 'ArrowRight', 'Languages'];
    const uniqueIcons = [...new Set(iconList)].join(', ');

    return `import Link from "next/link";
import { ${uniqueIcons} } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "${seoTitle}",
    description: "${metaDesc}",
    alternates: {
        canonical: "https://saudihomeexperts.com${arPageUrl}",
        languages: {
            'en-US': "https://saudihomeexperts.com${pageUrl}"
        }
    }
};

export default function Arabic${service.name.replace(/\s+/g, '')}${city.replace(/\s+/g, '')}Page() {
    const whatsappUrl = "https://wa.me/966508901536?text=I%20need%20${service.name}%20service%20in%20${city}";

    return (
        <main dir="rtl" style={{ paddingTop: '100px', lineHeight: '1.8', color: '#1e293b', fontFamily: 'var(--font-cairo)' }}>
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
                <div><Link href="/ar">الرئيسية</Link> / <Link href="/ar/services">الخدمات</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>${service.arabicName} ${arabicCity}</span></div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <Link href="${pageUrl}" style={{ fontWeight: 500 }}>English</Link>
                    <Link href="${arPageUrl}" style={{ fontWeight: 800, color: 'var(--primary)', borderBottom: '2px solid' }}>العربية</Link>
                </div>
            </nav>

            <section className="section animate-fade-in" style={{ paddingBottom: '60px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#ecfdf5', color: '#059669', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
                                <BadgeCheck size={16} /> خدمة معتمدة في ${arabicCity}
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px', color: '#0f172a' }}>
                                أفضل ${service.arabicName} في ${arabicCity}
                                ${city === 'Riyadh' && service.arabicSectors ? `<div style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '10px' }}>${service.arabicSectors.join(' | ')}</div>` : ''}
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '40px', maxWidth: '600px' }}>
                                هل تبحث عن <strong>${service.arabicName} ممتاز</strong> في ${arabicCity}؟ نوفر خدمات صيانة واحترافية للفلل والشقق والمباني التجارية مع ضمان الجودة.
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
                                <${service.icon} size={80} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>صيانة ${service.arabicName} احترافية</h2>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px', color: '#475569', textAlign: 'right' }}>
                                    <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}><Clock size={24} color="var(--primary)" /> <div>وصول سريع لجميع أحياء ${arabicCity}.</div></li>
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
                        ${service.steps.map((step, i) => `
                        <div key={${i}} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '15px' }}>خطوة 0${i + 1}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px' }}>${step.arabicName}</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>${step.arabicText}</p>
                        </div>`).join('')}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>حلول متكاملة في ${arabicCity}</h2>
                    <div className="grid grid-2" style={{ gap: '40px' }}>
                        ${service.h2s.map(h2 => `
                        <div className="card" style={{ padding: '40px', background: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0f172a' }}>${h2.arabicTitle}</h3>
                            <div className="grid grid-2" style={{ gap: '20px' }}>
                                ${h2.arabicH3s.map(h3 => `
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                                        <CheckCircle size={18} color="#059669" /> ${h3}
                                    </h4>
                                </div>`).join('')}
                            </div>
                        </div>`).join('')}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>الأحياء المشمولة في ${arabicCity}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                        ${cityObj.districts.map(d => `<span style={{ background: 'white', border: '1px solid #e2e8f0', padding: '12px 30px', borderRadius: '50px', fontWeight: 600 }}>${d}</span>`).join('')}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>الأسئلة الشائعة</h2>
                    <div style={{ display: 'grid', gap: '30px' }}>
                        ${service.faqs.map(faq => `
                        <div style={{ background: '#f8fafc', padding: '35px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#0f172a', fontWeight: 800 }}>${faq.aq.replace(/{city}/g, arabicCity)}</h3>
                            <p style={{ color: '#444', fontSize: '1.1rem' }}>${faq.aa.replace(/{city}/g, arabicCity)}</p>
                        </div>`).join('')}
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
`;
};

// Generate
cities.forEach(city => {
    services.forEach(service => {
        const folderName = service.slug + '-' + city.slug;
        
        // English
        const enDir = path.join(baseDir, folderName);
        if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, { recursive: true });
        fs.writeFileSync(path.join(enDir, 'page.tsx'), generateEnglishPage(service, city));

        // Arabic
        const arDir = path.join(baseDir, 'ar', folderName);
        if (!fs.existsSync(arDir)) fs.mkdirSync(arDir, { recursive: true });
        fs.writeFileSync(path.join(arDir, 'page.tsx'), generateArabicPage(service, city));
    });
});

console.log('✅ Separate English and Arabic Networks Generated (180 Total Pages).');
