'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For small businesses getting started',
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: 'Free forever',
    cta: 'Get started free',
    ctaStyle: 'ghost',
    features: [
      'Up to 2 team members',
      'Basic marketplace access',
      'Up to 50 orders/month',
      'Standard analytics',
      'Email support',
      'Mobile app (iOS & Android)',
    ],
    highlighted: false,
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For growing businesses that need more',
    monthlyPrice: 49,
    annualPrice: 39,
    cta: 'Start free trial',
    ctaStyle: 'primary',
    features: [
      'Unlimited team members',
      'Full marketplace suite',
      'Unlimited orders',
      'AI reports & insights',
      'Advanced analytics',
      'Vertical OS access (1)',
      'Hardware integration',
      'Priority support',
    ],
    highlighted: true,
    badge: 'Most popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organisations with custom needs',
    monthlyPrice: null,
    annualPrice: null,
    priceLabel: 'Custom pricing',
    cta: 'Talk to sales',
    ctaStyle: 'ghost',
    features: [
      'Everything in Business',
      'All Vertical OS products',
      'Custom AI models',
      'White-label hardware',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantees',
      'On-premise deployment',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" ref={ref} className="relative bg-white py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aeros-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-aeros-blue-pale border border-aeros-blue/20">
            <span className="text-xs font-medium text-aeros-blue uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-aeros-text leading-tight font-jakarta">
            Simple, transparent<br />
            <span className="text-gradient-blue">pricing.</span>
          </h2>
          <p className="mt-4 text-aeros-text-muted text-lg max-w-lg mx-auto">
            Start free. Scale as you grow. No surprise fees.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors ${!annual ? 'text-aeros-text' : 'text-aeros-text-muted'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-aeros-blue' : 'bg-gray-200'}`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm ${annual ? 'left-7' : 'left-1'}`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? 'text-aeros-text' : 'text-aeros-text-muted'}`}>
            Annual
          </span>
          <AnimatePresence>
            {annual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                className="px-2 py-0.5 bg-green-50 text-green-600 border border-green-200 rounded-full text-xs font-medium"
              >
                Save 20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number], delay: 0.2 + i * 0.1 }}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-aeros-navy border-2 border-aeros-blue shadow-glow-blue-sm'
                  : 'bg-white border border-aeros-border hover:border-aeros-blue/25 hover:shadow-card-hover'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-aeros-blue rounded-full text-white text-xs font-semibold shadow-glow-blue-sm">
                    <Zap size={10} className="fill-white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold font-jakarta mb-1 ${plan.highlighted ? 'text-white' : 'text-aeros-text'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-aeros-text-muted'}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-7">
                {plan.priceLabel ? (
                  <div className={`text-3xl font-bold font-jakarta ${plan.highlighted ? 'text-white' : 'text-aeros-text'}`}>{plan.priceLabel}</div>
                ) : (
                  <div className="flex items-end gap-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={annual ? 'annual' : 'monthly'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`text-4xl font-bold font-mono ${plan.highlighted ? 'text-white' : 'text-aeros-text'}`}
                      >
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className={`text-sm mb-1.5 ${plan.highlighted ? 'text-white/60' : 'text-aeros-text-muted'}`}>/month</span>
                  </div>
                )}
                {plan.id === 'business' && annual && (
                  <p className="text-xs text-green-400 mt-1 font-mono">Billed ${((plan.annualPrice ?? 0) * 12).toLocaleString()}/year</p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-7 ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-aeros-blue hover:bg-aeros-blue-light text-white shadow-glow-blue-sm hover:shadow-glow-blue'
                    : plan.highlighted
                    ? 'border border-white/20 text-white hover:bg-white/10'
                    : 'border border-aeros-border text-aeros-text hover:border-aeros-blue/30 hover:bg-aeros-blue-pale'
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? 'bg-aeros-blue/30' : 'bg-aeros-blue-pale'
                    }`}>
                      <Check size={10} className={plan.highlighted ? 'text-white' : 'text-aeros-blue'} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-aeros-text-muted'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center text-xs text-aeros-text-muted/50 font-mono"
        >
          All plans include GMV commission from 1.5% on marketplace transactions. Payment processing fees apply separately.
        </motion.p>
      </div>
    </section>
  )
}
