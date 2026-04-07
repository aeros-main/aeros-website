export default function ProblemSolution() {
  return (
    <section className="py-32 px-6 bg-paper-2 hairline-t hairline-b">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-px bg-line">
        <div className="bg-paper-2 p-10 md:p-14">
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-4">
            The problem
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-ink font-jakarta leading-tight mb-5">
            Broken workflows.
          </h3>
          <p className="text-muted leading-relaxed mb-6 max-w-sm">
            Five tools, three spreadsheets, no answers. Your business runs
            despite your software, not because of it.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Disconnected', 'Manual', 'Slow'].map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full hairline text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 md:p-14">
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-4">
            The solution
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-ink font-jakarta leading-tight mb-5">
            Total control.
          </h3>
          <p className="text-muted leading-relaxed mb-6 max-w-sm">
            One platform that runs every part of your business — and tells
            you what to do next.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Unified', 'Automated', 'Real-time'].map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-ink text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
