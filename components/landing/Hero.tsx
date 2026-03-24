'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const trustLogos = [
  { label: 'Manufacturers', icon: '🏭' },
  { label: 'Traders', icon: '📦' },
  { label: 'Cafes', icon: '☕' },
  { label: 'Agencies', icon: '🏢' },
  { label: 'Factories', icon: '⚙️' },
]

const words = ['Run', 'everything.']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.6 + i * 0.1 },
  }),
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(35,71,217,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(35,71,217,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial fade – keeps edges clean */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 60%, #ffffff 100%)',
        }}
      />
      {/* Blue glow at top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(35,71,217,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Animated orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(35,71,217,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-aeros-blue/20 to-transparent" />
      <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-aeros-blue/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-aeros-blue/20 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-aeros-blue/20 to-transparent" />
    </div>
  )
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: EASE, delay: 1.0 }}
      className="relative mx-auto mt-16 max-w-4xl"
    >
      <div className="relative rounded-2xl border border-aeros-border overflow-hidden shadow-[0_20px_60px_rgba(13,18,38,0.12),0_0_0_1px_rgba(35,71,217,0.08)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-aeros-border">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
          <div className="ml-4 flex-1 h-6 bg-white border border-aeros-border rounded-md flex items-center px-3">
            <span className="text-xs text-aeros-text-muted font-mono">app.aeros.io/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="bg-white p-6 grid grid-cols-12 gap-4 min-h-[280px]">
          {/* Sidebar */}
          <div className="col-span-2 space-y-1">
            {['Dashboard', 'Marketplace', 'Orders', 'AI Reports', 'Hardware'].map((item, i) => (
              <div
                key={item}
                className={`h-7 rounded-md px-2 flex items-center text-xs font-medium ${
                  i === 0 ? 'bg-aeros-blue text-white' : 'text-aeros-text-muted hover:bg-gray-100'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="col-span-10 space-y-4">
            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'GMV Today', value: '₹4.2L', change: '+12%' },
                { label: 'Active Orders', value: '847', change: '+5%' },
                { label: 'Vendors', value: '1,240', change: '+3%' },
                { label: 'AI Alerts', value: '2', change: 'new' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-3 border border-aeros-border bg-white">
                  <div className="text-[10px] text-aeros-text-muted mb-1">{stat.label}</div>
                  <div className="text-aeros-text font-bold text-base font-jakarta">{stat.value}</div>
                  <div className="text-aeros-blue text-[10px] font-mono mt-1">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="rounded-xl p-4 h-28 relative overflow-hidden border border-aeros-border bg-white">
              <div className="text-[10px] text-aeros-text-muted mb-3">Revenue — Last 30 days</div>
              <svg viewBox="0 0 400 60" className="w-full h-12" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2347D9" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#2347D9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 L20,42 L40,44 L60,38 L80,35 L100,28 L120,30 L140,22 L160,25 L180,18 L200,20 L220,14 L240,16 L260,10 L280,12 L300,8 L320,5 L340,8 L360,4 L380,6 L400,3"
                  fill="url(#chartGrad)"
                  stroke="#2347D9"
                  strokeWidth="1.5"
                  fillOpacity="1"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aeros-blue/30 to-transparent" />
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-8 top-1/3 glass rounded-xl px-3 py-2 shadow-card-hover hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-aeros-text font-medium font-mono">AI report ready</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-8 top-1/4 glass rounded-xl px-3 py-2 hidden lg:block"
      >
        <div className="text-xs text-aeros-text-muted font-mono">GMV ↑ 23% this week</div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aeros-blue/20 bg-aeros-blue-pale mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-aeros-blue animate-pulse" />
          <span className="text-sm text-aeros-blue font-medium">Now live — Platform + AI + Hardware</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {words.map((word) => (
              <motion.span
                key={word}
                variants={wordVariants}
                className="block text-[clamp(4rem,12vw,8rem)] font-extrabold text-aeros-text leading-none tracking-tight font-jakarta"
                style={{ display: 'block' }}
              >
                {word === 'everything.' ? (
                  <span className="text-gradient-blue">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-lg md:text-xl text-aeros-text-muted max-w-2xl mx-auto leading-relaxed font-light"
        >
          One operating system for your entire business. Marketplace, operations, AI, and hardware — unified.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group flex items-center gap-2 px-8 py-3.5 bg-aeros-blue hover:bg-aeros-blue-light text-white font-semibold rounded-xl transition-all duration-200 shadow-glow-blue-sm hover:shadow-glow-blue text-base"
          >
            Start for free
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 px-8 py-3.5 border border-aeros-border hover:border-aeros-blue/30 text-aeros-text font-medium rounded-xl transition-all duration-200 text-base hover:bg-aeros-blue-pale"
          >
            <Play size={14} className="fill-aeros-blue text-aeros-blue" />
            See how it works
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <p className="text-xs text-aeros-text-muted/60 uppercase tracking-widest font-medium mb-4">
            Trusted by manufacturers, traders, cafes & agencies
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {trustLogos.map((logo) => (
              <div
                key={logo.label}
                className="flex items-center gap-2 text-aeros-text-muted/60 hover:text-aeros-text-muted transition-colors"
              >
                <span className="text-lg">{logo.icon}</span>
                <span className="text-sm font-medium">{logo.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dashboard mockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <DashboardMockup />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
