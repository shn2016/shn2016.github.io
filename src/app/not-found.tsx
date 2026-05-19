import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="surface-card max-w-2xl p-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary">
          This page has drifted out of range.
        </h1>
        <p className="mt-4 max-w-xl leading-8 text-muted">
          The link may be old, the post may not exist, or the content may still be a
          draft. The writing index is the safest place to continue.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-pill border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-primary hover:bg-accent/16"
            href="/"
          >
            Go home
          </Link>
          <Link
            className="rounded-pill border border-border px-5 py-3 text-sm font-medium text-muted hover:bg-surface-muted hover:text-primary"
            href="/blog"
          >
            Browse writing
          </Link>
        </div>
      </div>
    </section>
  );
}
