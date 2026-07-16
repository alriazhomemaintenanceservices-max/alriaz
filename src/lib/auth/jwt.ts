import { SignJWT, jwtVerify } from 'jose';

// Edge-safe session token helpers (jose runs in the Edge runtime, so these can
// be used from proxy.ts / middleware as well as Node server code). No imports
// from next/headers here — keep this file runtime-agnostic.

export const SESSION_COOKIE = 'bms_session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days (seconds)

export interface SessionPayload {
  sub: string; // blogger id
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR' | 'AUTHOR';
}

function secretKey(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error('AUTH_SECRET is not set');
  return new TextEncoder().encode(secret);
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(secretKey());
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey(), { algorithms: ['HS256'] });
    if (!payload.sub || !payload.email || !payload.role) return null;
    return {
      sub: String(payload.sub),
      email: String(payload.email),
      name: String(payload.name ?? ''),
      role: payload.role as SessionPayload['role'],
    };
  } catch {
    return null;
  }
}
