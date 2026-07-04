import { MetadataRoute } from 'next'

// Single source of truth for robots (public/robots.txt was removed to avoid conflict).
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://saudihomeexperts.com/sitemap.xml',
        host: 'https://saudihomeexperts.com',
    }
}
