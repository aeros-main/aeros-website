'use client'

import { useState } from 'react'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'AI', href: '#ai' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur hairline-b">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-jakarta font-bold text-lg tracking-tight text-ink">
          Aeros<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-muted hover:text-ink transition-colors">
            Sign in
          </a>
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-white hover:bg-ink-2 transition-colors"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-px bg-ink mb-1.5" />
          <div className="w-6 h-px bg-ink mb-1.5" />
          <div className="w-6 h-px bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden hairline-t bg-white">
          <div className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block py-2 text-sm text-muted hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a href="#" className="block py-2 text-sm text-muted">Sign in</a>
            <a
              href="#"
              className="block mt-2 text-center text-sm font-medium px-4 py-2.5 rounded-full bg-ink text-white"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
