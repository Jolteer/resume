import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/lib/content";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-[var(--color-border)] py-24"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Education"
          title="Where I learned the basics."
        />

        <ul className="mt-14 space-y-10">
          {education.map((entry) => (
            <li key={entry.institution} className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
                  {entry.startDate} — {entry.endDate}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {entry.location}
                </p>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground">
                  {entry.institution}
                </h3>
                <p className="mt-2 text-[var(--color-muted)]">
                  {entry.degree} in {entry.field}
                </p>
                {entry.details ?
                  <ul className="mt-4 space-y-2 text-[var(--color-muted)]">
                    {entry.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span
                          className="mt-2.5 inline-block h-1 w-1 flex-none rounded-full bg-[var(--color-accent)]"
                          aria-hidden
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                : null}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
