# Resume & Portfolio Site

A classic, professional personal site built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and TypeScript. Includes a hero, about, work experience, education, skills, project portfolio with detail pages, a writing/blog index, a contact section, and a print-ready résumé page.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── layout.tsx            Root layout, fonts, navbar/footer wiring
│   ├── page.tsx              Home (Hero → About → Experience → Education → Skills → Projects → Writing → Contact)
│   ├── globals.css           Theme tokens (light & dark) + print styles
│   ├── projects/
│   │   ├── page.tsx          Full project index
│   │   └── [slug]/page.tsx   Individual project page (auto-generated from content)
│   ├── blog/
│   │   ├── page.tsx          Writing index
│   │   └── [slug]/page.tsx   Post stub (replace with real prose or wire up MDX)
│   └── resume/page.tsx       Print-styled résumé
├── components/               Reusable UI (Hero, Experience, Skills, ProjectCard, etc.)
└── lib/
    └── content.ts            ★ Edit your content here — name, bio, jobs, projects, posts, etc.
```

## Customization checklist

All content lives in **`src/lib/content.ts`**. Open that file and update:

1. **`site`** — your name, headline, tagline, location, email.
2. **`socials`** — GitHub, LinkedIn, Twitter, etc.
3. **`aboutParagraphs`** — your "about" section.
4. **`experience`** — your work history (most recent first).
5. **`education`** — your degrees.
6. **`skills`** — your toolkit, grouped by category.
7. **`projects`** — your portfolio items. Mark up to ~3 with `featured: true` to surface them on the homepage.
8. **`posts`** — your writing.

Visual tweaks live in `src/app/globals.css` — the color palette is exposed as CSS variables (`--color-accent`, `--color-background`, etc.).

## Resume PDF

The `/resume` page is print-styled. Click **Print / Save as PDF** in the top-right to export a clean PDF using your browser. If you'd rather link to a static PDF file:

1. Drop `resume.pdf` into `public/`.
2. In `src/lib/content.ts`, change `resumeHref: "/resume"` to `resumeHref: "/resume.pdf"`.

## Photos

The hero shows a placeholder portrait card. To use a real photo:

1. Save your photo to `public/portrait.jpg`.
2. In `src/components/Hero.tsx`, replace the placeholder `<div>` with:
   ```tsx
   import Image from "next/image";
   <Image src="/portrait.jpg" alt="Your name" fill className="object-cover" />;
   ```

## Contact form

The form on the homepage opens the visitor's email client (`mailto:` link). For a real form backend, integrate one of:

- [Resend](https://resend.com) (recommended for Next.js)
- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)

Wire it up in `src/components/Contact.tsx` by replacing the `onSubmit` handler with a `fetch` call to your endpoint.

## Blog

The blog routes ship as stubs that render layout + typography from your post metadata. To author real posts, the cleanest upgrade is to add MDX:

```bash
npm install @next/mdx @mdx-js/react @mdx-js/loader
```

Then put `.mdx` files under `content/posts/` and load them dynamically. (Out of scope for the starter, but the layout is ready for it.)

## Deploy

Easiest: push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js and deploys with no configuration.

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — run ESLint
