import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'success' | 'emergency' | 'whatsapp' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon,
  fullWidth = false,
  className = '',
  external = false,
  ariaLabel,
  style,
}: ButtonProps) {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    success: 'btn-success',
    emergency: 'btn-emergency',
    whatsapp: 'btn-whatsapp',
    secondary: 'btn-secondary'
  };
  
  const sizeClasses = {
    small: 'btn-sm',
    medium: '',
    large: 'btn-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`.trim();

  const content = (
    <>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    if (external || href.startsWith('tel:') || href.startsWith('https://')) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          onClick={onClick}
          aria-label={ariaLabel}
          style={style}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} aria-label={ariaLabel} style={style}>
      {content}
    </button>
  );
}