# StoryHub Discovery Synthesis

Internal site presenting the discovery synthesis from the CNN StoryHub sprint — domain map, ERD, glossary, workflows, organization, decisions, and next steps.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router) + Turbopack
- React 19, TypeScript
- Tailwind CSS 4 (via `@import "tailwindcss"` in `globals.css`)
- Custom dark theme with CNN red accent
- Fonts: Inter (sans), Instrument Serif (display), JetBrains Mono (mono)

## Comments / Feedback

The site uses [**Giscus**](https://giscus.app) — comments are stored as **GitHub Discussions** on a public repo. No backend, no third-party tracking, sign-in is GitHub OAuth.

Pages with comment threads:

- `/contexts` — domain & boundaries
- `/erd` — entity model
- `/workflows` — workflow shapes
- `/decisions` — nine working positions

Each page gets its own thread mapped by pathname.

### Setup

1. Push this repo to GitHub (must be public for Giscus to work without auth proxy).
2. Enable **Discussions** under `Settings → General → Features`.
3. Install the [giscus GitHub App](https://github.com/apps/giscus) on the repo.
4. Visit [giscus.app](https://giscus.app) and:
   - Enter the repo
   - Pick `pathname` mapping
   - Pick (or create) a Discussion category — recommended: `Announcements` or a new `Feedback` category set to **Announcement** type so only maintainers can start threads
   - Copy the four IDs from the generated config
5. Copy `.env.local.example` to `.env.local` and fill in:

   ```bash
   NEXT_PUBLIC_GISCUS_REPO=owner/repo
   NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDO...
   NEXT_PUBLIC_GISCUS_CATEGORY=General
   NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO...
   ```

6. Restart `npm run dev`.

If env vars aren't set, the comment section renders a friendly setup card in place of the iframe — so the rest of the site keeps working in the meantime.

### Theme

The Giscus iframe uses the `transparent_dark` theme so it inherits the surrounding section background. To customize further (red accent for buttons, custom font), point `theme` in `src/components/Comments.tsx` at a hosted CSS file generated from [giscus theme starter](https://github.com/giscus/giscus/blob/main/styles/themes/_template.scss).

## Project structure

```
src/
  app/
    page.tsx              # Overview / landing
    journey/page.tsx      # 01 — discovery process
    contexts/page.tsx     # 02 — bounded contexts
    erd/page.tsx          # 03 — entity model
    glossary/page.tsx     # 04 — vocabulary
    workflows/page.tsx    # 05 — workflow types
    organization/page.tsx # 06 — desks/groups/personas
    decisions/page.tsx    # 07 — working positions
    next-steps/page.tsx   # 08 — Sprint 2 plan
  components/
    SiteNav.tsx           # Top nav
    SiteFooter.tsx
    PageHero.tsx          # Reusable hero banner
    Comments.tsx          # Giscus wrapper + setup-card fallback
    ErdDiagram.tsx        # Interactive SVG ERD
    ErdEntityExplorer.tsx # Per-entity card walker
    GlossaryExplorer.tsx
    WorkflowsExplorer.tsx
  data/
    contexts.ts erd.ts glossary.ts workflows.ts
    organization.ts decisions.ts
```

## Deploy

Push to GitHub, connect the repo to Vercel. Set the four `NEXT_PUBLIC_GISCUS_*` env vars in the Vercel dashboard. Done.
