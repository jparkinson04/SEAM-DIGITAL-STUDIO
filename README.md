# Seam Digital Studio — Website

A single-page marketing site for **Seam Digital Studio** by Jessie.
Plain HTML, CSS, and a tiny bit of vanilla JavaScript. No build step.

---

## Folder structure

```
seam-digital-studio/
├── CLAUDE.md              ← project rules for Claude Code
├── DESIGN_DOCUMENT.md     ← full design brief
├── README.md              ← you are here
├── index.html             ← the page
├── styles/
│   └── main.css           ← all styles
├── scripts/
│   └── main.js            ← small interactions (mobile nav, etc.)
└── assets/
    ├── images/            ← photos, logo
    └── icons/             ← social icons
```

---

## How to view the site locally

You have two options. Either works.

### Option 1 — Just open the file (simplest)

Double-click `index.html` and it'll open in your browser.
This works fine for previewing.

### Option 2 — Live Server in VS Code (recommended)

This auto-refreshes the page whenever you save a file.

1. In VS Code, click the **Extensions** icon on the left sidebar (four squares).
2. Search for **"Live Server"** (by Ritwick Dey) and click **Install**.
3. Open the project folder in VS Code (`File → Open Folder…`).
4. Right-click `index.html` in the file list and choose **"Open with Live Server"**.
5. Your browser will open at `http://127.0.0.1:5500/`.

---

## How to fill in your content

Open `index.html` and search for `[JESSIE` — every placeholder is wrapped in square brackets so they're easy to find. Replace them with your real text. Save the file. Refresh the browser.

Photos go in `assets/images/`. The `Who I Am` section currently references `assets/images/jessie-placeholder.jpg` — drop your headshot in there and rename it, or update the path in `index.html`.

---

## Instagram feed

The Instagram section has a placeholder block waiting for an embed. To turn it on:

1. Go to [elfsight.com](https://elfsight.com) or [behold.so](https://behold.so).
2. Create a free Instagram feed widget and connect your Instagram account.
3. Copy the embed snippet they give you.
4. In `index.html`, find the comment `<!-- === INSTAGRAM EMBED PLACEHOLDER ===` and paste the snippet inside the `<div class="instagram-embed">` element, replacing the placeholder paragraph.

---

## Contact form

The form uses **Netlify Forms** — it'll start working automatically once the site is deployed to Netlify (it doesn't work locally). No code changes needed.

---

## Deploying to Netlify

The easiest way (no GitHub needed):

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag this entire project folder onto the page.
3. You'll get a live URL straight away (something like `xyz.netlify.app`).
4. You can connect a custom domain later in Netlify's site settings.

If you want auto-deploy whenever you change a file, push the project to a GitHub repo and connect that repo in Netlify — but that can wait.

---

## Design rules

All design decisions live in `CLAUDE.md` and `DESIGN_DOCUMENT.md`. Don't change colours or fonts without updating those files too.
