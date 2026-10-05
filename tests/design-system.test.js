import assert from "node:assert/strict";
import fs from "node:fs";

const tokens = JSON.parse(fs.readFileSync("design-system/tokens.json", "utf8"));
assert.equal(typeof tokens.color.ink, "string");
assert.ok(tokens.color.ink.startsWith("#"));
assert.ok(tokens.space.md.endsWith("px"));

const css = fs.readFileSync("design-system/tokens.css", "utf8");
assert.ok(css.includes("--color-ink"));
assert.ok(css.includes("--space-md"));

console.log("design system unit tests passed");
