const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\Latitude 7420\\Downloads\\Al Riaz Home Maintenance Services';
const appDir = path.join(rootDir, 'src', 'app');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(appDir);
console.log(`Checking ${files.length} files...`);

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    if (content.indexOf('MessageCircle') !== -1) {
        console.log(`Found MessageCircle in ${filePath}`);

        // Replace MessageCircle in lucide-react import
        content = content.replace(/import\s*{([^}]*)}\s*from\s*'lucide-react';/g, (match, p1) => {
            if (p1.includes('MessageCircle')) {
                let icons = p1.split(',').map(s => s.trim()).filter(s => s !== 'MessageCircle' && s !== '');
                return `import { ${icons.join(', ')} } from 'lucide-react';`;
            }
            return match;
        });

        // Add WhatsAppIcon import
        if (content.indexOf('WhatsAppIcon') === -1 || content.indexOf('import { WhatsAppIcon }') === -1) {
            content = 'import { WhatsAppIcon } from "@/components/WhatsAppIcon";\n' + content;
        }

        // Replace JSX
        content = content.replace(/<MessageCircle/g, '<WhatsAppIcon');
        content = content.replace(/<\/MessageCircle/g, '</WhatsAppIcon');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`SUCCESSFULLY UPDATED: ${filePath}`);
    }
});
