# Didi's Cafe & Bakery — Landing Page MVP Plan & Dev Checklist

> **Project brief:** Build a 3-page landing site for Didi's Cafe & Bakery (@didisonaroll), a family-run artisan bakery-cafe in Wangsa Maju, Kuala Lumpur. The site must feel warm, intimate, and editorial — like a small magazine, not a restaurant menu. The brand's core identity: European bakes with Malaysian souls (rendang croissants, masak lemak ciabatta, ondeh-ondeh pastries), founded by Nashilla Rafiq (former lawyer) and run with her mother. Premium positioning. Tech stack: Astro + Tailwind CSS + Framer Motion (via React islands) + Vercel. Mobile-first, fast on 4G.
>
> **Language policy: ALL CONTENT IN ENGLISH BY DEFAULT.** Bahasa Malaysia food names (rendang, masak lemak, dendeng, ondeh-ondeh, ayam balado) appear naturally in product names — that's correct usage, don't anglicize them. Body copy, descriptions, headings, CTAs all in English. The word "Didi" (Hindi for elder sister) stays as-is — it's the brand name.
>
> **⚠️ IMPORTANT — Verify before pitching:** One source mentioned the cafe might be closing. Check with owner via WhatsApp before investing time in the build.

---

## 1. Brand Audit (research findings)

**Identity:** Didi's Cafe & Bakery · Wangsa Maju · Family-run artisan bakery · Since Feb 2025

**The story (gold for copy):**
- Owner Nashilla Rafiq, 35, a former lawyer and mum
- "Didi" = "elder sister" in Hindi (her family nickname)
- Started because the entire family loves coffee
- Mother Noor Shida Ismail is often at the cafe chatting with customers
- Tested through pop-ups before opening properly
- IG handle: @didisonaroll (charming, playful — "on a roll")

