'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Saudi Home Experts Logo
 * Circular brand emblem (public/logo.png) with the brand name beside it.
 * Pass `dark` on dark backgrounds (e.g. the footer) to switch the wordmark to white.
 */
export default function Logo({ size = 36, dark = false }: { size?: number; dark?: boolean }) {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Brand emblem */}
      <Image
        src="/logo.png"
        alt={t('saudi-home-experts')}
        width={size}
        height={size}
        priority
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
          flexShrink: 0,
        }}
      />

      {/* Brand text */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span style={{
          fontSize: '1.15rem',
          fontWeight: 900,
          color: dark ? '#FFFFFF' : '#1D4ED8',
          letterSpacing: '-0.3px',
        }}>
          {t('saudi-home-experts')}
        </span>
        <span style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          color: dark ? '#22C55E' : '#006C35',
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
        }}>
          {t('saudi-badge') === 'KSA' ? 'KINGDOM OF SAUDI ARABIA' : 'المملكة العربية السعودية'}
        </span>
      </div>
    </div>
  );
}
