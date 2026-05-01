import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import { projects } from "@/lib/content";

type ProjectParams = { slug: string };

export function generateStaticParams(): ProjectParams[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="py-20 sm:py-28">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All projects
        </Link>

        <header className="mt-10 border-b border-[var(--color-border)] pb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
            {project.year} · {project.role}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-[var(--color-accent)]">
            {project.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.href ?
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Visit project
              </a>
            : null}
            {project.repo ?
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                <Code2 className="h-4 w-4" aria-hidden />
                Source code
              </a>
            : null}
          </div>
        </header>

        <section className="prose-classic max-w-none py-10">
          <p className="text-base leading-relaxed sm:text-lg">
            {project.description}
          </p>

          <h2 className="mt-12 font-serif text-2xl font-medium text-foreground">
            What I built
          </h2>
          <ul className="mt-4 space-y-2 text-[var(--color-muted)]">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-3 leading-relaxed">
                <span
                  className="mt-2.5 inline-block h-1 w-1 flex-none rounded-full bg-[var(--color-accent)]"
                  aria-hidden
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-serif text-2xl font-medium text-foreground">
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </article>
  );
}
