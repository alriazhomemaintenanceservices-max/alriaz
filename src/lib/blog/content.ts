import slugifyLib from 'slugify';

/** SEO-friendly slug. Latin text → ascii; falls back to keeping unicode letters
 *  (e.g. Arabic) so AR titles still produce a usable slug. */
export function slugify(input: string): string {
  const ascii = slugifyLib(input, { lower: true, strict: true, trim: true });
  if (ascii) return ascii;
  return input
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Strip HTML tags to plain text (for reading time, keyword checks, excerpts). */
export function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Minutes to read, ~200 wpm, min 1. */
export function readingTime(text: string): number {
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  return Math.max(1, Math.round(words / 200));
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

/** Build a table of contents from H2–H4 in the content HTML, with stable
 *  unique anchor ids (matched when the public page renders headings). */
export function extractToc(html: string): TocItem[] {
  const items: TocItem[] = [];
  const re = /<h([2-4])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const seen: Record<string, number> = {};
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const level = Number(m[1]);
    const text = plainText(m[2]);
    if (!text) continue;
    let id = slugify(text) || 'section';
    if (seen[id] != null) {
      seen[id] += 1;
      id = `${id}-${seen[id]}`;
    } else {
      seen[id] = 0;
    }
    items.push({ id, text, level });
  }
  return items;
}

/** Inject the same ids onto headings so in-page anchors line up with the TOC. */
export function addHeadingIds(html: string): string {
  const seen: Record<string, number> = {};
  return html.replace(/<h([2-4])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_full, lvl, attrs, inner) => {
    const text = plainText(inner);
    let id = slugify(text) || 'section';
    if (seen[id] != null) {
      seen[id] += 1;
      id = `${id}-${seen[id]}`;
    } else {
      seen[id] = 0;
    }
    // don't duplicate an existing id
    const cleaned = String(attrs).replace(/\sid="[^"]*"/i, '');
    return `<h${lvl}${cleaned} id="${id}">${inner}</h${lvl}>`;
  });
}

/** Auto excerpt from content when the author leaves it blank. */
export function autoExcerpt(html: string, max = 160): string {
  const text = plainText(html);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}
