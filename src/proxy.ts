import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, verifySession } from '@/lib/auth/jwt';

// --- Why this proxy exists --------------------------------------------------
// The public area-page URLs use Arabic service prefixes, e.g.
//   /كهربائي-yasmin/   /سباك-narjis/   /انتركوم-malqa/
// These are the indexed, canonical URLs and must not change.
//
// Next.js 16.x does NOT match a percent-encoded non-ASCII route segment to a
// route folder of the same (decoded) name — browsers always send the encoded
// form, so every Arabic-prefixed page 404s in the browser. Rewriting back to
// the decoded Arabic path doesn't help either: NextResponse re-encodes it and
// the router fails again.
//
// Fix: the route folders are ASCII (electrician-*, plumber-*, intercom-*), and
// here we rewrite the incoming Arabic URL to its ASCII route. A rewrite (not a
// redirect) means the address bar keeps showing the original Arabic URL.
// ---------------------------------------------------------------------------

const SERVICE_AR_TO_EN: Record<string, string> = {
  'كهربائي': 'electrician',
  'سباك': 'plumber',
  'انتركوم': 'intercom',
};

// Blogger admin routes reachable without a session (auth screens).
const BLOGGER_PUBLIC = ['/blogger/login', '/blogger/forgot-password', '/blogger/reset-password'];

function stripSlash(p: string): string {
  return p.replace(/\/+$/, '') || '/';
}

async function guardBlogger(req: NextRequest, path: string): Promise<NextResponse> {
  const normalized = stripSlash(path);
  const isPublic = BLOGGER_PUBLIC.includes(normalized);

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySession(token) : null;

  // Unauthenticated → send to login (remember where they were going).
  if (!session && !isPublic) {
    const url = req.nextUrl.clone();
    url.pathname = '/blogger/login';
    url.search = `?next=${encodeURIComponent(path)}`;
    return NextResponse.redirect(url);
  }

  // Already signed in → keep them out of the auth screens and the bare /blogger.
  if (session && (isPublic || normalized === '/blogger')) {
    const url = req.nextUrl.clone();
    url.pathname = '/blogger/dashboard';
    url.search = '';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export async function proxy(req: NextRequest) {
  const rawPath = req.nextUrl.pathname;

  // 1) Admin auth guard (ASCII paths, handled before Arabic rewriting).
  if (rawPath === '/blogger' || rawPath.startsWith('/blogger/')) {
    return guardBlogger(req, rawPath);
  }

  // 2) Arabic public-page routing.
  let pathname: string;
  try {
    pathname = decodeURIComponent(req.nextUrl.pathname);
  } catch {
    return NextResponse.next();
  }

  for (const [ar, en] of Object.entries(SERVICE_AR_TO_EN)) {
    const prefix = `/${ar}-`;
    if (!pathname.startsWith(prefix)) continue;

    // Keep the public URL Arabic: enforce the trailing slash here (308) so the
    // ASCII rewrite target below never triggers a slash-redirect that would
    // expose the ASCII path in the address bar.
    if (!pathname.endsWith('/')) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = `${pathname}/`;
      return NextResponse.redirect(redirectUrl, 308);
    }

    const rest = pathname.slice(prefix.length); // slug + trailing slash
    const url = req.nextUrl.clone();
    url.pathname = `/${en}-${rest}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run on page requests only — skip Next internals and any file with an
  // extension (static assets). Arabic/encoded paths still match here.
  matcher: ['/((?!_next/|favicon.ico|.*\\.).*)'],
};
