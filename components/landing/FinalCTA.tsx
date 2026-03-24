'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-aeros-blue py-28 px-6 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial highlight */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-20"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3), transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20"
        style={{ background: 'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.3), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Joining 10,000+ businesses worldwide</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight font-jakarta mb-6">
            Your business,<br />fully connected.
          </h2>

          <p className="text-white/70 text-xl max-w-xl mx-auto leading-relaxed mb-12 font-light">
            Join thousands of businesses already running on Aeros. Free to start. Built to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-aeros-blue font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg text-base"
            >
              Get started free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/[0.08] hover:border-white/50 transition-all duration-200 text-base"
            >
              <MessageSquare size={15} />
              Talk to sales
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-white/40 text-sm font-mono">
            No credit card required · Free forever on Starter · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  )
}
