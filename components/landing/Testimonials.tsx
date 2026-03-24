'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Before Aeros, I had separate systems for production scheduling, vendor orders, and attendance. Now everything talks to each other. I see my entire factory in one screen. The AI reports alone have saved us from two near-misses.",
    name: 'Rajesh Nair',
    role: 'Operations Director',
    company: 'Packwell Industries',
    type: 'Food Packaging Manufacturer',
    initials: 'RN',
    color: '#2347D9',
  },
  {
    quote: "We run three outlets and managing inventory used to be a nightmare. Aeros Terminal syncs everything in real-time. The daily AI report tells me what to reorder before I even run out. It's like having an operations manager that never sleeps.",
    name: 'Priya Mehra',
    role: 'Founder',
    company: 'Bloom Café',
    type: 'Multi-outlet F&B',
    initials: 'PM',
    color: '#3B6BF5',
  },
  {
    quote: "We do high-volume B2B trading. The RFQ system and approval workflows have cut our procurement cycle by 60%. Our suppliers are on the platform too, so everything — quotes, approvals, payments — happens in one place.",
    name: 'Khalid Al-Mansouri',
    role: 'CEO',
    company: 'Gulf Trade Partners',
    type: 'B2B Trading Company',
    initials: 'KM',
    color: '#1A35A8',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-aeros-surface-alt py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(35,71,217,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-aeros-blue-pale border border-aeros-blue/20">
            <span className="text-xs font-medium text-aeros-blue uppercase tracking-wider">From the field</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-aeros-text leading-tight font-jakarta">
            Real businesses.<br />
            <span className="text-gradient-blue">Real results.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.1 + i * 0.1 }}
              className="group relative bg-white rounded-2xl p-7 border border-aeros-border hover:border-aeros-blue/20 transition-all duration-300 overflow-hidden hover:shadow-card-hover"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 0% 0%, ${t.color}08 0%, transparent 60%)` }}
              />

              {/* Quote icon */}
              <div className="mb-5 relative z-10">
                <Quote size={22} className="text-aeros-blue/30" />
              </div>

              {/* Quote text */}
              <p className="text-aeros-text-muted text-sm leading-relaxed mb-7 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10 pt-5 border-t border-aeros-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}99 100%)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-aeros-text font-semibold text-sm font-jakarta">{t.name}</div>
                  <div className="text-aeros-text-muted text-xs">{t.role}, {t.company}</div>
                  <div className="text-aeros-text-muted/50 text-[10px] font-mono mt-0.5">{t.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
