export default function FinalCTA() {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-ink leading-[0.95] font-jakarta tracking-tight">
          Run everything.<br />
          <span className="text-muted-2">Starting today.</span>
        </h2>
        <p className="mt-8 text-muted text-lg max-w-lg mx-auto">
          Joining 10,000+ businesses moving the real economy on Aeros.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-ink text-white text-sm font-medium hover:bg-ink-2 transition-colors"
          >
            Start for free
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-full hairline text-ink text-sm font-medium hover:bg-paper-2 transition-colors"
          >
            Talk to sales
          </a>
        </div>
        <p className="mt-8 text-xs text-muted-2 font-mono">
          No credit card · 14-day trial · Cancel anytime
        </p>
      </div>
    </section>
  )
}
