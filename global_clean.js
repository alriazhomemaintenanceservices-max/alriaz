const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, 'src', 'app', 'riyadh'),
    path.join(__dirname, 'src', 'app', 'services'),
    path.join(__dirname, 'src', 'app', 'page.tsx') // Homepage too
];

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove markdown bold (stars)
    content = content.replace(/\*\*/g, '');

    // 2. Remove any remaining AI OVERVIEW: blocks
    content = content.replace(/AI OVERVIEW:/g, 'Saudi Home Experts Commitment:');

    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${filePath}`);
}

function processDir(directory) {
    if (!fs.existsSync(directory)) return;
    const stats = fs.statSync(directory);
    if (stats.isFile()) {
        cleanFile(directory);
        return;
    }

    const items = fs.readdirSync(directory);
    items.forEach(item => {
        const fullPath = path.join(directory, item);
        const subStats = fs.statSync(fullPath);
        if (subStats.isDirectory()) {
            processDir(fullPath);
        } else if (item.endsWith('.tsx')) {
            cleanFile(fullPath);
        }
    });
}

targetDirs.forEach(dir => processDir(dir));
console.log("Global stars and AI Overview cleanup complete.");
