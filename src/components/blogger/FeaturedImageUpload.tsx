'use client';

import { useRef, useState } from 'react';
import { ImagePlus, Trash2, RefreshCw } from 'lucide-react';

export interface FeaturedImage {
  id: string;
  url: string;
  altText?: string;
}

export default function FeaturedImageUpload({
  value,
  onChange,
}: {
  value: FeaturedImage | null;
  onChange: (img: FeaturedImage | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pick = () => inputRef.current?.click();

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-selecting the same file
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/blogger/media/upload', { method: 'POST', body: fd });
      const ct = res.headers.get('content-type') || '';
      if (!ct.includes('application/json')) {
        throw new Error(`Upload endpoint returned ${res.status}. Restart the dev server if you just added it, then try again.`);
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed.');
      onChange({ id: data.id, url: data.url, altText: data.altText });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={onFile} />
      {error && <div className="bms-alert bms-alert-error">{error}</div>}

      {value ? (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value.url} alt={value.altText || 'Featured'} className="bms-featured-preview" />
          <div className="bms-row" style={{ marginTop: 8 }}>
            <button type="button" className="bms-btn bms-btn-ghost bms-btn-sm" onClick={pick} disabled={uploading}>
              <RefreshCw size={14} /> {uploading ? 'Uploading…' : 'Replace'}
            </button>
            <button type="button" className="bms-btn bms-btn-ghost bms-btn-sm" onClick={() => onChange(null)} disabled={uploading}>
              <Trash2 size={14} /> Remove
            </button>
          </div>
        </div>
      ) : (
        <button type="button" className="bms-dropzone" onClick={pick} disabled={uploading}>
          <ImagePlus size={22} />
          <span>{uploading ? 'Uploading…' : 'Upload from your computer'}</span>
          <small>JPG, PNG, WebP · up to 8MB · auto-converted to WebP</small>
        </button>
      )}
    </div>
  );
}
