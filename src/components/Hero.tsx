import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] py-24 sm:py-32">
      <Container size="wide">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-5 inline-flex items-center gap-2 text-sm text-[var(--color-muted)]">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {site.location}
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {site.name}
            </h1>
            <p className="mt-4 max-w-2xl font-serif text-lg italic text-[var(--color-accent)] sm:text-xl">
              {site.headline}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
              >
                View selected work
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={site.resumeHref}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                <Download className="h-4 w-4" aria-hidden />
                Read résumé
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]">
              <div className="absolute inset-0 grid place-items-center font-serif text-7xl text-[var(--color-muted-soft)]">
                {site.initials}
              </div>
              <div className="absolute bottom-3 left-3 right-3 border-t border-[var(--color-border)] pt-3 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted-soft)]">
                  Portrait — replace me
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
