// Node.js script to scan for external image URLs in TS/TSX files, download them, and output a mapping
// Run with: node scripts/download-images.cjs
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SRC_DIR = path.resolve(__dirname, '../src');
const OUT_DIR = path.resolve(__dirname, '../public/images');
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const URL_REGEX = /https?:\/\/[^'"\)\]\s>]+\.(?:jpg|jpeg|png|webp|gif)(\?[^'"\)\]\s>]*)?/gi;

function walk(dir, exts = ['.ts', '.tsx']) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full, exts));
    } else if (exts.includes(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function extractImageUrls(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const urls = new Set();
  let match;
  while ((match = URL_REGEX.exec(content))) {
    urls.add(match[0]);
  }
  return Array.from(urls);
}

function sanitizeFilename(url) {
  // Remove query params, replace non-filename chars
  let base = url.split('?')[0];
  base = base.replace(/[^a-zA-Z0-9-_\.]/g, '_');
  return base.slice(-100); // keep last 100 chars for uniqueness
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error('Failed to get ' + url + ' (' + res.statusCode + ')'));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve()));
      file.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = walk(SRC_DIR);
  const allUrls = new Set();
  for (const file of files) {
    extractImageUrls(file).forEach(url => allUrls.add(url));
  }
  // Manual additions (if any found in code as template strings, etc.)
  // allUrls.add('https://example.com/foo.jpg');
  
  const urlToLocal = {};
  for (const url of allUrls) {
    const fname = sanitizeFilename(url);
    const outPath = path.join(OUT_DIR, fname);
    urlToLocal[url] = 'images/' + fname;
    if (!fs.existsSync(outPath)) {
      try {
        console.log('Downloading', url);
        await download(url, outPath);
      } catch (e) {
        console.warn('Failed to download', url, e.message);
      }
    } else {
      console.log('Already downloaded', url);
    }
  }
  fs.writeFileSync(path.join(OUT_DIR, 'url-map.json'), JSON.stringify(urlToLocal, null, 2));
  console.log('Done! Mapping saved to public/images/url-map.json');
})();
