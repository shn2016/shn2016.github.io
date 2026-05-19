import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) {
    return {};
  }

  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-20">
      <Link className="link-subtle" href="/blog">
        ← Back to writing
      </Link>

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

      <div className="section-shell mt-12">
        <div className="prose-kaig">
          <MDXRemote components={mdxComponents} source={post.content} />
        </div>
      </div>
    </article>
  );
}
