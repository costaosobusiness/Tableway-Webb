# TableWay

Restaurant reservation SaaS marketing website and monorepo workspace.

## Run & Operate

- `pnpm --filter @workspace/tableway-landing run dev` — landing site (requires `PORT` and `BASE_PATH`; Replit sets `22934` and `/`)
- `pnpm --filter @workspace/api-server run dev` — API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Required env (api-server): `DATABASE_URL`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Landing: Vite 7, React 19, wouter, Tailwind CSS v4, shadcn/ui, Framer Motion
- API: Express 5, PostgreSQL + Drizzle ORM

## Where things live

- **Landing site:** `artifacts/tableway-landing/`
- **API server:** `artifacts/api-server/`
- **OpenAPI spec:** `lib/api-spec/openapi.yaml`
- **Design specs:** `attached_assets/`
- **Website spec (reconciled):** see **Final Website Spec** below

## Final Website Spec

Authoritative sources: `attached_assets/` recordings + reconciled spec (Aug 2026). Section-scoped recordings override the original pasted design reference for that section only.

### Landing page structure

**Scroll order:** Hero → Pricing → How it works → Features → Footer

**Header nav:** Features · Pricing · How it works · Integrations (disabled) · Resources (disabled) · Log in · Start Free Trial

**Hero:** Left copy / right dashboard mockup (mobile: stacked). Headline: More Bookings. / Less Stress. CTAs: Start 30-day free trial, See how it works. Trust: 30-day free trial · No commission fees · Cancel anytime. Dashboard = coded mockup (no real image asset yet).

**Pricing:** 3 cards — 79€/3mo, 149€/6mo (highlighted), 279€/12mo. Bottom strip: Every plan includes (5 items).

**Features:** 6 cards per Features recording. Bottom: Everything Included. No Add-ons. No Commission Fees. + trial CTA.

**How it works:** 3 steps per recording. Closing CTA.

**Footer:** Product + Company columns + right CTA. No Resources column. No social icons.

**Prohibited:** Fake stats, reviews, trusted-by banners, country flags, placeholder `#` social links.

### Routes

| Path | Page |
|---|---|
| `/` | Landing |
| `/about` | About |
| `/contact` | Contact |
| `/privacy-policy` | Privacy |
| `/terms-of-service` | Terms |
| `/login` | External destination (not implemented in landing artifact) |
| `/signup` | External destination (not implemented in landing artifact) |

### Final decisions (locked)

1. **Hero subheadline:** Accept reservations 24/7. / Reduce no-shows. / Grow your restaurant with TableWay.
2. **Section order:** Hero → Pricing → How it works → Features
3. **Integrations:** In nav, disabled (no destination)
4. **Resources:** In nav, disabled (no destination)
5. **Footer Resources column:** Omitted
6. **Log in → `/login`**, all static Start Free Trial CTAs → `/signup?plan=12m`; pricing cards → `/signup?plan={slug}` (`monthly`, `3m`, `6m`, `12m`)
7. **Contact form:** Client-only success state (no backend)
8. **Logo:** `/logo.png` via existing `Logo` component; asset missing from repo — leave implementation as-is until supplied. **Hero:** keep coded mockup.
9. **Social links:** Removed entirely
10. **SEO:** Title `TableWay — Restaurant Reservations Made Simple`; meta/og/twitter descriptions per locked copy in `index.html`

## User preferences

- Do not redesign the landing page beyond reconciled spec and locked decisions.
- Do not invent URLs, features, assets, or backend behavior beyond what is documented here.
- Mobile first; premium dark SaaS aesthetic with TableWay green accent.

## Gotchas

- `vite.config.ts` requires `PORT` and `BASE_PATH` env vars.
- `/logo.png` is referenced but not present in `public/` — broken image until asset is added.
- `/login` and `/signup` routes are CTA targets only; no pages exist in this artifact yet.

## Pointers

- See `pnpm-workspace.yaml` for workspace packages and dependency catalog.
