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
    <section className="py-32 px-6 bg-paper-2 hairline-t hairline-b">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-4">
            From the field
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink font-jakarta leading-tight">
            Real results.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line hairline">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-paper-2 p-8">
              <blockquote className="text-ink leading-relaxed mb-8 font-jakarta">
                “{t.quote}”
              </blockquote>
              <figcaption className="hairline-t pt-5">
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-muted mt-0.5">
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
