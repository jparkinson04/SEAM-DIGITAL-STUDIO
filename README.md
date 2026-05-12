# Seam Digital Studio

Marketing site for **Seam Digital Studio**, a Doncaster-based digital studio for beauty, wellness and salon businesses.

Built with **Next.js 15** (App Router) and plain CSS. Deployed on **Vercel**.

---

## Run it locally

You need [Node.js](https://nodejs.org) 18.18+ (the repo was built on Node 22).

```bash
npm install      # one-time, fetches dependencies
npm run dev      # starts a dev server at http://localhost:3000
```

Edit any file under `app/` or `components/` and the browser refreshes automatically.

---

## Project structure

```
seam-digital-studio/
├── app/
│   ├── layout.jsx        # root layout — fonts, <html>, <body>, metadata
│   ├── page.jsx          # the homepage — composes all sections
│   └── globals.css       # all styles (CSS variables, components, responsive)
├── components/
│   ├── Logo.jsx          # the SEAM wordmark + dashed seam motif (pure CSS)
│   ├── Nav.jsx           # sticky nav with mobile burger (client component)
│   ├── Hero.jsx          # dark hero with the big logo
│   ├── Ticker.jsx        # cream infinite-scroll marquee
│   ├── Services.jsx      # Full Setup / Monthly Care / Content cards
│   ├── About.jsx         # founder story + 4 pillars + signature
│   ├── HowItWorks.jsx    # 4-step process, dark
│   ├── Testimonial.jsx   # quote block
│   ├── FAQ.jsx           # accordion (client component)
│   ├── CTABand.jsx       # "Ready to get sorted?" CTA strip
│   ├── Footer.jsx        # 4-column dark footer with logo + links
│   └── RevealOnScroll.jsx # IntersectionObserver wrapper for fade-ins
├── public/
│   └── seam-logo.png     # logo PNG (favicon-ready)
├── next.config.mjs
├── jsconfig.json         # enables the @/* import alias
├── package.json
└── CLAUDE.md             # project rules + conventions (read first)
```

---

## Deployment

Pushes to `main` deploy automatically on Vercel once you've connected the repo.

1. Push `main` to GitHub.
2. On Vercel: **Add New Project** → **Import Git Repository** → pick `SEAM-DIGITAL-STUDIO`.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Add your custom domain in Vercel **Settings → Domains** when you're ready.

---

## Placeholders still in the site

Search for these in `components/` and replace with real content when you have it:

- `[YOUR EMAIL]` — appears in `CTABand.jsx` and `Footer.jsx`
- `[YOUR HANDLE]` — Instagram handle in `Footer.jsx`
- `[CLIENT NAME] · [BUSINESS NAME]` — testimonial attribution in `Testimonial.jsx`
