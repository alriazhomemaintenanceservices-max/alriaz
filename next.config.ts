import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://pagead2.googlesyndication.com",
              "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://pagead2.googlesyndication.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.google.com.sa https://googleads.g.doubleclick.net https://www.google.sa https://pagead2.googlesyndication.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://region1.analytics.google.com https://www.googletagmanager.com https://www.googleadservices.com https://pagead2.googlesyndication.com https://www.google.com",
              "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com",
            ].join("; ") + ";",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocations=()',
          }
        ],
      },
    ];
  },
};

export default nextConfig;
