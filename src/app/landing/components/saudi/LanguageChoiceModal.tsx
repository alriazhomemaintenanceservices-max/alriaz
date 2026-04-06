'use client';

import React from 'react';
import { useLang } from './LanguageContext';

export default function LanguageChoiceModal() {
  const { setLanguage, hasPicked } = useLang();

  if (hasPicked) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(8px)',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#111318',
        border: '1px solid rgba(201,168,76,0.3)',
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ color: '#C9A84C', fontSize: '2.5rem', marginBottom: '20px' }}>🌐</div>
        <h2 style={{ color: 'white', marginBottom: '10px', fontSize: '1.5rem' }}>Select Language</h2>
        <h2 style={{ color: 'white', marginBottom: '30px', fontSize: '1.5rem', fontFamily: 'Cairo' }}>اختر اللغة</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <button 
            onClick={() => setLanguage('ar')}
            style={{
              padding: '20px',
              borderRadius: '16px',
              border: '2px solid rgba(201,168,76,0.2)',
              backgroundColor: 'rgba(255,255,255,0.03)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
          >
            <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Arabic</span>
            <span style={{ fontSize: '1.1rem', opacity: 0.8, fontFamily: 'Cairo' }}>العربية</span>
          </button>

          <button 
            onClick={() => setLanguage('en')}
            style={{
              padding: '20px',
              borderRadius: '16px',
              border: '2px solid rgba(201,168,76,0.2)',
              backgroundColor: 'rgba(255,255,255,0.03)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
          >
            <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>English</span>
            <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>United Kingdom</span>
          </button>
        </div>
      </div>
    </div>
  );
}
