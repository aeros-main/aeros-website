'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-aeros-surface-alt py-20 px-6 overflow-hidden">
      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aeros-blue/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-8 items-center">

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="md:col-span-4 text-center md:text-right"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-red-50 border border-red-200">
              <span className="text-xs font-medium text-red-500 uppercase tracking-wider">The Problem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-aeros-text leading-tight mb-4 font-jakarta">
              Fragmented tools.<br />
              <span className="text-aeros-text-muted">Broken workflows.</span>
            </h2>
            <p className="text-aeros-text-muted text-base leading-relaxed max-w-sm md:ml-auto">
              Your accounting is in one app. Orders in another. Operations in a spreadsheet. Staff attendance on paper.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-end">
              {['12+ tools', 'Manual sync', 'No visibility', 'Constant errors'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-500 text-xs font-medium font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.2 }}
            className="md:col-span-3 flex flex-col items-center gap-4"
          >
            <div className="relative w-full flex items-center justify-center">
              <div className="hidden md:flex items-center w-full">
                <div className="flex-1 h-px bg-gradient-to-r from-red-200 to-aeros-blue/40" />
                <div className="mx-4 relative">
                  <div className="w-16 h-16 rounded-2xl bg-aeros-blue flex items-center justify-center shadow-glow-blue relative z-10">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 3L23 8V18L14 23L5 18V8L14 3Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                      <path d="M14 8L18.5 11V17L14 20L9.5 17V11L14 8Z" fill="white" />
                    </svg>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-aeros-blue"
                  />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-aeros-blue/40 to-green-300" />
              </div>

              {/* Mobile version */}
              <div className="md:hidden flex flex-col items-center gap-3">
                <div className="w-px h-8 bg-gradient-to-b from-red-200 to-aeros-blue/40" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-aeros-blue flex items-center justify-center shadow-glow-blue">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 3L23 8V18L14 23L5 18V8L14 3Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                      <path d="M14 8L18.5 11V17L14 20L9.5 17V11L14 8Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-aeros-blue/40 to-green-300" />
              </div>
            </div>

            <div className="text-center">
              <span className="text-aeros-blue font-bold font-jakarta text-lg tracking-tight">Aeros</span>
              <p className="text-aeros-text-muted text-xs mt-1 font-mono">Business OS</p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.1 }}
            className="md:col-span-4 text-center md:text-left"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-aeros-blue-pale border border-aeros-blue/20">
              <span className="text-xs font-medium text-aeros-blue uppercase tracking-wider">The Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-aeros-text leading-tight mb-4 font-jakarta">
              One platform.<br />
              <span className="text-gradient-blue">Total control.</span>
            </h2>
            <p className="text-aeros-text-muted text-base leading-relaxed max-w-sm">
              Every operation. Every team. Every data point. Unified in a single OS built for how businesses actually run.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              {['Single source', 'Real-time data', 'Full visibility', 'Zero friction'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-aeros-blue-pale border border-aeros-blue/20 text-aeros-blue text-xs font-medium font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aeros-border to-transparent" />
    </section>
  )
}
