'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { resetPassword, type ResetState } from '../password-actions';

const initialState: ResetState = {};

export default function ResetForm({ token }: { token: string }) {
  const [state, formAction, pending] = useActionState(resetPassword, initialState);

  if (!token) {
    return (
      <div className="bms-alert bms-alert-error">
        Missing reset token. <Link href="/blogger/forgot-password">Request a new link</Link>.
      </div>
    );
  }

  return (
    <>
      {state.error && <div className="bms-alert bms-alert-error">{state.error}</div>}
      <form action={formAction}>
        <input type="hidden" name="token" value={token} />
        <div className="bms-field">
          <label className="bms-label" htmlFor="password">New password</label>
          <input id="password" name="password" type="password" className="bms-input" autoComplete="new-password" required minLength={8} autoFocus />
        </div>
        <div className="bms-field">
          <label className="bms-label" htmlFor="confirm">Confirm password</label>
          <input id="confirm" name="confirm" type="password" className="bms-input" autoComplete="new-password" required minLength={8} />
        </div>
        <button type="submit" className="bms-btn bms-btn-primary bms-btn-block" disabled={pending}>
          {pending ? 'Updating…' : 'Update password'}
        </button>
      </form>
    </>
  );
}
