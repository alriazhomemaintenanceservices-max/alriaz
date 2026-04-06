import Link from "next/link";
import { Zap, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Wrench, BadgeCheck, Star, Droplets, Phone, Users, Award, ArrowUpRight, Wind, Cylinder, BedDouble, Sparkles, Armchair, LayoutGrid } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import ActionForm from "@/components/ActionForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "صيانة وإصلاح المنازل في السعودية | خدمة خبراء 24 ساعة",
    description: "شركة رائدة في خدمات صيانة المنازل والكهرباء والسباكة في جميع أنحاء المملكة. إصلاحات طارئة في الرياض وجدة والدمام وأكثر من 20 مدينة أخرى. احجز فنيك المعتمد اليوم.",
    alternates: {
        canonical: 'https://saudihomeexperts.com/ar',
        languages: {
            'en-US': 'https://saudihomeexperts.com/',
            'ar-SA': 'https://saudihomeexperts.com/ar'
        }
    }
};

export default function ArabicHome() {
  const whatsappNumber = "966508901536";
  const whatsappMsg = "مرحباً خبراء المنزل السعودي، أحتاج إلى خدمة إصلاح طارئة.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <main dir="rtl" style={{ paddingTop: '80px', fontFamily: 'var(--font-cairo)' }}>

      <section className="bg-pattern" style={{
            position: 'relative',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        background: 'rgba(225, 29, 72, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: '30px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        marginBottom: '30px',
                        border: '1px solid rgba(225, 29, 72, 0.2)'
                    }}>
                        خدمة الصيانة رقم #1 في المملكة العربية السعودية
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '25px',
                        fontWeight: 900,
                        color: '#1e293b',
                    }}>
                        صيانة المنازل والمباني التجارية<br />
                        في المملكة العربية السعودية
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.8, maxWidth: '750px', margin: '0 auto 40px' }}>
                        نحن الخيار الموثوق لأكثر من 5000 فيلا وعمل تجاري في جميع أنحاء المملكة. نوفر خدمة <strong>الوصول خلال 45 دقيقة وحل المشكلات في نفس اليوم</strong> للأعطال الكهربائية وانفجار الأنابيب وإصلاح أنظمة الأمان. <strong>فنيون مرخصون للمنازل والمكاتب والمحلات التجارية.</strong>
                    </p>
                    <div className="hero-btn-group" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', borderColor: '#25D366', padding: '16px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700, flex: '1 1 200px', maxWidth: '280px', textAlign: 'center' }}>
                           اطلب الخدمة الآن
                        </a>
                        <a href="tel:+966508901536" className="btn" style={{ background: '#1e293b', color: 'white', border: 'none', padding: '16px 40px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700, flex: '1 1 200px', maxWidth: '280px', textAlign: 'center' }}>
                            اتصل بنا 050 890 1536
                        </a>
                    </div>
                </div>
            </div>
        </section>

      <section className="section animate-fade-in" style={{ padding: '60px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            {[
              { title: "خدمات الكهرباء", icon: <Zap size={36} color="var(--primary)" />, href: "/ar/electrician-riyadh" },
              { title: "خدمات السباكة", icon: <Droplets size={36} color="var(--primary)" />, href: "/ar/plumber-riyadh" },
              { title: "تركيب الانتركم", icon: <ShieldCheck size={36} color="var(--primary)" />, href: "/ar/intercom-installation-riyadh" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="card hover-lift" style={{
                padding: '30px 15px',
                borderRadius: '15px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                textDecoration: 'none',
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'rgba(225, 29, 72, 0.05)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '5px',
                  border: '1px solid rgba(225, 29, 72, 0.1)'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#334155', lineHeight: 1.4 }}>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading" style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1e293b' }}>
                شركاء النجاح للمشاريع السكنية والتجارية
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.8, marginBottom: '40px' }}>
                نحن نقدم صيانة موثوقة وعالية الجودة لأصحاب المنازل والشركات في جميع أنحاء المملكة العربية السعودية. من الفلل الفاخرة إلى المجمعات التجارية، يضمن خبراؤنا المعتمدون بقاء ممتلكاتك في أفضل حالاتها مع <strong>إعادة التشغيل في نفس اليوم</strong>.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' }}>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '5px' }}>12+</h3>
                <p style={{ fontWeight: 600 }}>سنة من الخبرة</p>
              </div>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '5px' }}>5k+</h3>
                <p style={{ fontWeight: 600 }}>عملاء سعداء</p>
              </div>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '5px' }}>24/7</h3>
                <p style={{ fontWeight: 600 }}>خدمة طوارئ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
              خبراتنا
            </div>
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary)' }}>ماذا نقدم لك</h2>
          </div>

          <div className="grid grid-3">
            {[
              {
                title: "الحلول الكهربائية",
                description: "صيانة كهربائية شاملة، وفحص الشورت، وتركيبات الإضاءة الفاخرة لمنزلك.",
                icon: <Zap size={40} />,
                link: "/ar/electrician-riyadh"
              },
              {
                title: "خدمات السباكة",
                description: "كشف التسربات بخبرة، تنظيف خزانات المياه، وإصلاحات المواسير الشاملة بدون تكسير.",
                icon: <Droplets size={40} />,
                link: "/ar/plumber-riyadh"
              },
              {
                title: "الانتركم والأمن",
                description: "أنظمة دخول الفيديو الذكية، الأقفال البيومترية، والأمان المتصل بالهاتف للفلل الحديثة.",
                icon: <ShieldCheck size={40} />,
                link: "/ar/intercom-installation-riyadh"
              }
            ].map((service, i) => (
              <div key={i} className="card hover-lift" style={{ textAlign: 'center', padding: '50px 40px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', color: 'var(--primary)', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--secondary)' }}>{service.title}</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '30px', lineHeight: 1.6 }}>{service.description}</p>
                <Link href={service.link} style={{ fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  استكشف {service.title} <ArrowUpRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pattern-dark" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>لماذا تختار خبراء المنزل السعودي؟</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '50px' }}>
                نحن نجمع بين الخبرة الفنية والالتزام برضا العملاء.
            </p>

            <div className="grid grid-2">
              {[
                { title: "خبراء مرخصون", desc: "جميع الفنيين لدينا معتمدون وتم فحص خلفياتهم المهنية." },
                { title: "تسعير مسبق", desc: "لا توجد رسوم خفية. ستعرف التكلفة قبل أن نبدأ العمل." },
                { title: "الوصول في الوقت المحدد", desc: "نحن نقدر وقتك ونضمن خدمة التوقيت بدقة." },
                { title: "ضمان العمل", desc: "نحن نقف خلف جودة عملنا مع ضمان الرضا الكامل." }
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>{item.title}</h3>
                  <p style={{ opacity: 0.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border)', background: '#fff' }}>
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            {[
              { num: "920+", label: "تقييمات موثقة", icon: <Users size={32} /> },
              { num: "3 K", label: "إصلاحات مكتملة", icon: <Wrench size={32} /> },
              { num: "20+", label: "مدينة نغطيها", icon: <MapPin size={32} /> },
              { num: "45 دقيقة", label: "متوسط الوصول", icon: <Clock size={32} /> }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--secondary)' }}>{stat.num}</div>
                <div style={{ fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
            آراء العملاء
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '80px', color: 'var(--secondary)' }}>ثقة أصحاب المنازل في جميع أنحاء المملكة</h2>

          <div className="grid grid-2">
            {[
              {
                text: "وصل الفني خلال 30 دقيقة من اتصالي. تم التعامل مع الإصلاح باحترافية وكان السعر عادلاً. سأستخدم خدمات خبراء المنزل السعودي بالتأكيد مرة أخرى لفلتي في الرياض!",
                author: "عبد الرحمن السعود",
                role: "صاحب عقار"
              },
              {
                text: "انبهرت جداً بنظام الانتركم الذكي الذي ركبوه في جدة. يعمل بشكل مثالي مع هاتفي. أوصي بشدة لخدمات أمن المنزل!",
                author: "خالد العتيبي",
                role: "مقيم في فيلا"
              }
            ].map((test, i) => (
              <div key={i} className="card hover-lift" style={{ textAlign: 'right', padding: '50px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '30px' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '30px', color: 'var(--secondary)', lineHeight: 1.8 }}>"{test.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>{test.author[0]}</div>
                  <div>
                    <h5 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{test.author}</h5>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>أسئلة شائعة حول صيانة المنزل</h2>
          <div style={{ display: 'grid', gap: '25px' }}>
            {[
              { q: "ما هي المدن التي تخدمونها في المملكة العربية السعودية؟", a: "نحن نقدم تغطية كاملة في الرياض، جدة، الدمام، مكة، المدينة، وأكثر من 15 مدينة رئيسية أخرى في جميع أنحاء المملكة." },
              { q: "كم من الوقت يستغرق وصول الفني؟", a: "بالنسبة لإصلاحات الكهرباء أو السباكة الطارئة، فإن متوسط وقت وصولنا هو 45 دقيقة في جميع المناطق المخدومة." },
              { q: "هل خدمات الصيانة لديكم مضمونة؟", a: "نعم، جميع مهام الإصلاح والتركيب لدينا تأتي مع ضمان لمدة 30 يوماً على الأيدي العاملة ونستخدم مواد متوافقة مع معايير ساسو." }
            ].map((faq, i) => (
              <div key={i} style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ color: '#444', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                تواصل معنا الآن
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '25px', color: '#1e293b' }}>
                مساعدة فورية <br />
                في جميع أنحاء المملكة
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '30px' }}>
                فنيونا الخبراء على أهبة الاستعداد لإصلاحات الطوارئ على مدار الساعة طوال أيام الأسبوع.
              </p>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700 }}>معتمد من ساسو</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>مواد عالية الجودة ومعايير سلامة عالمية.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '37px', height: '50px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700 }}>وصول خلال 45 دقيقة</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>استجابة موثوقة في كبرى مدن المملكة.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ActionForm />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--secondary)' }}>شبكة صيانة الخبراء</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {['الرياض', 'جدة', 'الدمام', 'الخبر', 'مكة', 'المدينة', 'الطائف', 'تبوك', 'أبها', 'الجبيل', 'حائل', 'بريدة', 'نجران', 'ينبع', 'جيزان', 'الهفوف', 'الظهران', 'الخرج', 'رابغ', 'سكاكا'].map((city, i) => (
              <Link key={i} href={`/ar/plumber-riyadh`} style={{
                padding: '12px 25px',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '30px',
                color: '#334155',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}>
                <MapPin size={16} color="var(--primary)" /> {city} 
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
