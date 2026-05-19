import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

const links = [
  {
    href: siteConfig.github,
    label: "GitHub",
    icon: Github
  },
  {
    href: siteConfig.linkedin,
    label: "LinkedIn",
    icon: Linkedin
  },
  {
    href: siteConfig.email,
    label: "Email",
    icon: Mail
  }
];

export function Footer() {
  return (
    <footer className="site-shell pb-10 pt-8">
      <div className="flex flex-col gap-4 border-t border-border/80 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Designed and built by Kai Gao.</p>
        <div className="flex items-center gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              aria-label={label}
              className="rounded-pill border border-border p-2 hover:border-accent/40 hover:text-accent"
              href={href}
              key={label}
              rel="noreferrer"
              target={href.startsWith("mailto:") ? undefined : "_blank"}
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
