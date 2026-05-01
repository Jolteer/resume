"use client";

import { useState } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { site, socials } from "@/lib/content";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function buildMailto() {
    const subject = encodeURIComponent(`Hello from ${name || "your website"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] py-24"
    >
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk."
              description="Whether you have a project in mind, a question about something I've written, or just want to say hello — I'd love to hear from you."
            />
            <ul className="mt-8 space-y-3 text-sm">
              {socials.map((s) => (
                <li key={s.label} className="flex items-baseline gap-3">
                  <span className="w-20 text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
                    {s.label}
                  </span>
                  <a
                    href={s.href}
                    className="text-[var(--color-muted)] transition-colors hover:text-foreground"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http") ?
                        "noreferrer noopener"
                      : undefined
                    }
                  >
                    {s.username}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            action={buildMailto()}
            method="GET"
            className="lg:col-span-7 lg:pl-12"
            onSubmit={() => {
              window.location.href = buildMailto();
            }}
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full border-b border-[var(--color-border)] bg-transparent py-2 text-base text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full border-b border-[var(--color-border)] bg-transparent py-2 text-base text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-[var(--color-muted-soft)]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none border-b border-[var(--color-border)] bg-transparent py-2 text-base text-foreground outline-none transition-colors focus:border-foreground"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
              >
                Send message
              </button>
              <p className="text-xs text-[var(--color-muted-soft)]">
                This form opens your email client. For a real form backend, see
                the README.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
