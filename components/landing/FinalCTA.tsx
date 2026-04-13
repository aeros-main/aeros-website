export default function FinalCTA() {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
          Run everything.<br />
          <span className="text-fg-muted/60">Starting today.</span>
        </h2>
        <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
          Join 10,000+ businesses trading on the Aeros marketplace.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
          >
            Start for free
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
          >
            Talk to sales
          </a>
        </div>
        <p className="mt-8 text-xs text-fg-muted/60 font-mono">
          No credit card · 14-day trial · Cancel anytime
        </p>
      </div>
    </section>
  )
}
