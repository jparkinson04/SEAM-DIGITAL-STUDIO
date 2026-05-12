# SEAM DIGITAL STUDIO — Website Build Guide
> Everything you need to build the site in VS Code, from folder structure to final details.

---

## 1. BRAND IDENTITY (non-negotiable)

### Colours
```css
--color-dark:   #0E0E0E   /* primary background */
--color-cream:  #F2EDE6   /* primary light / off-white */
--color-mid:    #1A1A1A   /* card / section backgrounds */
--color-border: rgba(255,255,255,0.08)  /* subtle dividers */
--color-accent: #C8A96E   /* warm gold — use sparingly */
--color-muted:  rgba(242,237,230,0.45) /* secondary text */
```

### Typography
```css
/* Load in <head> */
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

--font-display: 'Cormorant Garamond', serif;   /* headings, quotes, large numbers */
--font-body:    'DM Sans', sans-serif;          /* nav, body, UI, labels */
```

### Typography rules
- Section labels: DM Sans, ALL CAPS, `letter-spacing: 0.15em`, `font-size: 0.75rem`, muted colour
- H1: Cormorant Garamond, 300 weight, large (clamp 3rem → 7rem)
- H2: Cormorant Garamond, 400 weight
- Body: DM Sans, 300–400 weight, `line-height: 1.7`
- `border-radius` max 3px on buttons — no bubble shapes

### Aesthetic rules (read before writing a single line of CSS)
- Generous whitespace is a design element, not empty space
- NO decorative footer icons, dividers, or flourishes
- Clean endings to every section — whitespace only
- Thin `1px` borders with `var(--color-border)` to separate, never thick rules
- Grain texture on hero: use SVG `feTurbulence` filter or CSS `background-image: url("data:image/svg+xml...")`
- Buttons: outlined style preferred over filled for primary CTA in hero; sharp corners

---

## 2. PROJECT STRUCTURE

```
seam-digital-studio/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   └── sections/
│       ├── nav.css
│       ├── hero.css
│       ├── features.css
│       ├── pricing.css
│       ├── process.css
│       ├── testimonial.css
│       └── footer.css
├── js/
│   ├── scroll-animations.js
│   └── nav.js
└── assets/
    └── (images, logo SVG when ready)
```

> For a first build, a single `index.html` with `<style>` and `<script>` blocks is fine. Split into files once it's working.

---

## 3. VS CODE SETUP

### Recommended extensions
- **Live Server** (ritwickdey.LiveServer) — instant browser preview on save
- **Prettier** — auto-format HTML/CSS/JS
- **CSS Variables Autocomplete** — helps with `var(--color-*)` usage
- **Color Highlight** — shows hex colours inline in editor

### Settings to add (`.vscode/settings.json`)
```json
{
  "editor.formatOnSave": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "css.lint.unknownAtRules": "ignore"
}
```

### Starting the build
1. Create the folder structure above
2. Right-click `index.html` → **Open with Live Server**
3. Every save auto-refreshes the browser

---

## 4. HTML PAGE STRUCTURE

Build these sections in order inside `<body>`:

```html
<nav id="nav">...</nav>

<section id="hero">...</section>

<div id="marquee-bar">...</div>          <!-- scrolling location strip -->

<section id="problem">...</section>

<section id="services">...</section>     <!-- What's Included -->

<section id="pricing">...</section>

<section id="process">...</section>      <!-- How It Works -->

<section id="about">...</section>

<section id="testimonial">...</section>

<section id="contact">...</section>

<footer id="footer">...</footer>
```

---

## 5. SECTION-BY-SECTION SPECS

### NAV
- Fixed/sticky, `background: rgba(14,14,14,0.92)`, `backdrop-filter: blur(12px)`
- Logo left: `SEAM` in Cormorant Garamond + `DIGITAL STUDIO` in small DM Sans caps beneath
- Links right: SERVICES · HOW IT WORKS · ABOUT · CONTACT
- CTA: `BOOK A DISCOVERY CALL` — 1px cream border, transparent fill, hover: fill cream, text dark
- Adds `.scrolled` class via JS after 50px scroll (can add subtle border-bottom)

### HERO
- Full viewport height (`min-height: 100vh`)
- Background: `#0E0E0E` + SVG grain overlay (see grain snippet below)
- Typographic-led — NO hero image
- Large H1: *"Everything your salon needs. Online and sorted."*
- Subheadline: DM Sans, muted, one line
- Two CTAs side by side
- Fade + translate-up animation on load (CSS keyframes, staggered with `animation-delay`)

**Grain texture snippet:**
```css
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
}
```

### MARQUEE / LOCATION BAR
- Thin strip, `background: var(--color-cream)`, `color: var(--color-dark)`
- DM Sans caps, small, `letter-spacing: 0.12em`
- CSS marquee animation (infinite scroll left)
- Text: `Serving salons · beauty studios · wellness spaces · Doncaster · South Yorkshire · Sheffield · Rotherham · Barnsley ·`

