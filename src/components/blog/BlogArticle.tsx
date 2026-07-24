import Link from 'next/link';
import { Phone, Clock, User, Calendar, CheckCircle2 } from 'lucide-react';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { addHeadingIds } from '@/lib/blog/content';
import type { FullPost, PostCard } from '@/lib/blog/public';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://saudihomeexperts.com';
const PHONE = '+966508901536';

const STRINGS = {
  AR: {
    home: 'الرئيسية', blog: 'المدونة', overview: 'نظرة عامة', toc: 'محتويات المقال',
    faq: 'الأسئلة الشائعة', related: 'مقالات ذات صلة', minRead: 'دقائق قراءة',
    ctaBadge: 'تحتاج مساعدة؟', ctaTitle: 'احجز فنيًا الآن', ctaText: 'كهربائي، سباك وانتركوم — خدمة سريعة في شمال الرياض.',
    call: 'اتصل الآن', whatsapp: 'واتساب', switchTo: 'English',
    trustFast: 'استجابة سريعة', trustLicensed: 'فنيون معتمدون', trustAvailable: 'متاح 24/7',
  },
  EN: {
    home: 'Home', blog: 'Blog', overview: 'Overview', toc: 'Table of Contents',
    faq: 'Frequently Asked Questions', related: 'Related Articles', minRead: 'min read',
    ctaBadge: 'Need help?', ctaTitle: 'Book a technician', ctaText: 'Electrician, plumber & intercom — fast service across North Riyadh.',
    call: 'Call now', whatsapp: 'WhatsApp', switchTo: 'العربية',
    trustFast: 'Fast Response', trustLicensed: 'Licensed Professionals', trustAvailable: 'Available 24/7',
  },
};

function fmtDate(iso: string | null, locale: 'AR' | 'EN'): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString(locale === 'AR' ? 'ar-SA' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function BlogArticle({
  post,
  related,
  basePath,
  altHref,
}: {
  post: FullPost;
  related: PostCard[];
  basePath: string; // '/blog'
  altHref?: string | null; // URL of this same post in the other language, if published
}) {
  const locale = post.locale;
  const s = STRINGS[locale];
  const contentHtml = addHeadingIds(post.content);
  const canonical = post.canonicalUrl || `${SITE}${basePath}/${post.slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        inLanguage: locale === 'AR' ? 'ar' : 'en',
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: post.featuredUrl ? [post.featuredUrl] : undefined,
        datePublished: post.publishedAt || undefined,
        dateModified: post.publishedAt || undefined,
        author: { '@type': 'Organization', name: 'Saudi Home Experts' },
        publisher: { '@type': 'Organization', name: 'Saudi Home Experts', logo: { '@type': 'ImageObject', url: `${SITE}/icon.png` } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: s.home, item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: s.blog, item: `${SITE}${basePath}/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
        ],
      },
      ...(post.faqs.length
        ? [{
            '@type': 'FAQPage',
            mainEntity: post.faqs.map((f) => ({
              '@type': 'Question', name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }]
        : []),
    ],
  };

  return (
    <div className={`blog-wrap${locale === 'AR' ? ' rtl' : ''}`}>
      {/* Hero */}
      <section className="blog-hero">
        <div className="container">
          <nav className="blog-breadcrumb">
            <Link href="/">{s.home}</Link> / <Link href={`${basePath}/`}>{s.blog}</Link> / <span>{post.title}</span>
            {altHref && (
              <Link href={altHref} style={{ float: locale === 'AR' ? 'left' : 'right' }}>
                {s.switchTo}
              </Link>
            )}
          </nav>
          {post.categoryName && <span className="blog-hero-cat">{post.categoryName}</span>}
          <h1>{post.title}</h1>
          <div className="blog-hero-meta">
            <span><User size={15} /> {post.authorName}</span>
            {post.publishedAt && <span><Calendar size={15} /> {fmtDate(post.publishedAt, locale)}</span>}
            <span><Clock size={15} /> {post.readingTime} {s.minRead}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container">
        <div className="blog-body">
          <main>
            {post.featuredUrl && (
              <div className="blog-featured">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.featuredUrl} alt={post.featuredAlt} width={post.featuredWidth ?? undefined} height={post.featuredHeight ?? undefined} />
              </div>
            )}

            {post.excerpt && (
              <div className="blog-overview">
                <strong>{s.overview}</strong>
                <p>{post.excerpt}</p>
              </div>
            )}

            {post.toc.length > 0 && (
              <div className="blog-toc-inline">
                <h4>{s.toc}</h4>
                <ul>
                  {post.toc.map((item) => (
                    <li key={item.id}><a href={`#${item.id}`} className={`lvl-${item.level}`}>{item.text}</a></li>
                  ))}
                </ul>
              </div>
            )}

            <article className="blog-article" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            {post.faqs.length > 0 && (
              <section className="blog-faq">
                <h2>{s.faq}</h2>
                {post.faqs.map((f, i) => (
                  <details key={i}>
                    <summary>{f.question}</summary>
                    <div>{f.answer}</div>
                  </details>
                ))}
              </section>
            )}
          </main>

          <aside className="blog-aside">
            <div className="blog-cta">
              <span className="blog-cta-badge">{s.ctaBadge}</span>
              <h3>{s.ctaTitle}</h3>
              <p>{s.ctaText}</p>
              <a href={`tel:${PHONE}`} className="blog-cta-phone" dir="ltr">050 890 1536</a>
              <div className="blog-cta-btns">
                <a href={`tel:${PHONE}`} className="blog-btn blog-btn-call"><Phone size={17} /> {s.call}</a>
                <a href="https://wa.me/966508901536" target="_blank" rel="noopener noreferrer" className="blog-btn blog-btn-wa"><WhatsAppSvg size={17} /> {s.whatsapp}</a>
              </div>
              <ul className="blog-cta-trust">
                <li><CheckCircle2 size={15} /> {s.trustFast}</li>
                <li><CheckCircle2 size={15} /> {s.trustLicensed}</li>
                <li><CheckCircle2 size={15} /> {s.trustAvailable}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container blog-related">
          <h2>{s.related}</h2>
          <div className="blog-grid">
            {related.map((p) => (
              <Link key={p.slug} href={`${basePath}/${encodeURIComponent(p.slug)}/`} className="blog-card">
                {p.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-card-thumb" src={p.thumb} alt={p.thumbAlt} loading="lazy" />
                ) : (
                  <div className="blog-card-thumb-ph">Saudi Home Experts</div>
                )}
                <div className="blog-card-body">
                  {p.categoryName && <span className="blog-card-cat">{p.categoryName}</span>}
                  <h3 className="blog-card-title">{p.title}</h3>
                  <div className="blog-card-meta"><span>{p.readingTime} {s.minRead}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
