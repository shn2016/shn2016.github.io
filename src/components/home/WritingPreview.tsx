import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Section } from "@/components/layout/Section";

type WritingPreviewProps = {
  posts: BlogPost[];
};

export function WritingPreview({ posts }: WritingPreviewProps) {
  const [featuredPost, ...supportingPosts] = posts;

  return (
    <Section
      eyebrow="Writing"
      id="writing"
      title="Recent writing, with clearer signal."
    >
      <div className="space-y-6">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          {featuredPost ? <BlogCard post={featuredPost} variant="featured" /> : null}
          <div className="grid gap-5">
            {supportingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} variant="compact" />
            ))}
          </div>
        </div>
        <Link className="link-subtle inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2" href="/blog">
          See all posts
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
