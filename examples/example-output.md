# Example Output

This example shows what a design-system extraction can look like after reviewing the public-safe Northstar Growth Studio context bundle.

The output is illustrative. It does not reference private Figma files, proprietary assets, real customers, or real business outcomes.

## Brand Design System Extraction

### Brand summary

Northstar Growth Studio should feel clear, structured, practical, and credible. The brand is about turning scattered marketing and design context into reusable operating structure.

The interface should avoid hype. It should make the system easy to understand, easy to inspect, and easy to hand off.

Source files:

- `context/brand-context.json`
- `company/company-name-and-blurb.md`
- `company/voice-and-tone.md`

### Voice rules

Use:

- clear operating language
- short paragraphs
- concrete nouns
- source-of-truth framing
- practical next steps

Avoid:

- vague superlatives
- unsupported claims
- generic AI hype
- customer or metric claims not present in source files

Source files:

- `company/voice-and-tone.md`
- `source-docs/sample-brand-brief.md`

### Visual direction

The visual system should feel calm, editorial, structured, and operator-led.

Recommended patterns:

- deep navy for authority surfaces
- amber for decision emphasis
- teal for system signals and supporting accents
- warm paper background for a softer reading environment
- white surfaces for cards, forms, and review blocks
- card-based grouping for workflow steps

Source files:

- `company/brand-notes.md`
- `selected-frontend-subfolder/sample-styles.css`

### Token candidates

| Token | Value | Source | Confidence | Notes |
|---|---:|---|---|---|
| `--color-brand-primary` | `#0F1C2E` | `company/brand-notes.md`, `sample-styles.css` | High | Repeats as authority color |
| `--color-brand-accent` | `#E8A020` | `company/brand-notes.md`, `sample-styles.css` | High | CTA and emphasis color |
| `--color-brand-secondary` | `#0E8A7C` | `company/brand-notes.md`, `sample-styles.css` | High | Signal and secondary accent |
| `--color-background` | `#F7F4EE` | `company/brand-notes.md`, `sample-styles.css` | High | Page background |
| `--color-surface` | `#FFFFFF` | `company/brand-notes.md`, `sample-styles.css` | High | Cards and forms |
| `--space-md` | `1rem` | `sample-styles.css` | Medium | Derived from CSS sample |
| `--radius-lg` | `1.25rem` | `sample-styles.css` | Medium | Used for cards and panels |
| `--shadow-soft` | `0 12px 30px rgba(15, 28, 46, 0.12)` | `sample-styles.css` | Medium | Used for elevated surfaces |

### Component candidates

#### Hero

Purpose: orient the reader quickly and drive one primary next action.

Source:

- `selected-frontend-subfolder/sample-landing-page.html`

Required elements:

- eyebrow label
- headline
- supporting paragraph
- primary CTA
- secondary CTA
- proof or source-of-truth panel

#### Button

Purpose: create clear action hierarchy.

Source:

- `selected-frontend-subfolder/sample-styles.css`

Variants:

- primary
- secondary

Missing states:

- focus-visible
- disabled
- loading

#### Card

Purpose: group workflow steps and decision concepts.

Source:

- `selected-frontend-subfolder/sample-landing-page.html`
- `selected-frontend-subfolder/sample-styles.css`

Rules:

- must include a title and short supporting copy
- may include a label
- should not be used decoratively without information value

#### Review panel

Purpose: make QA rules visible before implementation.

Source:

- `selected-frontend-subfolder/sample-landing-page.html`

Recommended use:

- checklist blocks
- source-of-truth reminders
- acceptance criteria

### Asset inventory

| Asset | Status | Action |
|---|---|---|
| Primary logo reference | Manifested sample reference | Replace with approved production asset before use |
| Inter font reference | Reference only | Confirm font rights before bundling |
| Icon set reference | Manifested sample reference | Replace with approved production icon set before use |
| Hero image reference | Manifested sample reference | Replace with approved image before use |

Source file:

- `fonts-logos-assets/manifest.csv`

### Source gaps

| Gap | Severity | Recommended action |
|---|---|---|
| Figma file is documented but not included | Medium | Add a real file link in a private implementation repo |
| Logo files are manifested as sample references | Medium | Add approved assets before production work |
| Additional logo variants are not in the manifest | Low | Add approved variants to the manifest before referencing them |
| Button states are incomplete | Medium | Add focus, disabled, and loading guidance |
| Form component is not represented in sample HTML | Low | Add a sample form block if form extraction is required |

### Human review checklist

- Confirm all token candidates against source files.
- Confirm no asset is used unless listed in the manifest.
- Confirm no customer, metric, or outcome claim was added.
- Confirm CTA hierarchy is clear.
- Confirm text contrast before implementation.
- Confirm missing states are documented before component handoff.

## Recommended next action

Move the high-confidence token candidates and the Hero, Button, Card, and Review Panel component candidates into `brand-design-system-starter` as a draft extraction, then review manually before implementation.
