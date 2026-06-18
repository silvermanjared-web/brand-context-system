# Fonts, Logos & Assets

> Purpose: The binary asset library — logos, fonts, icons, and images — with a single index of record (`manifest.csv`). An AI agent should read the manifest first, then pull files from the subfolders.

## Folder structure

```
fonts-logos-assets/
  manifest.csv     ← index of every asset (read this first)
  logos/           ← logo files (SVG preferred, plus PNG fallbacks)
  fonts/           ← font files (woff2/woff/otf/ttf) + license
  icons/           ← icon set (SVG)
  images/          ← photography, illustrations, backgrounds
```

## Rules

- **SVG preferred** for logos and icons. Include PNG fallbacks only when needed.
- **Fonts**: include the license file. Do not commit fonts you don't have rights to distribute.
- **Naming**: `kebab-case`, descriptive, with variant in the name (e.g., `logo-primary.svg`, `logo-reversed-mono.svg`).
- **Every file must have a row in `manifest.csv`** — type, filename, description, usage, license, source.
- Keep originals out of `images/` if they're huge; reference a DAM/Drive link in the manifest instead.

## Updating the manifest

When you add a file, add a matching row. The manifest is the source of truth; folder browsing is the fallback.

> TODO: Load real assets and complete `manifest.csv`.
