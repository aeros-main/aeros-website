'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Camera, Monitor, Fingerprint, Wifi, ArrowRight } from 'lucide-react'

const hardware = [
  {
    id: 'sight',
    name: 'Aeros Sight',
    description: 'AI-powered CCTV & monitoring. Detect anomalies, count footfall, and get smart alerts — all from your dashboard.',
    icon: Camera,
    tags: ['Anomaly detection', 'Footfall analytics', 'Live alerts'],
    badge: 'Vision AI',
  },
  {
    id: 'terminal',
    name: 'Aeros Terminal',
    description: 'Smart POS for any business. Fast checkout, inventory sync, and real-time sales data — all connected to Aeros.',
    icon: Monitor,
    tags: ['Instant checkout', 'Inventory sync', 'Offline mode'],
    badge: 'POS',
  },
  {
    id: 'badge',
    name: 'Aeros Badge',
    description: 'Attendance & access control. Track who is in, when they arrived, and where they are — contactless and real-time.',
    icon: Fingerprint,
    tags: ['Contactless', 'Real-time tracking', 'Payroll ready'],
    badge: 'Access Control',
  },
  {
    id: 'sense',
    name: 'Aeros Sense',
    description: 'IoT sensors for real-time data. Temperature, humidity, power, and custom metrics streamed directly to your OS.',
    icon: Wifi,
    tags: ['IoT streaming', 'Custom sensors', 'Predictive alerts'],
    badge: 'IoT',
  },
]

export default function HardwareSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="hardware" ref={ref} className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aeros-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-aeros-blue-pale border border-aeros-blue/20">
                <span className="text-xs font-medium text-aeros-blue uppercase tracking-wider">Hardware</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-aeros-text leading-tight font-jakarta">
                The hardware that<br />
                <span className="text-gradient-blue">closes the loop.</span>
              </h2>
              <p className="mt-4 text-aeros-text-muted text-lg max-w-xl">
                Aeros hardware integrates directly with the platform. Every device feeds data back into your OS — live.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-aeros-blue/20 bg-aeros-blue-pale">
                <div className="w-2 h-2 rounded-full bg-aeros-blue" />
                <span className="text-sm text-aeros-blue font-medium">White-label available</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hardware cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hardware.map((device, i) => {
            const DeviceIcon = device.icon
            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.1 + i * 0.08 }}
                className="group relative bg-white rounded-2xl p-6 border border-aeros-border hover:border-aeros-blue/30 transition-all duration-300 hover:shadow-card-hover cursor-pointer overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(35,71,217,0.04) 0%, transparent 60%)' }}
                />

                {/* Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-aeros-blue-pale border border-aeros-blue/15 flex items-center justify-center group-hover:bg-aeros-blue/10 group-hover:border-aeros-blue/30 transition-all duration-300">
                    <DeviceIcon size={22} className="text-aeros-blue" />
                  </div>
                  <span className="text-[10px] font-medium text-aeros-blue font-mono bg-aeros-blue-pale px-2 py-1 rounded-md border border-aeros-blue/15">
                    {device.badge}
                  </span>
                </div>

                {/* Device visual placeholder */}
                <div className="mb-5 h-24 rounded-xl bg-gray-50 border border-aeros-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `linear-gradient(rgba(35,71,217,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(35,71,217,0.06) 1px, transparent 1px)`,
                      backgroundSize: '12px 12px',
                    }}
                  />
                  <DeviceIcon size={36} className="text-aeros-blue/25 relative z-10" />
                </div>

                <h3 className="text-base font-bold text-aeros-text mb-2 font-jakarta">{device.name}</h3>
                <p className="text-aeros-text-muted text-sm leading-relaxed mb-5">{device.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {device.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-aeros-text-muted bg-gray-50 border border-aeros-border px-2 py-1 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center gap-1.5 text-aeros-blue text-sm font-medium transition-all hover:gap-2.5">
                  Learn more <ArrowRight size={13} />
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom integration note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.5 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-aeros-surface-alt rounded-2xl px-8 py-5 border border-aeros-border"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-aeros-text-muted text-sm">All hardware connects to Aeros within minutes via Plug &amp; Play setup</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-aeros-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-aeros-blue" />
              <span>Zero-config pairing</span>
            </div>
            <div className="flex items-center gap-2 text-aeros-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-aeros-blue" />
              <span>Real-time data sync</span>
            </div>
            <div className="flex items-center gap-2 text-aeros-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-aeros-blue" />
              <span>OTA updates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
