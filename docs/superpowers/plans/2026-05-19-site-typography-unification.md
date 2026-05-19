# Site Typography Unification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unify homepage, blog index, blog post, and 404 typography into one modern sans-led system with shared semantic roles and calmer visual rhythm.

**Architecture:** Keep the existing App Router structure, section order, and color system, but centralize type decisions into global tokens and semantic classes so components stop hand-rolling text scale, line-height, and tracking. Refactor shared layout primitives first, then update homepage and blog surfaces to consume the new roles, finishing with visual and static verification.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, MDX, ESLint

---

### Task 1: Establish the shared typography system

**Files:**
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Confirm the current outliers before editing**

Run:

```bash
rg -n "font-serif|tracking-\\[0\\.(18|24|26)em\\]|text-5xl|text-4xl|text-3xl|text-2xl|text-xl|leading-8|leading-7" src/components src/app
```

Expected: matches in `Hero.tsx`, `About.tsx`, `Focus.tsx`, `Lab.tsx`, `Header.tsx`, `Section.tsx`, `BlogCard.tsx`, `blog/page.tsx`, `blog/[slug]/page.tsx`, and `not-found.tsx`.

- [ ] **Step 2: Add explicit typography tokens in `src/styles/tokens.css`**

Update `:root` to keep the current font families but add a centralized type scale:

```css
:root {
  --color-ink-950: 17 24 39;
  --color-ink-900: 30 41 59;
  --color-stone-50: 255 252 247;
  --color-stone-100: 247 242 232;
  --color-stone-200: 236 227 213;
  --color-stone-300: 217 206 189;
  --color-slate-400: 100 116 139;
  --color-slate-500: 71 85 105;
  --color-blue-500: 37 99 235;
  --color-blue-600: 29 78 216;
  --color-amber-400: 245 158 11;

  --color-background: var(--color-stone-100);
  --color-surface: 255 255 255;
  --color-surface-muted: 250 247 241;
  --color-text-primary: var(--color-ink-950);
  --color-text-muted: var(--color-slate-500);
  --color-text-soft: var(--color-slate-400);
  --color-accent: var(--color-blue-500);
  --color-accent-strong: var(--color-blue-600);
  --color-border: var(--color-stone-300);

  --space-page-x: clamp(1.25rem, 3vw, 2rem);
  --space-section-y: clamp(4.5rem, 8vw, 7rem);

  --radius-card: 1.5rem;
  --radius-pill: 999px;

  --font-sans: "Avenir Next", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;

  --type-display-size: clamp(3.25rem, 6vw, 4.5rem);
  --type-page-title-size: clamp(2.5rem, 4vw, 3.25rem);
  --type-section-title-size: clamp(2rem, 3vw, 2.5rem);
  --type-card-title-size: 1.65rem;
  --type-card-title-featured-size: clamp(2rem, 3vw, 2.35rem);
  --type-card-title-compact-size: 1.3rem;
  --type-lead-size: clamp(1.18rem, 1.8vw, 1.45rem);
  --type-body-size: 1rem;
  --type-ui-size: 0.975rem;
  --type-meta-size: 0.95rem;
  --type-label-size: 0.75rem;

  --type-leading-display: 1.02;
  --type-leading-title: 1.08;
  --type-leading-lead: 1.45;
  --type-leading-body: 1.72;
  --type-leading-meta: 1.55;
  --type-leading-ui: 1.4;

  --type-tracking-tight: -0.035em;
  --type-tracking-label: 0.18em;
}
```

- [ ] **Step 3: Add semantic text roles and shared UI text helpers in `src/styles/globals.css`**

Inside `@layer components`, add the new type system and update existing shared classes so components can consume roles instead of raw utility piles:

