'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Plus } from 'lucide-react';
import { createTag, deleteTag } from './actions';

interface Tag { id: string; name: string; slug: string; }

export default function TagsManager({ items }: { items: Tag[] }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const add = () => {
    setError(null);
    startTransition(async () => {
      const res = await createTag(name);
      if (!res.ok) { setError(res.error || 'Failed.'); return; }
      setName(''); router.refresh();
    });
  };

  const remove = (id: string) => {
    if (!confirm('Delete this tag?')) return;
    startTransition(async () => { await deleteTag(id); router.refresh(); });
  };

  return (
    <>
      <div className="bms-section-card">
        <div className="bms-section-title">Add tag</div>
        {error && <div className="bms-alert bms-alert-error">{error}</div>}
        <div className="bms-row">
          <input className="bms-input" placeholder="Tag name" value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') add(); }} />
          <button className="bms-btn bms-btn-primary" onClick={add} disabled={pending || !name.trim()}>
            <Plus size={15} /> Add
          </button>
        </div>
      </div>

      <div className="bms-card" style={{ padding: 20 }}>
        {items.length === 0 ? (
          <p style={{ color: 'var(--bms-muted)' }}>No tags yet.</p>
        ) : (
          <div className="bms-row" style={{ flexWrap: 'wrap', gap: 8 }}>
            {items.map((t) => (
              <span key={t.id} className="bms-chip">
                {t.name}
                <button onClick={() => remove(t.id)} title="Delete"><Trash2 size={13} /></button>
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
