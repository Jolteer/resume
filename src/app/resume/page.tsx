import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ResumePrintButton } from "@/components/ResumePrintButton";
import { education, experience, site, skills, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${site.name} — ${site.headline}. One-page résumé.`,
};

export default function ResumePage() {
  return (
    <div className="bg-[var(--color-surface)]/30 py-14 sm:py-20">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-3 no-print">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
            Tip — use your browser&apos;s &quot;Save as PDF&quot; for a clean
            export.
          </p>
          <ResumePrintButton />
        </div>

        <article className="print-page rounded-sm border border-[var(--color-border)] bg-white p-10 text-slate-900 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] sm:p-14 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <header className="border-b border-slate-200 pb-6">
            <h1 className="font-serif text-3xl font-semibold tracking-tight">
              {site.name}
            </h1>
            <p className="mt-1 font-serif italic text-slate-600">
              {site.headline}
            </p>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
              <span>{site.location}</span>
              <span aria-hidden>·</span>
              <a href={`mailto:${site.email}`} className="hover:text-slate-900">
                {site.email}
              </a>
              {socials
                .filter((s) => !s.href.startsWith("mailto:"))
                .map((s) => (
                  <span key={s.label} className="contents">
                    <span aria-hidden>·</span>
                    <a
                      href={s.href}
                      className="hover:text-slate-900"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {s.label}
                    </a>
                  </span>
                ))}
            </p>
          </header>

          <section className="mt-7">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {site.tagline}
            </p>
          </section>

          <section className="mt-7">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Experience
            </h2>
            <ol className="mt-3 space-y-5">
              {experience.map((entry) => (
                <li key={`${entry.company}-${entry.startDate}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <p className="font-serif text-base font-semibold text-slate-900">
                      {entry.role}
                      <span className="font-normal text-slate-500"> · </span>
                      <span className="font-normal">{entry.company}</span>
                    </p>
                    <p className="text-xs text-slate-500">
                      {entry.startDate} — {entry.endDate} · {entry.location}
                    </p>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    {entry.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 leading-snug">
                        <span
                          className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-slate-400"
                          aria-hidden
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {entry.stack ?
                    <p className="mt-1.5 text-xs text-slate-500">
                      {entry.stack.join(" · ")}
                    </p>
                  : null}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-7">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Education
            </h2>
            <ol className="mt-3 space-y-3">
              {education.map((entry) => (
                <li key={entry.institution}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <p className="font-serif text-base font-semibold text-slate-900">
                      {entry.institution}
                    </p>
                    <p className="text-xs text-slate-500">
                      {entry.startDate} — {entry.endDate} · {entry.location}
                    </p>
                  </div>
                  <p className="text-sm text-slate-700">
                    {entry.degree} in {entry.field}
                  </p>
                  {entry.details ?
                    <ul className="mt-1.5 space-y-1 text-sm text-slate-700">
                      {entry.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 leading-snug">
                          <span
                            className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-slate-400"
                            aria-hidden
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  : null}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-7">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Toolkit
            </h2>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.category} className="text-sm">
                  <dt className="font-serif font-semibold text-slate-900">
                    {group.category}
                  </dt>
                  <dd className="text-slate-700">{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </Container>
    </div>
  );
}
