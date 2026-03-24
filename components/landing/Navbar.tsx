'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI', href: '#ai' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-aeros-border shadow-sm'
            : 'bg-white border-b border-aeros-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-aeros-blue flex items-center justify-center shadow-glow-blue-sm transition-shadow group-hover:shadow-glow-blue">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" />
                  <path d="M9 6L12 8V12L9 14L6 12V8L9 6Z" fill="white" />
                </svg>
              </div>
              <span className="text-aeros-text font-jakarta font-bold text-xl tracking-tight">Aeros</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-aeros-text-muted hover:text-aeros-text transition-colors duration-200 rounded-lg hover:bg-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-aeros-text-muted hover:text-aeros-text transition-colors duration-200"
              >
                Sign in
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-aeros-blue hover:bg-aeros-blue-light text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-glow-blue-sm hover:shadow-glow-blue"
              >
                Get started free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-aeros-text-muted hover:text-aeros-text transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-aeros-border shadow-sm md:hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-aeros-text-muted hover:text-aeros-text hover:bg-gray-50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-aeros-border space-y-2">
                <a href="#" className="block px-4 py-3 text-sm font-medium text-aeros-text-muted hover:text-aeros-text transition-colors">
                  Sign in
                </a>
                <a href="#" className="block px-4 py-3 bg-aeros-blue text-white text-sm font-semibold rounded-lg text-center">
                  Get started free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