```css
.type-display {
  @apply font-semibold text-primary;
  font-size: var(--type-display-size);
  line-height: var(--type-leading-display);
  letter-spacing: var(--type-tracking-tight);
}

.type-page-title {
  @apply font-semibold text-primary;
  font-size: var(--type-page-title-size);
  line-height: var(--type-leading-title);
  letter-spacing: var(--type-tracking-tight);
}

.type-section-title {
  @apply font-semibold text-primary;
  font-size: var(--type-section-title-size);
  line-height: var(--type-leading-title);
  letter-spacing: var(--type-tracking-tight);
}

.type-card-title {
  @apply font-semibold text-primary;
  font-size: var(--type-card-title-size);
  line-height: 1.18;
  letter-spacing: -0.025em;
}

.type-card-title-featured {
  font-size: var(--type-card-title-featured-size);
}

.type-card-title-compact {
  font-size: var(--type-card-title-compact-size);
  line-height: 1.22;
}

.type-lead {
  @apply text-primary/88;
  font-size: var(--type-lead-size);
  line-height: var(--type-leading-lead);
  letter-spacing: -0.01em;
}

.type-body {
  @apply text-muted;
  font-size: var(--type-body-size);
  line-height: var(--type-leading-body);
}

.type-meta {
  @apply text-muted;
  font-size: var(--type-meta-size);
  line-height: var(--type-leading-meta);
}

.type-label {
  @apply font-semibold uppercase text-soft;
  font-size: var(--type-label-size);
  line-height: 1.35;
  letter-spacing: var(--type-tracking-label);
}

.type-ui {
  font-size: var(--type-ui-size);
  line-height: var(--type-leading-ui);
}

.eyebrow {
  @apply type-label text-accent;
}

.pill {
  @apply type-ui inline-flex items-center rounded-pill border border-border/80 bg-surface px-3 py-1 text-muted;
}

.link-subtle {
  @apply type-ui text-muted hover:text-primary;
}

.button-primary {
  @apply type-ui rounded-pill border border-accent/25 bg-accent px-5 py-3 font-medium text-white hover:bg-accent-strong;
}

.button-secondary {
  @apply type-ui rounded-pill border border-border bg-surface px-5 py-3 font-medium text-muted hover:bg-surface-muted hover:text-primary;
}

.button-accent-soft {
  @apply type-ui rounded-pill border border-accent/30 bg-accent/10 px-5 py-3 font-medium text-primary hover:bg-accent/16;
}

.ui-link-card {
  @apply type-ui flex items-center justify-between rounded-card border border-border/70 bg-surface-muted/80 px-4 py-3 text-primary hover:border-accent/40 hover:text-accent;
}

.meta-row {
  @apply type-meta flex flex-wrap items-center gap-3;
}

.prose-kaig {
  @apply prose max-w-prose prose-headings:font-sans prose-headings:text-primary prose-p:text-muted prose-strong:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent prose-li:text-muted prose-code:rounded prose-code:bg-surface-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-pre:overflow-x-auto prose-pre:rounded-card prose-pre:border prose-pre:border-border prose-pre:bg-[#f6efe4] prose-pre:text-primary prose-blockquote:border-accent/40 prose-blockquote:text-muted;
  font-size: 1.05rem;
  line-height: 1.82;
}
```

- [ ] **Step 4: Verify the new system exists before component refactors**

Run:

```bash
rg -n "type-display|type-page-title|type-section-title|type-card-title|type-lead|type-body|type-meta|type-label|type-ui|button-primary|button-secondary|meta-row" src/styles
```

Expected: all new semantic classes appear in `src/styles/globals.css`.

- [ ] **Step 5: Commit the shared system**

```bash
git add src/styles/tokens.css src/styles/globals.css
git commit -m "feat: add shared site typography system"
```

### Task 2: Refactor shared layout chrome to consume typography roles

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/Section.tsx`
- Modify: `src/app/not-found.tsx`

- [ ] **Step 1: Update `Header.tsx` so branding and nav use the shared label/UI roles**

Replace the link and nav classes with:

```tsx
<Link className="type-label text-primary hover:text-accent" href="/">
  Kai Gao
