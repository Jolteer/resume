import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--color-border)] py-24"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Toolkit"
          title="The tools I reach for."
          description="Listed in roughly the order of how often I use them. I'm comfortable adopting new tools when there's a reason to."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-serif text-base font-medium text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
