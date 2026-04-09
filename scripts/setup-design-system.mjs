#!/usr/bin/env node
/**
 * Prepares the vendored aeros-design-system submodule for npm consumption.
 *
 *  1. Ensures the submodule is checked out (runs `git submodule update --init
 *     --recursive` when the source files aren't present yet).
 *  2. Rewrites packages/react/package.json's `workspace:*` dep on @aeros/tokens
 *     to `file:../tokens` so plain `npm install` can resolve it.
 *  3. Builds @aeros/tokens and @aeros/react via `npx pnpm` so `dist/` exists for
 *     the file:... deps to resolve to.
 *
 * Safe to run multiple times — all steps are idempotent.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const websiteRoot = resolve(here, '..')
const dsRoot = resolve(websiteRoot, 'vendor', 'aeros-design-system')
const reactPkgPath = resolve(dsRoot, 'packages', 'react', 'package.json')

function run(cmd, cwd = websiteRoot) {
  execSync(cmd, { cwd, stdio: 'inherit' })
}

// 1. Init/update the submodule if the source files aren't there yet.
if (!existsSync(reactPkgPath)) {
  console.log('[ds] vendor/aeros-design-system is empty; initialising submodule…')
  try {
    run('git submodule update --init --recursive')
  } catch (err) {
    console.warn('[ds] submodule init failed — carrying on (this is fine if not in a git checkout).')
  }
}

if (!existsSync(reactPkgPath)) {
  console.log('[ds] submodule files still missing; skipping build step.')
  process.exit(0)
}

// 2. Patch workspace:* -> file:../tokens so npm can resolve it.
const pkg = JSON.parse(readFileSync(reactPkgPath, 'utf8'))
if (pkg.dependencies?.['@aeros/tokens'] === 'workspace:*') {
  pkg.dependencies['@aeros/tokens'] = 'file:../tokens'
  writeFileSync(reactPkgPath, JSON.stringify(pkg, null, 2) + '\n')
  console.log('[ds] patched @aeros/react → file:../tokens')
}

// 3. Build the DS if dist/ hasn't been produced yet.
const distReact = resolve(dsRoot, 'packages', 'react', 'dist', 'index.js')
const distTokens = resolve(dsRoot, 'packages', 'tokens', 'dist', 'css', 'tokens.css')

if (!existsSync(distTokens) || !existsSync(distReact)) {
  console.log('[ds] building @aeros/tokens and @aeros/react…')
  try {
    run('npx --yes pnpm install', dsRoot)
    run('npx --yes pnpm --filter @aeros/tokens build', dsRoot)
    run('npx --yes pnpm --filter @aeros/react build', dsRoot)
    console.log('[ds] build complete.')
  } catch (err) {
    console.error('[ds] build failed:', err.message)
    process.exit(1)
  }
} else {
  console.log('[ds] dist/ already present — skipping build.')
}
