'use client';

import Link from 'next/link';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2 } from 'lucide-react';
import { deletePost } from '@/app/blogger/posts/actions';

export default function PostRowActions({ postId }: { postId: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const remove = () => {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    startTransition(async () => {
      await deletePost(postId);
      router.refresh();
    });
  };

  return (
    <div className="bms-row" style={{ gap: 6, justifyContent: 'flex-end' }}>
      <Link href={`/blogger/posts/${postId}`} className="bms-tb-btn" title="Edit">
        <Pencil size={15} />
      </Link>
      <button
        type="button"
        className="bms-tb-btn"
        title="Delete"
        onClick={remove}
        disabled={pending}
        style={{ color: 'var(--bms-danger)' }}
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}
