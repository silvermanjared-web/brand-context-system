import fs from "node:fs";

const required = [
  "context/brand-context.json",
  "design-system/tokens.json",
  "design-system/tokens.css",
  "design-system/components.md",
  "CLAUDE.md",
  "CHATGPT.md",
  "GOVERNANCE.md",
  "SECURITY.md",
  "USAGE.md"
];

for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`missing required file: ${file}`);
}

const tokens = JSON.parse(fs.readFileSync("design-system/tokens.json", "utf8"));
if (!tokens.color || !tokens.space) throw new Error("token groups missing");
console.log("AI context & design system smoke test passed");
