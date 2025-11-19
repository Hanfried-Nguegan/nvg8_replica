# Repository Guidelines

## Project Structure & Module Organization
`app/` hosts all Next.js routes, server components, and layout definitions; compose UI pieces inside `app/components/` and share types via `app/types/`. Global CSS and Tailwind primitives live in `app/globals.css`. Static assets and SEO files sit in `public/`, while build tooling (Dockerfile, Jenkinsfile, configs) is in the repo root. Keep feature-specific code close to its route, and prefer colocated folders such as `app/<feature>/components/` when a page grows beyond one file.

## Build, Test, and Development Commands
Use `npm run dev` for the hot-reloading development server at `http://localhost:3000`. Ship-ready bundles come from `npm run build`, followed by `npm run start` to verify the production output. Run `npm run lint` to execute the ESLint ruleset configured in `eslint.config.mjs`; CI expects this command to pass before merging.

## Coding Style & Naming Conventions
TypeScript and React are required; write new files with the `.tsx` or `.ts` suffix and default to functional, server-first components. Follow 2-space indentation, camelCase for variables/functions, PascalCase for components, and kebab-case for files under `public/`. Favor descriptive prop names (`motionDurationMs`, not `dur`). Tailwind CSS utilities are available; keep custom selectors minimal and placed near the relevant component. Run `npm run lint` before committing to apply the Next.js + TypeScript style rules.

## Testing Guidelines
No automated test suite ships today, so add targeted unit tests (Vitest or Jest) under `app/__tests__/` when you touch logic-heavy modules. Mirror the component folder in your test paths (e.g., `app/components/Hero/Hero.test.tsx`). Ensure new tests cover success and failure paths, and document any intentional gaps in the pull request description.

## Commit & Pull Request Guidelines
Recent history (`lenis & scrollTrigger setup, docker and CI/CD Implementation`) shows short imperative subjects; continue that pattern and scope each commit to a single concern. Pull requests should summarize intent, reference related issues, list manual verification steps (`npm run lint`, screenshots for UI diffs), and mention any environment changes. If the UI shifts, attach before/after captures or Loom links so reviewers can validate parity quickly.

## Environment & Deployment Notes
Environment secrets stay outside the repo; supply them via `.env.local` when developing and through CI/CD variables for Jenkins or Docker Compose. When touching deployment assets, update both `Dockerfile` and `docker-compose.yml` so local and pipeline builds stay in sync, and note the change in your PR for the DevOps reviewer.
