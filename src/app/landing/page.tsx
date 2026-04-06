'use client';

import React from 'react';
import './components/saudi/saudi.css';
import { LanguageProvider } from './components/saudi/LanguageContext';
import ScrollRevealInit from './components/saudi/ScrollRevealInit';
import LandingNavbar from './components/saudi/LandingNavbar';
import LanguageChoiceModal from './components/saudi/LanguageChoiceModal';
import Hero from './components/saudi/Hero';
import TrustBar from './components/saudi/TrustBar';
import Services from './components/saudi/Services';
import HowItWorks from './components/saudi/HowItWorks';
import Story from './components/saudi/Story';
import WhyUs from './components/saudi/WhyUs';
import Reviews from './components/saudi/Reviews';
import BookingForm from './components/saudi/BookingForm';
import Cities from './components/saudi/Cities';
import FAQ from './components/saudi/FAQ';
import Footer from './components/saudi/Footer';
import MobileCTA from './components/saudi/MobileCTA';
import FloatingWhatsApp from './components/saudi/FloatingWhatsApp';

export default function SaudiLandingPage() {
  return (
    <LanguageProvider>
      <ScrollRevealInit />
      
      {/* 
        The language choice modal pops up on first visit 
        to ask the user to pick between English or Urdu.
      */}
      <LanguageChoiceModal />
      
      <div className="lp-root-saudi">
        {/* New navbar with Logo, Lang Buttons, and Book Now button */}
        <LandingNavbar />

        <main>
          <Hero />
          <TrustBar />
          <Services />
          <HowItWorks />
          <Story />
          <WhyUs />
          <Reviews />
          <BookingForm />
          <Cities />
          <FAQ />
        </main>

        <Footer />

        {/* Sticky / floating elements */}
        <MobileCTA />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
