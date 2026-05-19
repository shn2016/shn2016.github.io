"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/blog/BlogCard";

type Category = "All" | BlogPost["category"];

type CategoryFilterProps = {
  categories: readonly Category[];
  posts: BlogPost[];
};

export function CategoryFilter({ categories, posts }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter posts by category">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              aria-pressed={isActive}
              className={cn(
                "rounded-pill border px-4 py-2 text-sm transition-colors",
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
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="surface-card-muted p-6 text-sm text-muted">
          No published posts in this category yet.
        </div>
      ) : null}
    </div>
  );
}
