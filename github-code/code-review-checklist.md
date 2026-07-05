# Code Review Checklist

Use this checklist to inspect the selected sample front-end files and extract design-system evidence.

## Inputs

- `github-code/frontend-file-inventory.json`
- `selected-frontend-subfolder/sample-landing-page.html`
- `selected-frontend-subfolder/sample-styles.css`
- `claude-notes/design-system-requirements.md`
- `company/brand-notes.md`
- `context/brand-context.json`

## Checklist

1. Extract repeated color, spacing, type, radius, and shadow values.
2. Identify semantic token candidates.
3. Identify reusable components.
4. Identify layout patterns and breakpoints.
5. Compare observed values with the requirements file.
6. Note accessibility gaps.
7. Rank inconsistencies by visibility and effort.
8. Produce a concise source-backed recommendation list.

## Output

The review should produce:

- token candidate table
- component inventory
- layout pattern summary
- gap list
- human review checklist

## Review rule

Use documented sources. When evidence is missing, mark the item as a gap.