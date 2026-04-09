const platforms = [
  { title: 'Marketplace', subtitle: 'Trade at scale' },
  { title: 'FactoryOS', subtitle: 'Full factory control' },
  { title: 'CafeOS', subtitle: 'Run your outlet' },
  { title: 'TradingOS', subtitle: 'Procurement power' },
  { title: 'AgencyOS', subtitle: 'Agencies & services' },
]

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
            Everything in one place.
          </h2>
          <p className="mt-5 text-fg-muted text-lg">
            Five products. One login. Built for the operators that move the
            real economy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((p) => (
            <div
              key={p.title}
              className="bg-white p-8 rounded-3xl border border-border-default group hover:bg-bg-subtle transition-colors"
            >
              <div className="text-xs font-mono text-fg-muted/60 mb-6">
                / {p.title.toLowerCase()}
              </div>
              <h3 className="text-2xl font-bold text-fg-primary mb-2">
                {p.title}
              </h3>
              <p className="text-fg-muted text-sm mb-8">{p.subtitle}</p>
              <a
                href="#"
                className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn more <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
