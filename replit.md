# Thomas Window Cleaning

Marketing site for a window cleaning / exterior services business with a small backend that logs every quote/contact form submission to PostgreSQL.

## Run & Operate

- `npm run dev` — Express + Vite middleware on port 5000 (frontend HMR via Vite, backend served from same port)
- `npm run build` — `vite build` then bundles `server/index.ts` with esbuild into `dist/server`
- `npm run start` — production: serves built static frontend + Express API
- `npm run db:push` — push Drizzle schema to Postgres
- Required env: `DATABASE_URL` (Neon Postgres, already set)

## Stack

- React 18 + TypeScript + Vite 5
- React Router v6, TanStack Query, Tailwind + shadcn/ui
- Express + Drizzle ORM (`@neondatabase/serverless` + `ws`) for the backend
- Zod for request validation

## Where things live

- `src/App.tsx` — route config
- `src/pages/`, `src/components/` — frontend
- `src/lib/leadLogger.ts` — fire-and-forget POST to `/api/leads`
- `shared/schema.ts` — Drizzle `leads` table + Zod insert schema (source of truth)
- `server/index.ts` — Express + Vite middleware bootstrap
- `server/routes.ts` — `POST /api/leads`, `GET /api/health`
- `server/storage.ts` — `IStorage` (createLead, getLeads)
- `server/db.ts` — Neon + Drizzle client
- `vite.config.ts` — host 0.0.0.0, port 5000

## Architecture decisions

- Express runs Vite in middleware mode so frontend + API share port 5000 (no proxy, single origin)
- `tsx` (not `tsx watch`) — `tsx watch` was looping due to `.local/skills` file churn; restart manually after backend edits
- Lead logging is fire-and-forget alongside existing n8n webhooks — never blocks UX or breaks form submission
- Drizzle-zod is NOT used; Zod schema is hand-written in `shared/schema.ts` to avoid drizzle-zod ↔ Zod v4 incompatibility
- No GET endpoint for leads; the agent queries the DB directly via `executeSql` when asked

## Product

- Pages: `/`, `/services/window-cleaning`, `/services/gutter-cleaning`, `/services/power-washing`, `/services/:service/:area`, `/prices`, `/blog`, `/blog/:slug`, `/contact`, `/terms`, `/privacy`
- Five lead-capturing forms (all log to DB):
  - `HeroSection` (hero_quote)
  - `BookingSection` (booking_section)
  - `BookingDialog` (booking_dialog) — includes preferred date + notes
  - `ContactSection` (contact_section)
  - `ContactPage` (contact_page)

## Gotchas

- Backend changes require restarting the `Start application` workflow (no watch)
- Never put `.local/` or large dirs into a `tsx watch` glob — it restart-loops
- `DATABASE_URL` must be present at startup; Neon serverless needs `ws` polyfill (already wired in `server/db.ts`)

## Pointers

- Skills: `.local/skills/database`, `.local/skills/deployment`, `.local/skills/environment-secrets`
- Deployment: autoscale, build=`npm run build`, run=`npm run start`
