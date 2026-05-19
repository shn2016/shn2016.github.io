import { About } from "@/components/home/About";
import { Focus } from "@/components/home/Focus";
import { Hero } from "@/components/home/Hero";
import { Lab } from "@/components/home/Lab";
import { WritingPreview } from "@/components/home/WritingPreview";
import { getPublishedPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  path: "/"
});

export default function HomePage() {
  const posts = getPublishedPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <About />
      <Focus />
      <WritingPreview posts={posts} />
      <Lab />
    </>
  );
}
