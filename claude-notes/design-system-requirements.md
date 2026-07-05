# Design System Requirements (Canonical Spec)

> Purpose: The source of truth for the demo design-system extraction. When source notes, Figma notes, or code disagree, this file wins until updated.

## Scope

This design-system extraction covers a public-safe marketing website system for the fictional Northstar Growth Studio brand.

In scope:

- homepage and landing-page foundations
- brand voice and message hierarchy
- token candidates for color, type, spacing, radius, and shadow
- component candidates for hero, card, button, form, nav, proof block, and footer
- AI handoff guidance for extracting from context into `brand-design-system-starter`

Out of scope:

- production-ready app UI
- real client assets
- real claims, customers, outcomes, or financial data
- final legal, accessibility, or brand approval

## Foundations

### Color tokens

| Token | Value | Role | Notes |
|-------|-------|------|-------|
| `--color-brand-primary` | #0F1C2E | Authority / primary dark | Use for headers, deep backgrounds, and system diagrams |
| `--color-brand-accent` | #E8A020 | Decision emphasis | Use for CTA emphasis and key highlights |
| `--color-brand-secondary` | #0E8A7C | Signal / secondary accent | Use for links, selected states, and workflow indicators |
| `--color-text-primary` | #1F2933 | Main text | Use on light backgrounds |
| `--color-background` | #F7F4EE | Page background | Warm neutral base |
| `--color-surface` | #FFFFFF | Cards and forms | Use for structured content containers |
| `--color-border` | #D8D2C5 | Dividers | Soft, low-contrast structure |

### Type scale

| Token | Font | Size | Weight | Line height | Usage |
|-------|------|------|--------|-------------|-------|
| `--text-display` | Inter/system-ui | 48px | 700 | 1.05 | Primary hero headline |
| `--text-h1` | Inter/system-ui | 40px | 700 | 1.1 | Page title |
| `--text-h2` | Inter/system-ui | 28px | 650 | 1.2 | Section heading |
| `--text-h3` | Inter/system-ui | 20px | 600 | 1.3 | Card title |
| `--text-body` | Inter/system-ui | 16px | 400 | 1.6 | Body copy |
| `--text-small` | Inter/system-ui | 14px | 400 | 1.5 | Captions and helper text |

### Spacing scale

Use an 8px-based scale: 4, 8, 12, 16, 24, 32, 48, 64.

Rules:

- Use 64px for major vertical section spacing.
- Use 32px for card grids and hero interior spacing.
- Use 16px and 24px for form and component internals.
- Use 4px and 8px for helper text, labels, and tight groups.

### Radii, shadows, breakpoints

| Token | Value | Usage |
|---|---:|---|
| `--radius-sm` | 6px | Inputs and small tags |
| `--radius-md` | 12px | Cards and buttons |
| `--radius-lg` | 20px | Hero panels and large containers |
| `--shadow-soft` | 0 12px 30px rgba(15, 28, 46, 0.12) | Elevated cards and panels |

Breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Components

### Hero

Purpose: orient the reader quickly and make the next action obvious.

Required elements:

- plain-language headline
- one supporting paragraph
- primary CTA
- optional secondary CTA
- proof or process cue

### Button

Variants:

- primary: navy background, white text
- accent: amber background, navy text
- secondary: transparent background, navy border

States:

- hover
- focus-visible
- disabled

### Card

Purpose: group a concept, decision, or workflow step.

Rules:

- one title
- one supporting sentence
- optional metadata label
- no decorative cards without content purpose

### Form

Purpose: collect context or request review.

Rules:

- label every field
- provide helper text for ambiguous inputs
- explain what happens after submission
- avoid unnecessary fields

### Proof block

Purpose: show source-backed evidence or review status.

Rules:

- must cite the source file or note
- must not invent metrics
- should label confidence when evidence is partial

## Accessibility requirements

- Meet WCAG AA contrast for text and interactive controls.
- Provide visible focus states for all controls.
- Use semantic headings in order.
- Do not rely on color alone to communicate status.
- Provide alt text requirements for all imagery.
- Respect reduced-motion preferences.

## Governance

- Source of truth precedence: this file > `context/brand-context.json` > company notes > Figma notes > selected code samples.
- Changes to tokens require updating this file and the extraction output.
- New assets require a manifest row before use.
- New component variants require purpose, states, accessibility notes, and source support.
- Versioning uses semantic version language for demo releases.

## Acceptance criteria for on-brand output

- Uses documented colors, type, spacing, and component rules.
- Does not invent logo, font, customer, metric, or outcome claims.
- Explains gaps rather than filling them silently.
- Produces token and component candidates with source references.
- Preserves clear, structured, practical voice.
- Includes a human-review checklist before implementation.