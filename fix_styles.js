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

walk(baseDir, (filePath) => {
    if (!filePath.endsWith('page.tsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix double styles:
    // e.g., style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '20px', cursor: 'pointer', background: 'white' }} style={{ padding: "24px", border: "1px solid #e2e8f0", borderRadius: "20px", background: "white", marginBottom: "16px" }}
    
    // Using simple regex to capture the extra styles injected
    content = content.replace(/style=\{\{.*?\}\} style=\{\{/g, 'style={{');
    
    // Wait, the regex replace in previous script was:
    // <div$1 style={{ padding: "24px"...
    // so it kept `key={i} style={{...}} ` as $1. 
    // the safest clean up is to run prettier or a simple replace.
    
    // There were three tags: div, h3, p created from details, summary, div
    // div:
    content = content.replace(/(<div[^>]+)style=\{\{.*?cursor:\s*'pointer'.*?\}\}\s*style=\{\{/g, '$1style={{');
    // h3:
    content = content.replace(/(<h3[^>]+)style=\{\{.*?listStyle:\s*'none'.*?\}\}\s*style=\{\{/g, '$1style={{');
    // p:
    content = content.replace(/(<p[^>]+)style=\{\{.*?paddingTop:\s*'16px'.*?\}\}\s*style=\{\{/g, '$1style={{');
    
    // More generic fix for any double styles:
    let prev;
    do {
        prev = content;
        content = content.replace(/(<[^>]+?)style=\{([^}]+)\}\s*style=\{([^}]+)\}/g, '$1style={$3}');
    } while (content !== prev);

    if (content !== original) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('Fixed double styles.');
