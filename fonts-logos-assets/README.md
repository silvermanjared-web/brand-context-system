# Fonts, Logos & Assets

> Purpose: The public-safe asset library and manifest for the demo context bundle.

The files in this folder are demo placeholders. They exist so the manifest matches the shelf and reviewers can see how asset governance should work without exposing proprietary binaries.

## Rules

- Read `manifest.csv` before referencing an asset.
- Every listed asset should exist as either a demo placeholder or an approved production file.
- Do not use unlisted assets in extraction output.
- Do not assume font rights from a filename alone.
- Replace demo placeholders with approved real assets only in an appropriate private implementation repo.

## Current demo assets

| Type | Example |
|---|---|
| Logos | primary, reversed, and mark references |
| Fonts | Inter reference and system font stack reference |
| Icons | line icon set reference |
| Images | workspace and interface detail references |

## Governance note

The manifest is the source of truth. Folder browsing is only a fallback.