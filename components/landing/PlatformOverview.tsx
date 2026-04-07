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
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-4">
            Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink font-jakarta leading-tight">
            Everything in one place.
          </h2>
          <p className="mt-5 text-muted text-lg">
            Five products. One login. Built for the operators that move the
            real economy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line hairline">
          {platforms.map((p) => (
            <div
              key={p.title}
              className="bg-white p-8 group hover:bg-paper-2 transition-colors"
            >
              <div className="text-xs font-mono text-muted-2 mb-6">
                / {p.title.toLowerCase()}
              </div>
              <h3 className="text-2xl font-bold text-ink font-jakarta mb-2">
                {p.title}
              </h3>
              <p className="text-muted text-sm mb-8">{p.subtitle}</p>
              <a
                href="#"
                className="text-sm text-ink font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
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
