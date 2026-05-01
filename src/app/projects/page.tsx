import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of work — professional and personal.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, in chronological order."
          description="Some are professional projects I led; others are personal projects I built because I wanted them to exist. All of them have shipped."
        />

        <ul className="mt-14">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} variant="list" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
