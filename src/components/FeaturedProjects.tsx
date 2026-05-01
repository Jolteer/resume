import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/content";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="border-t border-[var(--color-border)] py-24"
    >
      <Container size="wide">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I'm proud of."
            description="A small selection. Some are professional; some are weekends spent on something I wanted to exist."
          />
          <Link
            href="/projects"
            className="hidden items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-foreground sm:inline-flex"
          >
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
