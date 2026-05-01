import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  variant?: "grid" | "list";
};

export function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  if (variant === "list") {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="group grid items-baseline gap-2 border-t border-[var(--color-border)] py-6 transition-colors hover:bg-[var(--color-surface)]/40 sm:grid-cols-12"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)] sm:col-span-2">
          {project.year}
        </p>
        <div className="sm:col-span-7">
          <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-[var(--color-accent)]">
            {project.title}
            <ArrowUpRight
              className="ml-1.5 inline-block h-4 w-4 -translate-y-0.5 text-[var(--color-muted-soft)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
              aria-hidden
            />
          </h3>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {project.tagline}
          </p>
        </div>
        <ul className="flex flex-wrap gap-1.5 text-xs text-[var(--color-muted)] sm:col-span-3 sm:justify-end">
          {project.stack.slice(0, 3).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-foreground"
    >
      <div className="flex items-baseline justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
          {project.year}
        </p>
        <ArrowUpRight
          className="h-4 w-4 text-[var(--color-muted-soft)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
          aria-hidden
        />
      </div>
      <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
        {project.tagline}
      </p>
      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
}
