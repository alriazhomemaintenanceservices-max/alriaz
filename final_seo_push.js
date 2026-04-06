const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk(baseDir, (filePath) => {
    if (!filePath.endsWith('page.tsx')) return;

    let relativePath = path.relative(baseDir, filePath).replace(/\\/g, '/');
    let routePath = '/' + relativePath.replace(/\/page\.tsx$/, '').replace(/^page\.tsx$/, '');
    if (routePath === '/') routePath = '';

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Metadata
    if (content.includes('export const metadata: Metadata = {')) {
        if (!content.includes('alternates:')) {
            if (content.includes('title: {')) {
                content = content.replace(/title: \{([\s\S]*?)\},/g, (match) => `${match}\n    alternates: {\n        canonical: '${routePath || '/'}'\n    },`);
            } else if (content.includes('title: "')) {
                content = content.replace(/title: "(.*?)",/g, (match) => `title: "$1",\n    alternates: {\n        canonical: '${routePath || '/'}'\n    },`);
            }
        }
    }

    // 2. CSS Classes
    content = content.replace(/className="section"/g, 'className="section animate-fade-in"');
    content = content.replace(/className="card"/g, 'className="card hover-lift"');

    // 3. Breadcrumbs Clean & Replace
    if (routePath !== '') {
        const breadcrumbLabel = (p) => p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, ' ');
        let breadcrumbHtml = `\n            {/* Breadcrumbs */}\n            <nav className="container" style={{ marginBottom: '30px', fontSize: '0.9rem', color: 'var(--muted)' }}>\n                <Link href="/">Home</Link>`;

        if (routePath.includes('/riyadh/')) {
            let parts = routePath.split('/').filter(p => p);
            let district = parts[1];
            let service = parts[2] || parts[1];
            breadcrumbHtml += ` / <Link href="/services">Services</Link>`;
            if (service !== parts[1]) {
                breadcrumbHtml += ` / <Link href="/services/${service}">${breadcrumbLabel(service)}</Link>`;
            }
            breadcrumbHtml += ` / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>${breadcrumbLabel(district)}</span>`;
        } else if (routePath.startsWith('/services/')) {
            let service = routePath.replace('/services/', '');
            breadcrumbHtml += ` / <Link href="/services">Services</Link>`;
            breadcrumbHtml += ` / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>${breadcrumbLabel(service)}</span>`;
        } else {
            let label = routePath.replace('/', '');
            breadcrumbHtml += ` / <span style={{ color: 'var(--primary)', fontWeight: 600 }}>${breadcrumbLabel(label)}</span>`;
        }
        breadcrumbHtml += `\n            </nav>\n`;

        // Strategy: Replace everything between <main ...> and the first <section or <div with our breadcrumb
        // This effectively removes any old breadcrumbs stuck in between
        content = content.replace(/(<main.*?>)[\s\S]*?(<section|<div {|\{script)/i, (match, p1, p2) => {
            // Keep script tags if they are there (schema)
            let scripts = match.match(/<script[\s\S]*?<\/script>/gi) || [];
            return `${p1}\n${scripts.join('\n')}\n${breadcrumbHtml}\n${p2}`;
        });

        // Final sanity cleanup: remove duplicate comment tags if they lingered
        content = content.replace(/\{\/\* Breadcrumbs \*\/\}\s*\{\/\* Breadcrumbs \*\/\}/g, '{/* Breadcrumbs */}');
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
    }
});
console.log('SEO & Architecture Push Complete.');
