"use client";

import { Printer } from "lucide-react";

export function ResumePrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
    >
      <Printer className="h-4 w-4" aria-hidden />
      Print / Save as PDF
    </button>
  );
}
