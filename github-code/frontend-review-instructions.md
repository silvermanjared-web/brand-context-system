# Front-End Review Instructions

> Purpose: A repeatable checklist for an AI (or engineer) reviewing the selected front-end files. Goal: extract the real, in-code design system and flag where code drifts from the brand spec.

## Inputs

- Files listed in `selected-frontend-files-manifest.md`, copied into `../selected-frontend-subfolder/`.
- The canonical spec in `../clad-notes/design-system-requirements.md`.
- Brand rules in `../company/brand-notes.md`.

## Review checklist

1. **Design tokens** — Extract every color, font, font-size, weight, spacing value, border-radius, and shadow actually used. List them. Note hardcoded values that should be tokens.
2. **Component inventory** — List reusable components and their variants/props. Note duplicates and one-offs that should be consolidated.
3. **Layout patterns** — Identify grid system, breakpoints, container widths, and common section structures (hero, feature grid, CTA, footer).
4. **Brand alignment** — For each token/component, compare against `company/brand-notes.md`. Flag mismatches (off-brand colors, wrong fonts, inconsistent spacing).
5. **Accessibility** — Check contrast, focus states, semantic HTML, alt text, and ARIA where relevant.
6. **Consistency / drift** — Where does the live code disagree with itself or with the spec? Rank by visibility/impact.
7. **Reusability score** — Is the code structured so new pages can be built quickly and on-brand? Where's the friction?

## Output format

Produce a short report with: (a) extracted token table, (b) component inventory, (c) top 5 drift issues ranked by impact, (d) concrete fixes. Keep it executive-grade — findings first, then detail.

> TODO: Add repo-specific gotchas here once the first review is done (e.g., "tokens live in two places — reconcile").
