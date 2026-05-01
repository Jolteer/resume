import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { posts } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LatestPosts() {
  const latest = posts.slice(0, 3);

  return (
    <section
      id="writing"
      className="border-t border-[var(--color-border)] py-24"
    >
      <Container size="wide">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Writing" title="Recent notes." />
          <Link
            href="/blog"
            className="hidden items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-foreground sm:inline-flex"
          >
            All writing
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-10 divide-y divide-[var(--color-border)]">
          {latest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-3 py-6 sm:grid-cols-12 sm:gap-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)] sm:col-span-3">
                  {formatDate(post.date)}
                </p>
                <div className="sm:col-span-9">
                  <h3 className="font-serif text-xl tracking-tight text-foreground transition-colors group-hover:text-[var(--color-accent)]">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-muted-soft)]">
                    {post.readingTime}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
