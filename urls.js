const fs = require('fs');
const batch = fs
    .readFileSync('urls.txt')
    .toString()
    .split('\n');
console.log(JSON.stringify(batch));