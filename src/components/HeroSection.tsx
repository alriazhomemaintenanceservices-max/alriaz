"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SLIDES = [
    {
        image: "https://images.unsplash.com/photo-1621905235277-22649a379201?q=80&w=2070&auto=format&fit=crop", // Electrician
        alt: "Electrician"
    },
    {
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop", // Plumber
        alt: "Plumber"
    },
    {
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop", // Intercom
        alt: "Intercom"
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section style={{
            position: 'relative',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            overflow: 'hidden'
        }}>
            {/* Background Pylon Watermark */}
            <div style={{
                position: 'absolute',
                left: '2%',
                bottom: '50px',
                width: '350px',
                height: '400px',
                opacity: 0.1,
                backgroundImage: 'url("https://www.svgrepo.com/show/40089/high-voltage.svg")',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                zIndex: 1,
                filter: 'grayscale(1)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '0' }}>
                    <div className="animate-fade-in" style={{ paddingRight: '20px' }}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 5vw, 4.2rem)',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            fontWeight: 800,
                            color: '#333',
                            letterSpacing: '-1px'
                        }}>
                            Best Electrician in <br />
                            Riyadh | Fast, Safe <br />
                            & Affordable <br />
                            <span style={{ color: 'var(--primary)' }}>Repairs</span>
                        </h1>
                        <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '35px', maxWidth: '420px', lineHeight: 1.7 }}>
                            Trusted electrician in Riyadh for repairs, installations & 24/7 emergency services. Call now for the best electrician services in Riyadh!
                        </p>
                        <Link href="/services" className="btn btn-primary" style={{ padding: '14px 30px', borderRadius: '2px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, display: 'inline-flex' }}>
                            Discover More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right side background area */}
            <div style={{
                position: 'absolute',
                right: '-5%',
                top: 0,
                width: '60%',
                height: '100%',
                zIndex: 2
            }}>
                {/* SLIDER IMAGES with Fade Transition */}
                {SLIDES.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `url("${slide.image}") center/cover no-repeat`,
                            maskImage: 'linear-gradient(to left, black 80%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to left, black 80%, transparent 100%)',
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out'
                        }}></div>
                ))}

                {/* Red Polygon Overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '100%',
                    height: '150px',
                    background: 'var(--primary)',
                    opacity: 0.4,
                    clipPath: 'polygon(0% 40%, 40% 0, 100% 60%, 100% 100%, 0% 100%)',
                    zIndex: 3
                }}></div>
            </div>

            {/* Navigation Arrows at bottom left */}
            <div style={{ position: 'absolute', bottom: '30px', left: '70px', display: 'flex', zIndex: 30 }}>
                <div
                    onClick={prevSlide}
                    style={{
                        width: '45px',
                        height: '45px',
                        background: '#fff',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                    }}>
                    <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
                </div>
                <div
                    onClick={nextSlide}
                    style={{
                        width: '45px',
                        height: '45px',
                        background: '#111',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                    }}>
                    <ArrowRight size={18} />
                </div>
            </div>
        </section>
    );
}
