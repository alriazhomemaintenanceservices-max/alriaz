'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Plus } from 'lucide-react';
import { createCategory, deleteCategory } from './actions';

interface Category { id: string; name: string; slug: string; description: string | null; }

export default function CategoriesManager({ items }: { items: Category[] }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const add = () => {
    setError(null);
    startTransition(async () => {
      const res = await createCategory(name, description);
      if (!res.ok) { setError(res.error || 'Failed.'); return; }
      setName(''); setDescription(''); router.refresh();
    });
  };

  const remove = (id: string) => {
    if (!confirm('Delete this category? Posts keep existing but lose this category.')) return;
    startTransition(async () => { await deleteCategory(id); router.refresh(); });
  };

  return (
    <>
      <div className="bms-section-card">
        <div className="bms-section-title">Add category</div>
        {error && <div className="bms-alert bms-alert-error">{error}</div>}
        <div className="bms-field">
          <input className="bms-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="bms-field">
          <input className="bms-input" placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="bms-btn bms-btn-primary" onClick={add} disabled={pending || !name.trim()}>
          <Plus size={15} /> Add
        </button>
      </div>

      <div className="bms-card" style={{ padding: 20 }}>
        {items.length === 0 ? (
          <p style={{ color: 'var(--bms-muted)' }}>No categories yet.</p>
        ) : (
          <table className="bms-table">
            <thead><tr><th>Name</th><th>Slug</th><th>Description</th><th></th></tr></thead>
            <tbody>
              {items.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td style={{ color: 'var(--bms-muted)' }}>{c.slug}</td>
                  <td style={{ color: 'var(--bms-muted)' }}>{c.description || '—'}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="bms-tb-btn" title="Delete" onClick={() => remove(c.id)}><Trash2 size={15} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
