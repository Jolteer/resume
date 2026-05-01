import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow ?
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      : null}
      <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ?
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      : null}
    </div>
  );
}
