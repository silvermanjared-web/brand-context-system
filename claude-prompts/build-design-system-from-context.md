# Build Design System From Context

Use this prompt when the context bundle is ready and the next step is a design-system extraction draft.

## Prompt

Review this repository as a brand context bundle.

Use these files first:

1. `claude-notes/design-system-requirements.md`
2. `context/brand-context.json`
3. `context/extraction-targets.json`
4. `company/brand-notes.md`
5. `company/voice-and-tone.md`
6. `github-code/frontend-file-inventory.json`
7. `selected-frontend-subfolder/sample-landing-page.html`
8. `selected-frontend-subfolder/sample-styles.css`
9. `fonts-logos-assets/manifest.csv`
10. `figma/figma-extraction-brief.json`

Produce a design-system extraction with these sections:

- brand summary
- voice rules
- visual direction
- token candidates
- component candidates
- asset inventory
- accessibility notes
- source gaps
- human review checklist

Rules:

- Cite source files for token and component candidates.
- Do not invent logos, fonts, customers, metrics, or outcomes.
- Treat missing assets as gaps.
- Treat the requirements file as the highest-priority source.
- Keep the output concise enough for a designer or engineer to review.

## Expected output quality

A useful output should make it clear what can move into `brand-design-system-starter`, what still needs review, and what source gaps remain.