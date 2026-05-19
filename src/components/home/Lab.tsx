import { Section } from "@/components/layout/Section";

const themes = ["AI-assisted workflows", "Developer tools", "Practical consumer products"];

export function Lab() {
  return (
    <Section
      eyebrow="Lab"
      id="lab"
      intro="A reserved space for future solo products, experiments, and businesses that deserve more than a placeholder project gallery."
      title="Ideas before they become products."
    >
      <div className="surface-card relative overflow-hidden p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-5">
            <p className="text-lg font-medium text-primary">
              Nothing public yet. I&apos;m currently exploring ideas around AI-assisted
              workflows, developer tools, and practical consumer products.
            </p>
            <p className="leading-8 text-muted">
              The intention is to keep this section honest. It will stay quiet until
              there is something real enough to show.
            </p>
          </div>
          <div className="surface-card-muted p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
              Coming into focus
            </p>
            <ul className="mt-4 space-y-3 text-sm text-soft">
              {themes.map((theme) => (
                <li className="flex items-center justify-between gap-3" key={theme}>
                  <span>{theme}</span>
                  <span className="rounded-pill border border-border px-2 py-0.5 text-xs text-muted">
                    soon
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
