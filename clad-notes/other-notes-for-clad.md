# Other Notes for Claude

> Purpose: Working context, constraints, decisions, and gotchas for the AI agent.

## Standing context

This repository is a public-safe demo of a brand context bundle. The goal is to show how brand rules, voice, selected code, Figma metadata, assets, source notes, prompts, and review rules can be packaged before design-system extraction begins.

Good output should be source-backed, reviewable, and ready to move into `brand-design-system-starter` only after human review.

## Constraints and non-negotiables

- Treat Northstar Growth Studio as a fictional demo brand.
- Do not invent customers, metrics, outcomes, logos, font rights, or production claims.
- Use `clad-notes/design-system-requirements.md` as the highest-priority extraction spec.
- Use `fonts-logos-assets/manifest.csv` before referencing assets.
- Mark missing source material as a gap.
- Preserve clear, structured, practical voice.
- Human review is required before implementation.

## Open questions

- Should the Button component include a loading state in the starter extraction?
- Should the Review Panel become a named component or remain a page pattern?
- Should the sample asset placeholders be replaced with real licensed files in a private implementation repo?
- Should Figma metadata be replaced with a real design-file link for private work?

## Decisions log

| Date | Decision | Rationale | Made by |
|------|----------|-----------|---------|
| 2026-06-18 | Use a fictional demo brand | Avoid confidential client or employer data | Repo owner |
| 2026-06-18 | Use manifest-first asset references | Prevent invented or untracked asset usage | Repo owner |
| 2026-06-18 | Treat requirements file as highest-priority source | Keep extraction decisions governed | Repo owner |

## Known gotchas

- The sample files demonstrate extraction logic, not production readiness.
- Manifested assets must exist as placeholder files or approved real files.
- Figma metadata is intentionally demo-safe and not a public design-file link.
- The old scaffold language should not be treated as active project context.

## How to ask for help

When confidence is low, produce a gap list rather than filling missing information. When two sources conflict, cite both and recommend which source should win based on the precedence in `design-system-requirements.md`.