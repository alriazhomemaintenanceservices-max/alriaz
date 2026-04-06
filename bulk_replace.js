const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let count = 0;
walkDir('./src', function (filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
        let originalContent = fs.readFileSync(filePath, 'utf8');
        let newContent = originalContent
            .replace(/Al Riaz Home Maintenance Services/gi, 'Saudi Home Experts')
            .replace(/Al Riaz Home Maintenance/gi, 'Saudi Home Experts')
            .replace(/Al Riaz Services/gi, 'Saudi Home Experts')
            .replace(/AL RIAZ/g, 'Saudi Home Experts')
            .replace(/Al Riaz/gi, 'Saudi Home Experts')
            .replace(/alriaz/gi, 'saudihomeexperts');

        if (originalContent !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', filePath);
            count++;
        }
    }
});
console.log(`Updated ${count} files.`);
