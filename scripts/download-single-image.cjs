// Script to download a single image
const fs = require('fs');
const path = require('path');
const https = require('https');

const url = 'https://www.royalmabati.com/cdn/shop/files/greenstone-1.jpg?v=1718096032&width=1600';
const outDir = path.resolve(__dirname, '../public/images');
const outFile = path.join(outDir, 'royalmabati_greenstone-1.jpg');

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
