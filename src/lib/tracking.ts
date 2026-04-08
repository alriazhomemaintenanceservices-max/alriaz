/**
 * Google Ads conversion tracking for Saudi Home Experts
 * Account: AW-18063458010
 *
 * Conversion actions (LIVE):
 * - Phone Call Click: AW-18063458010/qhSLCPL0mJgcENr9qaVD
 * - WhatsApp Click: AW-18063458010/jj70CPX0mJgcENr9qaVD
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
 * Track phone call button click — fires Google Ads conversion
 */
export function trackPhoneClick(source?: string) {
  gtag('event', 'conversion', {
    'send_to': 'AW-18063458010/qhSLCPL0mJgcENr9qaVD',
    'value': 50.0,
    'currency': 'SAR',
  });

  gtag('event', 'phone_call_click', {
    'event_category': 'lead',
    'event_label': source || 'unknown',
    'value': 50,
  });
}

/**
 * Track WhatsApp button click — fires Google Ads conversion
 */
export function trackWhatsAppClick(source?: string) {
  gtag('event', 'conversion', {
    'send_to': 'AW-18063458010/jj70CPX0mJgcENr9qaVD',
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
