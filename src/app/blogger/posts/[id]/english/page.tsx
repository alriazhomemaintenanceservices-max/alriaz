import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { requireSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';
import { addHeadingIds } from '@/lib/blog/content';
import '../../../../../styles/blog.css';

export const dynamic = 'force-dynamic';

/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function EnglishPreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await requireSession();
  const supabase = supabaseAdmin();

  const { data: post } = await supabase
    .from('blog_posts')
    .select('id,status,translations:blog_translations(*,faqs:blog_faqs(question,answer,order))')
    .eq('id', id)
    .maybeSingle();
  if (!post) notFound();

  const p = post as any;
  const en = (p.translations ?? []).find((x: any) => x.locale === 'EN') ?? null;

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <div className="bms-between" style={{ marginBottom: 20 }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem' }}>English translation</h1>
        <div className="bms-row">
          <Link href={`/blogger/posts/${id}`} className="bms-btn bms-btn-ghost bms-btn-sm"><ArrowLeft size={15} /> Back to Arabic</Link>
          {en && p.status === 'PUBLISHED' && (
            <a href={`/en/blog/${encodeURIComponent(en.slug)}/`} target="_blank" rel="noopener noreferrer" className="bms-btn bms-btn-ghost bms-btn-sm">
              <ExternalLink size={15} /> View live
            </a>
          )}
        </div>
      </div>

      {!en ? (
        <div className="bms-card" style={{ padding: 32, textAlign: 'center', color: 'var(--bms-muted)' }}>
          No English version yet. Open the post and click <strong>“Translate to English (AI)”</strong> to generate one.
        </div>
      ) : (
        <div className="bms-card" style={{ padding: 28 }}>
          <div className="blog-wrap" style={{ background: 'transparent' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: 0 }}>{en.title}</h2>
            {en.metaDescription && <p style={{ color: 'var(--bms-muted)' }}>{en.metaDescription}</p>}
            <div style={{ fontSize: '0.8rem', color: 'var(--bms-muted)', marginBottom: 18 }}>
              /en/blog/{en.slug}/ · {en.readingTime} min read
            </div>
            <article className="blog-article" dangerouslySetInnerHTML={{ __html: addHeadingIds(en.content || '') }} />

            {(en.faqs ?? []).length > 0 && (
              <section className="blog-faq" style={{ marginTop: 32 }}>
                <h2>Frequently Asked Questions</h2>
                {(en.faqs as any[])
                  .slice()
                  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                  .map((f, i) => (
                    <details key={i}>
                      <summary>{f.question}</summary>
                      <div>{f.answer}</div>
                    </details>
                  ))}
              </section>
            )}
          </div>
        </div>
      )}
    </AdminShell>
  );
}
