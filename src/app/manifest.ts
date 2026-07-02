import { MetadataRoute } from 'next'

// Web App Manifest — auto-served at /manifest.webmanifest and linked in <head>.
// Powers Android "Add to Home Screen" / PWA install with proper brand icons.
// favicon.ico, icon.png and apple-icon.png are handled by Next file conventions
// (app/favicon.ico, app/icon.png, app/apple-icon.png) and don't belong here.
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'خبراء المنزل السعودي — Saudi Home Experts',
        short_name: 'خبراء المنزل',
        description: 'كهربائي وسباك وانتركوم في الرياض — خدمة فورية 24/7',
        lang: 'ar',
        dir: 'rtl',
        start_url: '/',
        display: 'standalone',
        theme_color: '#1D4ED8',
        background_color: '#000000',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
    }
}
