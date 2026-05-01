import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on engineering, craft, and adjacent topics.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <section className="py-20 sm:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Writing"
          title="Notes."
          description="Thoughts on engineering, craft, and the adjacent territory. I publish a few times a year — when I have something I think is worth saying."
        />

        <ul className="mt-14 divide-y divide-[var(--color-border)]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-3 py-8 sm:grid-cols-12 sm:gap-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)] sm:col-span-3">
                  {formatDate(post.date)}
                </p>
                <div className="sm:col-span-9">
                  <h2 className="font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-[var(--color-accent)]">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted-soft)]">
                    <span>{post.readingTime}</span>
                    {post.tags.length ?
                      <span aria-hidden>·</span>
                    : null}
                    <ul className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-[var(--color-border)] px-2 py-0.5"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
