import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="surface-card max-w-2xl p-10">
        <p className="eyebrow">404</p>
        <h1 className="type-page-title mt-4 max-w-xl">
          This page has drifted out of range.
        </h1>
        <p className="type-body mt-4 max-w-xl">
          The link may be old, the post may not exist, or the content may still be a
          draft. The writing index is the safest place to continue.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="button-accent-soft" href="/">
            Go home
          </Link>
          <Link className="button-secondary" href="/blog">
            Browse writing
          </Link>
        </div>
      </div>
    </section>
  );
}
