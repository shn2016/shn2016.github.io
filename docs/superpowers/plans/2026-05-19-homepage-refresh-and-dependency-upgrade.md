# Homepage Refresh And Dependency Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the site to the latest stable core dependencies and restyle the homepage into a brighter product-studio presentation.

**Architecture:** Keep the existing App Router structure and section order, but update shared theme tokens and the homepage components so the visual system becomes lighter and more structured. Upgrade the dependency graph first, then fix any config or typing fallout before changing the section layouts.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, MDX, ESLint

---

### Task 1: Upgrade dependency baselines

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `postcss.config.mjs`
- Modify: `tailwind.config.ts`

- [ ] Update runtime and dev dependency versions to current stable releases.
- [ ] Reinstall lockfile entries against the new versions.
- [ ] Adjust Tailwind/PostCSS config if the new major versions require it.

### Task 2: Refresh shared site metadata and theme

**Files:**
- Modify: `src/lib/metadata.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/globals.css`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/Section.tsx`

- [ ] Replace social links with the requested GitHub and LinkedIn targets.
- [ ] Switch viewport metadata and global tokens from dark-mode bias to a brighter neutral palette.
- [ ] Rework shared shell, card, and navigation styles so homepage sections inherit the new visual language.

### Task 3: Rebuild homepage sections

**Files:**
- Modify: `src/components/home/Hero.tsx`
- Modify: `src/components/home/About.tsx`
- Modify: `src/components/home/Focus.tsx`
- Modify: `src/components/home/WritingPreview.tsx`
- Modify: `src/components/home/Lab.tsx`
- Modify: `src/components/blog/BlogCard.tsx`

- [ ] Remove instructional copy that should not render on the page.
- [ ] Restructure the hero and support sections for a brighter product-studio composition.
- [ ] Replace the equal-weight writing cards with a clearer featured/supporting hierarchy.

### Task 4: Verify

**Files:**
- No direct file edits

- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Fix any verification failures before reporting completion.