</Link>

<ul className="flex items-center gap-1 md:gap-2">
  {navigation.map((item) => (
    <li key={item.href}>
      <Link className="type-ui rounded-pill px-3 py-2 text-muted hover:bg-surface-muted hover:text-primary" href={item.href}>
        {item.label}
      </Link>
    </li>
  ))}
</ul>
```

- [ ] **Step 2: Update `Footer.tsx` so summary copy and action links share one UI/meta rhythm**

Use the new classes in the footer copy and link buttons:

```tsx
<div className="flex flex-col gap-4 border-t border-border/80 pt-8 lg:flex-row lg:items-center lg:justify-between">
  <div className="space-y-1.5">
    <p className="type-ui font-medium text-primary">Designed and built by Kai Gao.</p>
    <p className="type-meta">Melbourne-based software engineer focused on dependable web products.</p>
  </div>
  <div className="flex flex-wrap items-center gap-2">
    {links.map(({ href, label }) => (
      <Link className="button-secondary inline-flex items-center gap-2" href={href} key={label} rel="noreferrer" target={href.startsWith("mailto:") ? undefined : "_blank"}>
        {label === "Email" ? <Mail className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
        <span>{label}</span>
      </Link>
    ))}
  </div>
</div>
```

- [ ] **Step 3: Update `Section.tsx` and `not-found.tsx` to use page/section/body/button roles**

Use the shared typography classes for section headers and the 404 panel:

```tsx
<div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
  <p className="eyebrow">{eyebrow}</p>
  <h2 className="type-section-title max-w-lg">{title}</h2>
  {intro ? <p className="type-body max-w-md">{intro}</p> : null}
</div>
```

```tsx
<p className="eyebrow">404</p>
<h1 className="type-page-title mt-4 max-w-xl">This page has drifted out of range.</h1>
<p className="type-body mt-4 max-w-xl">
  The link may be old, the post may not exist, or the content may still be a draft. The writing index is the safest place to continue.
</p>
<div className="mt-8 flex flex-wrap gap-3">
  <Link className="button-accent-soft" href="/">Go home</Link>
  <Link className="button-secondary" href="/blog">Browse writing</Link>
</div>
```

- [ ] **Step 4: Run a targeted regression check for leftover raw header chrome styles**

Run:

```bash
rg -n "tracking-\\[0\\.(18|24|26)em\\]|text-sm font-semibold uppercase|text-sm text-muted" src/components/layout src/app/not-found.tsx
```

Expected: no matches in `Header.tsx`, `Footer.tsx`, `Section.tsx`, or `not-found.tsx`.

- [ ] **Step 5: Commit the shared chrome refactor**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx src/components/layout/Section.tsx src/app/not-found.tsx
git commit -m "refactor: align shared layout typography"
```

### Task 3: Apply the system to homepage sections

**Files:**
- Modify: `src/components/home/Hero.tsx`
- Modify: `src/components/home/About.tsx`
- Modify: `src/components/home/Focus.tsx`
- Modify: `src/components/home/Lab.tsx`
- Modify: `src/components/home/WritingPreview.tsx`

- [ ] **Step 1: Refactor the hero to one display + lead + body hierarchy**

Replace mixed type utilities in `Hero.tsx` with:

```tsx
<div className="space-y-5">
  <p className="eyebrow">Software Engineer + Product Builder</p>
  <div className="space-y-4">
    <h1 className="type-display max-w-4xl">Hi, I&apos;m Kai Gao.</h1>
    <p className="type-lead max-w-3xl">
      I build dependable web systems across frontend, BFF, payments, and AI-assisted product work.
    </p>
    <p className="type-body max-w-3xl">
      This site is where I collect writing, current areas of focus, and the product questions that keep pulling me forward.
    </p>
  </div>
</div>

<div className="flex flex-wrap gap-3">
  <Link className="button-primary" href="/blog">Read the writing</Link>
  <Link className="button-secondary" href="/#focus">See current focus</Link>
</div>
```

Also swap profile links and sidebar list rows to shared UI/meta roles:

```tsx
<Link className="ui-link-card" href={link.href} key={link.href} rel="noreferrer" target="_blank">
  <span>{link.label}</span>
  <ArrowUpRight className="h-4 w-4" />
</Link>
```

```tsx
<li className="type-meta flex items-center justify-between gap-4 border-b border-border/60 pb-3 last:border-b-0 last:pb-0" key={item}>
  <span>{item}</span>
  <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
</li>
```

- [ ] **Step 2: Remove serif emphasis and normalize body/label rhythm in `About.tsx`, `Focus.tsx`, and `Lab.tsx`**

Apply these replacements:

```tsx
<p className="type-lead text-primary/84">
  I&apos;m a Melbourne-based software engineer who likes building things that are both technically reliable and productively useful.
</p>
<p className="type-body">Since moving to Melbourne in 2015, I&apos;ve worked across web applications, integration layers, internal platforms, and customer-facing experiences in very different business contexts.</p>
<p className="type-body">What keeps compounding for me is the overlap between good engineering judgment, clear product framing, and a steady bias toward systems that stay understandable as they grow.</p>
```

```tsx
<p className="type-label">Biases</p>
<ul className="mt-4 space-y-3">
  <li className="type-body">Reliability before cleverness</li>
  <li className="type-body">Interfaces that stay readable under pressure</li>
  <li className="type-body">BFF boundaries that simplify the frontend</li>
  <li className="type-body">Product ideas grounded in real usage</li>
</ul>
```

```tsx
<p className="type-label">Currently focused on</p>
<span className="type-body">{item}</span>
<p className="type-ui font-medium text-primary">What this tends to produce</p>
<p className="type-body mt-4">Notes on architecture, delivery tradeoffs, and the practical choices behind interfaces that need to stay stable.</p>
```

```tsx
<p className="type-lead text-primary/90">
  Nothing public yet. I&apos;m currently exploring ideas around AI-assisted workflows, developer tools, and practical consumer products.
</p>
<p className="type-label">Coming into focus</p>
<ul className="mt-4 space-y-3">
  <li className="type-ui flex items-center justify-between gap-3" key={theme}>
    <span>{theme}</span>
    <span className="pill px-2 py-0.5 text-[0.72rem]">soon</span>
  </li>
</ul>
```

- [ ] **Step 3: Align `WritingPreview.tsx` call-to-action with the same UI language**

Replace the link button with:

```tsx
<Link className="button-secondary inline-flex items-center gap-2" href="/blog">
  See all posts
  <span aria-hidden="true">→</span>
</Link>
```

- [ ] **Step 4: Run a homepage-focused regression search**

Run:

```bash
rg -n "font-serif|tracking-\\[0\\.18em\\]|text-lg font-medium text-primary|text-sm font-medium uppercase|leading-8|leading-7" src/components/home
```

Expected: no matches in `Hero.tsx`, `About.tsx`, `Focus.tsx`, `Lab.tsx`, or `WritingPreview.tsx`.

- [ ] **Step 5: Commit the homepage refactor**

```bash
git add src/components/home/Hero.tsx src/components/home/About.tsx src/components/home/Focus.tsx src/components/home/Lab.tsx src/components/home/WritingPreview.tsx
git commit -m "refactor: unify homepage typography"
```

### Task 4: Apply the system to blog surfaces and article prose

**Files:**
- Modify: `src/components/blog/BlogCard.tsx`
- Modify: `src/components/blog/CategoryFilter.tsx`
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Refactor `BlogCard.tsx` to shared meta/body roles and centralized title behavior**

Replace the metadata row, title classes, and description classes with:

```tsx
<div className={cn("meta-row", isCompact && "gap-2")}>
  <span className="pill border-accent/20 text-accent">{post.category}</span>
  <span>{formatDate(post.date)}</span>
  <span aria-hidden="true">/</span>
  <span>{post.readingTime}</span>
</div>

<h3
  className={cn(
    "type-card-title",
    isFeatured && "type-card-title-featured max-w-2xl",
    isCompact && "type-card-title-compact"
  )}
>
  <Link className="hover:text-accent" href={`/blog/${post.slug}`}>
    {post.title}
  </Link>
</h3>

<p className={cn("type-body", isCompact && "text-[0.95rem] leading-7")}>{post.description}</p>
```

- [ ] **Step 2: Refactor category filters, page header, and post header to page-title/lead/meta roles**

In `CategoryFilter.tsx`:

```tsx
<button
  aria-pressed={isActive}
  className={cn(
    "type-ui rounded-pill border px-4 py-2 transition-colors",
    isActive
      ? "border-accent/40 bg-accent/10 text-primary"
      : "border-border text-muted hover:bg-surface-muted hover:text-primary"
  )}
  key={category}
  onClick={() => setActiveCategory(category)}
  type="button"
>
  {category}
</button>
```

```tsx
<div className="surface-card-muted p-6">
  <p className="type-ui text-muted">No published posts in this category yet.</p>
</div>
```

In `blog/page.tsx`:

```tsx
<div className="max-w-3xl space-y-5">
  <p className="eyebrow">Writing</p>
  <h1 className="type-page-title">Notes on systems, products, and what becomes worth building.</h1>
  <p className="type-lead max-w-2xl text-soft">
    Published MDX posts, ordered by date, with category filters for browsing the subjects I keep coming back to.
  </p>
</div>
```

In `blog/[slug]/page.tsx`:

```tsx
<Link className="link-subtle" href="/blog">← Back to writing</Link>

<header className="mt-8 max-w-3xl space-y-5">
  <div className="meta-row">
    <span className="pill border-accent/20 text-accent">{post.category}</span>
    <span>{formatDate(post.date)}</span>
    <span aria-hidden="true">/</span>
    <span>{post.readingTime}</span>
  </div>
  <h1 className="type-page-title">{post.title}</h1>
  <p className="type-lead max-w-2xl text-soft">{post.description}</p>
  <div className="flex flex-wrap gap-2">
    {post.tags.map((tag) => (
      <span className="pill" key={tag}>
        #{tag}
      </span>
    ))}
  </div>
</header>
```

- [ ] **Step 3: Tighten the prose layer so long-form content keeps warmth without serif dependence**

Extend `.prose-kaig` in `src/styles/globals.css` to add explicit heading and paragraph rhythm:

```css
.prose-kaig {
  @apply prose max-w-prose prose-headings:font-sans prose-headings:text-primary prose-p:text-muted prose-strong:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent prose-li:text-muted prose-code:rounded prose-code:bg-surface-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-pre:overflow-x-auto prose-pre:rounded-card prose-pre:border prose-pre:border-border prose-pre:bg-[#f6efe4] prose-pre:text-primary prose-blockquote:border-accent/40 prose-blockquote:text-muted;
  font-size: 1.05rem;
  line-height: 1.82;
}

.prose-kaig :where(h2):not(:where(.not-prose, .not-prose *)) {
  font-size: clamp(1.7rem, 2vw, 2rem);
  line-height: 1.18;
  letter-spacing: -0.025em;
  margin-top: 2.6em;
  margin-bottom: 0.7em;
}

.prose-kaig :where(h3):not(:where(.not-prose, .not-prose *)) {
  font-size: 1.32rem;
  line-height: 1.26;
  letter-spacing: -0.02em;
}

.prose-kaig :where(p, li):not(:where(.not-prose, .not-prose *)) {
  line-height: 1.82;
}
```

- [ ] **Step 4: Run the blog-focused regression search**

Run:

```bash
rg -n "font-serif|text-4xl font-semibold tracking-tight|text-lg leading-8|text-sm transition-colors|leading-7 text-muted" src/components/blog src/app/blog
```

Expected: no matches in `BlogCard.tsx`, `CategoryFilter.tsx`, `blog/page.tsx`, or `blog/[slug]/page.tsx`.

- [ ] **Step 5: Commit the blog typography refactor**

```bash
git add src/components/blog/BlogCard.tsx src/components/blog/CategoryFilter.tsx src/app/blog/page.tsx 'src/app/blog/[slug]/page.tsx' src/styles/globals.css
git commit -m "refactor: unify blog typography"
```

### Task 5: Verify the full surface and remove typography drift

**Files:**
- No direct file edits

- [ ] **Step 1: Run static verification**

Run:

```bash
npm run lint
```

Expected: PASS with no ESLint errors.

Run:

```bash
npm run typecheck
```

Expected: PASS with no TypeScript errors.

- [ ] **Step 2: Run build verification**

Run:

```bash
npm run build
```

Expected: PASS with Next.js production build completing successfully.

- [ ] **Step 3: Run drift checks for forbidden old patterns**

Run:

```bash
rg -n "font-serif" src/components src/app
```

Expected: no matches.

Run:

```bash
rg -n "tracking-\\[0\\.(18|24|26)em\\]" src/components src/app src/styles
```

Expected: no matches outside intentionally retained token definitions.

Run:

```bash
rg -n "type-display|type-page-title|type-section-title|type-card-title|type-lead|type-body|type-meta|type-label|type-ui" src/components src/app
```

Expected: the semantic roles are now used across homepage, blog index, blog post, layout chrome, and 404.

- [ ] **Step 4: Run manual visual QA on all target pages**

Run:

```bash
npm run dev
```

Then inspect:

```text
http://localhost:3000/
http://localhost:3000/blog
http://localhost:3000/blog/<existing-slug>
http://localhost:3000/does-not-exist
```

Expected:

- Homepage hero, section headers, cards, and buttons read as one sans-led system.
- Blog index title, intro, filters, and cards share the same hierarchy.
- Blog post metadata, title, description, tags, and prose feel calmer and more consistent.
- 404 page matches the same page-title/body/button language.

- [ ] **Step 5: Commit verification-only fixes if needed**

If verification changes are required:

```bash
git add src/styles/globals.css src/styles/tokens.css src/components/layout/Header.tsx src/components/layout/Footer.tsx src/components/layout/Section.tsx src/components/home/Hero.tsx src/components/home/About.tsx src/components/home/Focus.tsx src/components/home/Lab.tsx src/components/home/WritingPreview.tsx src/components/blog/BlogCard.tsx src/components/blog/CategoryFilter.tsx src/app/blog/page.tsx 'src/app/blog/[slug]/page.tsx' src/app/not-found.tsx
git commit -m "fix: polish typography verification feedback"
```

If no verification fixes are needed, do not create an empty commit.

## Self-Review

### Spec coverage

- Shared sans-led typography system: covered by Task 1.
- Shared layout and UI text hierarchy: covered by Task 2.
- Homepage typography unification: covered by Task 3.
- Blog index, blog post, and prose normalization: covered by Task 4.
- Full-surface verification and drift prevention: covered by Task 5.

No spec sections are currently uncovered.

### Placeholder scan

- No placeholder markers or deferred implementation notes remain.
- Each code-edit step contains concrete snippets.
- Each verification step contains concrete commands and expected outcomes.

### Type consistency

- Semantic roles are consistently named `type-display`, `type-page-title`, `type-section-title`, `type-card-title`, `type-card-title-featured`, `type-card-title-compact`, `type-lead`, `type-body`, `type-meta`, `type-label`, and `type-ui`.
- Shared UI helpers are consistently named `button-primary`, `button-secondary`, `button-accent-soft`, `ui-link-card`, and `meta-row`.
