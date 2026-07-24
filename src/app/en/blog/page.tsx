import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog/public';
import '../../../styles/blog.css';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Blog | Saudi Home Experts — Electrical, Plumbing & Intercom Tips in Riyadh',
  description:
    'Home maintenance guides for Riyadh: electrical safety, plumbing repair, and intercom/security tips from Saudi Home Experts.',
  alternates: { canonical: '/en/blog/' },
  openGraph: {
    title: 'Saudi Home Experts Blog',
    description: 'Electrical, plumbing, and intercom guides for Riyadh homes.',
    url: '/en/blog/',
    type: 'website',
    locale: 'en_US',
  },
};

function fmtDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function EnglishBlogListingPage() {
  const posts = await getPublishedPosts('EN', 30);

  return (
    <div className="blog-wrap">
      <header className="blog-head">
        <div className="container">
          <h1>Home Care Blog</h1>
          <p>Practical guides for electrical, plumbing, and intercom care in Riyadh homes.</p>
        </div>
      </header>

      <div className="container section">
        {posts.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: 48, color: 'var(--gray-500)' }}>
            No articles published yet. Check back soon — or read the Arabic blog at <Link href="/blog/">/blog</Link>.
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((p) => (
              <Link key={p.slug} href={`/en/blog/${encodeURIComponent(p.slug)}/`} className="blog-card">
                {p.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-card-thumb" src={p.thumb} alt={p.thumbAlt} loading="lazy" />
                ) : (
                  <div className="blog-card-thumb-ph">Saudi Home Experts</div>
                )}
                <div className="blog-card-body">
                  {p.categoryName && <span className="blog-card-cat">{p.categoryName}</span>}
                  <h2 className="blog-card-title">{p.title}</h2>
                  {p.excerpt && <p className="blog-card-excerpt">{p.excerpt}</p>}
                  <div className="blog-card-meta">
                    {p.publishedAt && <span>{fmtDate(p.publishedAt)}</span>}
                    <span>{p.readingTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
