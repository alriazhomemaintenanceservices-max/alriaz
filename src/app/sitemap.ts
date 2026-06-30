import { MetadataRoute } from 'next'

// Single source of truth for sitemap. Every URL listed here corresponds to a
// directory that exists under src/app/. If you add or remove a page, update here.
//
// Convention: trailingSlash is true in next.config.ts, so all URLs end with '/'.

const BASE_URL = 'https://saudihomeexperts.com'

// Areas — every slug below has real route directories under src/app/.
// The first block is the currently-promoted set (homepage + services grids).
// The second block holds older areas no longer shown in the UI but kept live
// and indexed (already crawled by Google — must not 404 / be de-listed).
const AREA_SLUGS = [
    // Promoted on homepage + services pages
    'yasmin', 'arid', 'qirawan', 'banban', 'rabee', 'sahafa',
    'malqa', 'nada', 'wadi', 'nafal', 'narjis',
    // Retained for SEO (not shown in UI, reachable via direct URL/backlinks)
    'qurtubah', 'granada', 'falah', 'ishbiliyah', 'hittin', 'aqiq', 'sadis',
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
