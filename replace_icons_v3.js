const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

function updateWhatsAppIcons(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Handle imports from lucide-react
    // Check if MessageCircle is in a lucide-react import
    const lucideImportRegex = /import\s+{[^}]*MessageCircle[^}]*}\s+from\s+'lucide-react';/g;
    const lucideMatches = content.match(lucideImportRegex);

    if (lucideMatches) {
        lucideMatches.forEach(match => {
            // Remove MessageCircle from the list
            let newImport = match.replace(/,\s*MessageCircle|MessageCircle\s*,/g, '');
            // If it was the only one (highly unlikely but still)
            newImport = newImport.replace(/{\s*MessageCircle\s*}/g, '{}');
            content = content.replace(match, newImport);
        });

        // 2. Add WhatsAppIcon import if not already present
        if (!content.includes('import { WhatsAppIcon }')) {
            const importLine = 'import { WhatsAppIcon } from "@/components/WhatsAppIcon";';
            // Find the best place to insert (after another import)
            const firstImportMatch = content.match(/import [^;]+;/);
            if (firstImportMatch) {
                content = content.replace(firstImportMatch[0], firstImportMatch[0] + '\n' + importLine);
            }
        }
    }

    // 3. Replace JSX tags
    content = content.replace(/<MessageCircle/g, '<WhatsAppIcon');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${filePath}`);
    }
}

function processDir(directory) {
    if (!fs.existsSync(directory)) return;
    const items = fs.readdirSync(directory);
    items.forEach(item => {
        const fullPath = path.join(directory, item);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            processDir(fullPath);
        } else if (item.endsWith('.tsx')) {
            updateWhatsAppIcons(fullPath);
        }
    });
}

processDir(baseDir);
console.log("Global update v3 complete.");
