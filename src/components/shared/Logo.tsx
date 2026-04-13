'use client';

import { useTranslation } from '@/hooks/useTranslation';

/**
 * Saudi Home Experts Logo
 * House silhouette with Saudi green accent and crossed swords motif.
 * Renders brand name in current language beside the icon.
 */
export default function Logo({ size = 36 }: { size?: number }) {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Logo Icon — House with Saudi green accent */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House shape background */}
        <path
          d="M24 4L4 20V44H18V32H30V44H44V20L24 4Z"
          fill="#1D4ED8"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        {/* Roof accent — Saudi green */}
        <path
          d="M24 4L4 20H44L24 4Z"
          fill="#006C35"
        />
        {/* Door */}
        <rect x="20" y="32" width="8" height="12" rx="1" fill="#FFFFFF" opacity="0.9" />
        {/* Window left */}
        <rect x="10" y="24" width="6" height="6" rx="1" fill="#FFFFFF" opacity="0.8" />
        {/* Window right */}
        <rect x="32" y="24" width="6" height="6" rx="1" fill="#FFFFFF" opacity="0.8" />
        {/* Saudi sword silhouette on roof */}
        <line x1="18" y1="14" x2="30" y2="14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        {/* Small flag accent — Saudi green stripe */}
        <rect x="22" y="7" width="4" height="3" rx="0.5" fill="#FFFFFF" opacity="0.8" />
      </svg>

      {/* Brand text */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{
          fontSize: '0.95rem',
          fontWeight: 900,
          color: '#1D4ED8',
          letterSpacing: '-0.3px',
        }}>
          {t('saudi-home-experts')}
        </span>
        <span style={{
          fontSize: '0.55rem',
          fontWeight: 600,
          color: '#006C35',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
        }}>
          {t('saudi-badge') === 'KSA' ? 'KINGDOM OF SAUDI ARABIA' : 'المملكة العربية السعودية'}
        </span>
      </div>
    </div>
  );
}
