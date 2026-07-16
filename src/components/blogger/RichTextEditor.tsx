'use client';

import { useRef, useState } from 'react';
import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle, Color } from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { TableKit } from '@tiptap/extension-table';
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Heading1, Heading2, Heading3,
  Pilcrow, List, ListOrdered, Quote, Code, Link as LinkIcon, Image as ImageIcon,
  Minus, Undo, Redo, AlignLeft, AlignCenter, AlignRight, AlignJustify, Table as TableIcon,
} from 'lucide-react';

async function uploadImageFile(file: File): Promise<{ url: string; altText: string }> {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/api/blogger/media/upload', { method: 'POST', body: fd });
  const ct = res.headers.get('content-type') || '';
  if (!ct.includes('application/json')) {
    throw new Error(`Upload endpoint returned ${res.status}. Restart the dev server if you just added it.`);
  }
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Upload failed.');
  return { url: data.url, altText: data.altText };
}

function Btn({
  onClick, active, disabled, title, children,
}: {
  onClick: () => void; active?: boolean; disabled?: boolean; title: string; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`bms-tb-btn${active ? ' active' : ''}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={title}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgBusy, setImgBusy] = useState(false);

  const setLink = () => {
    const prev = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Link URL', prev || 'https://');
    if (url === null) return;
    if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const onImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setImgBusy(true);
    try {
      const { url, altText } = await uploadImageFile(file);
      editor.chain().focus().setImage({ src: url, alt: altText }).run();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Image upload failed.');
    } finally {
      setImgBusy(false);
    }
  };

  const insertTable = () => {
    const rows = Math.max(1, Math.min(20, Number(window.prompt('Number of rows', '3')) || 0));
    const cols = Math.max(1, Math.min(10, Number(window.prompt('Number of columns', '3')) || 0));
    if (!rows || !cols) return;
    editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
  };

  const inTable = editor.isActive('table');

  return (
    <div className="bms-toolbar">
      <input ref={fileRef} type="file" accept="image/*" hidden onChange={onImageFile} />

      <Btn title="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}><Undo size={16} /></Btn>
      <Btn title="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}><Redo size={16} /></Btn>
      <span className="bms-tb-sep" />

      <Btn title="Paragraph" active={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()}><Pilcrow size={16} /></Btn>
      <Btn title="Heading 1" active={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}><Heading1 size={16} /></Btn>
      <Btn title="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 size={16} /></Btn>
      <Btn title="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 size={16} /></Btn>
      <span className="bms-tb-sep" />

      <Btn title="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={16} /></Btn>
      <Btn title="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={16} /></Btn>
      <Btn title="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={16} /></Btn>
      <Btn title="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough size={16} /></Btn>
      <label className="bms-tb-btn" title="Text color" style={{ position: 'relative', padding: 0, overflow: 'hidden' }}>
        <span style={{ fontWeight: 800, fontSize: 13 }}>A</span>
        <input
          type="color"
          onInput={(e) => editor.chain().focus().setColor((e.target as HTMLInputElement).value).run()}
          style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
          aria-label="Text color"
        />
      </label>
      <span className="bms-tb-sep" />

      <Btn title="Align left" active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}><AlignLeft size={16} /></Btn>
      <Btn title="Align center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}><AlignCenter size={16} /></Btn>
      <Btn title="Align right" active={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}><AlignRight size={16} /></Btn>
      <Btn title="Justify" active={editor.isActive({ textAlign: 'justify' })} onClick={() => editor.chain().focus().setTextAlign('justify').run()}><AlignJustify size={16} /></Btn>
      <span className="bms-tb-sep" />

      <Btn title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={16} /></Btn>
      <Btn title="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={16} /></Btn>
      <Btn title="Quote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={16} /></Btn>
      <Btn title="Code block" active={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code size={16} /></Btn>
      <span className="bms-tb-sep" />

      <Btn title="Link" active={editor.isActive('link')} onClick={setLink}><LinkIcon size={16} /></Btn>
      <Btn title={imgBusy ? 'Uploading…' : 'Upload image from computer'} onClick={() => fileRef.current?.click()} disabled={imgBusy}><ImageIcon size={16} /></Btn>
      <Btn title="Insert table" onClick={insertTable}><TableIcon size={16} /></Btn>
      <Btn title="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus size={16} /></Btn>

      {inTable && (
        <>
          <span className="bms-tb-sep" />
          <button type="button" className="bms-tb-text" title="Add column" onClick={() => editor.chain().focus().addColumnAfter().run()}>+Col</button>
          <button type="button" className="bms-tb-text" title="Delete column" onClick={() => editor.chain().focus().deleteColumn().run()}>−Col</button>
          <button type="button" className="bms-tb-text" title="Add row" onClick={() => editor.chain().focus().addRowAfter().run()}>+Row</button>
          <button type="button" className="bms-tb-text" title="Delete row" onClick={() => editor.chain().focus().deleteRow().run()}>−Row</button>
          <button type="button" className="bms-tb-text" title="Toggle header row" onClick={() => editor.chain().focus().toggleHeaderRow().run()}>Header</button>
          <button type="button" className="bms-tb-text danger" title="Delete table" onClick={() => editor.chain().focus().deleteTable().run()}>×Table</button>
        </>
      )}
    </div>
  );
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Write your article…',
  dir = 'ltr',
}: {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  dir?: 'ltr' | 'rtl';
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false, HTMLAttributes: { rel: 'noopener noreferrer nofollow' } },
      }),
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Image.configure({ HTMLAttributes: { class: 'bms-content-img' } }),
      Placeholder.configure({ placeholder }),
      TableKit.configure({ table: { resizable: true } }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: { attributes: { class: 'bms-prose', dir } },
  });

  if (!editor) {
    return <div className="bms-editor"><div className="bms-toolbar" /><div className="bms-prose" dir={dir} style={{ minHeight: 320 }} /></div>;
  }

  return (
    <div className="bms-editor">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
