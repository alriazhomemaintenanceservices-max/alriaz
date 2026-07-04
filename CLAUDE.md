# CLAUDE.md — Saudi Home Experts

Arabic-first (RTL) **Next.js 16 / React 19** lead-generation site for on-demand **electrician, plumber, and intercom** services across North Riyadh neighborhoods. The entire goal is converting Google Ads traffic into **phone calls (+966 50 890 1536)** and **WhatsApp** messages, so nearly every section funnels to `tel:` / `wa.me`.

## Commands

```bash
npm run dev      # local dev
npm run build    # production build (also runs eslint) — use to verify changes
npm run start    # serve the production build (used for curl smoke tests)
npm run lint
```

Verification convention: after changes run `npx tsc --noEmit` **and** `npm run build`, then `npm run start` + `curl` the page and grep for the expected markup / HTTP 200.

## Routing (important, non-obvious)

- Public area URLs are **Arabic**: `/كهربائي-yasmin/` (electrician), `/سباك-narjis/` (plumber), `/انتركوم-malqa/` (intercom). These are the indexed/canonical URLs — do not change them.
- Route **folders are ASCII**: `electrician-*`, `plumber-*`, `intercom-*` (Next 16 won't match percent-encoded non-ASCII segments to folders).
- **`src/proxy.ts`** (Next 16 renamed middleware → `proxy`) rewrites the Arabic URL to its ASCII route, so the address bar keeps the Arabic URL. It also enforces the trailing slash.
- `next.config.ts` sets `trailingSlash: true`; the sitemap emits URLs **with** the slash. Any Arabic link in code should use the `/كهربائي-<slug>/` form.

## Pages

- Homepage `src/app/page.tsx` (client), 3 service hubs `src/app/services/*`, about/contact/site-map, 4 legal pages.
- **54 area pages** = 18 areas × 3 services. Each route file (`src/app/<service>-<area>/page.tsx`) is a thin wrapper that passes `area`/`service` props into the single shared component **`src/components/area-pages/ElectricianAreaPage.tsx`** (misnamed — it renders plumber & intercom too, driven by `service.type`).
- Areas: aqiq, arid, banban, falah, granada, hittin, ishbiliyah, malqa, nada, nafal, narjis, qirawan, qurtubah, rabee, sadis, sahafa, wadi, yasmin.

## i18n

- Custom, not next-intl (that package is installed but unused for content). Strings live in **`src/lib/translations.ts`** (`ar` / `en`), read via **`useTranslation()`** which supports `{var}` interpolation.
- Language is a **zustand** store (`src/store/languageStore.ts`, persisted to localStorage, default `ar`). `LanguageProvider` sets `html lang`/`dir`. Because state is client-side, content pages are `'use client'`.
- `LanguageToggle` is a segmented **AR | EN** switch with flag PNGs (flagcdn.com); pass `dark` on dark backgrounds.

## Styling & brand

- **`src/styles/globals.css` is the real design system** (fonts Tajawal/Inter; `--primary-blue #3B82F6`, `--primary-gold #F59E0B`, Saudi green `#006C35`, emergency red, whatsapp green; container, buttons, badges, header/footer, hero-slider, FABs). Header/Footer/hero use named classes here.
- `src/app/globals.css` is a **leftover template theme** (rose/`#e11d48`) — mostly unused; both are imported in `layout.tsx` (styles/globals.css wins where they conflict, e.g. `.container`).
- Logo: `public/logo.png` circular emblem via `src/components/shared/Logo.tsx` (has a `dark` variant for the footer).
- Layout renders: `Header` → `main` → `Footer` → `StickyMobileCTA` (mobile-only bottom bar) → `FloatingActions` (desktop-only Call + WhatsApp FABs, bottom-right).

## Images

- Hero photos: optimized JPGs in **`public/hero/`**, listed in the `HERO_SLIDES` array at the top of `page.tsx` (auto cross-fade slider, no dots).
- Optimize before committing: resize to ~1920px wide + re-encode (~q72). Emoji/icon → real-photo migration is the ongoing design direction (see `Saudi Home Experts/UI-Audit-and-Image-Prompts.md`).
- Favicons use Next app conventions (`app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`) + PWA `app/manifest.ts` (android-chrome icons in `public/`).
- CSP in `next.config.ts` allows `img-src ... https:`, so remote images (flags, etc.) load without config changes.

## Tracking

- Google Ads gtag, account **`AW-18063458010`**, loaded in `layout.tsx`. Reusable helpers in **`src/lib/tracking.ts`** (`trackPhoneClick`, `trackWhatsAppClick`, `trackServicePageView`) use the real conversion IDs.

## SEO fixes applied (2026-07-02, from SEO-Technical-Audit)

- Root `layout.tsx` now exports full `metadata` (title, description, canonical, OG, twitter, `metadataBase`). Orphaned `metadata.ts` deleted.
- Server `layout.tsx` metadata added for the 6 client pages: `services/`, `services/{electrician,plumber,intercom}/`, `about-us/`, `contact/`.
- Branded OG image via `src/app/opengraph-image.tsx` (`next/og` ImageResponse, 1200×630) — fixes blank WhatsApp/social previews. Uses Latin text (no Arabic webfont loaded).
- `public/robots.txt` deleted; `src/app/robots.ts` is the single source (+ host).
- All 54 area-page + 4 legal-page canonicals now include the trailing slash.
- Conversion tracking: placeholder `PHONE_CONVERSION` replaced with the real label `AW-18063458010/qhSLCPL0mJgcENr9qaVD` on home/about/contact/services.
- Fabricated `aggregateRating` removed from `layout.tsx` and `ElectricianAreaPage.tsx` schema.
- `Permissions-Policy` typo fixed (`geolocations` → `geolocation`).
- Added `not-found.tsx` (branded 404 with CTAs + area links) and `/thank-you/` page.

## Remaining SEO gaps (deferred / decisions needed)

- **English SEO / hreflang**: language is a client-side toggle with no `/en/` routes, so EN is invisible to search. Needs route-based i18n or dropping the EN SEO claim. Not implemented.
- **Blog / topical content**: no `/blog/` articles yet (top-of-funnel authority).
- **AC page**: audit suggested one, but AC was intentionally removed site-wide (see memory) — do not add.
- **Visual redesign**: homepage is the design benchmark (alternating light/dark sections, patterns, image cards). Area/services/about/contact/legal pages still need the same treatment applied.
