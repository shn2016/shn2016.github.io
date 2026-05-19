# Site Typography Unification Design

Date: 2026-05-19
Status: Draft for review

## Goal

Unify the site's typography so the homepage, blog index, blog post pages, and 404 page feel like one coherent product rather than a collection of individually styled sections.

The desired direction is more modern and restrained than the current design:

- Use a sans-led system across the site.
- Reduce serif usage to near-zero unless a specific text role clearly benefits from it.
- Normalize title, body, label, and UI text rhythms.
- Allow supporting layout changes when they improve hierarchy and readability, but avoid broader visual redesign.

## Non-Goals

- Rewriting page copy.
- Rebuilding page structure or navigation.
- Reworking the color system.
- Turning the site into a cold or generic SaaS template.
- Performing unrelated refactors.

## Current Problems

The site currently mixes too many one-off typography decisions:

- Multiple components declare their own `text-*`, `leading-*`, `tracking-*`, and `font-*` combinations.
- Serif is used as a visual differentiator in places where hierarchy should be doing the work.
- Small uppercase labels use inconsistent tracking values and carry too much visual weight.
- UI text roles such as nav links, pills, filters, buttons, and metadata are not clearly systematized.
- Page titles, section titles, lead text, and supporting copy do not consistently map to stable roles.

The result is not one catastrophic styling error, but an accumulation of local decisions that makes the site feel visually scattered.

## Design Principles

1. One primary voice: sans is the default for headings, body copy, metadata, and UI text.
2. Fewer visual accents: hierarchy should come from scale, spacing, and tone before font changes.
3. Shared roles over one-off classes: components should consume semantic text roles instead of assembling ad hoc utility combinations.
4. Consistent rhythm across content and chrome: buttons, nav, cards, prose, and headings should feel like parts of one system.
5. Controlled restraint: keep the site's warmth and editorial quality, but remove unnecessary type variety.

## Proposed Typography System

### Font Families

- Primary font: `sans`
- Secondary font: existing `serif`, retained only as an escape hatch and not used by default

Implementation intent:

- `body` remains `font-sans`
- existing `font-serif` usage is removed from standard page copy, lead text, and article headers unless a clear exception is justified

### Text Role Hierarchy

The site should converge on a small set of semantic roles:

- `type-display`: homepage hero headline and any equivalent high-emphasis display heading
- `type-page-title`: page-level titles such as blog index, blog post title, 404 title
- `type-section-title`: section headers used across homepage sections
- `type-lead`: supporting introduction copy under major headings
- `type-body`: default readable paragraph copy for cards, sections, and supporting text
- `type-meta`: dates, reading time, subtle supporting information
- `type-label`: restrained uppercase label style for small headers and category-like markers
- `type-ui`: nav items, pills, buttons, filters, and similar interface text

These roles should be implemented as reusable classes in global styles rather than repeated utility strings in each component.

### Role Characteristics

The exact numeric values can be finalized during implementation, but the intended behavior is:

- Display and page titles: strong but not oversized, slightly tightened tracking, stable line-height, moderate semibold weight
- Section titles: clearly smaller than page titles, same family and tonal behavior
- Lead text: larger than body copy, clean sans, more restrained than the current editorial treatment
- Body text: comfortable reading size, consistent line-height, muted tone where appropriate
- Labels: uppercase, reduced tracking compared to the current site, used more selectively
- UI text: shared size and weight rules across buttons, nav, pills, and filters
- Meta text: one consistent smaller scale with muted color

## Implementation Plan

### 1. Expand Typography Tokens

Update [src/styles/tokens.css](/Users/kaigao/Desktop/dev/kaig.dev/src/styles/tokens.css) to define typography-related custom properties beyond font family, including:

- title scale
- body scale
- lead scale
- UI and meta scale
- line-height rules
- letter-spacing rules for titles and labels

The aim is not to create an enormous token set, but to centralize the handful of values that currently drift across components.

### 2. Add Semantic Typography Classes

