import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

const links = [
  {
    href: siteConfig.github,
    label: "GitHub"
  },
  {
    href: siteConfig.linkedin,
    label: "LinkedIn"
  },
  {
    href: siteConfig.email,
    label: "Email"
  }
];

export function Footer() {
  return (
    <footer className="site-shell pb-10 pt-8">
      <div className="flex flex-col gap-4 border-t border-border/80 pt-8 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-medium text-primary">Designed and built by Kai Gao.</p>
          <p className="mt-1">Melbourne-based software engineer focused on dependable web products.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {links.map(({ href, label }) => (
            <Link
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-4 py-2 hover:border-accent/40 hover:text-accent"
              href={href}
              key={label}
              rel="noreferrer"
              target={href.startsWith("mailto:") ? undefined : "_blank"}
            >
              {label === "Email" ? <Mail className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
