import Link from "next/link";
import {
  Zap,
  MapPin,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
  BadgeCheck,
  Star,
  Droplets,
  Phone,
  Users,
  Award,
  ArrowUpRight,
  Wind,
  Cylinder,
  BedDouble,
  Sparkles,
  Armchair,
  LayoutGrid
} from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import HeroSection from "@/components/HeroSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Electrician in Riyadh | Fast, Safe & Affordable Repairs",
  description: "Professional electrician and plumbing services in Riyadh. 24/7 emergency response, SASO-certified technicians. Book your maintenance today.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const whatsappNumber = "966508901536";
  const whatsappMsg = "Hello Al Riaz Services, I need an emergency repair in Riyadh.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <main style={{ paddingTop: '80px' }}>

      <HeroSection />

      {/* 1.5. QUICK SERVICES GRID */}
      <section className="section animate-fade-in" style={{ padding: '60px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            {[
              { title: "AC Cleaning Service", icon: <Wind size={36} color="var(--primary)" />, href: "/services/ac-cleaning" },
              { title: "Water Tank Cleaning", icon: <Cylinder size={36} color="var(--primary)" />, href: "/services/water-tank-cleaning" },
              { title: "Mattress Cleaning", icon: <BedDouble size={36} color="var(--primary)" />, href: "/services/mattress-cleaning" },
              { title: "Surface Disinfection", icon: <Sparkles size={36} color="var(--primary)" />, href: "/services/water-tank-cleaning" },
              { title: "Furniture Cleaning", icon: <Armchair size={36} color="var(--primary)" />, href: "/services/furniture-cleaning" },
              { title: "More Services", icon: <LayoutGrid size={36} color="var(--primary)" />, href: "/services" },
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
                boxShadow: 'none',
                transition: 'all 0.3s ease'
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

      {/* 2. ABOUT WITH STATS SECTION */}
      <section id="about" className="section animate-fade-in" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%',
                height: '500px',
                background: 'url("https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-card)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-40px',
                right: '-40px',
                background: 'var(--primary)',
                color: 'white',
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '3rem', fontWeight: 900 }}>12+</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Experience</div>
              </div>
            </div>

            <div>
              <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                PROFESSIONAL & RELIABLE
              </div>
              <h2 style={{ fontSize: '3rem', marginBottom: '30px', color: 'var(--secondary)' }}>
                Outstanding residential & commercial services
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '40px', lineHeight: 1.8 }}>
                We understand that home maintenance is more than just fixing things; it is about ensuring the safety and comfort of your family. Our team of certified technicians brings decades of experience to every job, from minor repairs to complex installations.
              </p>

              <div className="grid grid-2" style={{ gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Safe & Secure</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>We follow strict SASO safety protocols on every project.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>24/7 Support</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Our emergency response team is always ready to help.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section id="services" className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
              OUR EXPERTISE
            </div>
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary)' }}>What we provide for you</h2>
          </div>

          <div className="grid grid-3">
            {[
              {
                title: "Electrical Solution",
                description: "Complete electrical maintenance, short circuit fixing, and luxury lighting installations for your home.",
                icon: <Zap size={40} />,
                link: "/services/electrician"
              },
              {
                title: "Plumbing Services",
                description: "Expert leak detection, water tank cleaning, and comprehensive pipe repairs with zero damage.",
                icon: <Droplets size={40} />,
                link: "/services/plumber"
              },
              {
                title: "Intercom & Security",
                description: "Smart video entry systems, biometric locks, and smartphone-integrated security for modern villas.",
                icon: <ShieldCheck size={40} />,
                link: "/services/intercom"
              }
            ].map((service, i) => (
              <div key={i} className="card hover-lift" style={{ textAlign: 'center', padding: '50px 40px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', color: 'var(--primary)', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--secondary)' }}>{service.title}</h3>
                <p style={{ color: 'var(--muted)', marginBottom: '30px', lineHeight: 1.6 }}>{service.description}</p>
                <Link href={service.link} style={{ fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  READ MORE <ArrowUpRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RELIABLE PARTNER (DARK SECTION) */}
      <section className="section" style={{ background: 'var(--grad-dark)', color: 'white' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
            <div>
              <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                WHY CHOOSE US
              </div>
              <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Your Reliable Partner for Electrical Solutions</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '40px', lineHeight: 1.8 }}>
                Since 2012, we have been the gold standard for home maintenance in Riyadh. Our commitment to quality and transparency makes us the preferred choice for residents.
              </p>

              <ul style={{ display: 'grid', gap: '20px' }}>
                {[
                  "24/7 Professional Emergency Services",
                  "Expert & SASO Certified Technicians",
                  "Fair and Transparent Pricing",
                  "High Quality Materials & Parts",
                  "100% Satisfaction Guarantee"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '1.1rem', fontWeight: 600 }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={20} color="white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%',
                height: '600px',
                background: 'url("https://images.unsplash.com/photo-1590033063412-1d573359d95f?q=80&w=2040&auto=format&fit=crop") center/cover no-repeat',
                borderRadius: '30px',
                transform: 'rotate(2deg)',
                border: '10px solid rgba(255,255,255,0.05)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS BAR SECTION */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            {[
              { num: "920+", label: "Happy Clients", icon: <Users size={32} /> },
              { num: "3 K", label: "Repairs Done", icon: <Wrench size={32} /> },
              { num: "30+", label: "Riyadh Districts", icon: <MapPin size={32} /> },
              { num: "48+", label: "Total Projects", icon: <Award size={32} /> }
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

      {/* 6. TESTIMONIALS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
            FEEDBACK
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '80px', color: 'var(--secondary)' }}>What they're talking about our services</h2>

          <div className="grid grid-2">
            {[
              {
                text: "The technician arrived within 30 minutes of my call. The repair was handled very professionally and the price was fair. I'll definitely use Al Riaz again for my villa!",
                author: "Mohammad Bin Salman",
                role: "Client from Olaya"
              },
              {
                text: "Very impressed with the smart intercom system they installed. It works perfectly with my phone and the video quality is crystal clear. Great job!",
                author: "Khalid Al-Rashed",
                role: "Client from Hittin"
              }
            ].map((test, i) => (
              <div key={i} className="card hover-lift" style={{ textAlign: 'left', padding: '50px' }}>
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

      {/* 7. CTA / CONTACT BOX */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '40px', background: '#fff', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
            <div style={{ width: '100%', height: '100%', minHeight: '400px', background: 'url("https://images.unsplash.com/photo-1544725121-be3b54443903?q=80&w=1943&auto=format&fit=crop") center/cover no-repeat' }}></div>
            <div style={{ padding: '60px' }}>
              <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                GET IN TOUCH
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--secondary)' }}>Need any electrical service help?</h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '30px', background: '#f8fafc', borderRadius: '15px', border: '1px solid var(--border)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={30} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 600 }}>Call 24/7 for support</p>
                  <a href="tel:+966508901536" style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--secondary)' }}>+966 50 890 1536</a>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '30px', padding: '15px 40px', borderRadius: '4px' }}>
                CONTACT US NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TEAM SECTION GALLERY */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
            PROFESSIONAL TEAM
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '80px', color: 'var(--secondary)' }}>Meet our experienced team people</h2>

          <div className="grid grid-3">
            {[
              { name: "Ahmed Abdullah", role: "Master Electrician", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
              { name: "Khalid Mansour", role: "Senior Plumber", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Mohammad Fazil", role: "Security Expert", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="hover-lift" style={{ textAlign: 'left' }}>
                <div style={{ width: '100%', height: '400px', background: `url("${member.img}") center/cover no-repeat`, borderRadius: '15px', marginBottom: '20px' }}></div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{member.name}</h4>
                <p style={{ color: 'var(--primary)', fontWeight: 700 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
