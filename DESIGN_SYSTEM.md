# Saudi Home Experts - Design System

## Brand Identity
**Mission**: Trusted, fast, affordable home services for Saudi families

## Color Palette

### Primary Colors
- **Primary Blue**: `#1E3A8A` (Trust, professionalism)
- **Primary Gold**: `#F59E0B` (Premium, Saudi cultural significance)

### Secondary Colors
- **Emergency Red**: `#DC2626` (Urgency, CTAs)
- **Success Green**: `#059669` (WhatsApp, confirmations)

### Neutral Colors
- **Dark**: `#111827` (Text, headers)
- **Gray-700**: `#374151` (Secondary text)
- **Gray-500**: `#6B7280` (Muted text)
- **Gray-100**: `#F3F4F6` (Backgrounds)
- **White**: `#FFFFFF` (Cards, clean spaces)

### Semantic Colors
- **Error**: `#EF4444`
- **Warning**: `#F59E0B`
- **Info**: `#3B82F6`
- **Success**: `#10B981`

## Typography

### Arabic Font Stack
```css
font-family: 'Tajawal', 'Cairo', -apple-system, sans-serif;
```

### English Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Sizes (Mobile First)
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

## Spacing System
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

## Components Design

### Buttons
1. **Primary CTA** (Phone/WhatsApp)
   - Background: `#059669` (Green for WhatsApp) or `#DC2626` (Red for urgent)
   - Text: White
   - Border-radius: 12px
   - Padding: 16px 32px
   - Font-weight: 700
   - Shadow: `0 4px 14px rgba(0,0,0,0.15)`

2. **Secondary Button**
   - Background: White
   - Border: 2px solid `#1E3A8A`
   - Text: `#1E3A8A`
   - Border-radius: 12px
   - Padding: 14px 28px

### Cards
- Background: White
- Border: 1px solid `#E5E7EB`
- Border-radius: 16px
- Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`

### Trust Badges
- Background: `#FEF3C7` (Light gold)
- Border: 1px solid `#F59E0B`
- Border-radius: 8px
- Icon color: `#F59E0B`

## Layout Principles

### Mobile First
- Container max-width: 1200px
- Mobile padding: 16px
- Desktop padding: 24px
- Grid gap: 20px

### RTL Support
```css
[dir="rtl"] {
  text-align: right;
  direction: rtl;
}
```

## Icons
- Use Lucide React for consistency
- Icon size: 20px (default), 24px (CTAs), 16px (small)
- Icon color: Inherit from text or specific semantic color

## Interaction States

### Hover
- Buttons: Darken 10%, transform: translateY(-2px)
- Cards: Add shadow, slight scale(1.02)
- Links: Underline or color change

### Focus
- Outline: 2px solid `#3B82F6`
- Outline-offset: 2px

### Active
- Scale: 0.98
- Opacity: 0.9

## Accessibility

### Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Touch Targets
- Minimum: 44x44px
- Recommended: 48x48px

### ARIA Labels
- Arabic and English versions
- Descriptive button labels
- Form field requirements clear

## Animation
```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;
```

## Z-Index Scale
```css
--z-base: 0;
--z-dropdown: 10;
--z-sticky: 20;
--z-overlay: 30;
--z-modal: 40;
--z-popover: 50;
--z-tooltip: 60;
```

## Breakpoints
```css
--mobile: 0px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;
```

## Cultural Considerations

### Arabic First
- RTL layout default
- Right-aligned text
- Mirrored icons where appropriate

### Saudi Preferences
- Gold accents (cultural significance)
- Green for positive actions (Islamic significance)
- Conservative imagery
- Family-oriented messaging

### Trust Signals
- Prayer time considerations
- Local area mentions
- Transparent pricing
- Phone-first contact