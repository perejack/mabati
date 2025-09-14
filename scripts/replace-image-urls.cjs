// Script to replace external image URLs with local paths in .ts/.tsx files
// Run with: node scripts/replace-image-urls.cjs
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src');
const URL_MAP_PATH = path.resolve(__dirname, '../public/images/url-map.json');

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

function replaceInFile(filePath, urlMap) {
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = false;
  for (const [external, local] of Object.entries(urlMap)) {
    const regex = new RegExp(external.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (regex.test(content)) {
      content = content.replace(regex, '/' + local.replace(/^images\//, 'images/'));
      replaced = true;
    }
  }
  if (replaced) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

(function main() {
  if (!fs.existsSync(URL_MAP_PATH)) {
    console.error('Mapping file not found:', URL_MAP_PATH);
    process.exit(1);
  }
  const urlMap = JSON.parse(fs.readFileSync(URL_MAP_PATH, 'utf8'));
  const files = walk(SRC_DIR);
  files.forEach(file => replaceInFile(file, urlMap));
  console.log('All done!');
})();
