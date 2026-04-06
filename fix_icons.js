const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');
const importLine = 'import { WhatsAppIcon } from "@/components/WhatsAppIcon";\n';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk(baseDir, (filePath) => {
    if (!filePath.endsWith('.tsx')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    if (content.includes('MessageCircle')) {
        // Remove from imports
        content = content.replace(/MessageCircle,?\s*/g, '');
        content = content.replace(/,\s*MessageCircle/g, '');
        // Replace in JSX
        content = content.replace(/<MessageCircle/g, '<WhatsAppIcon');
        changed = true;
    }

    if (content.includes('WhatsAppIcon') && !content.includes('import { WhatsAppIcon }')) {
        // Add import at the top after 'use client' or just at the very top
        if (content.startsWith('"use client"') || content.startsWith("'use client'")) {
            const firstNewline = content.indexOf('\n');
            content = content.slice(0, firstNewline + 1) + importLine + content.slice(firstNewline + 1);
        } else {
            content = importLine + content;
        }
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
    }
});
