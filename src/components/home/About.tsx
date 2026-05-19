import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section
      eyebrow="About"
      id="about"
      intro="The goal here is not to recreate a resume. It is to explain the kind of engineering work, product judgment, and long-term interests that shape what I build now."
      title="A writing-first home on the internet."
    >
      <div className="surface-card space-y-6 p-8">
        <p className="font-serif text-lg leading-8 text-soft">
          I&apos;m a Melbourne-based software engineer who enjoys creating things that
          live on the internet.
        </p>
        <p className="leading-8 text-muted">
          I moved to Melbourne in 2015 for study and have since built web
          applications, integration layers, internal platforms, and product
          experiences across different business domains.
        </p>
        <p className="leading-8 text-muted">
          These days, I&apos;m especially interested in reliable frontend systems, BFF
          architecture, payment experiences, AI-assisted product development, and the
          path from engineering experience to practical solo products.
        </p>
      </div>
    </Section>
  );
}
