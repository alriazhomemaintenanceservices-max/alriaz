import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://saudihomeexperts.com'

    const services = [
        { slug: 'plumber' },
        { slug: 'electrician' },
        { slug: 'intercom-installation' }
    ]

    const cities = [
        'riyadh', 'al-falah', 'al-yarmouk', 'al-yasmin', 'granada', 'al-narjis', 'qurtubah',
        'al-sahafah', 'al-nada', 'ishbiliyah', 'al-rabee',
        'jeddah', 'dammam', 'khobar', 'mecca', 'medina', 'taif', 'tabuk', 'abha', 'jubail',
        'hail', 'buraidah', 'najran', 'yanbu', 'jizan', 'hofuf', 'dhahran', 'alkharj', 'rabigh', 'sakaka'
    ]

    const enStaticPages = [
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
    ]

    const arStaticPages = [
        { path: '/ar', priority: 1.0 },
        { path: '/ar/services', priority: 0.9 },
        { path: '/ar/services/intercom', priority: 0.9 },
        { path: '/ar/about-us', priority: 0.8 },
        { path: '/ar/contact', priority: 0.8 },
        { path: '/ar/site-map', priority: 0.5 },
    ]

    const now = new Date()

    const entries: MetadataRoute.Sitemap = [
        // English static pages
        ...enStaticPages.map(p => ({
            url: `${baseUrl}${p.path}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: p.priority,
        })),
        // Arabic static pages
        ...arStaticPages.map(p => ({
            url: `${baseUrl}${p.path}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: p.priority,
        })),
    ]

    // English city-service pages
    cities.forEach(city => {
        services.forEach(service => {
            entries.push({
                url: `${baseUrl}/${service.slug}-${city}/`,
                lastModified: now,
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            })
        })
    })

    // Arabic city-service pages
    cities.forEach(city => {
        services.forEach(service => {
            entries.push({
                url: `${baseUrl}/ar/${service.slug}-${city}`,
                lastModified: now,
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            })
        })
    })

    return entries
}
