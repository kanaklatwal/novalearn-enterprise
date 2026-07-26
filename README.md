# NovaLearn Enterprise — Enterprise Learning Landing Page

A production-quality, fully responsive enterprise learning platform landing page, **inspired by the layout, spacing, and user flow of [enterprise.accredian.com](https://enterprise.accredian.com/)** — built as an original implementation with its own branding ("NovaLearn Enterprise"), copy, components, and design system. No content, code, or assets were copied from the reference site.

**Live site:** https://novalearn-enterprise-nine.vercel.app/
**Repository:** https://github.com/kanaklatwal/novalearn-enterprise

---

## Tech stack

| Layer          | Choice                                              |
| --------------- | ---------------------------------------------------- |
| Framework       | Next.js 15 (App Router, Server + Client Components)  |
| UI library      | React 19                                              |
| Language        | TypeScript (strict mode)                              |
| Styling         | Tailwind CSS v4 (CSS-first `@theme` configuration)     |
| Animation       | Framer Motion                                          |
| Icons           | Lucide React                                            |
| Backend         | Next.js Route Handler (`app/api/leads/route.ts`)          |
| Deployment      | Vercel                                                      |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build — verified to compile with zero errors
npm run start   # serve the production build locally
npm run lint    # ESLint (flat config, next/core-web-vitals + next/typescript)
```

No environment variables are required. The lead form posts to an in-memory
Route Handler — nothing to configure before running locally.

## Folder structure

```
app/
  layout.tsx              Root layout: fonts (Inter + Sora), Navbar, Footer
  page.tsx                 Composes every section in order
  globals.css               Tailwind v4 theme tokens + base layer
  api/
    leads/route.ts           POST /api/leads — validates and "stores" a lead
components/
  Navbar.tsx                 Sticky nav, scroll state, mobile menu
  Hero.tsx                    Heading, CTAs, badges, stats strip, illustration
  CompanyTrust.tsx             Animated logo marquee
  Statistics.tsx                 Enterprise-wide stat grid (dark section)
  WhyChooseUs.tsx                  Value proposition cards
  Programs.tsx                      Program catalogue cards
  Industries.tsx                     Domain expertise grid
  LearningProcess.tsx                 4-step engagement timeline
  Testimonials.tsx                     Customer quote cards
  Faq.tsx                                Accessible accordion
  FinalCta.tsx                            Closing call-to-action band
  LeadCapture.tsx                          Section wrapper around <LeadForm>
  LeadForm.tsx                              Client form: validation, fetch, states
  Footer.tsx                                 Site footer
  ui/
    Container.tsx                            Max-width layout primitive
    SectionHeading.tsx                        Eyebrow + title + description
    Button.tsx                                 Primary/secondary/ghost button
    Card.tsx                                    Reusable hover card
lib/
  data.ts                                       All section content (typed)
  motion.ts                                      Shared Framer Motion variants
types/
  index.ts                                       Shared TypeScript interfaces
```

Every section is an isolated component driven by typed data in `lib/data.ts`
— adding, removing, or reordering a program, industry, testimonial, or FAQ
item never requires touching component markup.

## Design approach

- **Palette & type** — a blue/white enterprise palette (`brand-*` scale
  defined in `app/globals.css` via Tailwind v4's `@theme`), paired with
  **Sora** for display headings and **Inter** for body text, giving the page
  a distinct "premium SaaS" identity rather than reusing default Tailwind
  colors.
- **Structure** — large section spacing (`py-20`/`py-28`), rounded-2xl
  cards, soft layered shadows (`shadow-soft` / `shadow-lift`), and a subtle
  background grid in the hero for texture without noise.
- **Motion** — fade-up reveals on scroll (`whileInView`, once-only), a
  slide-in split layout on the lead capture section, animated progress bars
  in the hero illustration, an accordion with height/opacity transitions,
  and hover lift on every card and button — all respecting
  `prefers-reduced-motion`.
- **Accessibility** — every interactive element has a visible focus ring,
  the FAQ accordion uses correct `aria-expanded`/`aria-controls`/`role="region"`
  wiring, form fields have associated `<label>`s and `aria-invalid`/
  `aria-describedby` on error, and all icons are `aria-hidden`.

## Lead capture flow

`components/LeadForm.tsx` is a client component that:

1. Collects **name, email, company, phone** with inline validation errors.
2. Submits via `fetch("/api/leads", { method: "POST" })`.
3. Shows a spinner + disabled button while the request is in flight.
4. Renders a distinct success state on `{ success: true }`, or surfaces
   field-level and top-level error messages returned by the API.

`app/api/leads/route.ts` validates the payload server-side (name length,
email pattern, phone pattern) and returns `422` with field errors on
failure, or `{ success: true }` on success. No database is used — the
handler logs the lead server-side, which is clearly marked as the point
where a real CRM/database integration would go.

## AI usage

This project was built with the assistance of Claude (Anthropic). Specifically:

**Where AI helped:**
- Scaffolding the Next.js 15 + Tailwind v4 project configuration, including
  the CSS-first `@theme` setup (Tailwind v4 removed `tailwind.config.js` in
  favor of `@theme` blocks, which required adapting from v3 patterns)
- Generating the first draft of every section component and the shared
  `lib/data.ts` content model
- Writing the `/api/leads` validation logic and the `LeadForm` fetch/error
  handling


**What was reviewed/would be refined manually:**
- Copy was rewritten to be specific to this project rather than generic
  filler, and would get another editorial pass before real use
- Color values, spacing, and shadow intensity were adjusted by eye against
  the reference site's enterprise feel, not accepted as first-generated
- In a real submission, every breakpoint should be manually verified in a
  browser (DevTools + real devices), not just reviewed as Tailwind classes
- Before handling real leads, the in-memory store would be replaced with a
  database and the endpoint would get rate limiting and a honeypot field

## Future improvements

- Persist leads to a real database (Postgres via Vercel Postgres/Supabase)
  and forward to a CRM (HubSpot/Salesforce) via webhook
- Add automated tests: Playwright for the lead-capture flow, component
  tests for form validation edge cases
- Add a CMS (Sanity/Contentful) for programs, testimonials, and FAQ content
  so non-engineers can update copy without a deploy
- Add `next/image`-based illustrations/photography and an Open Graph image
- Lighthouse CI + axe-core in the pipeline to guard performance and
  accessibility regressions
- Internationalization for multi-region enterprise rollouts

## Deployment

1. Push this repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new) — no environment variables
   or build configuration are required; Vercel auto-detects Next.js.
3. Vercel runs `npm install` and `npm run build` automatically on every
   push to the default branch.

## Code quality

- TypeScript strict mode, no `any`, all content and API contracts typed in
  `types/index.ts`
- `npm run build` completes with **zero errors and zero warnings**
- No placeholder/lorem ipsum copy — every section has real, considered
  content specific to an enterprise learning product
- Components are single-responsibility and composed from shared primitives
  (`Container`, `SectionHeading`, `Button`, `Card`) instead of duplicating
  layout/styling logic
