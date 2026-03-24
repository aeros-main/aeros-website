'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, FileText, AlertTriangle, Zap, Brain, TrendingUp } from 'lucide-react'

const aiFeatures = [
  {
    icon: MessageSquare,
    title: 'Ask anything',
    description: 'Natural language queries across your entire business data. No SQL. No dashboards. Just ask.',
    example: '"What were our top 5 products last month?"',
  },
  {
    icon: FileText,
    title: 'Daily AI reports',
    description: 'Automated insights delivered every morning. Trends, anomalies, and recommendations — ready before you start work.',
    example: '"Summary: Revenue up 12%. 3 suppliers delayed. Suggest reordering SKU-4421."',
  },
  {
    icon: AlertTriangle,
    title: 'Anomaly detection',
    description: 'Catch problems before they become crises. AI monitors every metric and alerts you the moment something looks wrong.',
    example: '"Alert: Order volume dropped 40% in the last 2 hours."',
  },
]

const queries = [
  'Show revenue breakdown by product category this quarter',
  'Which vendors have the highest return rates?',
  'Compare factory output week-over-week',
  'Flag any orders pending approval for 48+ hours',
  'What is our projected GMV for end of month?',
  'Identify top 3 underperforming SKUs',
]

export default function AISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [queryIdx, setQueryIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isInView) return

    const query = queries[queryIdx]
    let i = 0
    setDisplayText('')
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (i < query.length) {
        setDisplayText(query.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        setTimeout(() => {
          setQueryIdx((prev) => (prev + 1) % queries.length)
        }, 2000)
      }
    }, 40)

    return () => clearInterval(typeInterval)
  }, [queryIdx, isInView])

  return (
    <section id="ai" ref={ref} className="relative bg-aeros-surface-alt py-28 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(35,71,217,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(35,71,217,0.05) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-aeros-blue-pale border border-aeros-blue/20">
            <Brain size={12} className="text-aeros-blue" />
            <span className="text-xs font-medium text-aeros-blue uppercase tracking-wider">AI Layer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-aeros-text leading-tight font-jakarta">
            Intelligence built in,<br />
            <span className="text-gradient-blue">not bolted on.</span>
          </h2>
          <p className="mt-4 text-aeros-text-muted text-lg max-w-xl mx-auto">
            Aeros AI is native to the platform — it sees everything, understands your context, and works while you sleep.
          </p>
        </motion.div>

        {/* Animated query input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl p-5 border border-aeros-blue/20 shadow-card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
              <span className="text-xs text-aeros-text-muted font-mono">Aeros AI — Natural Language Query</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-aeros-blue-pale flex items-center justify-center flex-shrink-0">
                <Zap size={12} className="text-aeros-blue" />
              </div>
              <div className="flex-1 min-h-[28px] flex items-center">
                <span className="font-mono text-sm text-aeros-text">
                  {displayText}
                  {isTyping && (
                    <span className="inline-block w-0.5 h-4 bg-aeros-blue ml-0.5 animate-pulse" />
                  )}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-aeros-border flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  key={queryIdx}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: queries[queryIdx].length * 0.04 + 2, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-aeros-blue to-aeros-blue-light rounded-full"
                />
              </div>
              <span className="text-xs text-aeros-text-muted font-mono">Processing...</span>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {aiFeatures.map((feature, i) => {
            const FIcon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.3 + i * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-aeros-border hover:border-aeros-blue/30 transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-aeros-blue-pale border border-aeros-blue/15 flex items-center justify-center mb-5 group-hover:bg-aeros-blue/10 transition-colors">
                  <FIcon size={18} className="text-aeros-blue" />
                </div>
                <h3 className="text-lg font-bold text-aeros-text mb-2 font-jakarta">{feature.title}</h3>
                <p className="text-aeros-text-muted text-sm leading-relaxed mb-5">{feature.description}</p>
                <div className="bg-aeros-surface-alt rounded-xl p-3 border border-aeros-border">
                  <p className="font-mono text-xs text-aeros-blue leading-relaxed">{feature.example}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-6 bg-white rounded-2xl p-6 border border-aeros-border shadow-card"
        >
          {[
            { label: 'Models supported', value: 'GPT-4o · Claude · Gemini', icon: Brain },
            { label: 'Data processed', value: 'Real-time + historical', icon: TrendingUp },
            { label: 'Report delivery', value: '06:00 AM daily', icon: FileText },
          ].map((stat) => {
            const StatIcon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <StatIcon size={16} className="text-aeros-blue mx-auto mb-2" />
                <div className="text-aeros-text font-semibold font-mono text-sm mb-1">{stat.value}</div>
                <div className="text-aeros-text-muted text-xs">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
