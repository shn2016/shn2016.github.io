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
                <h1 className="type-display max-w-4xl">
                  Hi, I&apos;m Kai Gao.
                </h1>
                <p className="type-lead max-w-3xl">
                  I build dependable web systems across frontend, BFF, payments, and
                  AI-assisted product work.
                </p>
                <p className="type-body max-w-3xl">
                  This site is where I collect writing, current areas of focus, and
                  the product questions that keep pulling me forward.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link className="button-primary" href="/blog">
                Read the writing
              </Link>
              <Link className="button-secondary" href="/#focus">
                See current focus
              </Link>
            </div>

            <div className="border-t border-border/70 pt-6">
              <div className="space-y-3 md:max-w-[18rem]">
                {profileLinks.map((link) => (
                  <Link
                    className="ui-link-card"
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
                className="type-meta flex items-center justify-between gap-4 border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
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