**The hook (the design's center of gravity):**
- European bakes meet Malaysian flavors
- Signature items:
  - **Rendang Croizza** (croissant + pizza hybrid)
  - **Masak Lemak Ciabatta** (shredded chicken in masak lemak sauce)
  - **Ondeh-Ondeh pastries** (gula melaka, coconut)
  - **Garlic Confit Focaccia**
  - **Pistachio Croissant**
  - **Coffee Cream Croissant** with cherry jam + Biscoff crumbs
  - **Matcha Strawberry Latte**
  - **Butterscotch Latte**
  - **Gula Apong Latte** (Malaysian palm sugar specialty)

**Audience:**
- Brunch crowd
- Date-night couples
- Work-friendly cafe seekers (laptop students/professionals)
- Matcha enthusiasts
- People who appreciate craft and care over volume

**Vibe:** Calm, boutique, warm lighting, curated playlist, characterful tables, pastries baked fresh daily on-site

**Hours (verified):**
- Closed Mondays
- Tue-Thu: 9am – 12am
- Fri-Sun: 9am – 1am

**Price point:** Premium — RM16-26 per pastry/dish. Site needs to *feel* like the premium price is justified.

**Reviews:**
- 4.8⭐ Google
- 2,432 IG followers (small but engaged)
- Featured in Eat Drink KL, FMT Lifestyle, TikTok influencers
- Praised for: "warmth and kindness," friendly staff, beautiful ambience, fresh pastries
- Criticisms: slow service at peak times, slightly pricey

**Emotional positioning:** *"Pastries with a passport. Made by family, for family."*

---

## 2. Design Direction

### Color Palette

This brand needs **soft, editorial, food-magazine** vibes — not industrial, not bright, not cute-cartoonish. Think *Kinfolk meets a Parisian boulangerie*.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Soft Off-White | `#F8F4ED` |
| Surface / cards | Pure Cream | `#FDFAF3` |
| Text (primary) | Espresso Brown | `#3A2A1F` |
| Text (secondary) | Mocha | `#6E5444` |
| Accent (THE color) | Burnt Sienna | `#A85D3A` |
| Secondary accent | Pistachio Green | `#9DAA7C` |
| Highlight (rare) | Saffron | `#D9A441` |
| Dark sections | Espresso Dark | `#2B1F17` |

**Why these:** Burnt sienna ties to baked crusts, terracotta ovens, the warm tone of croissants. Pistachio green gives a "fresh herbs / matcha / signature pistachio croissant" connection. Espresso brown grounds it in coffee culture. Off-white background lets food photography pop without competing.

### Typography

- **Display / Headings:** `Cormorant Garamond` — elegant serif with character, feels editorial. Or `DM Serif Display` for a slightly bolder option.
- **Body:** `Inter` — clean, readable
- **Accent / Quotes:** `Cormorant Garamond Italic` for pull quotes
- **Numerals (prices):** Same `Inter` — keep it elegant, not utilitarian
- **Optional handwritten:** `Caveat` for "fresh today" annotations or small personal notes

All Google Fonts.

### Mood Board

Editorial · Warm · Intimate · Premium · Slightly Old-World · Family · Craft · Soulful

Visual references: Cereal magazine, Kinfolk, NYT Cooking, Apartamento. NOT: BBC Good Food, generic café templates, Squarespace basics.

---

## 3. Tech Stack

Same reusable foundation as Ai Delicious + Tiffin 55.

| Layer | Tool |
|-------|------|
| Framework | Astro 5 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (React islands) |
| Deployment | Vercel |
| Forms | Formspree |
| Analytics | Vercel Analytics |
| Icons | Lucide React |

---

## 4. Page Architecture

### Page 1 — Home (`/`)

Designed as a *magazine spread*, not a restaurant menu page.

1. **Sticky navbar** — soft off-white background, "Didi's" wordmark in Cormorant left, links right (Home · Bakes · Story · Visit), small WhatsApp text-link
2. **Hero** — split layout (text left, photo right on desktop; stacked mobile)
   - Eyebrow: small uppercase tracking-wide "WANGSA MAJU · BAKERY · CAFE"
   - Headline: **"Pastries with a passport."**
   - Subhead: "European bakes, Malaysian souls. Made fresh every morning by family — the way it should be."
   - CTAs: "See What's Baking" (sienna filled) + "Visit Us" (sienna outline)
   - Right side: large editorial photo of signature croissant or croizza
   - Subtle handwritten "fresh today" annotation in Caveat over the photo
3. **The Story Pull-Quote** (full-width, dramatic)
   - Large italic Cormorant text: *"All of this started because our entire family loves coffee."*
   - Attribution: "— Nashilla, founder · former lawyer, mum"
4. **Signature Bakes Showcase** (4 items in 2x2 grid)
   - Rendang Croizza · Masak Lemak Ciabatta · Pistachio Croissant · Garlic Confit Focaccia
   - Each card: large photo, name in serif, 1-line poetic description, price
   - Hover: subtle zoom + caption fade
5. **Coffee & Matcha section** (alternating layout)
   - 2-column: text + photo
   - Heading: "And in the cup —"
   - Featured: Gula Apong Latte, Butterscotch Latte, Coconut Matcha, Matcha Strawberry
   - Special note: "Wednesdays — 10% off matcha for ladies' night"
6. **The Family** section (intimate)
   - Photo of Nashilla and her mother (if available, otherwise interior shot)
   - 2-paragraph story pulled from FMT article
   - Heading: "Run by the people who eat here too."
7. **Editorial features** (press strip)
   - Logos/text from: Eat Drink KL · FMT Lifestyle · KL Foodie
   - Small reviews/quotes
8. **Visit teaser** — map preview, today's hours, "See you soon" CTA
9. **Footer** — wordmark, address, hours, socials, FoodPanda link, "Made with love (and butter) in Wangsa Maju."

### Page 2 — Bakes (`/bakes`)

Don't call it "Menu" — call it "Bakes" or "What's Baking" to match the magazine voice.

- **Bakes Hero** — soft hero, headline "Today, We're Baking" + subhead "Everything baked fresh on-site, every morning."
- **Category navigation** (sticky, sienna underline on active):
  - Croissants & Croizzas · Ciabattas · Focaccias · Sweet Pastries · Cakes · Coffee · Matcha · Specialties
- **Filter chips:** Halal ✓ · Vegetarian · Signature · New
- **Bakes grid** — magazine-style asymmetric layout, NOT a uniform card grid:
  - Featured items get larger cells
  - Mix of square + portrait cells
  - Each item: hero photo, name (serif), poetic description, price (right-aligned, elegant)
  - Hover: photo crossfades to second angle (if available), or zoom
- **"Reserve a Bake" callout** — for whole croissants/cakes, WhatsApp link with pre-filled message
- **Order block at bottom** — WhatsApp + FoodPanda buttons (no GrabFood mentioned in research)

### Page 3 — Story & Visit (`/story`)

This is where the family narrative shines.

- **Hero:** "Didi means elder sister." + subhead about the name origin
- **The Beginning section** — 2-column with photos
  - Story: "It started with a family that loved coffee."
  - The pop-up tests, the realization, the chef partnerships, opening Feb 2025
- **The Family section** — feature on Nashilla + her mother
  - Pull quote from mom about people sharing pieces of their lives
  - The Mother's Day moment (the two girls in tears) — with sensitivity
- **The Bakery section** — the craft side
  - In-house pastry chef, fresh daily, no shortcuts
  - Photos of process: dough, ovens, decorating
- **The Space section** — full-bleed interior carousel
  - Caption: "Calm. Warm-lit. Conversation-level music."
- **Visit section**
  - Embedded Google Maps
  - Address: 69, Jalan Wangsa Delima 5, Pusat Bandar Wangsa Maju, 53300 KL
  - Hours (closed Mondays — make this VERY clear)
  - Phone: 017-610 2521
  - WhatsApp CTA, parking note
- **Contact form** (Formspree) — Name, phone/email, message, optional event/cake order date
- **Social block** — Instagram (@didisonaroll), TikTok

---

## 5. Animation Plan

This brand = **gentle, considered, almost lazy** animations. The opposite of Tiffin 55's kinetic energy. Think: turning a page in a beautiful book.

| Element | Animation | Detail |
|---------|-----------|--------|
| Hero text | Slow fade-in + tiny upward drift | 700ms ease-out |
| Hero photo | Scale 1.02 → 1.0 settle on load | 1000ms |
| Pull quote | Letter-by-letter fade or word-by-word reveal | poetic |
| Bakes cards | Soft fade-up on scroll, no rotation | 500ms |
| Card hover | Slow zoom 1.0 → 1.04, photo crossfade if 2nd image exists | 600ms |
| Story sections | Parallax-like text-photo offset (gentle) | scroll-tied |
| Family pull quote | Italic text gentle fade-in, attribution slides in 300ms after | sequenced |
| Section transitions | Astro view transitions, soft crossfade | built-in |
| Navbar scroll | Backdrop blur + bottom hairline | 250ms |
| WhatsApp icon | NO bounce/pulse — static, intentional | restraint |

**Rules:**
- Animations slower than the other two brands (700ms+ is normal here)
- Never use bouncy/spring easings — use ease-in-out only
- Respect `prefers-reduced-motion`
- No marquees, no flashes, no swipes
- Restraint is the brand

---

## 6. Copywriting

### Voice

- Editorial, warm, slightly poetic
- Sentences can be longer than the other brands — readers will read here
- Use sensory food language: "flaky," "buttery," "fragrant," "crackling"
- Family/heart references are welcome — they're authentic to this brand
- Avoid corporate words and avoid the cheeky tone of Tiffin 55

### Sample Copy

**Hero**
> WANGSA MAJU · BAKERY · CAFE
> # Pastries with a passport.
> European bakes, Malaysian souls. Made fresh every morning by family — the way it should be.
>
> [See What's Baking] [Visit Us]

**Pull quote section**
> "All of this started because our entire family loves coffee."
> — Nashilla, founder · former lawyer, mum

**Signature bakes intro**
> What we're known for.
> A short list. We'd rather do a few things, properly.

**Rendang Croizza description**
> A flaky croissant, dressed like a pizza, topped with slow-cooked beef rendang. Familiar flavor, unfamiliar shape.

**Masak Lemak Ciabatta description**
> Crusty Italian bread, stuffed with bright yellow masak lemak chicken. Spicy, creamy, tangy, never oily.

**Coffee & matcha section**
> And in the cup —
> Specialty coffee, ceremonial-grade matcha, and a couple of sweet liberties (gula apong, butterscotch, coconut). Wednesdays are matcha ladies' night — 10% off.

**The Family section**
> Run by the people who eat here too.
> Didi's is Nashilla, her mom Noor Shida, and a small team of bakers who treat every loaf like it's going to their own table. You'll often find Noor Shida at the front, coffee in hand, asking how your day's been. She means it.

**Visit closing line**
> Closed Mondays — that's when we rest, plan, and prep the week's bakes.

**Footer tagline**
> Made with love (and butter) in Wangsa Maju.

**WhatsApp CTA**
> Whatsapp us — for orders, reservations, or to reserve tomorrow's croissants.

### SEO Meta

- **Home title:** `Didi's Cafe & Bakery | Artisan Pastries with Malaysian Souls | Wangsa Maju`
- **Home meta description:** `Family-run bakery in Wangsa Maju. European pastries with Malaysian flavors — rendang croizza, masak lemak ciabatta, ondeh-ondeh croissants. Specialty coffee & matcha. Halal. Closed Mondays.`
- **Schema:** Restaurant / Bakery, servesCuisine: ["Bakery", "European", "Malaysian Fusion"], priceRange: "$$"
- **OG image:** Hero shot of a croizza or croissant array, with wordmark overlay

---

## 7. UI/UX Principles For This Brand

1. **White space is sacred** — generous padding everywhere. Don't cram. The bakery's whole vibe is "slow down."
2. **Photography hero, copy supporting** — every section is photo-led
3. **Editorial typography hierarchy** — large serif headlines, lots of room around them
4. **Limit the palette ruthlessly** — sienna for CTAs only, pistachio for accents only. The rest is neutrals.
5. **Mobile reads like a beautiful Instagram feed** — tall photos, short captions, breathing room
6. **Closed Mondays must be unmissable** — surface this everywhere, not buried in fine print
7. **Premium price needs premium presentation** — every dish photo must be magazine-quality. Insist on great photos from the owner.
8. **Story comes through copy, not stock phrases** — the "former lawyer mom" angle, the "elder sister" name, the Mother's Day story — these are real and valuable. Use them.
9. **No carousels of dish photos crammed together** — this isn't McDonald's. Let each item breathe.
10. **No "Order Now" pressure tactics** — the brand is patient. CTAs are inviting, not aggressive.

---

## 8. Content Needed From Owner

1. **High-res signature bake photos** — rendang croizza, masak lemak ciabatta, garlic focaccia, pistachio croissant (insist on great photos — premium brand needs them)
2. **Photo of Nashilla and/or her mom** — humanizes the site. Even a candid shot works.
3. **Interior photos** — warm lighting, characterful tables
4. **Behind-the-scenes baking shots** — dough, ovens, pastry chef at work (visual storytelling)
5. **Confirmed full menu with prices** — must be current
6. **Confirmed hours** (already verified above but double-check)
7. **WhatsApp business number** (017-610 2521 listed publicly)
8. **Logo files** — vector preferred
9. **Permission for the family story** — confirm they're OK with the FMT Lifestyle quotes being used
10. **Permission to quote Eat Drink KL / FMT review snippets**
11. **Confirmation cafe is NOT closing** ⚠️ (one source mentioned this — must verify before building)

---

## Phase-by-Phase Development Checklist

> Paste these phase by phase into Claude Code. One at a time.

---

### Phase 0 — Project Setup

- [ ] Initialize Astro project with TypeScript strict mode
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Add React: `npx astro add react`
- [ ] Install: `framer-motion`, `lucide-react`
- [ ] Install fonts via fontsource: `@fontsource/cormorant-garamond`, `@fontsource/inter`, `@fontsource/caveat`
- [ ] Set up folder structure:
  ```
  src/
    components/
    sections/
    layouts/BaseLayout.astro
    pages/index.astro, bakes.astro, story.astro
    styles/global.css
    assets/images/{interior,bakes,family,process,logo}
    data/bakes.json, reviews.json, site.json
  public/
  ```
- [ ] Init Git, `.gitignore`, first commit
- [ ] Create `.env.example`: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`

---

### Phase 1 — Design System

- [ ] Extend Tailwind theme with palette (off-white, cream, espresso-brown, mocha, sienna, pistachio, saffron, espresso-dark)
- [ ] Configure font families: `font-display` (Cormorant Garamond), `font-body` (Inter), `font-accent` (Caveat)
- [ ] Add custom Tailwind animations: `fade-in-slow`, `gentle-rise`, `letter-fade`
- [ ] Configure custom letter-spacing utilities for editorial uppercase eyebrow text
- [ ] Create `BaseLayout.astro` — light theme default, Cormorant + Inter loaded with `font-display: swap`
- [ ] Create reusable components:
  - [ ] `Button.astro` — variants: filled (sienna bg, cream text), outline (sienna border), text-link
  - [ ] `Container.astro` — generous max-w + padding
  - [ ] `SectionHeading.astro` — eyebrow (uppercase tracking-wide) + serif headline + optional subhead
  - [ ] `Eyebrow.astro` — small uppercase letter-spaced text component
  - [ ] `PullQuote.astro` — large italic Cormorant + attribution
- [ ] Create `Navbar.astro` — soft cream bg, serif wordmark "Didi's", refined hamburger drawer on mobile
- [ ] Create `Footer.astro` — espresso-dark bg, cream text, 3-col, tagline "Made with love (and butter) in Wangsa Maju."
- [ ] Create `WhatsAppFloat.astro` — minimal, no bounce, sienna circle
- [ ] Test responsiveness at 375px / 768px / 1440px

---

### Phase 2 — Data Files

- [ ] Create `src/data/site.json` — name, tagline, address, phone (017-610 2521), WhatsApp, hours object (CRITICAL: closed Monday flag), social URLs (@didisonaroll), foodpanda URL, Google Maps embed URL
- [ ] Create `src/data/bakes.json` with categories: `Croissants & Croizzas`, `Ciabattas`, `Focaccias`, `Sweet Pastries`, `Cakes`, `Coffee`, `Matcha`, `Specialties`. Each item: name, description (poetic, English), price (number), image path, tags array, optional `secondImage` for hover crossfade, optional `featured: true` flag for asymmetric layout
- [ ] Create `src/data/press.json` — Eat Drink KL, FMT Lifestyle, KL Foodie quotes/links
- [ ] Create `src/data/reviews.json` — 3 selected reviews with quote, name, rating, date

---

### Phase 3 — Home Page (`/`)

- [ ] **Hero section** (`src/sections/Hero.astro`):
  - Split layout: text left (50%), photo right (50%) on desktop; stacked on mobile
  - Eyebrow: "WANGSA MAJU · BAKERY · CAFE" — sienna, tracking-widest, small caps
  - Headline: "Pastries with a passport." — Cormorant Garamond, 64px+ desktop / 40px mobile
  - Subhead: 18-20px, max-width 540px, mocha color
  - CTAs: "See What's Baking" (sienna filled) + "Visit Us" (outline)
  - Photo: large editorial bake shot with subtle Caveat "fresh today" overlay annotation rotated -3°
  - Framer Motion: gentle stagger (eyebrow → headline → subhead → CTAs), 700ms each
- [ ] **Pull Quote section** (`src/sections/PullQuote.astro`):
  - Full-width, centered, generous vertical padding
  - Italic Cormorant, 36-48px desktop
  - Attribution below in smaller mocha text
  - Word-by-word reveal animation on scroll
- [ ] **Signature Bakes** (`src/sections/SignatureBakes.astro`):
  - Eyebrow: "WHAT WE'RE KNOWN FOR"
  - Heading: "A short list. We'd rather do a few things, properly."
  - 2x2 grid (desktop), 1-col stack (mobile)
  - Each card: photo (4:5 ratio), name (serif), 1-line poetic description, price
  - Hover: slow zoom + crossfade to second angle if available
- [ ] **Coffee & Matcha** (`src/sections/CoffeeMatcha.astro`):
  - Alternating 2-col layout (text + photo)
  - Heading: "And in the cup —"
  - 4 featured drinks with poetic descriptions
  - Highlight box: "Wednesdays — Ladies' Night Matcha" with pistachio accent
- [ ] **The Family** (`src/sections/TheFamily.astro`):
  - Heading: "Run by the people who eat here too."
  - Photo (Nashilla/Noor Shida if available, else interior) + 2 paragraphs
  - Subtle pistachio accent on a key phrase
- [ ] **Editorial Press** (`src/sections/Press.astro`):
  - Strip with Eat Drink KL / FMT / KL Foodie logos or text
  - 1-line quote from each
  - Subtle bottom-border separator design
- [ ] **Visit Teaser** (`src/sections/VisitTeaser.astro`):
  - Map preview + today's hours (dynamically show "Closed today" if Monday)
  - "See you soon" CTA
- [ ] Wire `pages/index.astro`, add SEO meta + OG tags

---

### Phase 4 — Bakes Page (`/bakes`)

- [ ] **Bakes Hero** — soft hero, headline "Today, We're Baking"
- [ ] **Category navigation** (`src/components/BakesTabs.tsx`) — React island, sticky, sienna underline animated with `layoutId`
- [ ] **Filter chips** — Halal ✓, Vegetarian, Signature, New (multi-select)
- [ ] **Asymmetric magazine grid** (`src/components/BakesGrid.tsx`):
  - CSS Grid with mixed cell sizes — featured items span 2 columns
  - Mix of 4:5 and 1:1 image ratios
  - Each card: photo, name (serif), description (italic optional), price (right-aligned)
  - Hover: slow zoom OR crossfade to second angle
  - Fade-up on scroll (slow, 500ms)
- [ ] **Reserve a Bake callout** — for whole pastries / advance orders
  - Eyebrow + heading + WhatsApp button with pre-filled message ("Hi Didi's, I'd like to reserve…")
- [ ] **Order block** — WhatsApp + FoodPanda buttons
- [ ] SEO meta for /bakes page

---

### Phase 5 — Story Page (`/story`)

- [ ] **Story Hero** — heading "Didi means elder sister." + subhead
- [ ] **The Beginning** — 2-col text + photo
  - Family, coffee, pop-ups, opening February 2025
- [ ] **The Family** — Nashilla + Noor Shida feature
  - Pull quote from mother
  - Mother's Day moment paragraph (handle with appropriate sensitivity, no exploitation)
- [ ] **The Bakery (craft)** — process photos, in-house pastry chef
- [ ] **The Space** — full-bleed interior carousel
  - Caption: "Calm. Warm-lit. Conversation-level music."
- [ ] **Visit section**:
  - Embedded Google Maps
  - Address, phone, WhatsApp
  - Hours table with **closed Monday** highlighted in sienna
  - Parking note
- [ ] **Contact form** (`src/components/ContactForm.tsx`):
  - Fields: name, phone/email, message, optional `Reservation / Event Date`
  - Formspree submit, validation, success/error state
- [ ] **Social block** — large IG card (@didisonaroll), TikTok, FoodPanda
- [ ] SEO meta for /story page

---

### Phase 6 — Animations Polish

- [ ] All scroll reveals: `whileInView` + `viewport={{ once: true, margin: "-50px" }}`, slow durations (500-700ms)
- [ ] Hero stagger animation
- [ ] Pull quote word-by-word reveal (split text into spans, stagger 60ms)
- [ ] Bakes card hover: smooth zoom + image crossfade if second image present
- [ ] Navbar scroll: subtle backdrop blur + hairline border bottom
- [ ] Filter / tab `layoutId` for smooth underline transitions
- [ ] `useReducedMotion()` integration — disable all transforms if user prefers
- [ ] Slow 3G test — content readable while images load progressively

---

### Phase 7 — Images & Assets

- [ ] Organize: `bakes/`, `interior/`, `family/`, `process/`, `logo/`
- [ ] Use Astro `<Image>` with quality=85, WebP, lazy load (except hero)
- [ ] Hero: `<Picture>` with art-directed mobile/desktop crops
- [ ] Alt text for every image — be descriptive (good SEO + accessibility)
- [ ] OG image (1200x630): hero bake shot + wordmark
- [ ] Favicon set
- [ ] **If photos are blurry from internet sources:** run through Upscayl 2x before importing

---

### Phase 8 — SEO & Schema

- [ ] Per-page meta titles + descriptions (use Section 6 copy)
- [ ] OG tags on each page
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] JSON-LD `Bakery` schema:
  - Name, alternateName, address, phone
  - openingHoursSpecification (CRITICAL: include `dayOfWeek: "Monday", opens: null, closes: null`)
  - priceRange "$$"
  - servesCuisine ["Bakery", "European", "Malaysian Fusion"]
  - aggregateRating (4.8, ~200 reviews)
- [ ] `robots.txt` allow all
- [ ] Sitemap via `@astrojs/sitemap`

---

### Phase 9 — Performance & Accessibility

- [ ] Lighthouse 95+ all categories
- [ ] All images lazy except hero
- [ ] Font-display: swap
- [ ] Test color contrast WCAG AA — sienna on cream and mocha on cream (verify, mocha on cream may need tweaking)
- [ ] Keyboard nav works on tabs, filters, form
- [ ] Icon-only buttons get `aria-label`
- [ ] Visible focus states (use sienna outline)
- [ ] Test with VoiceOver / NVDA — pull quotes and asymmetric grid must be navigable

---

### Phase 10 — Deployment

- [ ] Push to GitHub
- [ ] Connect Vercel, configure build
- [ ] Set env vars
- [ ] Test on real iPhone Safari + Android Chrome
- [ ] Custom domain wiring (when client purchases)
- [ ] Vercel Analytics on
- [ ] UptimeRobot monitor

---

### Phase 11 — QA Before Handoff

- [ ] All browsers (Safari iOS, Chrome Android, desktop Chrome/Firefox/Safari)
- [ ] WhatsApp button opens correct chat with pre-filled message
- [ ] Contact form delivers
- [ ] Google Maps embed loads
- [ ] All external links: `target="_blank" rel="noopener"`
- [ ] **Verify "closed Monday" is visible on:** navbar (if today is Mon), hero, visit section, footer
- [ ] All prices verified
- [ ] Proofread — no typos, no placeholder
- [ ] 404 page exists
- [ ] 3G throttle test

---

### Phase 12 — Handoff

- [ ] Client README — change requests process, retainer scope, domain renewal
- [ ] Send: live URL, page summary, screenshots, invoice
- [ ] Tag v1.0.0 in Git
- [ ] Add to portfolio as case study

---

## Notes for Claude Code

- Read previous phase output before next phase
- Commit after each phase: `feat(phase-3): home page sections`
- If stuck on design choices, default mood: editorial, warm, intimate, premium, slow
- This is NOT a fast-food site — avoid bold/loud, avoid neon, avoid pressure CTAs
- Photography is everything for this brand — leave generous space for it
- Don't over-engineer — 3 static pages, no CMS, no auth
- Placeholder images: high-quality artisan bakery / Parisian boulangerie shots from Unsplash
- **Language rule (strict):** All readable content in English. Bahasa Malaysia food terms (rendang, masak lemak, ondeh-ondeh, dendeng, ayam balado, gula apong) appear naturally in product names — keep them. The brand name "Didi's" stays. Don't translate body copy or section headings.
- **"Closed Mondays" rule:** Surface this in nav (if current day is Monday), hero subhead, visit section, footer. Never hide it.

---

## Pricing Suggestion

Premium brand → premium price.

| Item | Price (RM) |
|------|-----------|
| 3-page editorial landing site | 3,500 |
| Domain (.com, 1 year) | 60 |
| Hosting (Vercel free) | 0 |
| Google Workspace email (1 user, 1 year) | 120 |
| **One-time total** | **~3,700** |
| Monthly maintenance retainer | 200/month |

Portfolio discount for first version: RM2,800.

**Strong upsell paths for this client:**
- Photography session (artisan bake + behind-the-scenes, half day): +RM500
- Online ordering for whole pastries / pre-orders: +RM1,500
- Custom cake / event order form: +RM800
- Newsletter integration (this audience reads): +RM400
- Monthly Instagram caption assistance: +RM300/month
- Loyalty card / member program: +RM1,500

---

## Pitch Angle For This Client Specifically

When you reach out to Nashilla, this is the angle:

> "Didi's already has the soul — the family story, the European-meets-Malaysian craft, the matcha ladies' night. What's missing is the home for that story online. Right now, when someone reads about you on FMT Lifestyle or Eat Drink KL and Googles 'Didi's Wangsa Maju', they land on Instagram or Foodpanda — not a place that tells your story. I'd love to build you that home."

This works because:
- It honors what she's already built
- It positions you as a storyteller, not a vendor
- It uses her own press features as social proof in the pitch
- It's specific (Foodpanda, Instagram) not generic
