// Script to replace broken image references with a working image
// Run with: node scripts/replace-broken-images.cjs
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src');
const BROKEN_IMAGES = [
  '/images/https___shamajamabati.co.ke_wp-content_uploads_2024_04_Home-stick-1.jpg',
  '/images/https___maishamabati.com_wp-content_uploads_2021_06_slid1-1.jpg',
  '/images/https___maishamabati.com_wp-content_uploads_2021_03_IMG_3450-scaled.jpg'
];
const REPLACEMENT = '/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-COLOUR-BOX-PROFILE.jpg';

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

function replaceBrokenInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = false;
  for (const broken of BROKEN_IMAGES) {
    const regex = new RegExp(broken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (regex.test(content)) {
      content = content.replace(regex, REPLACEMENT);
      replaced = true;
    }
  }
  if (replaced) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

(function main() {
  const files = walk(SRC_DIR);
  files.forEach(file => replaceBrokenInFile(file));
  console.log('All broken image references replaced!');
})();
