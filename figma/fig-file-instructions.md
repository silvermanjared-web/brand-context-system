# Figma File Instructions

> Purpose: Tell an AI agent or designer exactly what to extract from the design file and how it maps to the design system.

## What to extract

1. **Variables and design tokens** — colors, type styles, spacing, radii, and effects. Capture names and values.
2. **Components and variants** — buttons, cards, forms, nav, hero, proof blocks, and footer patterns.
3. **Page templates** — frames or screens that represent reusable layout types.
4. **Interaction notes** — hover, focus, disabled, active, loading, and empty states.
5. **Responsive behavior** — desktop, tablet, and mobile layout shifts.

## How to access

- Link: see `figma-link.md`.
- Access level: view or dev mode is enough for extraction.
- Start with these pages: Foundations, Components, Landing Templates.
- Start with these frame groups: Hero, Content Cards, CTA Blocks, Forms, Navigation, Footer.

## Mapping rules

- Figma variable names should map to code tokens where possible.
- If Figma and code disagree, record the conflict in the extraction output.
- If the requirements file gives a value, it wins until intentionally updated.
- Missing Figma values should be marked as gaps, not guessed.

## Deliverable from a Figma pass

Produce:

- token candidate table
- component inventory
- variant and state list
- layout pattern summary
- screenshot or frame reference list
- gap list for missing source material

## Confidence labels

Use these labels in the extraction output:

- High: confirmed in requirements and visible design reference
- Medium: present in one strong source
- Low: inferred from weak or partial source
- Gap: required but not documented