const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Marketplace', href: '#' },
      { label: 'FactoryOS', href: '#' },
      { label: 'CafeOS', href: '#' },
      { label: 'TradingOS', href: '#' },
      { label: 'AgencyOS', href: '#' },
      { label: 'AI Layer', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Manufacturers', href: '#' },
      { label: 'For Retailers', href: '#' },
      { label: 'For Traders', href: '#' },
      { label: 'For Agencies', href: '#' },
      { label: 'Enterprise', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white hairline-t px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="font-jakarta font-bold text-xl text-ink tracking-tight">
              Aeros<span className="text-accent">.</span>
            </div>
            <p className="mt-4 text-sm text-muted max-w-xs leading-relaxed">
              One operating system for your entire business.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted hover:text-ink transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 hairline-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-2 font-mono">
            © {new Date().getFullYear()} Aeros. All rights reserved.
          </p>
          <p className="text-xs text-muted-2 font-mono">
            Made for operators.
          </p>
        </div>
      </div>
    </footer>
  )
}
