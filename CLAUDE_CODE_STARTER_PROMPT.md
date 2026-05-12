# Claude Code Starter Prompt — Seam Digital Studio

Copy and paste this into Claude Code in VS Code to kick off the build.
You can use it as your very first message in a new Claude Code session.

---

## THE PROMPT (copy everything below this line)

---

Hi Claude Code! I'm Jessie and I'm building a website for my business, Seam Digital Studio.

I'm a complete beginner with VS Code — please be patient and explain what you're doing as you go, especially if I need to run any commands or install anything.

Please read the CLAUDE.md file in this project first — it has all the design rules, technical decisions, and structure for the site. Then read DESIGN_DOCUMENT.md for the full brief.

Here's a summary of what I need built:

**The site is a single-page scrolling website with these sections:**
1. Hero — studio name, tagline, CTA button
2. Who I Am — my bio and a photo
3. How It Works — my process in numbered steps
4. Services / What's Included — what I offer
5. Pricing — my packages with CTAs
6. Live Instagram Feed — an embedded live feed from my Instagram
7. Footer — social links, contact email, copyright

**Design requirements (these are non-negotiable):**
- Editorial minimalism with warmth — think Kinfolk magazine meets London creative studio
- Colour palette: off-white/cream backgrounds, near-black text, terracotta accent
- Typography: Cormorant Garamond or Playfair Display for headings, DM Sans for body
- Mobile-first — must look beautiful on phones
- Generous white space, alternating light/dark sections
- NO generic AI-website aesthetics (no purple gradients, no Inter font)

**Technical requirements:**
- Plain HTML, CSS, and vanilla JS (no heavy framework needed)
- Live Instagram feed using Elfsight or Behold.so embed (not the API)
- Contact form using Netlify Forms
- Fast loading, accessible, semantic HTML

**To start, please:**
1. Confirm you've read CLAUDE.md and DESIGN_DOCUMENT.md
2. Set up the project folder structure as described in CLAUDE.md
3. Build the HTML skeleton (index.html) with all 7 sections and anchor navigation
4. Set up main.css with all the CSS variables, base styles, and typography
5. Tell me what content you need from me to fill in the real text (bio, services, pricing etc) — mark everything as a placeholder for now

Where content is missing, use clearly labelled placeholders like [JESSIE — ADD YOUR BIO HERE].

Please don't invent my pricing or services — leave those as placeholders until I give you the real details.

Let's go!

---

## WHAT TO DO AFTER THE FIRST BUILD

Once Claude Code has built the skeleton, you'll give it your real content in follow-up messages. Here's a suggested order:

**Message 2:** "Here is my bio: [paste your bio]"
**Message 3:** "Here are my services: [list them out]"
**Message 4:** "Here is my pricing: [paste your packages and prices]"
**Message 5:** "My Instagram handle is [@yourhandle] — please add the Behold.so embed code. Here's the embed snippet: [paste from Behold.so after you sign up]"
**Message 6:** "My social links are: Instagram [link], TikTok [link], LinkedIn [link]"
**Message 7:** "My contact email is [your email] — please set up the contact form to work with Netlify Forms"
**Message 8:** "Here are my brand photos — please add them to the Who I Am section and the Hero"

---

## TIPS FOR WORKING WITH CLAUDE CODE

- If it asks you to run a command, copy it exactly into the VS Code Terminal (Terminal menu → New Terminal)
- If something looks wrong visually, describe what you see: "The heading is too big on mobile" is more useful than "it looks bad"
- Save your files often (Cmd+S on Mac, Ctrl+S on Windows)
- If you want to preview the site, right-click index.html and choose "Open with Live Server" (you may need to install the Live Server extension in VS Code first)
- You can always ask Claude Code to explain what it did and why

---

*File created for Seam Digital Studio — Jessie's VS Code starter kit*
