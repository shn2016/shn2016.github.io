import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section eyebrow="About" id="about" title="A calm, durable approach to software.">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
        <div className="surface-card space-y-6 p-8">
          <p className="font-serif text-xl leading-8 text-primary/82">
            I&apos;m a Melbourne-based software engineer who likes building things that
            are both technically reliable and productively useful.
          </p>
          <p className="leading-8 text-muted">
            Since moving to Melbourne in 2015, I&apos;ve worked across web applications,
            integration layers, internal platforms, and customer-facing experiences in
            very different business contexts.
          </p>
          <p className="leading-8 text-muted">
            What keeps compounding for me is the overlap between good engineering
            judgment, clear product framing, and a steady bias toward systems that stay
            understandable as they grow.
          </p>
        </div>

        <div className="surface-card-muted p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-soft">Biases</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <li>Reliability before cleverness</li>
            <li>Interfaces that stay readable under pressure</li>
            <li>BFF boundaries that simplify the frontend</li>
            <li>Product ideas grounded in real usage</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
