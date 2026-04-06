const fs = require('fs');
const path = require('path');

const targetCities = [
    'riyadh', 'jeddah', 'dammam', 'khobar', 'mecca', 'medina', 'taif', 'tabuk', 'abha', 'jubail', 
    'hail', 'buraidah', 'najran', 'yanbu', 'jizan', 'hofuf', 'dhahran', 'alkharj', 'rabigh', 'sakaka'
];

const services = ['plumber', 'electrician', 'home-maintenance', 'intercom-installation'];

const appDir = path.join(__dirname, 'src', 'app');

const dirs = fs.readdirSync(appDir);

dirs.forEach(dir => {
    const fullPath = path.join(appDir, dir);
    if (!fs.statSync(fullPath).isDirectory()) return;

    // Check if it matches a service-city pattern
    const isServiceCity = services.some(s => dir.startsWith(s + '-'));
    
    if (isServiceCity) {
        const cityName = targetCities.find(c => dir === services.find(s => dir.startsWith(s + '-')) + '-' + c);
        
        // If it's a service-city pattern but the city is NOT in our target list, delete it.
        // Also delete literal placeholders.
        if (dir.includes('${')) {
            console.log('Deleting literal placeholder:', dir);
            fs.rmSync(fullPath, { recursive: true, force: true });
        } else {
            const parts = dir.split('-');
            const slugCity = parts[parts.length - 1]; // This is simplistic but works for most
            
            // Re-check more accurately
            let matched = false;
            services.forEach(s => {
                targetCities.forEach(c => {
                    if (dir === s + '-' + c) matched = true;
                });
            });

            if (!matched) {
                console.log('Deleting non-target or duplicate city page:', dir);
                fs.rmSync(fullPath, { recursive: true, force: true });
            }
        }
    }
});

console.log('Cleanup complete.');
