import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const source = path.join(root, "design-system", "tokens.json");
const target = path.join(root, "design-system", "tokens.css");
const tokens = JSON.parse(fs.readFileSync(source, "utf8"));

const lines = [":root {"];
for (const [group, values] of Object.entries(tokens)) {
  for (const [name, value] of Object.entries(values)) {
    lines.push(`  --${group}-${name}: ${value};`);
  }
}
lines.push("}", "");
fs.writeFileSync(target, lines.join("\n"));
console.log("design tokens generated");
