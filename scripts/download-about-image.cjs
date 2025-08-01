// Script to download AboutSection image
const fs = require('fs');
const path = require('path');
const https = require('https');

const url = 'https://westkenyarealestate.com/wp-content/uploads/2024/06/IMG-20220212-WA0000.jpg';
const outDir = path.resolve(__dirname, '../public/images');
const outFile = path.join(outDir, 'westkenya_IMG-20220212-WA0000.jpg');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error('Failed to download:', res.statusCode);
    return;
  }
  const file = fs.createWriteStream(outFile);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded to', outFile);
  });
}).on('error', (e) => {
  console.error('Error:', e.message);
});
