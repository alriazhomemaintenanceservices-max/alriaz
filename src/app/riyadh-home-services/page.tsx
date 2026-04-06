import Link from "next/link";
import { Phone, CheckCircle, ShieldCheck, Clock, Star, MapPin, Zap, Droplets, Wind, Wrench, Home, BadgeCheck, ArrowRight, MessageCircle, AlertTriangle } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { StickyCTA } from "./StickyCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Services Riyadh | AC, Electrician, Plumber — Same Day | Saudi Home Experts",
  description: "AC not cooling in Riyadh heat? Pipe leaking? Power out? Certified technician arrives in 60 min. Fair pricing. 1,000+ happy customers. Call +966 50 890 1536.",
  alternates: { canonical: "https://saudihomeexperts.com/riyadh-home-services" },
  keywords: "home services Riyadh, AC repair Riyadh, electrician Riyadh, plumber Riyadh, appliance repair Riyadh",
  robots: {
    index: false,
    follow: false,
  },
};

const WA = "https://wa.me/966508901536?text=Hello%20Saudi%20Home%20Experts%2C%20I%20need%20a%20home%20service%20in%20Riyadh.";
const TEL = "tel:+966508901536";

const services = [
  { icon: Wind, color: "#0ea5e9", bg: "#f0f9ff", problem: "AC not cooling?", title: "AC Repair & Maintenance", points: ["Gas refill & leak fix", "Deep cleaning & filter change", "Compressor & thermostat repair"] },
  { icon: Zap, color: "#f59e0b", bg: "#fffbeb", problem: "Power issues or short circuit?", title: "Electrical Services", points: ["Short circuit & breaker repair", "Wiring installation & upgrades", "DB box replacement"] },
  { icon: Droplets, color: "#3b82f6", bg: "#eff6ff", problem: "Water leakage or blocked drain?", title: "Plumbing Services", points: ["Pipe leaks & burst pipes", "Drain & sewer unblocking", "Water heater installation"] },
  { icon: Wrench, color: "#8b5cf6", bg: "#f5f3ff", problem: "Washing machine or fridge broken?", title: "Appliance Repair", points: ["Washing machine repair", "Refrigerator & freezer fix", "Dishwasher & oven repair"] },
  { icon: Home, color: "#10b981", bg: "#f0fdf4", problem: "Villa needs fixing or painting?", title: "General Maintenance", points: ["Painting & touch-ups", "Carpentry & furniture assembly", "Door, lock & window repair"] },
];

const why = [
  { icon: Clock, t: "60-Min Arrival", d: "A technician is at your door fast — across all Riyadh districts." },
  { icon: BadgeCheck, t: "Background-Checked Pros", d: "Uniformed, licensed, and fully vetted technicians you can trust." },
  { icon: ShieldCheck, t: "Warranty on Work", d: "All repairs guaranteed. We come back free if the issue returns." },
  { icon: CheckCircle, t: "No Hidden Charges", d: "You see the price before we start. No surprises. Ever." },
  { icon: Star, t: "1000+ Homes Served", d: "Google 5-star rated service trusted across all Riyadh neighborhoods." },
  { icon: Phone, t: "24/7 Emergency", d: "AC fails at midnight? Pipe bursts on Friday? We answer." },
];

const reviews = [
  { name: "Mohammed Al-Harbi", area: "Al Yasmin", text: "AC broke at 11 PM. Technician arrived in 45 minutes and fixed it on the spot. Fair price. Will use again." },
  { name: "Fatima Al-Rashid", area: "Olaya", text: "Professional plumber. Fixed the pipe leak without damaging anything. Left the place clean. Highly recommend." },
  { name: "Abdullah Al-Zahrani", area: "Al Narjis", text: "Used them for painting and carpentry. On time, professional, and very clean. Amazing work." },
  { name: "Nora Al-Otaibi", area: "Hittin", text: "Fixed a short circuit in my villa. Also checked the full DB box. Very knowledgeable and honest." },
  { name: "Khalid Al-Qahtani", area: "Al Rabee", text: "Washing machine broke mid-cycle. Same-day technician. Fixed and tested perfectly." },
];

