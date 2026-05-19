import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { cn, formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
};

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "surface-card h-full p-6",
        isFeatured && "flex h-full flex-col justify-between p-8",
        isCompact && "bg-surface-muted/92"
      )}
    >
      <div className={cn("meta-row", isCompact && "gap-2")}>
        <span className="pill border-accent/20 text-accent">{post.category}</span>
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>

      <div className={cn("mt-5 space-y-3", isFeatured && "mt-6 space-y-4")}>
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
        <p className={cn("type-body", isCompact && "text-[0.95rem] leading-7")}>
          {post.description}
        </p>
      </div>

      <div className={cn("mt-6 flex flex-wrap gap-2", isFeatured && "mt-8")}>
        {post.tags.map((tag) => (
          <span className="pill" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
