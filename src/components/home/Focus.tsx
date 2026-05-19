import { Section } from "@/components/layout/Section";

const items = [
  "Building reliable frontend integration layers",
  "Working across React, Next.js, Node.js, TypeScript, PostgreSQL, Prisma, GCP, AWS, and Docker",
  "Designing BFF and payment-related product experiences",
  "Exploring AI-native software products",
  "Turning engineering experience into useful writing and future solo businesses"
];

export function Focus() {
  return (
    <Section
      eyebrow="Focus / Now"
      id="focus"
      intro="A snapshot of current technical interests rather than a timeline of past roles."
      title="The systems and questions I keep returning to."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="surface-card p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            Currently focused on
          </p>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li
                className="flex gap-4 border-b border-border/60 pb-4 text-soft last:border-b-0 last:pb-0"
                key={item}
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card-muted p-6">
          <p className="text-sm font-medium text-primary">What this turns into</p>
          <p className="mt-4 leading-7 text-muted">
            Fewer broad claims, more concrete notes about architecture, delivery,
            tradeoffs, and the work it takes to turn useful engineering into useful
            products.
          </p>
        </div>
      </div>
    </Section>
  );
}
