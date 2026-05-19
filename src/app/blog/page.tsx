import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { getAllCategories, getPublishedPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Writing",
  path: "/blog"
});

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  const categories = getAllCategories();

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl space-y-5">
        <p className="eyebrow">Writing</p>
        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Notes on systems, products, and what becomes worth building.
        </h1>
        <p className="font-serif text-lg leading-8 text-soft">
          Published MDX posts, ordered by date, with category filters for browsing the
          subjects I keep coming back to.
        </p>
      </div>

      <div className="section-shell mt-12">
        <CategoryFilter categories={categories} posts={posts} />
      </div>
    </section>
  );
}
