# Copilot / AI agent instructions for this repo

Summary

- This is a Vite + React + TypeScript single-page portfolio built with Tailwind CSS and shadcn-style UI wrappers. Key runtime pieces: `react-router-dom` for routing, `@tanstack/react-query` for data/state fetching, Radix UI primitives, `framer-motion` for animation.

Quick start

- Install: `npm install` (package.json uses npm scripts).
- Dev: `npm run dev` (runs Vite). Build: `npm run build`. Preview: `npm run preview`.

Project layout & important files

- Source root: `src/` — pages are under `src/pages/`, components under `src/components/`, shared hooks under `src/hooks/`, and UI primitives under `src/components/ui/`.
- Entry: [src/main.tsx](src/main.tsx) mounts the app.
- App composition: [src/App.tsx](src/App.tsx) wraps the app in `QueryClientProvider`, `TooltipProvider`, Toaster components and `BrowserRouter`.
- Routing: Add routes in `src/App.tsx` above the catch-all `*` route; example pages: [src/pages/Index.tsx](src/pages/Index.tsx) and [src/pages/NotFound.tsx](src/pages/NotFound.tsx).

Conventions & patterns to follow

- Absolute imports use the `@/` alias (see [tsconfig.json](tsconfig.json)); import from `@/components/...` or `@/lib/...`.
- UI components follow shadcn-style wrappers in `src/components/ui/` (Radix wrappers + Tailwind). Reuse these components instead of creating new primitives when possible. Example: `Button` is used in [src/components/HeroSection.tsx](src/components/HeroSection.tsx).
- Styling: Tailwind utility classes are the primary styling mechanism. Use the `cn` helper from [src/lib/utils.ts](src/lib/utils.ts) to compose class names safely.
- Animation: `framer-motion` is used liberally for entrance/hover animations — follow existing motion props for consistency.
- State/data fetching: use `@tanstack/react-query` (QueryClient is provided in `src/App.tsx`).

Developer workflows & gotchas

- The project has a `bun.lockb` but scripts in `package.json` assume npm/Vite. Use `npm install` and `npm run dev` unless you're explicitly using Bun.
- Linting: run `npm run lint` (ESLint). There are no test scripts in package.json.
- Tailwind config: theme tokens and animations live in [tailwind.config.ts](tailwind.config.ts). Prefer tokens (e.g., `text-muted-foreground`, `bg-primary/5`) and animation utilities defined there.

How to add a new page or route (example)

1. Add `src/pages/MyPage.tsx` exporting a React component.
2. Add a `Route` entry in [src/App.tsx](src/App.tsx) above the `*` route:

```tsx
<Route path="/my-page" element={<MyPage />} />
```

Style & component guidelines (examples)

- Use components from `src/components/ui/` for consistent props/variants. Look at `Button` and other components for `variant` and `size` props.
- For conditional classnames use `cn(...)` from [src/lib/utils.ts](src/lib/utils.ts).

Integration points to be aware of

- Routing: `react-router-dom` in `src/App.tsx`.
- Data fetching: `@tanstack/react-query` global provider in `src/App.tsx`.
- UI primitives: `src/components/ui/*` wrap Radix components — changing these can affect many screens.

Missing / unknowns

- No CI/PR templates or commit message conventions found in the repo. No tests present. If you add CI, update this file.

If something seems ambiguous

- Prefer following existing patterns in `src/components/ui/`, `src/pages/`, and `src/hooks/`.
- Ask: where should new global state live? Default to React Query for server state and `src/hooks/` for small UI hooks.

Next steps

- If you'd like, I can: add examples for creating a new component in `src/components/ui/`, or scaffold a sample page and route.
