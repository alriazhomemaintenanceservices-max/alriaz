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

    content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];/, (match, p1) => {
        let imports = p1.split(',').map(s => s.trim()).filter(Boolean);
        let uniqueImports = Array.from(new Set(imports));
        return `import { ${uniqueImports.join(', ')} } from 'lucide-react';`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('Fixed imports again.');
