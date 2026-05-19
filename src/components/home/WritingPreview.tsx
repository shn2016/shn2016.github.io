import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Section } from "@/components/layout/Section";

type WritingPreviewProps = {
  posts: BlogPost[];
};

export function WritingPreview({ posts }: WritingPreviewProps) {
  return (
    <Section
      eyebrow="Writing"
      id="writing"
      intro="A small set of notes on systems, product thinking, and the practical edge where engineering meets business."
      title="Recent writing."
    >
      <div className="space-y-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <Link className="link-subtle inline-flex items-center gap-2" href="/blog">
          See all posts
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
