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
  'github-code/frontend-review-instructions.md',
  'figma/figma-extraction-brief.json',
  'figma/fig-file-instructions.md',
  'fonts-logos-assets/manifest.csv',
  'web-examples/reference-sites.json',
  'claude-prompts/inspect-figma-and-code.md',
  'claude-prompts/build-design-system-from-context.md',
  'selected-frontend-subfolder/sample-landing-page.html',
  'selected-frontend-subfolder/sample-styles.css',
  'clad-notes/design-system-requirements.md',
  'examples/example-output.md'
];

const requiredContextKeys = [
  'brand',
  'audiences',
  'voice',
  'visual_system',
  'assets',
  'frontend_references',
  'figma_references',
  'review_rules'
];

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function assertFileExists(relativePath) {
  if (!fs.existsSync(relativePath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
}

function assertNoTodo(relativePath) {
  const body = readText(relativePath);
  if (/TODO|TBD|placeholder only/i.test(body)) {
    throw new Error(`Unresolved placeholder language found in ${relativePath}`);
  }
}

function assertJson(relativePath) {
  try {
    return JSON.parse(readText(relativePath));
  } catch (error) {
    throw new Error(`Invalid JSON in ${relativePath}: ${error.message}`);
  }
}

function assertCsvHasRows(relativePath) {
  const rows = readText(relativePath).trim().split('\n');
  if (rows.length < 2) {
    throw new Error(`CSV needs at least one data row: ${relativePath}`);
  }
}

function validateBrandContext() {
  const context = assertJson('context/brand-context.json');
  for (const key of requiredContextKeys) {
    if (!(key in context)) {
      throw new Error(`brand-context.json is missing required key: ${key}`);
    }
  }

  if (!Array.isArray(context.audiences) || context.audiences.length === 0) {
    throw new Error('brand-context.json must include at least one audience.');
  }

  if (!Array.isArray(context.review_rules) || context.review_rules.length < 5) {
    throw new Error('brand-context.json must include at least five review rules.');
  }
}

function main() {
  const repoRoot = process.cwd();
  console.log(`Validating brand context bundle in ${repoRoot}`);

  for (const file of requiredFiles) {
    assertFileExists(file);
    assertNoTodo(file);
  }

  assertJson('context/brand-context.json');
  assertJson('context/extraction-targets.json');
  assertJson('schemas/brand-context.schema.json');
  assertJson('github-code/frontend-file-inventory.json');
  assertJson('figma/figma-extraction-brief.json');
  assertJson('web-examples/reference-sites.json');
  assertCsvHasRows('fonts-logos-assets/manifest.csv');
  validateBrandContext();

  console.log('Brand context bundle passed validation.');
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
