import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { aboutParagraphs, site } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="About" title="A note about my work." />
          </div>
          <div className="prose-classic max-w-none space-y-5 lg:col-span-8">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed sm:text-lg">
                {p}
              </p>
            ))}
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
                  Experience
                </dt>
                <dd className="mt-2 font-serif text-2xl text-foreground">
                  {site.yearsExperience} years
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
                  Based in
                </dt>
                <dd className="mt-2 font-serif text-2xl text-foreground">
                  {site.location.split(",")[0]}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
                  Available for
                </dt>
                <dd className="mt-2 font-serif text-2xl text-foreground">
                  Selected work
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
