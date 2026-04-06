'use client';

import React from 'react';
import { useLang } from './LanguageContext';

export default function LandingNavbar() {
  const { lang, setLanguage, t } = useLang();
  
  const WA_URL = 'https://wa.me/966508901536?text=' + encodeURIComponent('Hello, I want to book a home technician.');

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(10, 12, 16, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
      padding: '15px 20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {/* Logo */}
        <div style={{
          color: 'white',
          fontSize: '1.4rem',
          fontWeight: 800,
          letterSpacing: '-0.5px'
        }}>
          Saudi <span style={{ color: '#C9A84C' }}>Home</span> Experts
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Lang Buttons */}
          <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '4px' }}>
            <button 
              onClick={() => setLanguage('ar')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: lang === 'ar' ? '#C9A84C' : 'transparent',
                color: lang === 'ar' ? 'black' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              عربي
            </button>
            <button 
              onClick={() => setLanguage('en')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: lang === 'en' ? '#C9A84C' : 'transparent',
                color: lang === 'en' ? 'black' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              English
            </button>
          </div>

          {/* Book Now */}
          <a 
            href={WA_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.702-.932-.702-1.779 0-.847.444-1.264.603-1.437.159-.173.346-.217.462-.217h.332c.115 0 .231-.022.331.217.115.275.397.967.433 1.039.036.072.06.155.011.252-.049.098-.073.159-.145.242-.072.083-.153.184-.217.247-.072.072-.147.151-.063.296.084.144.374.616.802 1.002.553.496 1.018.65 1.176.723.159.072.252.06.346-.046.094-.105.405-.472.513-.632.108-.159.217-.133.34-.087.123.046.78.368.914.436.134.068.224.1.256.155.033.055.033.318-.111.723z"/>
              <path d="M12.736 22.566c-1.894 0-3.71-.468-5.334-1.354l-6.342 1.662 1.696-6.19c-1.01-1.72-1.544-3.687-1.544-5.727 0-6.24 5.076-11.317 11.317-11.317 3.023 0 5.864 1.177 8 3.315 2.138 2.137 3.316 4.978 3.317 8.002 0 6.241-5.077 11.316-11.31 11.316zM12.736 2.186c-5.13 0-9.303 4.173-9.303 9.303 0 2.052.673 4.015 1.947 5.7l-1.033 3.77 3.861-1.01c1.614.978 3.473 1.493 5.374 1.493 5.13 0 9.303-4.173 9.303-9.303 0-2.484-.967-4.821-2.723-6.577a9.217 9.217 0 00-6.425-2.724v.051z"/>
            </svg>
            {t('احجز الآن', 'Book Now')}
          </a>
        </div>
      </div>
    </nav>
  );
}
