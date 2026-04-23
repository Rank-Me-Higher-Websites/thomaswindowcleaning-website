# Project Overview

A frontend-only React/TypeScript marketing website for a window cleaning and exterior services business. Built with Vite, React Router, Tailwind CSS, and shadcn/ui components.

## Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui component library
- **Routing**: React Router v6
- **State**: React Context (BookingContext) + TanStack React Query
- **No backend**: Pure static frontend, no database or server

## Pages

- `/` — Home/Index
- `/services/window-cleaning`
- `/services/gutter-cleaning`
- `/services/power-washing`
- `/services/:serviceSlug/:areaSlug` — Area-specific service pages
- `/prices`
- `/blog`, `/blog/:slug`
- `/contact`
- `/terms`, `/privacy`

## Running the App

```bash
npm run dev
```

Runs on port 5000.

## Key Files

- `src/App.tsx` — Route configuration
- `src/pages/` — Page components
- `src/components/` — Shared UI components
- `src/contexts/BookingContext.tsx` — Booking state
- `vite.config.ts` — Vite configuration (port 5000, host 0.0.0.0 for Replit)

## Migration Notes

Migrated from Lovable to Replit. Removed `lovable-tagger` plugin dependency from Vite config. No auth or backend integrations were present.
