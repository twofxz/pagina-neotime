const fs = require('fs');
const css = fs.readFileSync('styles.css', 'utf8');
console.log('Open /* : ', (css.match(/\/\*/g) || []).length);
console.log('Close */ : ', (css.match(/\*\//g) || []).length);
