/**
 * Google Ads conversion tracking for Saudi Home Experts
 * Account: AW-18063458010
 *
 * Conversion actions need to be created in Google Ads console:
 * 1. phone_call_click — when someone taps a call button
 * 2. whatsapp_click — when someone taps a WhatsApp button
 * 3. service_page_view — when someone views an area/service page
 *
 * After creating conversion actions in Google Ads, replace the
 * send_to values below with your actual conversion labels.
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

function gtag(...args: any[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
}

/**
 * Track phone call button click
 */
export function trackPhoneClick(source?: string) {
  // Google Ads conversion
  gtag('event', 'conversion', {
    'send_to': 'AW-18063458010/phone_call',
    'value': 50.0,
    'currency': 'SAR',
  });

  // Also track as custom event for analytics
  gtag('event', 'phone_call_click', {
    'event_category': 'lead',
    'event_label': source || 'unknown',
    'value': 50,
  });
}

/**
 * Track WhatsApp button click
 */
export function trackWhatsAppClick(source?: string) {
  gtag('event', 'conversion', {
    'send_to': 'AW-18063458010/whatsapp_click',
    'value': 30.0,
    'currency': 'SAR',
  });

  gtag('event', 'whatsapp_click', {
    'event_category': 'lead',
    'event_label': source || 'unknown',
    'value': 30,
  });
}

/**
 * Track service area page view (for ad quality score)
 */
export function trackServicePageView(service: string, area: string) {
  gtag('event', 'service_page_view', {
    'event_category': 'engagement',
    'event_label': `${service}_${area}`,
    'service_type': service,
    'area': area,
  });
}
