import ResetForm from './ResetForm';

export const dynamic = 'force-dynamic';

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <div className="bms-auth">
      <div className="bms-auth-card">
        <div className="bms-auth-logo">Set a new password</div>
        <div className="bms-auth-sub">Choose a strong password</div>
        <ResetForm token={token || ''} />
      </div>
    </div>
  );
}