**CSS marquee:**
```css
.marquee-track {
  display: flex;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### THE PROBLEM
- 2-column grid on desktop, stack on mobile
- Left: bold H2 statement — *"Most salons are invisible online. Not because they're not good — because no one has set them up properly."*
- Right: 3–4 pain points, each separated by a thin `1px` border, no icons — plain text with em dash prefix

### WHAT'S INCLUDED
- Section label: `THE SETUP PACKAGE`
- 6 tiles in a `grid-template-columns: repeat(3, 1fr)` (→ 2 col → 1 col on mobile)
- Each tile: `background: var(--color-mid)`, `border: 1px solid var(--color-border)`
- Tile content: feature name in DM Sans ALL CAPS + one italic Cormorant Garamond line beneath
- Features:
  - CUSTOM WEBSITE / *Built to reflect your brand and convert visitors*
  - BOOKING SYSTEM / *Integrated and ready to take appointments from day one*
  - GOOGLE REVIEWS / *A system that generates 5-star reviews on autopilot*
  - SOCIAL-TO-WEBSITE FLOW / *Your Instagram audience lands where it matters*
  - LIVE INSTAGRAM FEED / *Keep your site fresh without touching it*
  - 15-POST CONTENT PACK / *Launch with content that's ready to go*

### PRICING
- Section label: `WHAT IT COSTS`
- Two large number blocks side by side:
  - `£950` — Setup Package (one-time)
  - `£300 /mo` — Monthly Retainer
- Number in Cormorant Garamond, very large (5–6rem), thin weight
- Label in DM Sans small caps beneath
- Fine print: *"Includes everything in the setup. Retainer keeps it maintained, updated, and growing."*

### HOW IT WORKS (PROCESS)
- Section label: `THE PROCESS`
- 4 steps — horizontal row on desktop, vertical on mobile
- Step number: large Cormorant Garamond (8rem), `color: var(--color-border)` (ghost number behind title)
- Steps: Discovery Call → Setup & Build → Launch → Monthly Support
- One sentence per step in DM Sans

### ABOUT
- Short paragraph, left-aligned, max-width 600px
- *"Seam Digital Studio is a Doncaster-based agency built for local beauty and wellness businesses. No jargon, no fluff — just the setup you should have had from day one."*
- Founder line: *"Founded by Jessie, a digital specialist who got tired of watching brilliant local businesses fall flat online."*

### TESTIMONIAL
- Single quote block, centred
- Large `"` in `var(--color-accent)` (gold), Cormorant Garamond
- Quote text in Cormorant Garamond italic
- Attribution: DM Sans, small, muted — `— Client Name, Business Name`
- Thin 1px border left accent in gold

### CONTACT / CLOSING CTA
- Large H2: *"Ready to get sorted?"*
- Subline: *"Book a free 20-minute discovery call. No pressure, no pitch — just a conversation."*
- Single CTA button: `BOOK YOUR CALL` — filled cream, dark text (inverted from hero)
- Below: plain text email + Instagram handle as links

### FOOTER
- Minimal: logo left, copyright centre/right, two links (Privacy · Instagram)
- `background: var(--color-dark)`, `color: var(--color-muted)`
- DM Sans, small, lots of vertical padding
- **NO icons, NO decorative elements**

---

## 6. SCROLL ANIMATIONS

Add this JS to trigger fade-in on every section:

```javascript
// js/scroll-animations.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

```css
/* In base.css */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Add `class="animate-on-scroll"` to any element you want to fade in on scroll.

---

## 7. RESPONSIVE BREAKPOINTS

```css
/* Mobile first — then scale up */
@media (min-width: 640px)  { /* tablet */  }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* wide */    }

/* Key mobile rules */
@media (max-width: 768px) {
  .two-col   { grid-template-columns: 1fr; }
  .three-col { grid-template-columns: 1fr; }
  nav .links { display: none; } /* add hamburger menu if needed */
}
```

---

## 8. WHAT TO AVOID

| ❌ Don't | ✅ Do instead |
|---|---|
| Purple/blue gradients | Dark + cream + gold accent only |
| Inter or Roboto | Cormorant Garamond + DM Sans |
| Rounded bubble buttons | Sharp corners, max 3px radius |
| Glassmorphism | Solid `#1A1A1A` cards with subtle border |
| Stock photos with people | Typographic-led, no imagery needed |
| Decorative footer icons | Whitespace and plain text only |
| Emoji anywhere | Never |
| Wix-style section dividers | Empty space between sections |
| Box shadows everywhere | One subtle shadow max, used intentionally |
| Lots of colours | Stick to the 5 defined CSS variables |

---

## 9. QUICK COPY REFERENCE

**Business:** Seam Digital Studio
**Location:** Doncaster (serves South Yorkshire, Sheffield, Rotherham, Barnsley)
**Audience:** Beauty salons, wellness studios, nail technicians, hair salons, aesthetics clinics
**Pricing:** £950 setup + £300/month retainer
**CTA:** Book a free 20-minute discovery call
**Instagram:** (add handle when live)
**Email:** (add address when live)

**Taglines to use:**
- *"Everything your salon needs. Online and sorted."*
- *"The digital setup your business deserves."*
- *"Stop being invisible. Start getting found."*

---

## 10. LAUNCH CHECKLIST

- [ ] Fonts loading correctly from Google Fonts
- [ ] All CSS variables defined in `:root`
- [ ] Mobile responsive at 375px, 768px, 1024px
- [ ] Scroll animations working on all sections
- [ ] Nav CTA links to contact section (`href="#contact"`)
- [ ] Grain texture visible but subtle on hero
- [ ] No decorative elements in footer
- [ ] All section labels in ALL CAPS with letter-spacing
- [ ] Buttons have hover states
- [ ] Page loads under 2 seconds (no heavy assets)
- [ ] Meta title + description set in `<head>`

---

*Built for Seam Digital Studio — Doncaster's digital setup agency for beauty and wellness.*
