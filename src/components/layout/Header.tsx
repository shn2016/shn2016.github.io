import Link from "next/link";

const navigation = [
  { href: "/blog", label: "Writing" },
  { href: "/#lab", label: "Lab" },
  { href: "/#about", label: "About" }
];

export function Header() {
  return (
    <header className="site-shell sticky top-0 z-40">
      <div className="mt-4 flex items-center justify-between rounded-pill border border-border/80 bg-surface/85 px-4 py-3 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.35)] backdrop-blur md:px-6">
        <Link
          className="text-sm font-semibold uppercase tracking-[0.26em] text-primary hover:text-accent"
          href="/"
        >
          Kai Gao
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm text-muted md:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="rounded-pill px-3 py-2 hover:bg-surface-muted hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