Update [src/styles/globals.css](/Users/kaigao/Desktop/dev/kaig.dev/src/styles/globals.css) to provide reusable semantic typography classes such as:

- `.type-display`
- `.type-page-title`
- `.type-section-title`
- `.type-lead`
- `.type-body`
- `.type-meta`
- `.type-label`
- `.type-ui`

Also normalize existing shared component classes such as:

- `.eyebrow`
- `.pill`
- `.link-subtle`
- `.prose-kaig`
- `.skip-link`

These should align with the new roles instead of preserving legacy sizing and spacing.

### 3. Refactor Components to Consume the System

Apply the new system across:

- [src/components/layout/Header.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/layout/Header.tsx)
- [src/components/layout/Footer.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/layout/Footer.tsx)
- [src/components/layout/Section.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/layout/Section.tsx)
- [src/components/home/Hero.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/home/Hero.tsx)
- [src/components/home/About.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/home/About.tsx)
- [src/components/home/Focus.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/home/Focus.tsx)
- [src/components/home/Lab.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/home/Lab.tsx)
- [src/components/home/WritingPreview.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/home/WritingPreview.tsx)
- [src/components/blog/BlogCard.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/blog/BlogCard.tsx)
- [src/components/blog/CategoryFilter.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/components/blog/CategoryFilter.tsx)
- [src/app/blog/page.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/app/blog/page.tsx)
- [src/app/blog/[slug]/page.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/app/blog/[slug]/page.tsx)
- [src/app/not-found.tsx](/Users/kaigao/Desktop/dev/kaig.dev/src/app/not-found.tsx)

Refactoring goals:

- remove ad hoc serif usage in standard copy
- replace repeated utility combinations with semantic type classes
- align buttons, pills, filters, and metadata with one UI scale
- normalize section intros, card descriptions, and article support text

### 4. Make Small Layout Adjustments Where Typography Requires It

Allowed supporting changes:

- spacing between heading and lead text
- paragraph rhythm inside sections
- spacing between labels and headings
- button text balance where size changes require padding adjustment

Disallowed changes:

- major component restructuring
- section reordering
- content changes unrelated to typography

## Surface-Specific Expectations

### Homepage

- Hero becomes more focused and less stylistically mixed.
- Supporting copy shifts from editorial serif emphasis to clean sans hierarchy.
- Section titles and intros read as one family across the page.
- Right-side cards and lists align with the same UI/body system used elsewhere.

### Blog Index

- Page title and intro align with the same title and lead rules as the rest of the site.
- Blog cards use one stable relationship between category, title, meta, and description.
- Filter controls feel like the same interface system as header and buttons.

### Blog Post Page

- Header metadata, title, and dek align with the site-wide hierarchy.
- The prose layer remains comfortable for long-form reading, but with more modern, cleaner rhythm.
- Article body should still read as editorial content, just without depending on mixed font families for identity.

### 404 Page

- Title, explanatory copy, and buttons align with the same page-title, body, and UI roles as the rest of the site.

## Risks and Mitigations

- Risk: the site becomes too plain.
  Mitigation: keep warmth through color, spacing, and restrained scale differences rather than font switching.

- Risk: article reading feel becomes too utilitarian.
  Mitigation: preserve generous prose spacing and a thoughtful text measure even after moving to sans-led hierarchy.

- Risk: semantic classes become another layer of inconsistency if only partially adopted.
  Mitigation: update all affected surfaces in the same pass instead of mixing old and new rules.

## Testing and Verification

Implementation should verify:

- all target pages use the same type role system
- no unnecessary `font-serif` remains on standard content paths
- repeated tracking and line-height utilities are materially reduced
- desktop and mobile text rhythm remain readable
- blog prose still feels comfortable for long-form reading

Visual QA should focus on:

- hero hierarchy
- section-to-section consistency
- UI text consistency across header, footer, buttons, pills, and filters
- blog card readability
- article header and article body reading rhythm

## Expected Outcome

After the change, the site should feel more unified, calmer, and more deliberate. It should read as one designed system with a modern sans-led voice, while preserving the existing warmth and not drifting into a generic redesign.
