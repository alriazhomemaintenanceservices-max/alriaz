'use client';

import { useMemo, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Plus } from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import FeaturedImageUpload, { type FeaturedImage } from './FeaturedImageUpload';
import { slugify, extractToc } from '@/lib/blog/content';
import { savePost, deletePost } from '@/app/blogger/posts/actions';
import { emptyTranslation, type PostPayload, type TranslationInput } from '@/lib/blog/post-types';
import type { PostStatus, RobotsDirective } from '@/lib/types/db';

interface CategoryOption { id: string; name: string; }

function LangTag({ lang }: { lang: 'AR' | 'EN' }) {
  return (
    <span
      style={{
        display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, lineHeight: 1,
        padding: '3px 7px', borderRadius: 4, marginInlineEnd: 8,
        background: lang === 'AR' ? '#DCEEEF' : '#FDE7D0',
        color: lang === 'AR' ? '#075463' : '#8a4b12',
      }}
    >
      {lang}
    </span>
  );
}

export default function PostForm({
  categories,
  initial,
  initialFeatured,
  postId,
}: {
  categories: CategoryOption[];
  initial?: PostPayload;
  initialFeatured?: FeaturedImage | null;
  postId?: string;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [status, setStatus] = useState<PostStatus>(initial?.status ?? 'DRAFT');
  const [categoryId, setCategoryId] = useState<string | null>(initial?.categoryId ?? null);
  const [scheduledAt, setScheduledAt] = useState<string>(
    initial?.scheduledAt ? initial.scheduledAt.slice(0, 16) : '',
  );
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);
  const [tagInput, setTagInput] = useState('');
  const [featured, setFeatured] = useState<FeaturedImage | null>(initialFeatured ?? null);

  const [ar, setAr] = useState(initial?.ar ?? emptyTranslation());
  const [en, setEn] = useState(initial?.en ?? emptyTranslation());
  const [arSlugEdited, setArSlugEdited] = useState(Boolean(initial?.ar.slug));
  const [enSlugEdited, setEnSlugEdited] = useState(Boolean(initial?.en.slug));

  const setArField = <K extends keyof TranslationInput>(key: K, value: TranslationInput[K]) =>
    setAr((prev) => ({ ...prev, [key]: value }));
  const setEnField = <K extends keyof TranslationInput>(key: K, value: TranslationInput[K]) =>
    setEn((prev) => ({ ...prev, [key]: value }));

  const onArTitle = (title: string) => {
    setAr((prev) => ({ ...prev, title, slug: arSlugEdited ? prev.slug : slugify(title) }));
  };
  const onEnTitle = (title: string) => {
    setEn((prev) => ({ ...prev, title, slug: enSlugEdited ? prev.slug : slugify(title) }));
  };

  const readingMins = useMemo(() => {
    const words = ar.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }, [ar.content]);
  const enReadingMins = useMemo(() => {
    const words = en.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }, [en.content]);

  const toc = useMemo(() => extractToc(ar.content), [ar.content]);

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) setTags([...tags, t]);
    setTagInput('');
  };

  const seoChecks = useMemo(() => {
    const titleForSeo = ar.seoTitle || ar.title;
    const kw = ar.focusKeyword.trim().toLowerCase();
    return [
      { ok: titleForSeo.length >= 30 && titleForSeo.length <= 60, label: `Title length ${titleForSeo.length} (30–60)` },
      { ok: ar.metaDescription.length >= 120 && ar.metaDescription.length <= 160, label: `Meta description ${ar.metaDescription.length} (120–160)` },
      { ok: kw ? titleForSeo.toLowerCase().includes(kw) : false, label: 'Focus keyword in title' },
      { ok: kw ? ar.content.toLowerCase().includes(kw) : false, label: 'Focus keyword in content' },
      { ok: /<h[23]/i.test(ar.content), label: 'Has H2/H3 headings' },
    ];
  }, [ar]);
  const seoScore = Math.round((seoChecks.filter((c) => c.ok).length / seoChecks.length) * 100);

  const enStarted = Boolean(en.title.trim() || en.content.replace(/<[^>]+>/g, '').trim());
  const enComplete = Boolean(en.title.trim() && en.content.replace(/<[^>]+>/g, '').trim());

  const submit = () => {
    setError(null);
    if (status === 'PUBLISHED' && !enComplete) {
      setError('English title and content are required before publishing — fill in the English fields below, or save as Draft first.');
      return;
    }
    const payload: PostPayload = {
      id: postId,
      categoryId,
      featuredMediaId: featured?.id ?? null,
      status,
      scheduledAt: status === 'SCHEDULED' && scheduledAt ? new Date(scheduledAt).toISOString() : null,
      scheduleTz: status === 'SCHEDULED' ? Intl.DateTimeFormat().resolvedOptions().timeZone : null,
      tags,
      ar,
      en,
    };
    startTransition(async () => {
      const res = await savePost(payload);
      if (!res.ok) { setError(res.error || 'Could not save.'); return; }
      router.push('/blogger/posts');
      router.refresh();
    });
  };

  const remove = () => {
    if (!postId || !confirm('Delete this post? This cannot be undone.')) return;
    startTransition(async () => {
      const res = await deletePost(postId);
      if (!res.ok) { setError(res.error || 'Could not delete.'); return; }
      router.push('/blogger/posts');
      router.refresh();
    });
  };

  return (
    <div>
      <div className="bms-between" style={{ marginBottom: 20 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{postId ? 'Edit post' : 'Write post'}</h1>
          <div className="bms-help" style={{ marginTop: 4 }}>
            Every field has an Arabic and an English version — English is required before you can publish.
            {enStarted && !enComplete && ' English is incomplete.'}
          </div>
        </div>
        <div className="bms-row">
          {postId && (
            <button type="button" className="bms-btn bms-btn-danger bms-btn-sm" onClick={remove} disabled={pending}>
              <Trash2 size={15} /> Delete
            </button>
          )}
          <button type="button" className="bms-btn bms-btn-primary" onClick={submit} disabled={pending}>
            {pending ? 'Saving…' : status === 'PUBLISHED' ? 'Publish' : 'Save'}
          </button>
        </div>
      </div>

      {error && <div className="bms-alert bms-alert-error">{error}</div>}

      <div className="bms-grid-2">
        {/* Main column */}
        <div>
          <div className="bms-section-card">
            <div className="bms-field">
              <label className="bms-label"><LangTag lang="AR" />العنوان (Title)</label>
              <input className="bms-input" dir="rtl" value={ar.title} onChange={(e) => onArTitle(e.target.value)} placeholder="مثال: كيف تصون تمديدات الكهرباء في منزلك بالرياض" />
            </div>
            <div className="bms-field">
              <label className="bms-label"><LangTag lang="AR" />Slug</label>
              <input
                className="bms-input"
                dir="ltr"
                value={ar.slug}
                onChange={(e) => { setArSlugEdited(true); setArField('slug', slugify(e.target.value)); }}
                placeholder="auto-generated-from-title"
              />
              <div className="bms-help">/blog/{ar.slug || 'your-post-slug'} · {readingMins} min read</div>
            </div>
            <div style={{ borderTop: '1px dashed var(--bms-border)', margin: '16px 0' }} />
            <div className="bms-field">
              <label className="bms-label"><LangTag lang="EN" />Title</label>
              <input className="bms-input" dir="ltr" value={en.title} onChange={(e) => onEnTitle(e.target.value)} placeholder="e.g. How to maintain your home's electrical wiring in Riyadh" />
            </div>
            <div className="bms-field" style={{ marginBottom: 0 }}>
              <label className="bms-label"><LangTag lang="EN" />Slug</label>
              <input
                className="bms-input"
                dir="ltr"
                value={en.slug}
                onChange={(e) => { setEnSlugEdited(true); setEnField('slug', slugify(e.target.value)); }}
                placeholder="auto-generated-from-title"
              />
              <div className="bms-help">/en/blog/{en.slug || 'your-post-slug'} · {enReadingMins} min read</div>
            </div>
          </div>

          <div className="bms-section-card">
            <div className="bms-section-title"><LangTag lang="AR" />الملخص (Summary)</div>
            <textarea
              className="bms-textarea"
              dir="rtl"
              rows={3}
              value={ar.excerpt}
              onChange={(e) => setArField('excerpt', e.target.value)}
              placeholder="ملخص قصير يظهر كنظرة عامة للمقال (يُنشأ تلقائيًا إذا تُرك فارغًا)"
            />
            <div style={{ borderTop: '1px dashed var(--bms-border)', margin: '16px 0' }} />
            <div className="bms-section-title"><LangTag lang="EN" />Summary</div>
            <textarea
              className="bms-textarea"
              dir="ltr"
              rows={3}
              value={en.excerpt}
              onChange={(e) => setEnField('excerpt', e.target.value)}
              placeholder="A short summary shown as the article overview (auto-generated if left blank)"
            />
          </div>

          <div className="bms-section-card">
            <div className="bms-section-title"><LangTag lang="AR" />المحتوى (Content)</div>
            <RichTextEditor value={ar.content} onChange={(html) => setArField('content', html)} dir="rtl" placeholder="اكتب مقالك هنا…" />
            <div style={{ borderTop: '1px dashed var(--bms-border)', margin: '16px 0' }} />
            <div className="bms-section-title"><LangTag lang="EN" />Content</div>
            <RichTextEditor value={en.content} onChange={(html) => setEnField('content', html)} dir="ltr" placeholder="Write your article here…" />
          </div>

          {/* Auto Table of Contents (from Arabic H2/H3/H4 — the primary edition) */}
          <div className="bms-section-card">
            <div className="bms-section-title">Table of Contents (from Arabic content)</div>
            {toc.length === 0 ? (
              <div className="bms-help">Add H2, H3 or H4 headings in the content to build the table of contents automatically.</div>
            ) : (
              <ul className="bms-toc-list" dir="rtl">
                {toc.map((item) => (
                  <li key={item.id} className={`bms-toc-lvl-${item.level}`}>{item.text}</li>
                ))}
              </ul>
            )}
          </div>

          {/* FAQ builders */}
          <div className="bms-section-card">
            <div className="bms-between" style={{ marginBottom: 12 }}>
              <div className="bms-section-title" style={{ margin: 0 }}><LangTag lang="AR" />الأسئلة الشائعة (FAQ)</div>
              <button type="button" className="bms-btn bms-btn-ghost bms-btn-sm" onClick={() => setArField('faqs', [...ar.faqs, { question: '', answer: '' }])}>
                <Plus size={14} /> Add FAQ
              </button>
            </div>
            {ar.faqs.length === 0 && <div className="bms-help">أضف أسئلة لإنشاء نتائج FAQ المنسّقة في جوجل.</div>}
            {ar.faqs.map((f, i) => (
              <div key={i} className="bms-faq-row">
                <div className="bms-between" style={{ marginBottom: 8 }}>
                  <input className="bms-input" dir="rtl" style={{ marginRight: 8 }} placeholder="السؤال" value={f.question}
                    onChange={(e) => setArField('faqs', ar.faqs.map((x, j) => j === i ? { ...x, question: e.target.value } : x))} />
                  <button type="button" className="bms-tb-btn" onClick={() => setArField('faqs', ar.faqs.filter((_, j) => j !== i))} title="Remove"><Trash2 size={15} /></button>
                </div>
                <textarea className="bms-textarea" dir="rtl" rows={2} placeholder="الإجابة" value={f.answer}
                  onChange={(e) => setArField('faqs', ar.faqs.map((x, j) => j === i ? { ...x, answer: e.target.value } : x))} />
              </div>
            ))}

            <div style={{ borderTop: '1px dashed var(--bms-border)', margin: '20px 0 16px' }} />

            <div className="bms-between" style={{ marginBottom: 12 }}>
              <div className="bms-section-title" style={{ margin: 0 }}><LangTag lang="EN" />FAQ</div>
              <button type="button" className="bms-btn bms-btn-ghost bms-btn-sm" onClick={() => setEnField('faqs', [...en.faqs, { question: '', answer: '' }])}>
                <Plus size={14} /> Add FAQ
              </button>
            </div>
            {en.faqs.length === 0 && <div className="bms-help">Add questions to generate rich FAQ results in Google.</div>}
            {en.faqs.map((f, i) => (
              <div key={i} className="bms-faq-row">
                <div className="bms-between" style={{ marginBottom: 8 }}>
                  <input className="bms-input" dir="ltr" style={{ marginRight: 8 }} placeholder="Question" value={f.question}
                    onChange={(e) => setEnField('faqs', en.faqs.map((x, j) => j === i ? { ...x, question: e.target.value } : x))} />
                  <button type="button" className="bms-tb-btn" onClick={() => setEnField('faqs', en.faqs.filter((_, j) => j !== i))} title="Remove"><Trash2 size={15} /></button>
                </div>
                <textarea className="bms-textarea" dir="ltr" rows={2} placeholder="Answer" value={f.answer}
                  onChange={(e) => setEnField('faqs', en.faqs.map((x, j) => j === i ? { ...x, answer: e.target.value } : x))} />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar column */}
        <div>
          <div className="bms-section-card">
            <div className="bms-section-title">Publish</div>
            <div className="bms-field">
              <label className="bms-label">Status</label>
              <select className="bms-select" value={status} onChange={(e) => setStatus(e.target.value as PostStatus)}>
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
                <option value="SCHEDULED">Scheduled</option>
              </select>
            </div>
            {status === 'SCHEDULED' && (
              <div className="bms-field" style={{ marginBottom: 0 }}>
                <label className="bms-label">Publish at</label>
                <input type="datetime-local" className="bms-input" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)} />
                <div className="bms-help">Your timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
              </div>
            )}
          </div>

          <div className="bms-section-card">
            <div className="bms-section-title">Featured image</div>
            <FeaturedImageUpload value={featured} onChange={setFeatured} />
          </div>

          <div className="bms-section-card">
            <div className="bms-field" style={{ marginBottom: 0 }}>
              <label className="bms-label">Category</label>
              <select className="bms-select" value={categoryId ?? ''} onChange={(e) => setCategoryId(e.target.value || null)}>
                <option value="">— none —</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
          </div>

          <div className="bms-section-card">
            <div className="bms-section-title">Tags</div>
            <div className="bms-row" style={{ flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
              {tags.map((t) => (
                <span key={t} className="bms-chip">{t}<button type="button" onClick={() => setTags(tags.filter((x) => x !== t))}>×</button></span>
              ))}
            </div>
            <input className="bms-input" value={tagInput} placeholder="Type a tag, press Enter"
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }} />
          </div>

          <div className="bms-section-card">
            <div className="bms-between" style={{ marginBottom: 10 }}>
              <div className="bms-section-title" style={{ margin: 0 }}>SEO score (Arabic)</div>
              <strong style={{ color: seoScore >= 80 ? 'var(--bms-success)' : seoScore >= 50 ? 'var(--bms-warning)' : 'var(--bms-danger)' }}>{seoScore}/100</strong>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.82rem' }}>
              {seoChecks.map((c, i) => (
                <li key={i} style={{ color: c.ok ? 'var(--bms-success)' : 'var(--bms-muted)', marginBottom: 4 }}>
                  {c.ok ? '✓' : '○'} {c.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="bms-section-card">
            <div className="bms-section-title"><LangTag lang="AR" />SEO & social</div>
            <div className="bms-field">
              <label className="bms-label">SEO title</label>
              <input className="bms-input" dir="rtl" value={ar.seoTitle} onChange={(e) => setArField('seoTitle', e.target.value)} placeholder={ar.title} />
            </div>
            <div className="bms-field">
              <label className="bms-label">Meta description</label>
              <textarea className="bms-textarea" dir="rtl" rows={3} value={ar.metaDescription} onChange={(e) => setArField('metaDescription', e.target.value)} />
            </div>
            <div className="bms-field">
              <label className="bms-label">Focus keyword</label>
              <input className="bms-input" dir="rtl" value={ar.focusKeyword} onChange={(e) => setArField('focusKeyword', e.target.value)} />
            </div>
            <div className="bms-field">
              <label className="bms-label">Canonical URL</label>
              <input className="bms-input" dir="ltr" value={ar.canonicalUrl} onChange={(e) => setArField('canonicalUrl', e.target.value)} placeholder="(optional)" />
            </div>
            <div className="bms-field" style={{ marginBottom: 0 }}>
              <label className="bms-label">Robots</label>
              <select className="bms-select" value={ar.robots} onChange={(e) => setArField('robots', e.target.value as RobotsDirective)}>
                <option value="INDEX">Index, follow</option>
                <option value="NOINDEX">Noindex</option>
              </select>
            </div>
          </div>

          <div className="bms-section-card">
            <div className="bms-section-title"><LangTag lang="EN" />SEO & social</div>
            <div className="bms-field">
              <label className="bms-label">SEO title</label>
              <input className="bms-input" dir="ltr" value={en.seoTitle} onChange={(e) => setEnField('seoTitle', e.target.value)} placeholder={en.title} />
            </div>
            <div className="bms-field">
              <label className="bms-label">Meta description</label>
              <textarea className="bms-textarea" dir="ltr" rows={3} value={en.metaDescription} onChange={(e) => setEnField('metaDescription', e.target.value)} />
            </div>
            <div className="bms-field">
              <label className="bms-label">Focus keyword</label>
              <input className="bms-input" dir="ltr" value={en.focusKeyword} onChange={(e) => setEnField('focusKeyword', e.target.value)} />
            </div>
            <div className="bms-field">
              <label className="bms-label">Canonical URL</label>
              <input className="bms-input" dir="ltr" value={en.canonicalUrl} onChange={(e) => setEnField('canonicalUrl', e.target.value)} placeholder="(optional)" />
            </div>
            <div className="bms-field" style={{ marginBottom: 0 }}>
              <label className="bms-label">Robots</label>
              <select className="bms-select" value={en.robots} onChange={(e) => setEnField('robots', e.target.value as RobotsDirective)}>
                <option value="INDEX">Index, follow</option>
                <option value="NOINDEX">Noindex</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
