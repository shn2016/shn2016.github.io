import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getReadingTime } from "@/lib/reading-time";
import { slugify } from "@/lib/utils";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export const blogCategories = ["Engineering", "AI & Product", "Notes"] as const;

export type BlogCategory = (typeof blogCategories)[number];

type Frontmatter = {
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  tags?: string[];
  draft?: boolean;
  slug?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  draft: boolean;
  readingTime: string;
  content: string;
};

let postsCache: BlogPost[] | null = null;

function readPostFile(fileName: string): BlogPost {
  const fullPath = path.join(blogDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Frontmatter;
  const fallbackSlug = fileName.replace(/\.mdx?$/, "");

  return {
    slug: slugify(frontmatter.slug ?? fallbackSlug),
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    category: frontmatter.category,
    tags: frontmatter.tags ?? [],
    draft: Boolean(frontmatter.draft),
    readingTime: getReadingTime(content),
    content
  };
}

function loadPosts() {
  if (postsCache) {
    return postsCache;
  }

  if (!fs.existsSync(blogDirectory)) {
    postsCache = [];
    return postsCache;
  }

  postsCache = fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map(readPostFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return postsCache;
}

export function getAllPosts() {
  return loadPosts();
}

export function getPublishedPosts() {
  return loadPosts().filter((post) => !post.draft);
}

export function getPostBySlug(slug: string) {
  return loadPosts().find((post) => post.slug === slug);
}

export function getAllCategories() {
  return ["All", ...blogCategories] as const;
}

export function getPostsByCategory(category: BlogCategory) {
  return getPublishedPosts().filter((post) => post.category === category);
}
