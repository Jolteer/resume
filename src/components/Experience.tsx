import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-border)] py-24"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Experience"
          title="A decade of building."
          description="A condensed history. The full résumé is one page; this is the longer version."
        />

        <ol className="mt-14 space-y-14">
          {experience.map((entry) => (
            <li
              key={`${entry.company}-${entry.startDate}`}
              className="grid gap-6 lg:grid-cols-12"
            >
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
                  {entry.role}
                  <span className="text-[var(--color-muted-soft)]"> · </span>
                  <span className="text-[var(--color-accent)]">
                    {entry.company}
                  </span>
                </h3>
                <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
                  {entry.summary}
                </p>

                <ul className="mt-5 space-y-2 text-[var(--color-muted)]">
                  {entry.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span
                        className="mt-2.5 inline-block h-1 w-1 flex-none rounded-full bg-[var(--color-accent)]"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {entry.stack ?
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {entry.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
