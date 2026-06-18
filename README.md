# brand-design-system

A structured context bundle for AI-assisted design and front-end work. This repo packages everything Claude (or any collaborator) needs to understand the brand, replicate the design language, and build or review front-end work consistently: brand definition, voice, selected production code, Figma references, asset libraries, real-world examples, and ready-to-run prompts.

Think of it as a **single source of truth** you hand to an AI agent or a new designer/engineer so they can produce on-brand work without a verbal download.

## How to use this repo

1. **Fill in `company/`** — who the company is, brand rules, and voice. This is the foundation everything else references.
2. **Point to code in `github-code/`** — link the production repo and list the specific front-end files worth reviewing. Drop the actual files into `selected-frontend-subfolder/`.
3. **Link Figma in `figma/`** — the design file plus instructions on what to extract (tokens, components, layouts).
4. **Load assets into `fonts-logos-assets/`** — logos, fonts, icons, images, all indexed in `manifest.csv`.
5. **Collect references in `web-examples/`** — competitor and best-in-class sites to benchmark against.
6. **Run the prompts in `claude-prompts/`** — pre-written instructions that tell Claude how to inspect the code/Figma and apply the design system.
7. **Add working notes in `clad-notes/`** — open requirements, decisions, and constraints for the AI.
8. **Stage raw inputs in `source-docs/`** — anything not yet processed into the structure above.

## Folder map

```
README.md                          ← you are here
company/                           ← brand identity, rules, voice
github-code/                       ← links + manifest for production front-end code
selected-frontend-subfolder/       ← the actual code files copied in for review
figma/                             ← design file links + extraction instructions
fonts-logos-assets/                ← logos, fonts, icons, images + manifest.csv
web-examples/                      ← reference sites and landing pages
claude-prompts/                    ← reusable prompts for AI inspection/build work
clad-notes/                        ← design-system requirements + working notes
source-docs/                       ← raw, unprocessed inputs
```

## Conventions

- Keep every Markdown file front-loaded: the most important context in the first 5 lines.
- Use the `manifest.csv` files as the index of record for binary assets — don't rely on folder browsing.
- When a file is a placeholder, leave a `> TODO:` line so gaps are obvious at a glance.
- Treat `clad-notes/design-system-requirements.md` as the canonical spec. If code and that file disagree, the file wins until updated.

> TODO: Replace this README's company-agnostic language once `company/company-name-and-blurb.md` is filled in.
