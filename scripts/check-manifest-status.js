import fs from 'node:fs';

const manifestPath = 'fonts-logos-assets/manifest.csv';
const allowedStatuses = new Set(['sample-reference', 'reference-only', 'documented-placeholder']);
let failed = false;

function fail(message) {
  console.error(message);
  failed = true;
}

if (!fs.existsSync(manifestPath)) {
  fail(`Missing manifest file: ${manifestPath}`);
} else {
  const [header, ...rows] = fs.readFileSync(manifestPath, 'utf8').trim().split('\n');
  const columns = header.split(',');
  const statusIndex = columns.indexOf('status');

  if (statusIndex === -1) {
    fail('Manifest is missing status column.');
  }

  for (const row of rows) {
    const fields = row.split(',');
    const filename = fields[1] || 'unknown-file';
    const status = fields[statusIndex];

    if (!status || !allowedStatuses.has(status)) {
      fail(`Manifest asset ${filename} has invalid status: ${status}`);
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log('Manifest statuses passed validation.');
