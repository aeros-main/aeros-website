'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ShoppingBag, Factory, Coffee, BarChart2, Briefcase } from 'lucide-react'

const platforms = [
  {
    id: 'marketplace',
    icon: ShoppingBag,
    title: 'Marketplace',
    subtitle: 'Trade at scale',
    description: 'Buy, sell, and manage trade at scale. Multi-vendor catalogues, RFQ flows, approval chains, and cart-based B2B commerce — all in one place.',
    color: '#2347D9',
    features: ['Multi-vendor catalogues', 'RFQ & approval flows', 'B2B cart system', 'Seller analytics'],
  },
  {
    id: 'factory',
    icon: Factory,
    title: 'FactoryOS',
    subtitle: 'Full factory control',
    description: 'Full factory operations, digitised. Production planning, quality control, shift management, and real-time floor visibility from a single dashboard.',
    color: '#1E56E8',
    features: ['Production planning', 'QC workflows', 'Shift management', 'Floor visibility'],
  },
  {
    id: 'cafe',
    icon: Coffee,
    title: 'CafeOS',
    subtitle: 'Run your outlet',
    description: 'POS, inventory, staff, and sales — all connected. Built for cafes, restaurants, and retail outlets that need speed and simplicity.',
    color: '#3B6BF5',
    features: ['Integrated POS', 'Inventory sync', 'Staff scheduling', 'Daily P&L'],
  },
  {
    id: 'trading',
    icon: BarChart2,
    title: 'TradingOS',
    subtitle: 'Procurement power',
    description: 'RFQs, approvals, supplier management, and procurement analytics. Close more deals with less back-and-forth.',
    color: '#2347D9',
    features: ['Smart RFQs', 'Supplier profiles', 'Approval workflows', 'Trade analytics'],
  },
  {
    id: 'agency',
    icon: Briefcase,
    title: 'AgencyOS',
    subtitle: 'Agencies & services',
    description: 'Projects, teams, billing, and client management in one view. Designed for agencies, consultancies, and service businesses.',
    color: '#1A35A8',
    features: ['Project management', 'Team collaboration', 'Client billing', 'Revenue tracking'],
  },
]

export default function PlatformOverview() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const activePlatform = platforms[active]
  const Icon = activePlatform.icon

  return (
    <section id="platform" ref={ref} className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(35,71,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(35,71,217,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-aeros-blue-pale border border-aeros-blue/20">
            <span className="text-xs font-medium text-aeros-blue uppercase tracking-wider">Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-aeros-text leading-tight font-jakarta">
            Everything your business needs,<br />
            <span className="text-gradient-blue">in one place.</span>
          </h2>
          <p className="mt-4 text-aeros-text-muted text-lg max-w-xl mx-auto">
            One platform powering every vertical — from the factory floor to the café counter.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {platforms.map((platform, i) => {
            const TabIcon = platform.icon
            return (
              <button
                key={platform.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? 'bg-aeros-blue text-white shadow-glow-blue-sm'
                    : 'text-aeros-text-muted hover:text-aeros-text border border-aeros-border hover:border-aeros-blue/30 bg-white'
                }`}
              >
                <TabIcon size={15} />
                {platform.title}
              </button>
            )
          })}
        </motion.div>

        {/* Active panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-aeros-blue-pale border border-aeros-blue/20 flex items-center justify-center">
                <Icon size={22} className="text-aeros-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-aeros-text font-jakarta">{activePlatform.title}</h3>
                <p className="text-aeros-blue text-sm font-medium">{activePlatform.subtitle}</p>
              </div>
            </div>

            <p className="text-aeros-text-muted text-lg leading-relaxed mb-8">
              {activePlatform.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {activePlatform.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-aeros-blue flex-shrink-0" />
                  <span className="text-sm text-aeros-text-muted">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-aeros-blue font-medium hover:gap-3 transition-all"
            >
              Learn more
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-2xl p-6 border-glow bg-white relative overflow-hidden shadow-card-hover">
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${activePlatform.color}, transparent 70%)` }}
              />

              {/* Mock UI */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-aeros-text font-semibold font-jakarta">{activePlatform.title}</span>
                  <span className="text-xs text-aeros-blue font-mono bg-aeros-blue-pale px-2 py-1 rounded-md">Live</span>
                </div>

                {[
                  { label: 'Active', value: '847', pct: 78 },
                  { label: 'Pending', value: '124', pct: 22 },
                  { label: 'Completed', value: '2.4k', pct: 95 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-aeros-text-muted">{row.label}</span>
                      <span className="text-aeros-text font-mono">{row.value}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${row.pct}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                        className="h-full bg-aeros-blue rounded-full"
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-aeros-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-aeros-text-muted font-mono">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3"
        >
          {platforms.map((platform, i) => {
            const CardIcon = platform.icon
            return (
              <button
                key={platform.id}
                onClick={() => setActive(i)}
                className={`group rounded-xl p-4 text-left transition-all duration-300 border ${
                  active === i
                    ? 'border-aeros-blue/30 bg-aeros-blue-pale shadow-glow-blue-sm'
                    : 'border-aeros-border bg-white hover:border-aeros-blue/20 hover:bg-aeros-blue-pale/50'
                }`}
              >
                <CardIcon size={18} className={`mb-2 ${active === i ? 'text-aeros-blue' : 'text-aeros-text-muted group-hover:text-aeros-blue'} transition-colors`} />
                <div className={`text-sm font-semibold mb-1 ${active === i ? 'text-aeros-blue' : 'text-aeros-text-2 group-hover:text-aeros-text'} transition-colors`}>
                  {platform.title}
                </div>
                <div className="text-xs text-aeros-text-muted/70">{platform.subtitle}</div>
              </button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
