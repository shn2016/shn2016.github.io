import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section className="section-shell scroll-mt-24" id={id}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
        <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          {intro ? <p className="max-w-md text-base leading-8 text-muted">{intro}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
