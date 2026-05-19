import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

const focusAreas = ["Reliable frontend systems", "BFF architecture", "Payments", "AI-native products"];
const profileLinks = [
  { href: siteConfig.github, label: "GitHub / shn2016" },
  { href: siteConfig.linkedin, label: "LinkedIn / kaig-dev" }
];

export function Hero() {
  return (
    <section className="pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(19rem,0.82fr)] lg:items-start">
        <div className="surface-card relative overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="eyebrow">Software Engineer + Product Builder</p>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
                Hi, I&apos;m Kai Gao.
                </h1>
                <p className="max-w-3xl text-2xl leading-tight text-primary/88 sm:text-3xl">
                  I build dependable web systems across frontend, BFF, payments, and
                  AI-assisted product work.
                </p>
                <p className="max-w-3xl font-serif text-lg leading-8 text-muted">
                  This site is where I collect writing, current areas of focus, and
                  the product questions that keep pulling me forward.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                className="rounded-pill border border-accent/25 bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-accent-strong"
                href="/blog"
              >
                Read the writing
              </Link>
              <Link
                className="rounded-pill border border-border bg-surface px-5 py-3 text-sm font-medium text-muted hover:bg-surface-muted hover:text-primary"
                href="/#focus"
              >
                See current focus
              </Link>
            </div>

            <div className="border-t border-border/70 pt-6">
              <div className="space-y-3 md:max-w-[18rem]">
                {profileLinks.map((link) => (
                  <Link
                    className="flex items-center justify-between rounded-card border border-border/70 bg-surface-muted/80 px-4 py-3 text-sm text-primary hover:border-accent/40 hover:text-accent"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="surface-card p-6">
          <p className="eyebrow">Current Surface Area</p>
          <ul className="mt-5 space-y-3">
            {focusAreas.map((item) => (
              <li
                className="flex items-center justify-between gap-4 border-b border-border/60 pb-3 text-sm text-muted last:border-b-0 last:pb-0"
                key={item}
              >
                <span>{item}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
