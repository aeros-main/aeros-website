'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started.',
    monthly: 49,
    annual: 39,
    features: [
      '1 product module',
      'Up to 5 users',
      'Basic AI reports',
      'Community support',
    ],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Business',
    description: 'For growing operations.',
    monthly: 199,
    annual: 159,
    features: [
      'All product modules',
      'Up to 50 users',
      'Daily AI reports',
      'Priority support',
      'Hardware integration',
    ],
    cta: 'Start trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For multi-site businesses.',
    monthly: null,
    annual: null,
    features: [
      'Unlimited everything',
      'White-label hardware',
      'Custom integrations',
      'Dedicated success manager',
      'SSO & SCIM',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
            Simple pricing.
          </h2>
          <p className="mt-5 text-fg-muted text-lg">
            Start free. Scale when ready.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full border border-border-default">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !annual ? 'bg-ink-900 text-white' : 'text-fg-muted'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                annual ? 'bg-ink-900 text-white' : 'text-fg-muted'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border-default border border-border-default">
          {plans.map((p) => {
            const price = annual ? p.annual : p.monthly
            return (
              <div
                key={p.name}
                className={`p-8 ${
                  p.highlighted ? 'bg-ink-900 text-white' : 'bg-white'
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-1 ${
                    p.highlighted ? 'text-white' : 'text-fg-primary'
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    p.highlighted ? 'text-white/60' : 'text-fg-muted'
                  }`}
                >
                  {p.description}
                </p>

                <div className="mb-6">
                  {price !== null ? (
                    <>
                      <span
                        className={`text-4xl font-bold ${
                          p.highlighted ? 'text-white' : 'text-fg-primary'
                        }`}
                      >
                        ${price}
                      </span>
                      <span
                        className={`text-sm ${
                          p.highlighted ? 'text-white/60' : 'text-fg-muted'
                        }`}
                      >
                        {' '}/mo
                      </span>
                    </>
                  ) : (
                    <span
                      className={`text-4xl font-bold ${
                        p.highlighted ? 'text-white' : 'text-fg-primary'
                      }`}
                    >
                      Custom
                    </span>
                  )}
                </div>

                <a
                  href="#"
                  className={`block text-center text-sm font-medium py-3 rounded-full mb-7 transition-colors ${
                    p.highlighted
                      ? 'bg-white text-fg-primary hover:bg-white/90'
                      : 'bg-ink-900 text-white hover:bg-ink-800'
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-start gap-2 ${
                        p.highlighted ? 'text-white/70' : 'text-fg-muted'
                      }`}
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-current opacity-60" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
