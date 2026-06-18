import fs from 'node:fs';
import path from 'node:path';

const requiredFiles = [
  'README.md',
  'context/brand-context.json',
  'context/extraction-targets.json',
  'schemas/brand-context.schema.json',
  'company/company-name-and-blurb.md',
  'company/brand-notes.md',
  'company/voice-and-tone.md',
  'github-code/frontend-file-inventory.json',
  'github-code/code-review-checklist.md',
  'figma/figma-link.md',
  'figma/figma-extraction-brief.json',
  'figma/fig-file-instructions.md',
  'fonts-logos-assets/manifest.csv',
  'web-examples/reference-sites.json',
  'claude-prompts/build-design-system-from-context.md',
  'selected-frontend-subfolder/README.md',
  'selected-frontend-subfolder/sample-landing-page.html',
  'selected-frontend-subfolder/sample-styles.css',
  'clad-notes/design-system-requirements.md',
  'clad-notes/other-notes-for-clad.md',
  'examples/example-output.md'
];

const jsonFiles = [
  'context/brand-context.json',
  'context/extraction-targets.json',
  'schemas/brand-context.schema.json',
  'github-code/frontend-file-inventory.json',
  'figma/figma-extraction-brief.json',
  'web-examples/reference-sites.json'
];

const ignoreDirs = new Set(['.git', 'node_modules']);
const textExtensions = new Set(['.md', '.json', '.js', '.css', '.html', '.csv', '.txt', '.svg']);
const blockedWords = ['TO' + 'DO', 'T' + 'BD', 'placeholder' + ' only'];
let failed = false;

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function fail(message) {
  console.error(message);
  failed = true;
}

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    fail(`Missing required file: ${file}`);
  }
}

for (const file of jsonFiles) {
  if (!fs.existsSync(file)) continue;
  try {
    JSON.parse(read(file));
  } catch {
    fail(`Invalid JSON: ${file}`);
  }
}

const allFiles = walk(process.cwd()).map((file) => path.relative(process.cwd(), file));

for (const file of allFiles) {
  if (file.startsWith('.')) continue;
  if (!textExtensions.has(path.extname(file).toLowerCase())) continue;
  const body = read(file).toLowerCase();
  for (const word of blockedWords) {
    if (body.includes(word.toLowerCase())) {
      fail(`Unresolved scaffold text found in: ${file}`);
    }
  }
}

const manifestPath = 'fonts-logos-assets/manifest.csv';
if (fs.existsSync(manifestPath)) {
  const rows = read(manifestPath).trim().split('\n').slice(1);
  for (const row of rows) {
    const [type, filename, folder] = row.split(',');
    if (!type || !filename || !folder) {
      fail(`Malformed manifest row: ${row}`);
      continue;
    }
    const assetPath = path.join('fonts-logos-assets', folder, filename);
    if (!fs.existsSync(assetPath)) {
      fail(`Manifest asset missing from shelf: ${assetPath}`);
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log('Brand context bundle passed validation.');
