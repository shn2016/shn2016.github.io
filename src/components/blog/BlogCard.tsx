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
      <div className={cn("flex flex-wrap items-center gap-3 text-sm text-muted", isCompact && "gap-2")}>
        <span className="pill border-accent/20 text-accent">{post.category}</span>
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>

      <div className={cn("mt-5 space-y-3", isFeatured && "mt-6 space-y-4")}>
        <h3
          className={cn(
            "font-semibold tracking-tight text-primary",
            isFeatured ? "max-w-2xl text-3xl sm:text-[2rem]" : "text-2xl",
            isCompact && "text-xl"
          )}
        >
          <Link className="hover:text-accent" href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className={cn("leading-7 text-muted", isCompact && "text-sm leading-6")}>{post.description}</p>
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
