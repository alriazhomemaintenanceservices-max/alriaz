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
              { title: "Electrician Services", icon: <Zap size={36} color="var(--primary)" />, href: "/services/electrician" },
              { title: "Plumbing Services", icon: <Droplets size={36} color="var(--primary)" />, href: "/services/plumber" },
              { title: "Intercom Installation", icon: <ShieldCheck size={36} color="var(--primary)" />, href: "/services/intercom" },
              { title: "General Maintenance", icon: <Wrench size={36} color="var(--primary)" />, href: "/services" },
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

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading" style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1e293b' }}>
              Your Trusted Home Maintenance Partner
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.8, marginBottom: '40px' }}>
              We provide reliable, high-quality maintenance services for homeowners and businesses in Riyadh.
              Our team of certified professionals is dedicated to ensuring your property remains in perfect condition.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' }}>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '5px' }}>12+</h3>
                <p style={{ fontWeight: 600 }}>Years Exeperience</p>
              </div>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '5px' }}>5k+</h3>
                <p style={{ fontWeight: 600 }}>Happy Clients</p>
              </div>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '15px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '5px' }}>24/7</h3>
                <p style={{ fontWeight: 600 }}>Emergency Service</p>
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
      <section className="section bg-pattern-dark" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Why Choose Al Riaz?</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '50px' }}>
              We combine technical expertise with a commitment to customer satisfaction.
            </p>

            <div className="grid grid-2">
              {[
                { title: "Licensed Experts", desc: "All our technicians are certified and background-checked." },
                { title: "Upfront Pricing", desc: "No hidden fees. You know the cost before we start." },
                { title: "On-Time Arrival", desc: "We value your time and guarantee punctual service." },
                { title: "Work Warranty", desc: "We stand behind our quality with a satisfaction guarantee." }
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
                text: "The technician arrived within 30 minutes of my call. The repair was handled very professionally and the price was fair. I'll definitely use Al Riaz again for my villa in Al Yasmin!",
                author: "Abdul Rahman Al-Saud",
                role: "Client from Al Yasmin"
              },
              {
                text: "Very impressed with the smart intercom system they installed. It works perfectly with my phone. Great job!",
                author: "Khalid Al-Otaibi",
                role: "Client from Qurtubah"
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
          <div className="bg-pattern" style={{
            background: '#fff',
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-premium)',
            padding: '60px',
            textAlign: 'center',
            border: '1px solid var(--border)'
          }}>
            <div style={{ marginBottom: '20px', display: 'inline-flex', padding: '20px', background: 'rgba(225, 29, 72, 0.05)', borderRadius: '50%', color: 'var(--primary)' }}>
              <Phone size={60} />
            </div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '20px', color: '#1e293b' }}>
              Need Immediate Assistance?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Our expert technicians are on standby for 24/7 emergency repairs in all Riyadh districts.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white', borderRadius: '50px' }}>
                <WhatsAppIcon size={24} /> WhatsApp Now
              </a>
              <a href="tel:+966508901536" className="btn btn-lg" style={{ background: '#1e293b', color: 'white', borderRadius: '50px' }}>
                <Phone size={24} /> Call 050 890 1536
              </a>
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
              { name: "Ahmed Abdullah", role: "Master Electrician" },
              { name: "Khalid Mansour", role: "Senior Plumber" },
              { name: "Mohammad Fazil", role: "Security Expert" }
            ].map((member, i) => (
              <div key={i} className="hover-lift" style={{ textAlign: 'center', background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                <div style={{ width: '100px', height: '100px', background: 'var(--grad-primary)', borderRadius: '50%', marginBottom: '20px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Users size={40} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{member.name}</h4>
                <p style={{ color: 'var(--primary)', fontWeight: 700 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SERVICE LOCATIONS */}
      <section className="section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--secondary)' }}>Serving All Major Districts in Riyadh</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {['Qurtubah', 'Ishbiliyah', 'Al Yarmouk', 'Al Narjis', 'Al Yasmin', 'Al Sahafah', 'Al Falah', 'Granada', 'Al Rabee', 'Al Nada', 'Hittin', 'Al Malqa'].map((area, i) => (
              <Link key={i} href={`/locations/${area.toLowerCase().replace(' ', '-')}`} style={{
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
                boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s'
              }}>
                <MapPin size={16} color="var(--primary)" /> {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
