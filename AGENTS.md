<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Package manager: pnpm

This repo uses **pnpm**, not npm. Always use `pnpm install` / `pnpm dev` / `pnpm build` — never `npm install`. The `pnpm-lock.yaml` is the source of truth.

The `vendor/aeros-design-system` submodule is wired into `pnpm-workspace.yaml`, so `@aeros/react` and `@aeros/tokens` resolve via `workspace:*`. Do not change them to `file:` paths or to fixed versions.

# Design system

UI components and tokens come from `@aeros/react` (in the submodule). Always prefer DS alias classes (`bg-bg-surface`, `text-fg-primary`, `border-border-default`, `text-fg-muted`, etc.) over raw Tailwind colors or hex values. Reach for `@aeros/react` components (`Button`, `Card`, `Input`, …) before reinventing.

The wordmark "Aeros" must always use the `aeros-logo` class — it pulls in Nunito Sans (Expanded, wdth axis 125).

# Brand palette

Black and white first. The single accent is Royal Blue `#2347D9`, used **only** in the `blue` variants of `Badge`, `Tag`, and `Alert`. Don't add blue anywhere else without explicit approval.
