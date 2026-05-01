"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { nav, site } from "@/lib/content";
import { Container } from "./Container";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] font-serif text-sm tracking-tight text-foreground transition-colors group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
              {site.initials}
            </span>
            <span className="hidden font-serif text-base font-medium sm:inline">
              {site.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] p-2 text-foreground md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ?
              <X className="h-5 w-5" />
            : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={clsx(
            "grid overflow-hidden transition-all duration-200 ease-out md:hidden",
            open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
          )}
        >
          <nav
            className="min-h-0 flex-col gap-1 overflow-hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1 pt-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
