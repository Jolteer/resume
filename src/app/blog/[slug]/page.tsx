import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { posts } from "@/lib/content";

type PostParams = { slug: string };

export function generateStaticParams(): PostParams[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PostParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PostParams>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-20 sm:py-28">
      <Container size="narrow">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All writing
        </Link>

        <header className="mt-10">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            {post.excerpt}
          </p>
        </header>

        <div className="prose-classic mt-12 max-w-none border-t border-[var(--color-border)] pt-12">
          <p className="rounded-sm border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)]">
            <strong className="text-foreground">Placeholder.</strong> The body
            of this post isn&apos;t written yet. Replace this section with the
            article content — or wire up an MDX pipeline (see the README) to
            author posts in Markdown.
          </p>

          <h2 className="font-serif text-2xl font-medium text-foreground">
            A working draft
          </h2>
          <p>
            This is a stub. Real prose lives in{" "}
            <code className="font-mono text-sm">
              src/app/blog/[slug]/page.tsx
            </code>{" "}
            or, more commonly, in MDX files under{" "}
            <code className="font-mono text-sm">content/posts</code>. For now,
            this page demonstrates the layout and typography you&apos;ll get
            when you publish.
          </p>
          <p>
            Each post inherits the site&apos;s serif headings, the muted body
            color, and the tightly constrained reading width designed for
            long-form prose.
          </p>

          <h3 className="font-serif text-xl font-medium text-foreground">
            A note on tags
          </h3>
          <p>
            The tags for this post are listed below. Use them to organize topics
            over time.
          </p>

          <ul className="not-prose flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </article>
  );
}
