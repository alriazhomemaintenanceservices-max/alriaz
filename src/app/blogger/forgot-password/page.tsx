'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { requestPasswordReset, type ResetState } from '../password-actions';

const initialState: ResetState = {};

export default function ForgotPasswordPage() {
  const [state, formAction, pending] = useActionState(requestPasswordReset, initialState);

  return (
    <div className="bms-auth">
      <div className="bms-auth-card">
        <div className="bms-auth-logo">Reset password</div>
        <div className="bms-auth-sub">We&apos;ll email you a reset link</div>

        {state.success && <div className="bms-alert bms-alert-success">{state.success}</div>}

        <form action={formAction}>
          <div className="bms-field">
            <label className="bms-label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="bms-input" autoComplete="email" required autoFocus />
          </div>
          <button type="submit" className="bms-btn bms-btn-primary bms-btn-block" disabled={pending}>
            {pending ? 'Sending…' : 'Send reset link'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Link href="/blogger/login" style={{ color: 'var(--bms-muted)', fontSize: '0.85rem' }}>
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
