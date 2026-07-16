'use client';

import { useActionState, useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { loginAction, type AuthState } from '../actions';

const initialState: AuthState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bms-auth">
      <div className="bms-auth-card">
        <div className="bms-auth-logo">Saudi Home Experts</div>
        <div className="bms-auth-sub">Blogger sign in</div>

        {state.error && <div className="bms-alert bms-alert-error">{state.error}</div>}

        <form action={formAction}>
          <div className="bms-field">
            <label className="bms-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="bms-input"
              autoComplete="email"
              required
              autoFocus
            />
          </div>

          <div className="bms-field">
            <label className="bms-label" htmlFor="password">Password</label>
            <div className="bms-input-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="bms-input"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="bms-reveal"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="bms-btn bms-btn-primary bms-btn-block" disabled={pending}>
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Link href="/blogger/forgot-password" style={{ color: 'var(--bms-muted)', fontSize: '0.85rem' }}>
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
