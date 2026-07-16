import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog/public';
import '../../styles/blog.css';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'المدونة | خبراء المنزل السعودي — نصائح الكهرباء والسباكة والانتركوم بالرياض',
  description:
    'أدلة صيانة المنزل في الرياض: السلامة الكهربائية، إصلاح السباكة، ونصائح الانتركوم والأمن من خبراء المنزل السعودي.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'مدونة خبراء المنزل السعودي',
    description: 'أدلة الكهرباء والسباكة والانتركوم لمنازل الرياض.',
    url: '/blog/',
    type: 'website',
    locale: 'ar_SA',
  },
};

function fmtDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('ar-SA', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function BlogListingPage() {
  const posts = await getPublishedPosts('AR', 30);

  return (
    <div className="blog-wrap rtl">
      <header className="blog-head">
        <div className="container">
          <h1>مدونة العناية بالمنزل</h1>
          <p>أدلة عملية للكهرباء والسباكة والانتركوم لمنازل الرياض.</p>
        </div>
      </header>

      <div className="container section">
        {posts.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: 48, color: 'var(--gray-500)' }}>
            لا توجد مقالات منشورة بعد. تابعنا قريبًا.
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${encodeURIComponent(p.slug)}/`} className="blog-card">
                {p.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-card-thumb" src={p.thumb} alt={p.thumbAlt} loading="lazy" />
                ) : (
                  <div className="blog-card-thumb-ph">خبراء المنزل السعودي</div>
                )}
                <div className="blog-card-body">
                  {p.categoryName && <span className="blog-card-cat">{p.categoryName}</span>}
                  <h2 className="blog-card-title">{p.title}</h2>
                  {p.excerpt && <p className="blog-card-excerpt">{p.excerpt}</p>}
                  <div className="blog-card-meta">
                    {p.publishedAt && <span>{fmtDate(p.publishedAt)}</span>}
                    <span>{p.readingTime} دقائق قراءة</span>
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
