import Link from "next/link";
import { Zap, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock, Wrench, ShieldAlert, BadgeCheck, Star, Lightbulb, ThermometerSun, AlertTriangle, ZapOff, Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Electrician in Riyadh | 24/7 Emergency Electrical Repair - Al Riaz"
    },
    alternates: {
        canonical: '/services/electrician'
    },
    description: "Expert electrician in Riyadh for 24/7 emergency repairs, DB balancing, and lighting installation. Serving Olaya, Malaz, and Hittin. 45-min arrival guaranteed. Book on WhatsApp!",
};

export default function ElectricianPage() {
    const whatsappNumber = "966508901536";
    const whatsappMsg = "I need an expert electrician in Riyadh for an emergency repair. I am located in [District Name].";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Electrical Repair & Installation Riyadh",
        "serviceType": "Electrician",
        "description": "24/7 emergency electrical services in Riyadh by Al Riaz. Specialized in short circuit repair, DB load balancing, and smart home lighting for luxury villas.",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Al Riaz Home Maintenance Services",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Olaya District",
                "addressLocality": "Riyadh",
                "addressRegion": "Riyadh Province",
                "addressCountry": "SA",
                "postalCode": "11564"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "Riyadh" },
            { "@type": "Neighborhood", "name": "Olaya" },
            { "@type": "Neighborhood", "name": "Hittin" },
            { "@type": "Neighborhood", "name": "Malqa" },
            { "@type": "Neighborhood", "name": "Yasmin" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Electrical Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Short Circuit Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DB Box Maintenance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chandelier Installation" } }
            ]
        }
    };

    return (
        <main style={{ paddingTop: '100px', background: '#ffffff', color: 'var(--foreground)' }}>

            {/* Breadcrumbs */}
            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Electrician</span>
            </nav>

            {/* 1. HERO SECTION */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                background: '#fff',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div className="animate-fade-in">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: 800, marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px' }}>
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                                EXPERT ELECTRICAL SOLUTIONS
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                fontWeight: 800,
                                color: '#333',
                                letterSpacing: '-1.5px'
                            }}>
                                Licensed <span style={{ color: 'var(--primary)' }}>Electrician</span> in <br />
                                Riyadh — 24/7 Service
                            </h1>
                            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px', maxWidth: '550px', lineHeight: 1.7 }}>
                                Searching for a certified electrician in Riyadh? From emergency short circuits in Olaya to luxury lighting in Hittin, our SASO-standard technicians ensure your home's safety and comfort.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                    <WhatsAppIcon size={20} /> BOOK ON WHATSAPP
                                </a>
                                <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '1px solid #ddd', color: '#111' }}>
                                    CALL NOW
                                </a>
                            </div>
                        </div>

                        <div style={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '500px',
                                height: '550px',
                                background: '#f1f5f9',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-card)'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'url("https://images.unsplash.com/photo-1621905235277-22649a379201?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '10%',
                                    left: '-10%',
                                    width: '120%',
                                    height: '80px',
                                    background: 'var(--primary)',
                                    transform: 'rotate(-10deg)',
                                    opacity: 0.8,
                                    zIndex: 3
                                }}></div>
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
                            <Zap size={20} fill="#25D366" color="#25D366" /> COST & AVAILABILITY SUMMARY
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#1e293b', margin: 0 }}>
                            Hiring a certified electrician in Riyadh guarantees safety and quality. Al Riaz provides 24/7 same-day service in all districts including Olaya (12211), Malaz (12831), and Hittin (13516) with no hidden charges and fully transparent quotes.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Why Choose Al Riaz Home Maintenance?</h2>
                        <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '0 auto' }}>With over a decade of hands-on experience in Riyadh province, we have refined our services to meet the VIP standards expected in the Kingdom.</p>
                    </div>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#eff6ff', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <BadgeCheck size={40} color="var(--primary)" />
                            </div>
                            <h3>12+ Years Local Experience</h3>
                            <p style={{ color: 'var(--muted)' }}>We have navigated the electrical blueprints of thousands of Riyadh villas and apartments since 2012.</p>
                        </div>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#ecfdf5', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <ThermometerSun size={40} color="#10b981" />
                            </div>
                            <h3>Climate-Specific Expertise</h3>
                            <p style={{ color: 'var(--muted)' }}>We specialize in summer load balancing for AC systems, preventing overloads during the peak 50°C heatwaves.</p>
                        </div>
                        <div className="card shadow-hover" style={{ textAlign: 'center', padding: '40px' }}>
                            <div style={{ background: '#fffbeb', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <ShieldAlert size={40} color="#f59e0b" />
                            </div>
                            <h3>Safety-First Philosophy</h3>
                            <p style={{ color: 'var(--muted)' }}>Our technicians follow SEC (Saudi Electricity Company) protocols to the letter, ensuring zero fire risk for your property.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Common Problems Customers Face (200 words) */}
            <section className="section animate-fade-in" style={{ background: '#f1f5f9' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
                        <div style={{ padding: '40px', background: 'white', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ marginBottom: '30px' }}>Real Solutions for Riyadh's Common Electrical Woes</h2>
                            <p style={{ marginBottom: '20px', lineHeight: 1.8 }}>Every homeowner in Riyadh eventually faces the same set of electrical challenges. From our experience, the local environment—high dust levels and intense humidity—causes specific component failures that generic "handymen" often miss.</p>
                            <ul style={{ display: 'grid', gap: '20px' }}>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <AlertTriangle color="red" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Tripping Main Breakers during Summer:</strong> Usually caused by unbalanced loads across phases as ACs work overtime. We rebalance your DB board for stability.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <ZapOff color="orange" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Burnt Insulation in Junction Boxes:</strong> Riyadh's attic temperatures can melt low-quality wiring. We replace them with heat-resistant SASO cables.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <Sparkles color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Luxury Chandelier Failures:</strong> High-end fixtures from abroad often need specialized voltage stabilization to handle local grid fluctuations.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>We don't just patch problems; we engineer them out.</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '30px' }}>Our diagnostic process is what sets us apart. We use thermal imaging cameras to spot "hot spots" in your walls before they turn into electrical fires. This proactive approach has made us the trusted electrician in Riyadh for luxury villa owners in the North.</p>
                            <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                BOOK A SAFETY AUDIT <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Section (150-200 words) */}
            <section className="section animate-fade-in" id="pricing">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Transparent Pricing Strategy</h2>
                        <p style={{ color: 'var(--muted)' }}>No hidden fees. We provide a full quote before a single screwdriver is turned.</p>
                    </div>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <div className="card hover-lift" style={{ padding: '40px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Get a Custom Quote</h3>
                            <p style={{ lineHeight: 1.7, color: 'var(--muted)', marginBottom: '30px' }}>
                                To maintain our high standards of EEAT (Expertise, Experience, Authoritativeness, and Trustworthiness), we provide fair and detailed quotes after diagnosing the issue. This ensures we can dispatch a senior, licensed technician with a fully equipped mobile workshop to your location immediately.
                            </p>
                            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '30px' }}>
                                * Please note: Pricing for luxury items (chandeliers over 50kg) or underground cabling requires a detailed on-site assessment due to the complexity and safety equipment involved.
                            </p>
                            <a href={whatsappUrl} className="btn btn-accent" style={{ background: '#25D366', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                <WhatsAppIcon size={20} /> GET A QUOTE OVER WHATSAPP
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Process Section (Book → Diagnose → Deliver) */}
            <section className="section animate-fade-in" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>How to Book a Riyadh Electrician in 3 Simple Steps</h2>
                    <div className="grid grid-3" style={{ gap: '40px', textAlign: 'center' }}>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>1</div>
                            <h3>Instant Booking</h3>
                            <p style={{ opacity: 0.8 }}>Message us on WhatsApp with your location and a photo of the problem. We confirm your appointment in 2 minutes.</p>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>2</div>
                            <h3>Expert Diagnosis</h3>
                            <p style={{ opacity: 0.8 }}>Our senior electrician arrives within 45 minutes, diagnoses the fault with modern tools, and gives you a fixed-price quote.</p>
                        </div>
                        <div>
                            <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '2.5rem', fontWeight: 900 }}>3</div>
                            <h3>Certified Fix</h3>
                            <p style={{ opacity: 0.8 }}>Work is completed using SASO parts. We test the systemic stability, provide a 30-day warranty, and leave your place tidy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Coverage & Localization */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2>Strategic Coverage Across All Riyadh Districts</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '20px' }}>Our primary service hub is located in the Olaya District, but our mobile fleet is stationed at key entry points across the city to bypass traffic jams. Whether you are in the North, South, East, or West of the capital, we are never far away.</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} color="var(--primary)" /> <strong>Olaya (12211)</strong></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} color="var(--primary)" /> <strong>Hittin (13512)</strong></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} color="var(--primary)" /> <strong>Malaz (12831)</strong></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} color="var(--primary)" /> <strong>Malqa (13521)</strong></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} color="var(--primary)" /> <strong>Al Yasmin (13322)</strong></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} color="var(--primary)" /> <strong>KAFD Area</strong></div>
                            </div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '40px', border: '1px solid var(--border)' }}>
                            <h3>Nearby Landmarks Covered</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>We routinely serve villas and businesses within a 5km radius of:</p>
                            <ul style={{ display: 'grid', gap: '10px', marginTop: '15px' }}>
                                <li>• Kingdom Centre & Olaya Towers</li>
                                <li>• Riyadh Front & Panorama Mall</li>
                                <li>• Princess Nora University (PNU)</li>
                                <li>• King Abdullah Financial District (KAFD)</li>
                            </ul>
                            <div style={{ marginTop: '30px', padding: '20px', background: 'white', borderRadius: '20px', border: '1px solid #25D366' }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>Proximity Alert: Our technician is currently 15 mins away from Olaya.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. EEAT Trust Section */}
            <section className="section animate-fade-in" style={{ background: '#0f172a', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '40px' }}>Reputation Built on Absolute Trust</h2>
                    <div className="grid grid-4" style={{ gap: '30px' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>12+</div>
                            <div style={{ opacity: 0.7 }}>Years in Service</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>15k+</div>
                            <div style={{ opacity: 0.7 }}>Homeowners Served</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>100%</div>
                            <div style={{ opacity: 0.7 }}>SASO Compliant</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>24h</div>
                            <div style={{ opacity: 0.7 }}>Emergency Response</div>
                        </div>
                    </div>
                    <p style={{ marginTop: '50px', maxWidth: '800px', margin: '50px auto 0', opacity: 0.8, lineHeight: 1.8 }}>
                        Al Riaz Home Maintenance is not just a service provider; we are a community partner. Our licenses are renewed annually with the Riyadh Municipality and the Saudi Ministry of Commerce. Every repair we perform contributes to the structural integrity and electrical safety of our beautiful capital.
                    </p>
                </div>
            </section>

            {/* 10. FAQs Section */}
            <section id="faq" className="section animate-fade-in">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Expert Answers (FAQs)</h2>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        <div className="card hover-lift">
                            <h4>Is there an extra charge for emergency calls after midnight?</h4>
                            <p style={{ color: 'var(--muted)' }}>Unlike other services, we maintain a flat-rate surcharge for after-hours calls. Our dispatch center handles midnight emergencies in areas like Malqa and Hittin with standard professional fees to ensure accessibility.</p>
                        </div>
                        <div className="card hover-lift">
                            <h4>Do you install smart home switches and Apple HomeKit integrations?</h4>
                            <p style={{ color: 'var(--muted)' }}>Yes. We specialize in retrofitting traditional villas with smart switches (Lutron, Legrand, or Xiaomi) and ensuring your Wi-Fi Mesh supports your electrical ecosystem without interference.</p>
                        </div>
                        <div className="card hover-lift">
                            <h4>Why does my MCB keep tripping even with no heavy load?</h4>
                            <p style={{ color: 'var(--muted)' }}>This is common in older Olaya villas. It usually indicates a "neutral leakage" or an aged breaker that has lost its sensitivity. We perform a full load test to identify the exact point of failure.</p>
                        </div>
                        <div className="card hover-lift">
                            <h4>Will your electricians provide the spare parts, or do I need to buy them?</h4>
                            <p style={{ color: 'var(--muted)' }}>We carry a stock of high-quality SASO-certified breakers, sockets, and cabling in our mobile workshops. If you prefer a specific brand (e.g., Schneider or ABB), we can source it for you instantly.</p>
                        </div>
                        <div className="card hover-lift">
                            <h4>How soon can an electrician arrive in Nakheel District?</h4>
                            <p style={{ color: 'var(--muted)' }}>Since we have a dedicated team patrolling the Northern Ring Road, we can typically reach An Nakheel or Al-Ghadeer within 35-45 minutes of your WhatsApp confirmation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Testimonials */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Trusted by Your Neighbors</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        <div className="card hover-lift">
                            <div style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Star size={18} fill="currentColor" /> <span style={{ fontWeight: 600 }}>5.0 Rating</span>
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"The only electrician in Riyadh I trust with our luxury villa in Hittin. They fixed our complex Chandelier issue that three other companies couldn't handle."</p>
                            <strong>- Abdullah S., Hittin Resident</strong>
                        </div>
                        <div className="card hover-lift">
                            <div style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Star size={18} fill="currentColor" /> <span style={{ fontWeight: 600 }}>5.0 Rating</span>
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"Fastest response in Olaya! My power went out at 2 AM on a Tuesday, and Ali was here in 30 minutes. Exceptional service and very polite."</p>
                            <strong>- Sarah M., Olaya</strong>
                        </div>
                        <div className="card hover-lift">
                            <div style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Star size={18} fill="currentColor" /> <span style={{ fontWeight: 600 }}>5.0 Rating</span>
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"Very transparent pricing. No hidden costs. They replaced my DB board breakers and even tidied up the wiring. Best home service in the city."</p>
                            <strong>- Faisal A., Malqa</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Case Study (50 words) */}
            <section className="section animate-fade-in">
                <div className="container">
                    <div className="card hover-lift" style={{ background: '#1e293b', color: 'white', padding: '50px', border: 'none' }}>
                        <div className="grid grid-2" style={{ alignItems: 'center' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent)' }}>CASE STUDY: EMERGENCY DB FIX IN AL-KHUZAMA</h3>
                                <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}><strong>Problem:</strong> A total HVAC shutdown during mid-July heat threatened a commercial server room. <br /><strong>Solution:</strong> Al Riaz dispatched an expert phase-balancer in 38 minutes. <br /><strong>Outcome:</strong> System online within 55 mins of arrival. Saved client thousand in potential hardware damage.</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <Zap size={80} color="var(--accent)" style={{ opacity: 0.3 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. Internal Linking Section */}
            <section className="section animate-fade-in" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <h3>Explore More Maintenance Solutions</h3>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                        <Link href="/services/plumber" className="card hover-lift" style={{ padding: '15px 30px', textDecoration: 'none' }}>Master Plumber Riyadh</Link>
                        <Link href="/services/intercom" className="card hover-lift" style={{ padding: '15px 30px', textDecoration: 'none' }}>Smart Intercom Installation</Link>
                        <Link href="/areas/electrician-riyadh-olaya" className="card hover-lift" style={{ padding: '15px 30px', textDecoration: 'none' }}>Electrician in Olaya Hub</Link>
                        <Link href="/areas/electrician-riyadh-yasmin" className="card hover-lift" style={{ padding: '15px 30px', textDecoration: 'none' }}>Yasmin District Support</Link>
                    </div>
                </div>
            </section>

            {/* 14. Final CTAs */}
            <section className="section animate-fade-in" style={{ textAlign: 'center', background: 'var(--grad-primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Ready to Get Your Power Back?</h2>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: 0.9 }}>Available 24/7 across Riyadh. Emergency dispatch active now.</p>
                    <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg" style={{ background: '#25D366', color: 'white', padding: '25px 60px', fontSize: '1.4rem' }}>
                            <WhatsAppIcon size={30} /> BOOK NOW ON WHATSAPP
                        </a>
                        <a href="tel:+966508901536" className="btn btn-lg" style={{ border: '2px solid white', color: 'white', padding: '25px 60px', fontSize: '1.4rem' }}>
                            <Phone size={30} /> CALL HELP LINE
                        </a>
                    </div>
                </div>
            </section>

            {/* 15. Images & Map Meta (150-200 words) */}
            <section className="section animate-fade-in" style={{ background: '#f8fafc', fontSize: '0.85rem', color: 'var(--muted)' }}>
                <div className="container">
                    <h4>Visual Assets & Accessibility Information</h4>
                    <p>Suggested Visuals for Webmaster:
                        <br />• File Name: `riyadh-electrician-emergency-repair.jpg` | Alt: `Licensed electrician in Riyadh repairing a Siemens DB board in a luxury villa in Olaya.`
                        <br />• File Name: `certified-electrician-hittin-riyadh.jpg` | Alt: `SASO certified electrical technician installing luxury LED lighting in Hittin District, Riyadh.`
                        <br />• File Name: `safe-electrical-wiring-riyadh.jpg` | Alt: `Thermal imaging scan of electrical junction boxes by Al Riaz Home Maintenance to prevent fires.`
                    </p>
                    <p style={{ marginTop: '20px' }}>Map Embed Information:
                        <br />Caption: "Al Riaz Dispatch Hub located near Olaya Towers, serving a 30km radius including Hittin, Malqa, and the Riyadh International Airport road."
                    </p>
                </div>
            </section>
        </main>
    );
}
