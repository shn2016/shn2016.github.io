import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="surface-card h-full p-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
        <span className="pill border-accent/20 text-accent">{post.category}</span>
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>

      <div className="mt-5 space-y-3">
        <h3 className="text-2xl font-semibold tracking-tight text-primary">
          <Link className="hover:text-accent" href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="leading-7 text-muted">{post.description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span className="pill" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
