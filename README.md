# kaig.dev

Static personal website rebuild for [kaig.dev](https://kaig.dev), built with Next.js App Router, TypeScript, Tailwind CSS, and MDX.

## Overview

This site is intentionally writing-first. It keeps the calm dark navy / teal feel of the older portfolio, but shifts the structure toward:

- engineering depth
- AI and product thinking
- future solo software businesses
- blog-driven credibility

The homepage is a single long-form landing page with sections for Hero, About, Focus / Now, Writing Preview, Lab, and Footer. The blog lives in `content/blog` as static MDX files.

## Tech Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- MDX via `next-mdx-remote`
- Static export to `out`
- GitHub Actions + GitHub Pages
- `npm` for package management

## Local Development

1. Install dependencies.
2. Start the dev server.

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm run lint
npm run typecheck
npm run build
```

## Blog Publishing Workflow

Publishing a new post:

1. Create a new `.mdx` file inside `content/blog`.
2. Add frontmatter with `title`, `description`, `date`, `category`, `tags`, and `draft`.
3. Write the post body in MDX.
4. Run `npm run dev`.
5. Check `/blog` and `/blog/[slug]`.
6. Commit the new file.
7. Push to `main`.
8. GitHub Actions builds and deploys the site.

Example:

```bash
cp content/blog/building-a-static-personal-site-with-nextjs.mdx content/blog/my-new-post.mdx
npm run dev
git add content/blog/my-new-post.mdx
git commit -m "Add my new blog post"
git push
```

Frontmatter format:

```yaml
---
title: "Post Title"
description: "Short summary of the post."
date: "2026-05-19"
category: "Engineering"
tags: ["nextjs", "typescript"]
draft: false
---
```

Optional:

```yaml
slug: "custom-slug"
```

## Deployment Notes

The site uses `output: "export"` and builds into a static `out` directory. GitHub Actions runs:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. deploys `out` to GitHub Pages

`public/CNAME` is included for the custom domain `kaig.dev`.

## Static Export Limitations

This project is static-first by design. Avoid features that require a server runtime:

- API routes
- middleware
- server actions
- SSR or ISR
- dynamic server rendering

Blog content should stay file-based inside `content/blog` so the site remains easy to build and deploy as a static export.
