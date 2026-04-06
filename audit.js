const fs = require('fs');
const path = require('path');

function findFiles(dir, filter, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findFiles(filePath, filter, fileList);
        } else if (filter.test(filePath)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

const pageFiles = findFiles(path.join(__dirname, 'src', 'app'), /page\.tsx$/);

let metadataList = [];
let filesUpdated = 0;

pageFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let titleMatch = content.match(/title:\s*(?:{\s*absolute:\s*['"`](.*?)['"`]\s*}|['"`](.*?)['"`])/);
    let title = titleMatch ? (titleMatch[1] || titleMatch[2]) : null;

    let descMatch = content.match(/description:\s*['"`](.*?)['"`]/);
    let description = descMatch ? descMatch[1] : null;

    let canonicalMatch = content.match(/canonical:\s*['"`](.*?)['"`]/);
    let canonical = canonicalMatch ? canonicalMatch[1] : null;

    metadataList.push({ file: file.replace(__dirname, ''), title, description, canonical });

    // Add trailing slash to canonical if not present and not just "/"
    if (canonical && canonical !== '/' && !canonical.endsWith('/')) {
        const newCanonical = canonical + '/';
        content = content.replace(/canonical:\s*['"`](.*?)['"`]/, `canonical: '${newCanonical}'`);
        fs.writeFileSync(file, content, 'utf8');
        filesUpdated++;
    } else if (canonical && canonical === '/') {
        // It's root, keep as is
    } else if (canonical && canonical.endsWith('/')) {
        // Already has trailing slash
    }
});

console.log(`Updated canonicals with trailing slashes in ${filesUpdated} files.`);

// Audit for Duplicates
console.log('\n--- Audit Results ---');
let titles = new Map();
let descriptions = new Map();

metadataList.forEach(m => {
    if (m.title) {
        if (titles.has(m.title)) {
            titles.get(m.title).push(m.file);
        } else {
            titles.set(m.title, [m.file]);
        }
    }

    if (m.description) {
        if (descriptions.has(m.description)) {
            descriptions.get(m.description).push(m.file);
        } else {
            descriptions.set(m.description, [m.file]);
        }
    }
});

let titleDups = false;
let descDups = false;

titles.forEach((files, title) => {
    if (files.length > 1) {
        titleDups = true;
        console.log(`Duplicate Title: "${title}" found in:\n  - ${files.join('\n  - ')}\n`);
    }
});

descriptions.forEach((files, desc) => {
    if (files.length > 1) {
        descDups = true;
        console.log(`Duplicate Description: "${desc}" found in:\n  - ${files.join('\n  - ')}\n`);
    }
});

if (!titleDups) console.log('No duplicate titles found.');
if (!descDups) console.log('No duplicate descriptions found.');

// Update sitemap.ts URLs
const sitemapPath = path.join(__dirname, 'src', 'app', 'sitemap.ts');
if (fs.existsSync(sitemapPath)) {
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    // For sitemap, we append trailing slash inside the string interpolations where appropriate.
    // Let's do a simple regex or inform if it needs manual patch
    console.log('\nPlease verify sitemap.ts manually to add trailing slashes.');
}
