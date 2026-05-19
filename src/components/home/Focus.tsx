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
      title="The systems and questions I keep returning to."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,0.7fr)]">
        <div className="surface-card p-8">
          <p className="type-label">Currently focused on</p>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li
                className="flex gap-4 border-b border-border/60 pb-4 text-muted last:border-b-0 last:pb-0"
                key={item}
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="type-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5">
          <div className="surface-card-muted p-6">
            <p className="type-ui font-medium text-primary">What this tends to produce</p>
            <p className="type-body mt-4">
              Notes on architecture, delivery tradeoffs, and the practical choices
              behind interfaces that need to stay stable.
            </p>
          </div>
          <div className="surface-card-muted p-6">
            <p className="type-ui font-medium text-primary">Why it matters</p>
            <p className="type-body mt-4">
              The interesting part is rarely the stack alone. It&apos;s how technical
              decisions shape product speed, clarity, and long-term maintenance.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
