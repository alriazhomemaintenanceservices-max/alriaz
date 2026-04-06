"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const TEL = "tel:+966508901536";
const WA = "https://wa.me/966508901536?text=I%20came%20from%20Google.%20I%20have%20an%20inquiry%20regarding%20home%20maintenance%20services.";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 300px (or approximately past the hero)
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      id="mobile-sticky-bar" 
      style={{ 
        position: "fixed", 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 9999999, 
        display: "flex", 
        background: "white", 
        boxShadow: "0 -4px 30px rgba(0,0,0,0.2)", 
        padding: "10px", 
        gap: "8px",
        transform: show ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease-in-out",
        opacity: show ? 1 : 0
      }}
    >
      <a href={TEL} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", background: "#e11d48", color: "white", padding: "10px", borderRadius: "14px", fontWeight: 900, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 12px rgba(225,29,72,0.3)", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><Phone size={18} fill="white" /> Call Now</div>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, opacity: 0.9 }}>60 Min Arrival</span>
      </a>
      <a href={WA} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", background: "#25d366", color: "white", padding: "10px", borderRadius: "14px", fontWeight: 900, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 12px rgba(37,211,102,0.3)", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><WhatsAppIcon size={18} /> WhatsApp</div>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, opacity: 0.9 }}>Instant Booking</span>
      </a>
    </div>
  );
}
