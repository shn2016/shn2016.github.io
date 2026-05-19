import Link from "next/link";

const focusAreas = ["Frontend systems", "BFF architecture", "Payments", "AI-native products"];

export function Hero() {
  return (
    <section className="pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="eyebrow">Calm Senior Engineer + AI Product Explorer</p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
                Hi, I&apos;m Kai Gao.
              </h1>
              <p className="max-w-2xl text-2xl leading-tight text-slate-50/92 sm:text-3xl">
                I build reliable web systems across frontend, BFF, and payments.
              </p>
              <p className="max-w-2xl font-serif text-lg leading-8 text-soft">
                I&apos;m currently exploring AI-native products, solo software businesses,
                and writing about the engineering lessons I learn along the way.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-pill border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-medium text-primary hover:bg-accent/16"
              href="/blog"
            >
              Read the writing
            </Link>
            <Link
              className="rounded-pill border border-border px-5 py-3 text-sm font-medium text-muted hover:bg-surface-muted hover:text-primary"
              href="/#focus"
            >
              See what I&apos;m focused on
            </Link>
          </div>
        </div>

        <aside className="surface-card p-6">
          <p className="eyebrow">Current Surface Area</p>
          <ul className="mt-5 space-y-3">
            {focusAreas.map((item) => (
              <li
                className="flex items-center justify-between border-b border-border/70 pb-3 text-sm text-soft last:border-b-0 last:pb-0"
                key={item}
              >
                <span>{item}</span>
                <span className="h-2 w-2 rounded-full bg-accent/80" />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
