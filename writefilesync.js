const fs = require('fs');

let text = `Name_Simonyan Syuzanna,\nEmail_syuzie.ss@gmail.com,\nCity_Yerevan`;

fs.writeFileSync('writefile', text, 'utf8');

console.log('Done');

