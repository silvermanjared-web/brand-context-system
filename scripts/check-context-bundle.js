import fs from 'node:fs';

const files = [
  'context/brand-context.json',
  'context/extraction-targets.json',
  'schemas/brand-context.schema.json',
  'company/company-name-and-blurb.md',
  'company/brand-notes.md',
  'company/voice-and-tone.md',
  'github-code/frontend-file-inventory.json',
  'github-code/code-review-checklist.md',
  'figma/figma-extraction-brief.json',
  'figma/fig-file-instructions.md',
  'fonts-logos-assets/manifest.csv',
  'web-examples/reference-sites.json',
  'claude-prompts/build-design-system-from-context.md',
  'selected-frontend-subfolder/sample-landing-page.html',
  'selected-frontend-subfolder/sample-styles.css',
  'clad-notes/design-system-requirements.md',
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

let failed = false;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`Missing: ${file}`);
    failed = true;
    continue;
  }

  const body = fs.readFileSync(file, 'utf8');
  if (/TODO|TBD|placeholder only/i.test(body)) {
    console.error(`Unresolved placeholder language: ${file}`);
    failed = true;
  }
}

for (const file of jsonFiles) {
  try {
    JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(`Invalid JSON: ${file}`);
    failed = true;
  }
}

if (failed) {
  throw new Error('Brand context bundle validation failed.');
}

console.log('Brand context bundle passed validation.');
