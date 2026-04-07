const features = [
  {
    title: 'Ask anything',
    description:
      'Query your business in plain English. No dashboards, no SQL.',
    example: '"Show me top vendors by margin this quarter"',
  },
  {
    title: 'Daily AI reports',
    description:
      'A complete brief in your inbox at 6 AM. Numbers, insights, next actions.',
    example: 'Delivered 06:00 · daily',
  },
  {
    title: 'Anomaly detection',
    description:
      'We watch every metric and ping you the moment something drifts.',
    example: 'Inventory drift +12% on SKU-2204',
  },
]

export default function AISection() {
  return (
    <section id="ai" className="py-32 px-6 bg-ink text-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-4">
            AI Layer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight font-jakarta">
            Built in, not bolted on.
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Aeros AI lives inside every product — turning operations data
            into decisions.
          </p>
        </div>

        <div className="border border-white/15 rounded-2xl p-6 mb-12 max-w-2xl bg-white/[0.02]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            Aeros AI · natural language query
          </div>
          <div className="font-mono text-sm text-white">
            &gt; what was my best selling product last week?
          </div>
          <div className="mt-3 font-mono text-sm text-white/60">
            SKU-2204 — 1,242 units · ₹3.8L revenue (+18% wow)
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {features.map((f) => (
            <div key={f.title} className="bg-ink p-8">
              <h3 className="text-lg font-bold font-jakarta mb-3">
                {f.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {f.description}
              </p>
              <p className="font-mono text-[11px] text-white/40">
                {f.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
