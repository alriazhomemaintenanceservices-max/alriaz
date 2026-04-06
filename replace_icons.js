const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

const whatsappSvgComponentImport = 'import { WhatsAppIcon } from "@/components/WhatsAppIcon";';

function updateWhatsAppIcons(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if WhatsAppIcon is already imported, if not add it
    if (content.includes('MessageCircle') && !content.includes('WhatsAppIcon')) {
        // Find the lucide-react import line
        const lucideImportMatch = content.match(/import {[^}]+} from 'lucide-react';/);
        if (lucideImportMatch) {
            content = content.replace(lucideImportMatch[0], lucideImportMatch[0] + '\n' + whatsappSvgComponentImport);
        }
    }

    // Replace <MessageCircle ... /> with <WhatsAppIcon ... />
    // We handle various sizes and styles
    const updatedContent = content
        .replace(/<MessageCircle([^>]*)\/>/g, '<WhatsAppIcon$1/>')
        .replace(/MessageCircle/g, (match, offset) => {
            // Only replace if it's in the import or JSX
            const before = content.slice(Math.max(0, offset - 20), offset);
            const after = content.slice(offset + match.length, offset + match.length + 20);
            if (before.includes('import') || before.includes('<') || after.includes('size')) {
                return 'WhatsAppIcon';
            }
            return match;
        });

    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated WhatsApp icons in: ${filePath}`);
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
console.log("Global update to WhatsAppIcon complete.");