const faqs = [
  { q: "How much does a home service visit cost in Riyadh?", a: "We offer fair and transparent pricing. Once the technician inspects the problem on-site, they will give you a clear quote before starting any work. No hidden charges." },
  { q: "How fast can a technician reach my home?", a: "Most Riyadh areas get a technician within 30–60 minutes. We serve Olaya, Al Yasmin, Hittin, Al Narjis, Al Sahafah, Malaz, Qurtubah and all nearby districts." },
  { q: "Are you available at night and on weekends?", a: "Yes — 24 hours a day, 7 days a week including holidays. No extra charge for evening or weekend callouts." },
  { q: "Are your technicians certified?", a: "Absolutely. All technicians are licensed, background-checked, and trained. We only send people we'd trust in our own homes." },
  { q: "What if the same problem comes back?", a: "All our work is covered by a warranty. If the issue returns within the warranty period, we come back and fix it at no cost." },
  { q: "Can I book multiple services in one visit?", a: "Yes. One technician can handle AC, plumbing, and electrical tasks in a single visit — saving you time and money." },
];

const hoods = ["Olaya","Al Yasmin","Hittin","Al Malqa","Al Narjis","Al Rabee","Al Sahafah","Granada","Ishbiliyah","Al Yarmouk","Qurtubah","Malaz","Al Falah","Al Nada","Al Worood","Sulaymaniyah","Al Murabba","Diplomatic Quarter"];

