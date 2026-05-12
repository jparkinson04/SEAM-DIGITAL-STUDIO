# CLAUDE.md — Seam Digital Studio

Project rules and conventions for Claude Code. Read this before touching any file.

---

## What this project is

A single-page marketing website for **Seam Digital Studio**, a digital agency for beauty, wellness and salon businesses in Doncaster and the surrounding areas (South Yorkshire, Sheffield, Rotherham, Barnsley).

- **Owner:** Jessie
- **Tone:** confident, warm, editorial — never corporate
- **Audience:** independent salon and wellness business owners

---

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **Plain JavaScript** (`.jsx`) — NOT TypeScript
- **Plain CSS** in a single `app/globals.css` — NOT Tailwind, NOT CSS Modules
- **`next/font/google`** for Inter + Fraunces (self-hosted)
- **Deployed on Vercel** — auto-deploys on push to `main`. Do not add Netlify config or references.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

---

## File structure (don't reorganise without asking)

```
app/
  layout.jsx        — root layout, fonts, metadata
  page.jsx          — homepage composition
  globals.css       — all styles, CSS variables, responsive rules
components/
  Logo.jsx          — SEAM wordmark, pure CSS, takes `size` and `as` props
  Nav.jsx           — sticky nav, client component for burger menu
  Hero.jsx          — dark hero with big logo
  Ticker.jsx        — cream infinite-scroll marquee
  Services.jsx      — Full Setup + Monthly Care + Content cards
  About.jsx         — founder story, 4 pillars, signature
  HowItWorks.jsx    — 4 dark numbered steps
  Testimonial.jsx   — quote block
  FAQ.jsx           — accordion, client component (useState)
  CTABand.jsx       — closing CTA strip
  Footer.jsx        — 4-column dark footer
  RevealOnScroll.jsx — IntersectionObserver wrapper, client component
public/
  seam-logo.png     — logo asset
```

Page section order (in `app/page.jsx`): **Nav → Hero → Ticker → Services → About → HowItWorks → Testimonial → FAQ → CTABand → Footer**. Don't reorder without asking.

---

## Brand system (non-negotiable)

### Colours (CSS variables, defined in `globals.css`)

```
--ink:     #0E0E0E   primary background (hero, how, testimonial, footer) and text
--ink-2:   #1A1A1A   reserved for future card variants
--cream:   #F2EDE6   primary light background (services, faq, cta, ticker)
--cream-2: #E8E2D8   slightly darker warm cream (about, content card, pillars)
--muted:   #7A756E   secondary text on cream
--muted-2: #9C968D   secondary text on dark
```

### Typography

- **Headings (Fraunces serif)** — large editorial headlines, prices, big numerals. Italic `<em>` accents are a signature move (e.g. "*stitched together*", "*actually ask*").
- **Body / UI (Inter sans)** — everything else. Heavy weights (700/800/900) for labels, badges and button text. Lighter (400/500) for paragraph body.
- **Section labels and small UI** are ALL CAPS with `letter-spacing: 0.15em–0.32em`.

### Layout rules

- Hard 1px or 1.5px ink borders separate cards and sections. No soft shadows, no glassmorphism, no gradients.
- Corners: max **3px border-radius** on buttons. Cards are sharp.
- Generous whitespace is a design element. Section padding is `120px 0` desktop, `80px 0` mobile.
- Max content width: **1320px** centred.
- Mobile-first responsive: tablet breakpoint `900px`, narrow `560px`.

### What to avoid

- Tailwind, CSS-in-JS, CSS Modules — we use a single `globals.css`
- TypeScript — keep it JavaScript
- Decorative dividers, icons or flourishes in the footer
- Stock photos with people
- Purple gradients, neon, glassmorphism, rounded "bubble" buttons
- Inter or Roboto as the *display* font (Fraunces only for big serif headlines)

---

## Conventions

- **Server components by default**. Add `'use client'` only when needed: `Nav` (state for burger), `FAQ` (accordion state), `RevealOnScroll` (IntersectionObserver).
- **Use the `@/*` import alias** (configured in `jsconfig.json`) for any non-relative imports — e.g. `import Hero from '@/components/Hero'`.
- **Anchor links between sections** use `#hash` — section ids: `services`, `about`, `how`, `faq`, `contact`. The `contact` anchor lives on the CTA band.
- **All animations respect `prefers-reduced-motion`** via a media query in `globals.css` — preserve this when adding new animations.
- **Don't write inline styles unless necessary** (a `style={{ color: 'var(--cream)' }}` to invert a heading is fine; full layouts should live in CSS).
- **No emojis** in copy or UI (the logo dashes are the closest thing to ornament).

---

## Adding content

The most common task. Search `components/` for `[YOUR EMAIL]`, `[YOUR HANDLE]`, `[CLIENT NAME]`, `[BUSINESS NAME]` — these are placeholders waiting for real values.

To add a new FAQ item, edit the `ITEMS` array at the top of `components/FAQ.jsx`. Same pattern for service tile arrays in `Services.jsx`, steps in `HowItWorks.jsx`, pillars in `About.jsx`.

---

## Deployment (Vercel)

- Vercel auto-detects Next.js — no `vercel.json` needed.
- Push to `main` → Vercel rebuilds → live in ~30s.
- The Vercel project should be created from the GitHub repo `jparkinson04/SEAM-DIGITAL-STUDIO`.

---

## Do not

- Don't bring back Netlify config (`netlify.toml`, Netlify Forms, Netlify Drop links).
- Don't add `tailwindcss`, `styled-components`, or any styling framework.
- Don't introduce TypeScript files (`.ts` / `.tsx`).
- Don't fetch the contact form data anywhere — there is no backend; the CTA opens a `mailto:` for now.
- Don't push to `main` on every change — Jessie tests locally first.
