"use client";

import React from 'react';

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.title,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.content
            }
        }))
    };

    return (
        <div style={{ display: 'grid', gap: '25px', padding: '20px 0' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {items.map((item, index) => (
                <div
                    key={index}
                    style={{
                        padding: '25px',
                        border: '1px solid var(--border)',
                        borderRadius: '16px',
                        background: '#f8fafc',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                    }}
                >
                    <h3
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            color: '#1e293b',
                            marginBottom: '15px',
                            lineHeight: 1.4
                        }}
                    >
                        {item.title}
                    </h3>
                    <p
                        style={{
                            color: '#475569',
                            lineHeight: 1.7,
                            fontSize: '1.05rem',
                            margin: 0
                        }}
                    >
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
    );
}
