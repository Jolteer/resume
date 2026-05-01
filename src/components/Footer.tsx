import Link from "next/link";
import { Container } from "./Container";
import { site, socials } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 py-10 no-print">
      <Container size="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-base text-foreground">{site.name}</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {site.headline} · {site.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-[var(--color-muted)] transition-colors hover:text-foreground"
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noreferrer noopener" : undefined
                }
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-[var(--color-muted-soft)]">
          © {year} {site.name}. Built with Next.js and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
