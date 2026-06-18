# Example Output

This example shows the intended output of the brand design system context bundle using mock inputs. It is illustrative and does not reference private Figma files, proprietary assets, or client material.

## Example prompt

```text
Review the brand context, selected front-end files, Figma notes, and web examples in this repository. Produce a concise design-system extraction that identifies brand voice, visual direction, reusable UI patterns, and implementation risks.
```

## Sample output

```markdown
# Brand Design System Extraction

## Brand Summary

The brand should feel clear, practical, structured, and modern. It should prioritize usability, trust, and speed of understanding over decorative complexity.

## Voice Direction

Use language that is direct, useful, and specific. Avoid vague claims, inflated language, or generic product-marketing language.

Preferred voice:

- clear
- confident
- plainspoken
- structured
- helpful

Avoid:

- vague superlatives
- unnecessary jargon
- over-designed phrasing
- unsupported claims

## Visual Direction

The interface should feel organized and calm. Prioritize readable hierarchy, reusable card patterns, clear spacing, and consistent section structure.

Recommended patterns:

- strong page intro
- modular content cards
- restrained accent colors
- clear section headings
- consistent button hierarchy
- simple forms with direct labels

## Front-End Notes

The selected files suggest the design system should document:

- typography scale
- spacing rules
- button variants
- card structure
- form states
- navigation behavior
- responsive layout expectations

## Risks and Gaps

| Area | Risk | Recommendation |
|---|---|---|
| Assets | Logos are not fully indexed | Update manifest before implementation |
| Figma | Tokens not yet extracted | Add color, type, and spacing notes |
| Code | Components may not map one-to-one with design file | Document current implementation patterns |
| Voice | Brand language needs usage examples | Add approved and avoided phrasing |

## Recommended Next Step

Create a first-pass design token file and component inventory before asking an AI agent to generate new front-end work.
```

## What this demonstrates

The repo is designed to package brand, design, code, assets, examples, and prompts into a structured context layer. A useful output should make the brand easier to understand, implement, and review.

## Notes

- This example uses mock brand context.
- Do not commit private Figma links, licensed assets, client material, or proprietary design files unless they are intended to be public.
- AI-generated outputs should be reviewed before implementation.
