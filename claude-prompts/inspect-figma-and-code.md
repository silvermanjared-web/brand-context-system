# Prompt: Inspect Figma & Code

> Purpose: A ready-to-run prompt that has Claude reconcile the Figma design source with the production code and produce a unified design-system report.

---

## Prompt

```
Goal: Produce a single, reconciled view of the design system by comparing the
Figma file with the selected front-end code.

Inputs:
- Figma: figma/figma-link.md + figma/fig-file-instructions.md
- Code: selected-frontend-subfolder/ + github-code/frontend-review-instructions.md
- Brand rules: company/brand-notes.md
- Canonical spec: clad-notes/design-system-requirements.md

Do this:
1. From Figma, extract tokens (color, type, spacing, radius, effects) and the
   component/variant list.
2. From code, extract the same: tokens actually used and components defined.
3. Build a reconciliation table: Token/Component | Figma value | Code value |
   Match? | Source of truth | Action.
4. Flag every drift between Figma, code, and brand-notes. Rank the top issues
   by user-visible impact.
5. Recommend the canonical value for each conflict and note what to update.

Output: an executive-grade report — findings and the reconciliation table first,
supporting detail after. End with a one-line QA verdict on confidence and gaps.
```

---

## When to run

After the code files are copied in (`copy-selected-frontend-files.md`) and the Figma link/instructions are filled in.

> TODO: Add any project-specific token naming conventions to enforce.
