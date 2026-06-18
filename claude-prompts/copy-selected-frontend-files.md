# Prompt: Copy Selected Front-End Files

> Purpose: A ready-to-run prompt that tells Claude to pull the curated front-end files from the production repo into `selected-frontend-subfolder/`.

---

## Prompt

```
You have access to the production repo (see github-code/repo-link.md) and the
curated list in github-code/selected-frontend-files-manifest.md.

Task:
1. Read the manifest and identify every file marked for selection.
2. Copy each file into selected-frontend-subfolder/, preserving a sensible
   mirror of its original path so imports stay legible.
3. Do NOT copy node_modules, build output, .env files, or any secrets.
4. After copying, update:
   - the "Copied to subfolder?" checkboxes in the manifest
   - the index table in selected-frontend-subfolder/README.md
5. Report: which files copied, which were missing/renamed, and any files you
   think should be added to or removed from the selection (with reasons).

Keep the output tight: a short status table, then any recommendations.
```

---

## Before running

- Confirm `repo-link.md` has a working URL and access is sorted.
- Confirm the manifest lists real paths, not the example placeholders.

> TODO: Adjust paths/exclusions to match the actual repo once linked.
