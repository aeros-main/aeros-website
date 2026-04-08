const metrics = [
  { value: '10k+', label: 'Businesses onboarded' },
  { value: '₹2,400 Cr', label: 'GMV processed' },
  { value: '5', label: 'Verticals · 1 platform' },
  { value: '12', label: 'Markets active' },
]

export default function Metrics() {
  return (
    <section className="py-32 px-6 bg-paper-2 hairline-t hairline-b">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-4">
            By the numbers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink font-jakarta leading-tight">
            Proven in the field.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line hairline">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-paper-2 p-10 text-center flex flex-col items-center justify-center min-h-[180px]"
            >
              <div className="font-jakarta text-4xl md:text-5xl font-bold text-ink leading-none mb-3 tracking-tight whitespace-nowrap">
                {m.value}
              </div>
              <div className="text-sm text-muted">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
