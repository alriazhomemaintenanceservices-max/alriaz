import 'server-only';
import Anthropic from '@anthropic-ai/sdk';

export interface TranslatableFields {
  title: string;
  excerpt: string;
  content: string; // HTML
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  faqs: { question: string; answer: string }[];
}

function extractJson(text: string): Record<string, unknown> {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Translation did not return JSON.');
  return JSON.parse(match[0]);
}

/** Translate blog fields Arabic → English via Claude, preserving HTML structure. */
export async function translateArToEn(ar: TranslatableFields): Promise<TranslatableFields> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is not set on the server.');

  const client = new Anthropic({ apiKey });

  const input = {
    title: ar.title,
    excerpt: ar.excerpt,
    content: ar.content,
    seoTitle: ar.seoTitle,
    metaDescription: ar.metaDescription,
    focusKeyword: ar.focusKeyword,
    faqs: ar.faqs,
  };

  const message = await client.messages.create({
    model: 'claude-sonnet-5',
    max_tokens: 8000,
    system:
      'You are a professional Arabic→English translator for a Saudi home-services blog ' +
      '(electrician, plumber, intercom in Riyadh). Translate naturally and idiomatically into ' +
      'fluent, SEO-friendly English. In "content", preserve every HTML tag and attribute exactly ' +
      '— translate only the human-readable text between tags. Return ONLY a valid JSON object with ' +
      'the same keys as the input (title, excerpt, content, seoTitle, metaDescription, focusKeyword, ' +
      'faqs). "faqs" is an array of {question, answer}. No markdown, no commentary.',
    messages: [
      { role: 'user', content: `Translate these fields from Arabic to English:\n\n${JSON.stringify(input)}` },
    ],
  });

  const text = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('');

  const json = extractJson(text) as Partial<TranslatableFields> & { faqs?: unknown };
  return {
    title: String(json.title ?? ''),
    excerpt: String(json.excerpt ?? ''),
    content: String(json.content ?? ''),
    seoTitle: String(json.seoTitle ?? ''),
    metaDescription: String(json.metaDescription ?? ''),
    focusKeyword: String(json.focusKeyword ?? ''),
    faqs: Array.isArray(json.faqs)
      ? (json.faqs as { question?: string; answer?: string }[]).map((f) => ({
          question: String(f.question ?? ''),
          answer: String(f.answer ?? ''),
        }))
      : [],
  };
}
