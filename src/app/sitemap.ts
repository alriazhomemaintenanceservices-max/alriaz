import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://saudihomeexperts.com'

    const services = [
        'electrician',
        'plumber',
        'intercom',
    ]

    const districts = [
        'qurtubah', 'ishbiliyah', 'yarmouk', 'narjis', 'yasmin', 'sahafa', 'falah', 'granada', 'rabee', 'nada'
    ]

    const staticPages = [
        '',
        '/contact',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
        '/disclaimer',
        '/site-map',
    ]

    const sitemapEntries: MetadataRoute.Sitemap = [
        ...staticPages.map((route) => ({
            url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8,
        })),
        ...services.map((service) => ({
            url: `${baseUrl}/services/${service}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        })),
    ]

    districts.forEach(district => {
        services.forEach(service => {
            sitemapEntries.push({
                url: `${baseUrl}/riyadh/${district}/${service}/`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            })
        })
    })

    return sitemapEntries
}
