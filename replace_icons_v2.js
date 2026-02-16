const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

const whatsappSvgComponentImport = 'import { WhatsAppIcon } from "@/components/WhatsAppIcon";';

function updateWhatsAppIcons(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Check if MessageCircle is used
    if (content.includes('MessageCircle')) {
        // Replace MessageCircle with WhatsAppIcon in imports
        content = content.replace(/MessageCircle(,\s*|\s*)/g, (match, p1) => {
            // Check if it's inside an import from lucide-react
            const lines = content.split('\n');
            const lineIndex = lines.findIndex(line => line.includes(match) && line.includes('lucide-react'));
            if (lineIndex !== -1) {
                // If it's the only one or last one, just remove it or replace it carefully
                // But it's easier to just ensure WhatsAppIcon is imported from components
                return '';
            }
            return 'WhatsAppIcon';
        });

        // Clean up lucide-react import if it's empty or has trailing commas
        content = content.replace(/import {(\s*,?\s*)} from 'lucide-react';/g, '');
        content = content.replace(/import {([^}]+),\s*} from 'lucide-react';/g, 'import {$1} from \'lucide-react\';');
        content = content.replace(/import {\s*,([^}]+)} from 'lucide-react';/g, 'import {$1} from \'lucide-react\';');

        // Add WhatsAppIcon import if not present
        if (!content.includes('import { WhatsAppIcon }')) {
            // Add after the last import
            const imports = content.match(/import [^;]+;/g);
            if (imports) {
                const lastImport = imports[imports.length - 1];
                content = content.replace(lastImport, lastImport + '\n' + whatsappSvgComponentImport);
            }
        }

        // Replace JSX tags
        content = content.replace(/<MessageCircle/g, '<WhatsAppIcon');
    }

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
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
            updateWhatsAppIcons(fullPath);
        }
    });
}

processDir(baseDir);
console.log("Global update complete.");
