const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walk(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

// Brand name constant
const BRAND = "Saudi Home Experts";

walk(baseDir, (filePath) => {
    if (!filePath.endsWith('page.tsx')) return;

    let relativePath = path.relative(baseDir, filePath).replace(/\\/g, '/');
    let routePath = '/' + relativePath.replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
    if (routePath === '/') routePath = '';

    let parts = relativePath.split('/');
    let district = '';
    let service = '';

    if (parts[0] === 'riyadh' && parts.length >= 4) {
        district = capitalize(parts[1]);
        service = capitalize(parts[2]);
    } else if (parts[0] === 'services' && parts.length >= 3) {
        service = capitalize(parts[1]);
        district = 'Riyadh';
    } else if (parts[0] === 'page.tsx') {
        service = 'Home Maintenance';
        district = 'Riyadh';
    } else {
        return; // skip about, contact, etc for now or handle generally
    }

    let kw = `${service} ${district}`;
    if (service === 'Home Maintenance' && district === 'Riyadh') {
        kw = 'Home Maintenance Riyadh';
    }
    
    // 1. Meta Title Optimization
    // Formula: Primary Keyword + Benefit / Value Proposition + Brand
    let benefit = '24/7 Emergency Service';
    if (service.toLowerCase().includes('electrician')) benefit = 'Fast & Safe Repairs';
    if (service.toLowerCase().includes('clean')) benefit = 'Top Rated Service';
    if (service.toLowerCase().includes('intercom')) benefit = 'Certified Installers';

    let title = `${kw} – ${benefit} – ${BRAND}`;
    if (title.length > 60) {
        // Fallback for length
        title = `${kw} – Fast Service – ${BRAND}`;
    }
    if (title.length > 60) {
        title = `${kw} – 24/7 – ${BRAND}`;
    }

    // 2. Meta Description Optimization
    // Formula: USP + Trust Signal + CTA
    // Length: 130–160 chars.
    let usp = `Need a ${service.toLowerCase()} in ${district}?`;
    if (service === 'Home Maintenance') {
        usp = `Looking for home maintenance in ${district}?`;
    }
    let trustSignal = `Certified technicians, fast response and affordable pricing.`;
    if (service.toLowerCase().includes('electrician')) trustSignal = `SASO certified technicians, safe repairs and upfront pricing.`;
    let cta = `Call now for same-day service.`;
    
    let description = `${usp} ${trustSignal} ${cta}`;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace Metadata Block
    const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\};/m;
    
    const newMetadata = `export const metadata: Metadata = {
    title: "${title}",
    description: "${description}",
    alternates: {
        canonical: '${routePath || '/'}'
    }
};`;

    if (metadataRegex.test(content)) {
        content = content.replace(metadataRegex, newMetadata);
    }

    // 3. AI Overview Optimization (H1 & H2/H3 for FAQs)
    // Replace <h1 ...> with alignment
    const h1Regex = /<h1([^>]*)>([\s\S]*?)<\/h1>/m;
    if (h1Regex.test(content)) {
        const h1Match = content.match(h1Regex);
        // ensure kw is in H1 somehow
        // We will just enforce a clean SEO H1
        const newH1 = `<h1$1>\n    Professional ${service} Services in ${district}\n</h1>`;
        content = content.replace(h1Regex, newH1);
    }

    // Convert Accordion or details into H2+H3+P format for AI Overview and FAQPage schema
    // Since we can't reliably parse complex JSX to JSON via Regex, we'll replace the `<Accordion items={[...]} />` 
    // or `<details>...</details>` array if possible, or we will just ensure the component renders H3.
    // Actually, Accordion in `src/components/Accordion.tsx` renders H3 if we change it there, 
    // but the Prompt says: "Direct concise answers immediately below each question, Structured headings (H2 or H3 questions)".

    // Add FAQ JSON-LD if we can extract questions
    // This requires extracting the questions array from the page.
    let faqSchema = null;
    let questionsMatch = content.match(/items=\{\[\s*([\s\S]*?)\s*\]\}/);
    if (!questionsMatch) {
       // try finding details map
       questionsMatch = content.match(/\[([\s\S]*?)\]\.map\(\(item/);
    }

    if (questionsMatch) {
        try {
            // Very hacky parser for array of objects like { q: "...", a: "..." } or { title: "...", content: "..." }
            let arrStr = "[" + questionsMatch[1] + "]";
            // converting JS object strings to JSON is hard with regex, let's just use regex to extract the strings
            let qtRegex = /(?:title|q):\s*["']([^"']+)["']/g;
            let ansRegex = /(?:content|a):\s*["']([^"']+)["']/g;
            
            let qs = [...arrStr.matchAll(qtRegex)].map(m => m[1]);
            let as = [...arrStr.matchAll(ansRegex)].map(m => m[1]);
            
            if (qs.length === as.length && qs.length > 0) {
                let faqItems = qs.map((q, i) => ({
                    "@type": "Question",
                    "name": q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": as[i]
                    }
                }));
                faqSchema = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqItems
                };
            }
        } catch(e) {}
    }

    // Replace visual Accordions/details with direct Semantic HTML
    // We'll replace Accordion with direct render map, or since there is a map already we just change the details to div+H3
    content = content.replace(/<details(.*?)>[\s\S]*?<summary(.*?)>([\s\S]*?)<\/summary>[\s\S]*?<div(.*?)>([\s\S]*?)<\/div>[\s\S]*?<\/details>/g, 
        '<div$1 style={{ padding: "24px", border: "1px solid #e2e8f0", borderRadius: "20px", background: "white", marginBottom: "16px" }}>\n    <h3$2 style={{ fontWeight: 700, fontSize: "1.15rem", color: "#1e293b", margin: 0, paddingBottom: "10px" }}>$3</h3>\n    <p$4 style={{ marginTop: "10px", color: "#444", fontSize: "1.05rem", borderTop: "1px solid #f1f5f9", paddingTop: "16px", margin: 0 }}>$5</p>\n</div>'
    );

    // Inject FAQ Schema and HowTo Schema
    let schemasToInject = [];
    if (faqSchema) {
        schemasToInject.push(faqSchema);
    }

    if (service !== 'Home Maintenance' && parts[0] === 'services') {
        schemasToInject.push({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": `How to book ${service} in Riyadh`,
            "description": `Step by step guide to booking our ${service} services.`,
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Choose service",
                    "text": `Select the ${service} service on our website.`
                },
                {
                    "@type": "HowToStep",
                    "name": "Contact us",
                    "text": "Send us a message on WhatsApp or call our emergency number."
                },
                {
                    "@type": "HowToStep",
                    "name": "Confirm booking",
                    "text": "Receive your fixed quote and wait for our technician to arrive."
                }
            ]
        });
    }

    if (schemasToInject.length > 0) {
        let scriptTags = schemasToInject.map(s => 
            `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(${JSON.stringify(s)})}} />`
        ).join('\n            ');

        // Check if existing schemas exist, avoid duplicate
        if (!content.includes('application/ld+json')) {
            // Append right before closing </main>
            content = content.replace(/(<\/main>)/, `\n            {/* SEO Schemas */}\n            ${scriptTags}\n        $1`);
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('SEO update completed.');
