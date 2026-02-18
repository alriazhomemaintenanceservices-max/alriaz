"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div style={{ display: 'grid', gap: '15px' }}>
            {items.map((item, index) => (
                <div
                    key={index}
                    style={{
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        background: 'white',
                        overflow: 'hidden',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                    }}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        style={{
                            width: '100%',
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: openIndex === index ? '#f8fafc' : 'white',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: '#1e293b',
                            transition: 'background 0.2s'
                        }}
                    >
                        {item.title}
                        {openIndex === index ? (
                            <ChevronUp size={20} color="var(--primary)" />
                        ) : (
                            <ChevronDown size={20} color="#94a3b8" />
                        )}
                    </button>

                    <div style={{
                        maxHeight: openIndex === index ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out'
                    }}>
                        <div style={{
                            padding: '0 20px 20px',
                            color: 'var(--muted)',
                            lineHeight: 1.6,
                            fontSize: '0.95rem'
                        }}>
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
