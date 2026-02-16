const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

function updateClientCount(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace various specific/placeholder counts with '44,000+'
    // Handles 15,000+, 1500+, 1000+, 10000+ to be safe
    const updatedContent = content
        .replace(/15,000\+/g, '44,000+')
        .replace(/15,000 satisfy/g, '44,000 satisfy')
        .replace(/1,500\+/g, '44,000+')
        .replace(/1500\+/g, '44,000+')
        .replace(/1000\+/g, '44,000+')
        .replace(/1000s of homes/g, '44,000+ homes');

    if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated counts in: ${filePath}`);
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
            updateClientCount(fullPath);
        }
    });
}

processDir(baseDir);
console.log("Global update to 44,000+ Happy Clients complete.");
