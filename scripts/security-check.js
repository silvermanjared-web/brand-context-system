import fs from "node:fs";

const files = [
  "context/brand-context.json",
  "design-system/tokens.json",
  "company/company-name-and-blurb.md"
];
const blocked = [
  new RegExp(["BEGIN", "PRIVATE", "KEY"].join(" "), "i"),
  /client_secret/i,
  /refresh_token/i
];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of blocked) {
    if (pattern.test(text)) throw new Error(`security pattern found in ${file}`);
  }
}
console.log("security checks passed");
