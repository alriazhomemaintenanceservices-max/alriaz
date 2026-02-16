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
console.log(`Found ${files.length} tsx files.`);

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    if (content.includes('MessageCircle')) {
        // Remove from lucide imports
        content = content.replace(/MessageCircle,\s*/g, '');
        content = content.replace(/,\s*MessageCircle/g, '');
        content = content.replace(/{\s*MessageCircle\s*}/g, '{}');

        // Add WhatsAppIcon import
        if (!content.includes('import { WhatsAppIcon }')) {
            content = 'import { WhatsAppIcon } from "@/components/WhatsAppIcon";\n' + content;
        }

        // Replace JSX
        content = content.replace(/<MessageCircle/g, '<WhatsAppIcon');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
});
