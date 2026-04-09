const metrics = [
  { value: '10k+', label: 'Businesses onboarded' },
  { value: '₹2,400 Cr', label: 'GMV processed' },
  { value: '5', label: 'Verticals · 1 platform' },
  { value: '12', label: 'Markets active' },
]

export default function Metrics() {
  return (
    <section className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            By the numbers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
            Proven in the field.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-bg-subtle p-10 rounded-3xl border border-border-default text-center flex flex-col items-center justify-center min-h-[180px]"
            >
              <div className="text-4xl md:text-5xl font-bold text-fg-primary leading-none mb-3 tracking-tight whitespace-nowrap">
                {m.value}
              </div>
              <div className="text-sm text-fg-muted">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
