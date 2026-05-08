import { MetadataRoute } from 'next'

// Single source of truth for sitemap. Every URL listed here corresponds to a
// directory that exists under src/app/. If you add or remove a page, update here.
//
// Convention: trailingSlash is true in next.config.ts, so all URLs end with '/'.

const BASE_URL = 'https://saudihomeexperts.com'

// Areas — must match the area lists in src/app/page.tsx and src/app/services/*.
const AREA_SLUGS = [
    'narjis', 'yasmin', 'qurtubah', 'granada', 'falah', 'nada', 'rabee',
    'ishbiliyah', 'hittin', 'malqa', 'aqiq', 'qirawan', 'arid', 'sadis',
] as const

// Service prefixes — Arabic, matching real route directory names.
const SERVICE_PREFIXES_AR = ['سباك', 'كهربائي', 'انتركوم'] as const

const STATIC_PAGES: { path: string; priority: number }[] = [
    { path: '/', priority: 1.0 },
    { path: '/services/', priority: 0.9 },
    { path: '/services/electrician/', priority: 0.9 },
    { path: '/services/plumber/', priority: 0.9 },
    { path: '/services/intercom/', priority: 0.9 },
    { path: '/about-us/', priority: 0.8 },
    { path: '/contact/', priority: 0.8 },
    { path: '/site-map/', priority: 0.5 },
    { path: '/privacy-policy/', priority: 0.4 },
    { path: '/terms-of-service/', priority: 0.4 },
    { path: '/cookie-policy/', priority: 0.4 },
    { path: '/disclaimer/', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    const entries: MetadataRoute.Sitemap = STATIC_PAGES.map(p => ({
        url: `${BASE_URL}${p.path}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: p.priority,
    }))

    for (const service of SERVICE_PREFIXES_AR) {
        for (const slug of AREA_SLUGS) {
            entries.push({
                url: `${BASE_URL}/${service}-${slug}/`,
                lastModified: now,
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            })
        }
    }

    return entries
}
