# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Trabook is a single-page travel-agency landing site (sliced from a Figma design — see `README.md`). Built with Vite + React 19 + TypeScript + Tailwind CSS.

## Commands

```bash
npm run dev      # start Vite dev server
npm run build    # type-check (tsc -b) then build for production
npm run lint     # run ESLint over the repo
npm run preview  # serve the production build locally
```

There is no test setup in this project.

## Architecture

Despite `react-router-dom` being installed, **routing is currently disabled**. `src/App.tsx` renders every page section stacked vertically inside one scrolling container — the commented-out `<Router>/<Routes>` block shows the prior multi-route layout. The site behaves as a one-page scroll site, not a multi-route app.

- `src/pages/*` are **section components**, not routes. Each top-level section sets an HTML `id` (e.g. `id="home"`, `id="about"`) on its root element so the navbar can scroll to it.
- `src/components/layout/NavBar.tsx` desktop links are in-page anchors (`#home`, `#about`, `#destination`, `#tour`, `#blog`). Note the mobile sidebar links still point to old `/path` routes (`/about`, etc.) and the Sign In / Sign Up buttons link to `/login` and `/register` — these routes do not exist while routing is off. Keep navbar section ids and page `id` attributes in sync when adding/renaming sections.
- `src/components/ui/*` are reusable presentational cards (`Card`, `CardVacation`, `BlogCard`) consumed by the page sections.
- Assets live in `src/assets/images/**` and are imported directly into components (e.g. `import logo from "../../assets/images/logos/logo.png"`).

## Styling

Tailwind is the styling system. Custom theme colors are defined in `tailwind.config.js` and should be preferred over hardcoded hex values:

- `primary-light` `#FA7436`, `primary-lightthin` `#FFE7DB`, `primary-dark` `#222222`
- `secondary-light` `#4086F4`, `secondary-dark` `#FFB60A`

`src/assets/css/contact.css` holds the only non-Tailwind CSS (contact section). FontAwesome (`@fortawesome/*`) provides icons via `<FontAwesomeIcon icon={...} />`.