export default function RiyadhHomeServicesPage() {
  return (
    <>
      {/* ── STICKY MOBILE CTA (MOVED VERY TOP TO PREVENT CLIPPING) ── */}
      <StickyCTA />

    <main style={{ paddingTop: "80px", color: "#1e293b", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #1e1b4b 100%)", color: "white", padding: "70px 0 90px", position: "relative", overflow: "hidden" }}>
        
        <div className="container" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px", alignItems: "center" }}>
          
          <div className="hero-text-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px", margin: "0 auto" }}>
            {/* Urgency bar */}
            <div className="hero-urgency-bar" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.35)", borderRadius: "50px", padding: "7px 16px", fontSize: "0.82rem", fontWeight: 700, color: "#fbbf24", marginBottom: "22px" }}>
              <AlertTriangle size={14} /> Only limited slots available today in Riyadh
            </div>

            <h1 style={{ textAlign: "center", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "18px" }}>
              Riyadh's AC Died in{" "}
              <span style={{ color: "#fbbf24" }}>50°C Heat?</span>{" "}
              Pipe Leaking? Power Out?<br />
              <span style={{ color: "#fb7185" }}>We Fix it in 60 Minutes.</span>
            </h1>

            <p style={{ textAlign: "center", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.78)", maxWidth: "550px", marginBottom: "24px", lineHeight: 1.75 }}>
              Uniformed, background-checked technicians across all Riyadh neighborhoods.
              <strong style={{ color: "white" }}> 1000+ homes served.</strong> We fix it today, not tomorrow.
            </p>

            {/* VIDEO IMMEDIATELY AFTER TEXT FOR MAX IMPACT ON MOBILE */}
            <div className="hero-video-wrapper" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "4px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", maxWidth: "420px", width: "100%", margin: "0 auto 28px", aspectRatio: "9/16" }}>
             <div style={{ position: "absolute", top: "15px", left: "15px", background: "rgba(37,211,102,0.9)", color: "white", padding: "6px 14px", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 800, zIndex: 2, display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "8px", height: "8px", background: "white", borderRadius: "50%", animation: "pulse 1.5s infinite" }}></div>
                Real Work in Riyadh
             </div>
             <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              src="/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.40%20PM.mp4"
            />
            </div>

            {/* FOMO Trigger */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#93c5fd", marginBottom: "12px", fontWeight: 800 }}>
              <div style={{ width: "10px", height: "10px", background: "#f87171", borderRadius: "50%", animation: "pulse 1s infinite" }}></div>
              🔴 Only 2 technicians actively available near you right now!
            </div>

            {/* CTA buttons */}
            <div className="hero-btn-group" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "18px", justifyContent: "center" }}>
              <a href={TEL} id="hero-call" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#e11d48", color: "white", padding: "18px 32px", borderRadius: "12px", fontWeight: 900, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 8px 28px rgba(225,29,72,0.45)" }}>
                <Phone size={21} fill="white" /> Call Now – 60 Min Arrival
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" id="hero-wa" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#25d366", color: "white", padding: "18px 32px", borderRadius: "12px", fontWeight: 900, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 8px 28px rgba(37,211,102,0.35)" }}>
                <WhatsAppIcon size={21} /> WhatsApp & Book Instantly
              </a>
            </div>

            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.48)", marginBottom: "26px" }}>🚀 Technician dispatched within <strong style={{ color: "white" }}>60 minutes</strong></p>

            {/* Trust pills */}
            <div className="hero-trust-pills" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              {["✔ Background-checked technicians","✔ 1000+ homes served","✔ Same-day service across Riyadh"].map(t => (
                <span key={t} style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "50px", padding: "7px 16px", fontSize: "0.85rem", fontWeight: 600 }}>{t}</span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "white", padding: "44px 0", borderBottom: "1px solid #f1f5f9" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "20px", textAlign: "center" }}>
            {[["1,000+","Riyadh customers served"],["14+","Years experience"],["5★","Average rating"],["24/7","Emergency service"],["60 min","Average arrival time"],["100%","Satisfaction Guarantee"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, color: "#e11d48", letterSpacing: "-1px" }}>{n}</div>
                <div style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600, marginTop: "3px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{ background: "#f8fafc" }} id="services">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-block", background: "#fef2f2", color: "#e11d48", padding: "5px 16px", borderRadius: "50px", fontWeight: 700, fontSize: "0.82rem", marginBottom: "14px", textTransform: "uppercase" }}>What We Fix</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.7rem)", marginBottom: "12px" }}>Your Problem. Our Priority. Fixed Today.</h2>
            <p style={{ color: "#64748b", maxWidth: "560px", margin: "0 auto", fontSize: "1rem" }}>We don't just do maintenance — we solve the exact problem keeping you up at night.</p>
          </div>

          <div className="grid grid-3" style={{ gap: "24px" }}>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="card hover-lift" style={{ background: "white", borderRadius: "22px", padding: "32px 28px", border: "1px solid #f1f5f9", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={34} color={s.color} strokeWidth={2.5} />
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 900, color: "#e11d48", lineHeight: 1.2 }}>
                      {s.problem}
                    </div>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "6px", color: "#0f172a" }}>{s.title}</h3>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#16a34a", marginBottom: "14px" }}>✅ Fair Pricing · No hidden charges</div>
                  <ul style={{ display: "grid", gap: "7px" }}>
                    {s.points.map(p => (
                      <li key={p} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "0.88rem", color: "#334155", fontWeight: 600 }}>
                        <CheckCircle size={14} color="#22c55e" strokeWidth={2.5} /> {p}
                      </li>
                    ))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", marginTop: "20px", background: "#f0fdf4", color: "#16a34a", padding: "11px", borderRadius: "10px", fontWeight: 800, fontSize: "0.88rem", textDecoration: "none", border: "1px solid #bbf7d0" }}>
                    <WhatsAppIcon size={16} /> Get Instant Quote
                  </a>
                </div>
              );
            })}

            {/* Wide CTA card */}
            <div style={{ gridColumn: "1/-1", background: "linear-gradient(135deg, #e11d48 0%, #9f1239 100%)", borderRadius: "22px", padding: "34px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "18px", color: "white" }}>
              <div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fda4af", marginBottom: "6px", textTransform: "uppercase" }}>⚡ Same-Day Service</div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginBottom: "6px" }}>Not sure what you need? Just call.</h3>
                <p style={{ opacity: 0.82, fontSize: "0.95rem" }}>We diagnose the problem and send the right technician to your Riyadh home instantly.</p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", width: "100%" }}>
                <a href={TEL} id="services-call" style={{ flex: 1, display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "7px", background: "white", color: "#e11d48", padding: "16px 26px", borderRadius: "10px", fontWeight: 900, fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}><Phone size={19} /> Fix My Issue Now</a>
                <a href={WA} target="_blank" rel="noopener noreferrer" id="services-wa" style={{ flex: 1, display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "7px", background: "#25d366", color: "white", padding: "16px 26px", borderRadius: "10px", fontWeight: 900, fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}><WhatsAppIcon size={19} /> Book Technician Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── URGENCY STRIP ── */}
      <section style={{ background: "#fbbf24", padding: "20px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontWeight: 900, fontSize: "clamp(1rem, 3.5vw, 1.25rem)", color: "#0f172a", flex: 1, textAlign: "left" }}>
            🚨 RIYADH ALERT: Only A Few Slots Left Today — Technician Near You!
          </p>
          <a href={WA} id="urgency-call" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#e11d48", color: "white", padding: "14px 28px", borderRadius: "10px", fontWeight: 900, fontSize: "1.05rem", textDecoration: "none", flexShrink: 0, boxShadow: "0 4px 15px rgba(225,29,72,0.4)" }}>
            <WhatsAppIcon size={18} /> Book Technician Now
          </a>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: "#0f172a", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-block", background: "rgba(225,29,72,0.15)", color: "#fb7185", padding: "5px 16px", borderRadius: "50px", fontWeight: 700, fontSize: "0.82rem", marginBottom: "14px", textTransform: "uppercase" }}>Why Saudi Home Experts?</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.7rem)", marginBottom: "12px" }}>Riyadh's Most Trusted Home Service Team</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto" }}>We don't just fix things — we give you peace of mind.</p>
          </div>
          <div className="grid grid-3" style={{ gap: "20px" }}>
            {why.map((w) => {
              const I = w.icon;
              return (
                <div key={w.t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "28px" }}>
                  <div style={{ width: "46px", height: "46px", background: "rgba(225,29,72,0.15)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <I size={22} color="#fb7185" />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: "7px", fontWeight: 800 }}>{w.t}</h3>
                  <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.9rem", lineHeight: 1.6 }}>{w.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-block", background: "#f0fdf4", color: "#16a34a", padding: "5px 16px", borderRadius: "50px", fontWeight: 700, fontSize: "0.82rem", marginBottom: "14px" }}>Simple 3 Steps</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.7rem)" }}>Fixed in 3 Easy Steps</h2>
          </div>
          <div className="grid grid-3" style={{ gap: "24px" }}>
            {[
              { n: "01", icon: MessageCircle, t: "Contact Us", d: "Call or WhatsApp. Tell us the problem. We confirm a technician within minutes." },
              { n: "02", icon: MapPin, t: "Technician Arrives", d: "Certified specialist at your Riyadh door — usually in under 60 minutes." },
              { n: "03", icon: CheckCircle, t: "Problem Solved", d: "Diagnosed, fixed, and tested. You pay only after you're 100% satisfied." },
            ].map((s, i, arr) => {
              const I = s.icon;
              return (
                <div key={s.n} style={{ textAlign: "center", padding: "36px 26px", background: "#f8fafc", borderRadius: "22px", border: "1px solid #f1f5f9", position: "relative" }}>
                  {i < arr.length - 1 && <div className="hide-mobile" style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", color: "#cbd5e1", zIndex: 1 }}><ArrowRight size={26} /></div>}
                  <div style={{ width: "68px", height: "68px", borderRadius: "50%", background: "linear-gradient(135deg, #e11d48, #be123c)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", boxShadow: "0 8px 22px rgba(225,29,72,0.28)" }}>
                    <I size={28} color="white" />
                  </div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#e11d48", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>STEP {s.n}</div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "10px", color: "#0f172a" }}>{s.t}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.65 }}>{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INLINE CTA ── */}
      <section style={{ background: "#fef2f2", padding: "44px 0", borderTop: "1px solid #fecdd3", borderBottom: "1px solid #fecdd3" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>
            ⚡ Same-day home service available now in Riyadh
          </p>
          <p style={{ color: "#64748b", marginBottom: "22px", fontSize: "0.92rem" }}>Inspection from SAR 80 · No hidden charges · Certified techs · 60-min arrival</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={TEL} id="mid-call" style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#e11d48", color: "white", padding: "15px 30px", borderRadius: "12px", fontWeight: 800, fontSize: "1rem", textDecoration: "none", boxShadow: "0 6px 18px rgba(225,29,72,0.28)" }}>
              <Phone size={19} /> Call +966 50 890 1536
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" id="mid-wa" style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#25d366", color: "white", padding: "15px 30px", borderRadius: "12px", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
              <WhatsAppIcon size={19} /> Book Free on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE IN ACTION (VIDEOS) ── */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{ display: "inline-block", background: "#fef2f2", color: "#e11d48", padding: "5px 16px", borderRadius: "50px", fontWeight: 700, fontSize: "0.82rem", marginBottom: "14px", textTransform: "uppercase" }}>Work in Action</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.7rem)", marginBottom: "10px" }}>Real Work Done in Riyadh – No Stock Photos</h2>
            <p style={{ color: "#64748b", maxWidth: "540px", margin: "0 auto", fontSize: "0.95rem" }}>Certified technicians fixing real problems across Riyadh. What you see is exactly the service you'll get.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.39%20PM.mp4", label: "Home Maintenance", beforeAfter: "Fixed in 45 Min" },
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.40%20PM%20(2).mp4", label: "Plumbing Repair", beforeAfter: "Zero Leakage Now" },
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.40%20PM.mp4", label: "Home Maintenance", beforeAfter: "100% Fixed" },
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.41%20PM%20(1).mp4", label: "Home Maintenance", beforeAfter: "Real Result" },
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.41%20PM.mp4", label: "Home Maintenance", beforeAfter: "Tested & Working" },
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.42%20PM%20(1).mp4", label: "Home Maintenance", beforeAfter: "Before / After Result" },
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%208.48.42%20PM.mp4", label: "Home Maintenance", beforeAfter: "Cleaned & Fixed" },
              { src: "/ads%20video/WhatsApp%20Video%202026-04-03%20at%209.13.54%20PM.mp4", label: "Home Maintenance", beforeAfter: "Inspection Complete" },
            ].map((v, i) => (
              <div key={i} style={{ background: "white", borderRadius: "20px", overflow: "hidden", border: "1px solid #f1f5f9", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", position: "relative" }}>
                <div style={{ position: "absolute", top: "12px", left: "12px", background: "#facc15", color: "#854d0e", border: "2px solid #ca8a04", padding: "7px 16px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 900, zIndex: 2, boxShadow: "0 4px 10px rgba(0,0,0,0.4)", textTransform: "uppercase" }}>📸 {v.beforeAfter}</div>
                <video 
                  src={v.src} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  style={{ width: "100%", height: "450px", objectFit: "cover" }}
                />
                <div style={{ padding: "15px", textAlign: "center", fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>
                  {v.label}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#e11d48", color: "white", padding: "16px 36px", borderRadius: "50px", fontWeight: 900, fontSize: "1.1rem", textDecoration: "none", boxShadow: "0 8px 25px rgba(225,29,72,0.3)" }}>
              <WhatsAppIcon size={22} /> Get Same Service Today
            </a>
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ── */}
      <section style={{ background: "#f8fafc", padding: "66px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", marginBottom: "10px" }}>We Cover Every Corner of Riyadh</h2>
            <p style={{ color: "#64748b", maxWidth: "520px", margin: "0 auto", fontSize: "0.93rem" }}>From North to South Riyadh — our technicians are stationed across the city for the fastest response.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {hoods.map(n => (
              <span key={n} style={{ background: "white", border: "1px solid #e2e8f0", padding: "9px 20px", borderRadius: "50px", fontWeight: 600, fontSize: "0.87rem", color: "#334155", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                📍 {n}
              </span>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "24px", color: "#64748b", fontSize: "0.88rem" }}>
            Don't see your area?{" "}
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ color: "#e11d48", fontWeight: 700, textDecoration: "underline" }}>WhatsApp us</a> — we likely cover it.
          </p>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-block", background: "#fffbeb", color: "#d97706", padding: "5px 16px", borderRadius: "50px", fontWeight: 700, fontSize: "0.82rem", marginBottom: "14px", textTransform: "uppercase" }}>Real Reviews</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.7rem)", marginBottom: "10px" }}>1,000+ Riyadh Families Trust Us</h2>
            <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto", fontSize: "0.95rem" }}>Real people. Real homes. Real results.</p>
          </div>
          <div className="grid grid-3" style={{ gap: "22px" }}>
            {reviews.map(r => (
              <div key={r.name} className="card hover-lift" style={{ borderRadius: "20px", padding: "28px", border: "1px solid #f1f5f9", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p style={{ color: "#334155", fontSize: "0.93rem", lineHeight: 1.7, marginBottom: "18px", fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #e11d48, #9f1239)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "1rem" }}>{r.name.charAt(0)}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0f172a" }}>{r.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "#94a3b8", display: "flex", alignItems: "center", gap: "3px" }}><MapPin size={11} /> {r.area}, Riyadh</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section className="section" style={{ background: "#0f172a", color: "white" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "56px", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(225,29,72,0.15)", color: "#fb7185", padding: "5px 16px", borderRadius: "50px", fontWeight: 700, fontSize: "0.82rem", marginBottom: "18px", textTransform: "uppercase" }}>Get a Free Quote</div>
              <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.5rem)", marginBottom: "14px" }}>Book Your Home Service in Riyadh</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.97rem", marginBottom: "30px", lineHeight: 1.7 }}>Fill the form and we call you back in under 5 minutes. Or reach us directly:</p>
              <div style={{ display: "grid", gap: "14px" }}>
                <a href={TEL} id="form-call" style={{ display: "flex", alignItems: "center", gap: "13px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "16px 22px", color: "white", textDecoration: "none" }}>
                  <div style={{ background: "#e11d48", borderRadius: "10px", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Phone size={19} /></div>
                  <div><div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "2px" }}>Click to Call</div><div style={{ fontWeight: 800, fontSize: "1.05rem" }}>+966 50 890 1536</div></div>
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" id="form-wa" style={{ display: "flex", alignItems: "center", gap: "13px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: "14px", padding: "16px 22px", color: "white", textDecoration: "none" }}>
                  <div style={{ background: "#25d366", borderRadius: "10px", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><WhatsAppIcon size={21} /></div>
                  <div><div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginBottom: "2px" }}>WhatsApp</div><div style={{ fontWeight: 800, fontSize: "1rem" }}>Chat with Us Instantly</div></div>
                </a>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "16px 22px" }}>
                  <div style={{ display: "grid", gap: "8px" }}>
                    {["🛡️ Background-checked technicians","💰 Transparent pricing — from SAR 80","⚡ Arrive in 60 minutes or less","✅ Warranty on all repairs"].map(i => (
                      <div key={i} style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{i}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-box" style={{ background: "white", borderRadius: "22px", padding: "36px", color: "#0f172a" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "5px" }}>Request a Free Quote</h3>
              <p style={{ color: "#64748b", fontSize: "0.87rem", marginBottom: "24px" }}>We call back in under 5 minutes. Inspection from SAR 80.</p>
              <div style={{ display: "grid", gap: "14px" }} id="lead-form">
                {[
                  { id: "f-name", label: "Your Name *", type: "text", ph: "e.g. Mohammed Al-Harbi" },
                  { id: "f-phone", label: "Phone Number (WhatsApp) *", type: "tel", ph: "+966 5X XXX XXXX" },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={{ display: "block", fontWeight: 700, fontSize: "0.82rem", marginBottom: "5px", color: "#334155" }}>{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.ph} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e2e8f0", borderRadius: "10px", fontSize: "0.93rem", fontFamily: "inherit", color: "#0f172a", outline: "none" }} />
                  </div>
                ))}
                <div>
                  <label htmlFor="f-service" style={{ display: "block", fontWeight: 700, fontSize: "0.82rem", marginBottom: "5px", color: "#334155" }}>Service Needed *</label>
                  <select id="f-service" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e2e8f0", borderRadius: "10px", fontSize: "0.93rem", fontFamily: "inherit", color: "#0f172a", background: "white", appearance: "none", outline: "none" }}>
                    <option value="">Select a service...</option>
                    <option>AC Repair & Maintenance</option>
                    <option>Electrical Services</option>
                    <option>Plumbing Services</option>
                    <option>Appliance Repair</option>
                    <option>General Home Maintenance</option>
                    <option>Not Sure — Need Diagnosis</option>
                  </select>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer" id="form-submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "9px", background: "#e11d48", color: "white", padding: "15px", borderRadius: "12px", fontWeight: 800, fontSize: "1rem", textDecoration: "none", boxShadow: "0 6px 18px rgba(225,29,72,0.28)", marginTop: "4px" }}>
                  <WhatsAppIcon size={19} /> Get Free Quote via WhatsApp
                </a>
                <p style={{ textAlign: "center", fontSize: "0.77rem", color: "#94a3b8" }}>🔒 100% private. No spam. No obligation.</p>
                <div style={{ textAlign: "center", background: "#f0fdf4", color: "#166534", padding: "12px", borderRadius: "8px", border: "2px solid #bbf7d0", fontSize: "0.9rem", fontWeight: 800, marginTop: "12px" }}>
                  🛡️ 30-Day Money-Back Guarantee on All Repairs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{ display: "inline-block", background: "#fef2f2", color: "#e11d48", padding: "5px 16px", borderRadius: "50px", fontWeight: 700, fontSize: "0.82rem", marginBottom: "14px" }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.5rem)" }}>Questions About Home Services in Riyadh?</h2>
          </div>
          {faqs.map((f, i) => (
            <details key={i} style={{ marginBottom: "10px" }}>
              <summary style={{ fontWeight: 700, fontSize: "0.97rem", color: "#0f172a" }}>{f.q}</summary>
              <div className="accordion-content">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #e11d48 0%, #9f1239 100%)", padding: "80px 0", textAlign: "center", color: "white" }}>
        <div className="container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: "50px", padding: "7px 18px", fontSize: "0.82rem", fontWeight: 700, marginBottom: "22px" }}>
            🔥 Don't Wait Until It Gets Worse
          </div>
          <h2 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "18px" }}>
            Your Home Deserves to Be Fixed Today — Not Tomorrow.
          </h2>
          <p style={{ fontSize: "clamp(0.97rem, 2vw, 1.15rem)", opacity: 0.84, maxWidth: "540px", margin: "0 auto 36px", lineHeight: 1.75 }}>
            Certified technician. 60-min arrival. From SAR 80. Work guaranteed.
            Serving all Riyadh neighborhoods — 24 hours a day.
          </p>
          <div className="final-cta-btn-group" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={TEL} id="final-call" style={{ display: "inline-flex", alignItems: "center", gap: "11px", background: "white", color: "#e11d48", padding: "18px 38px", borderRadius: "50px", fontWeight: 900, fontSize: "1.1rem", boxShadow: "0 8px 28px rgba(0,0,0,0.2)", textDecoration: "none" }}>
              <Phone size={21} fill="#e11d48" /> Call Now — Free
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" id="final-wa" style={{ display: "inline-flex", alignItems: "center", gap: "11px", background: "#25d366", color: "white", padding: "18px 38px", borderRadius: "50px", fontWeight: 900, fontSize: "1.1rem", boxShadow: "0 8px 28px rgba(0,0,0,0.2)", textDecoration: "none" }}>
              <WhatsAppIcon size={21} /> WhatsApp — Book Now
            </a>
          </div>
          <p style={{ marginTop: "22px", opacity: 0.55, fontSize: "0.85rem" }}>📍 All Riyadh areas &nbsp;|&nbsp; 🕐 Open 24/7 &nbsp;|&nbsp; 🛡️ Workmanship guarantee &nbsp;|&nbsp; 💰 From SAR 80</p>
        </div>
      </section>

      {/* ── LEGAL LINKS (FOR GOOGLE ADS COMPLIANCE) ── */}
      <div style={{ padding: "25px", textAlign: "center", fontSize: "0.9rem", color: "#f8fafc", background: "#020617" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "25px", marginBottom: "12px" }}>
          <Link href="/privacy-policy" style={{ color: "white", textDecoration: "underline", fontWeight: 600 }}>Privacy Policy</Link>
          <Link href="/terms-of-service" style={{ color: "white", textDecoration: "underline", fontWeight: 600 }}>Terms of Service</Link>
        </div>
        <p style={{ opacity: 0.7 }}>© {new Date().getFullYear()} Saudi Home Experts. All Rights Reserved.</p>
      </div>

      {/* Landing Page Scoped CSS for Perfect Mobile Responsive Experience */}
      <style>{`
        /* Hide Global Elements to focus on converting */
        nav.nav, footer.footer, .floating-whatsapp { display: none !important; }
        
        main { padding-top: 0 !important; }
        
        /* Desktop specific */
        @media (min-width: 768px) { 
          #mobile-sticky-bar { display: none !important; } 
        }

        /* Mobile specific alignment and fixes */
        @media (max-width: 767px) { 
          body { padding-bottom: 90px; } 
          
          /* Center everything in Hero Area */
          .hero-text-content { text-align: center; }
          .hero-text-content h1 { text-align: center; }
          .hero-text-content p { text-align: center; margin-left: auto; margin-right: auto; }
          .hero-urgency-bar { margin-left: 0 !important; justify-content: center; }
          .hero-trust-pills { justify-content: center; }

          /* Stack buttons full width */
          .hero-btn-group { flex-direction: column; width: 100%; }
          .hero-btn-group a { width: 100%; justify-content: center; text-align: center; }

          /* Complete Reel Visibility */
          .hero-video-wrapper { max-width: 100% !important; border-radius: 12px !important; }

          /* Form Stretch Edge-to-Edge */
          .form-box { margin-left: -20px; margin-right: -20px; width: calc(100% + 40px); border-radius: 0 !important; padding: 30px 20px !important; }

          /* Stack Final CTA */
          .final-cta-btn-group { flex-direction: column; width: 100%; }
          .final-cta-btn-group a { width: 100%; justify-content: center; text-align: center; }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255,255,255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255, 0); }
        }
      `}</style>
    </main>
    </>
  );
}
