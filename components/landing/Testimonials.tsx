const testimonials = [
  {
    quote:
      'We replaced four tools with Aeros in a week. Our floor managers actually use it.',
    name: 'Rajesh Nair',
    role: 'COO',
    company: 'Nair Textiles',
  },
  {
    quote:
      'The daily AI brief catches problems before our team even logs in. Worth it on day one.',
    name: 'Priya Mehra',
    role: 'Founder',
    company: 'Mehra Cafes',
  },
  {
    quote:
      'One platform across our 14 outlets. Inventory finally adds up at the end of the month.',
    name: 'Khalid Al-Mansouri',
    role: 'Director',
    company: 'Mansouri Trading',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            From the field
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
            Real results.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border-default border border-border-default">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-bg-subtle p-8">
              <blockquote className="text-fg-primary leading-relaxed mb-8">
                “{t.quote}”
              </blockquote>
              <figcaption className="border-t border-border-default pt-5">
                <div className="text-sm font-semibold text-fg-primary">{t.name}</div>
                <div className="text-xs text-fg-muted mt-0.5">
                  {t.role}, {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
