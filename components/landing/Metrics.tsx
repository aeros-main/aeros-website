'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  {
    value: 10000,
    suffix: '+',
    label: 'Businesses onboarded',
    description: 'Across 8 markets',
  },
  {
    prefix: '$',
    value: 50,
    suffix: 'M+',
    label: 'GMV processed',
    description: 'And growing daily',
  },
  {
    value: 4,
    suffix: '',
    label: 'Verticals. 1 platform.',
    description: 'Factory · Cafe · Trade · Agency',
  },
  {
    value: 8,
    suffix: '',
    label: 'Markets active',
    description: 'India, MENA, SEA, Africa',
  },
]

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return count
}

function MetricCard({
  metric,
  index,
  isInView,
}: {
  metric: typeof metrics[0]
  index: number
  isInView: boolean
}) {
  const count = useCountUp(metric.value, isInView, 2000 + index * 200)
  const formattedCount = metric.value >= 1000 ? count.toLocaleString() : count.toString()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.1 + index * 0.1 }}
      className="group relative text-center bg-white rounded-2xl p-8 border border-aeros-border hover:border-aeros-blue/25 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(35,71,217,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <div className="font-mono text-5xl md:text-6xl font-bold text-aeros-blue mb-3 leading-none">
          {metric.prefix || ''}{formattedCount}{metric.suffix}
        </div>
        <div className="text-aeros-text font-bold text-lg font-jakarta mb-2">{metric.label}</div>
        <div className="text-aeros-text-muted text-sm font-mono">{metric.description}</div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-aeros-blue opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
    </motion.div>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-aeros-surface-alt py-28 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(rgba(35,71,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(35,71,217,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(35,71,217,0.15) 0%, transparent 70%)' }}
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
            <span className="text-xs font-medium text-aeros-blue uppercase tracking-wider">By the numbers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-aeros-text leading-tight font-jakarta">
            Built for scale.<br />
            <span className="text-gradient-blue">Proven in the field.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Market row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-aeros-text-muted/50 uppercase tracking-widest mb-5">Operating in</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['India', 'UAE', 'Saudi Arabia', 'Singapore', 'Indonesia', 'Nigeria', 'Kenya', 'Egypt'].map((market) => (
              <span key={market} className="text-sm text-aeros-text-muted/60 font-medium hover:text-aeros-text-muted transition-colors cursor-default">
                {market}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
