# Figma File Instructions

> Purpose: Tell an AI agent (or designer) exactly what to extract from the Figma file and how it maps to the design system.

## What to extract

1. **Variables / design tokens** — colors, type styles, spacing, radii, effects. Export names and values.
2. **Components & variants** — the component library, with variant properties and intended usage.
3. **Page templates** — key frames/screens that represent each layout type.
4. **Prototyping notes** — interactions or states that aren't obvious from static frames.

## How to access

- Link: see `figma-link.md`.
- View vs. edit access: > TODO
- If using the Figma MCP/Dev Mode: > TODO (which frames, node IDs, or pages to start from).

## Mapping rules

- Figma variable names should map 1:1 to code tokens where possible. Note any mismatches.
- If Figma and code disagree, record it in `../clad-notes/design-system-requirements.md` and decide a source of truth per token.

## Deliverable from a Figma pass

A token table + component list + per-template screenshot references, ready to compare against the code review output.

> TODO: List the specific Figma pages/frames to inspect first.
