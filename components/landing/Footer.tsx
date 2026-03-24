'use client'

const footerLinks = {
  Product: [
    { label: 'Marketplace', href: '#' },
    { label: 'FactoryOS', href: '#' },
    { label: 'CafeOS', href: '#' },
    { label: 'TradingOS', href: '#' },
    { label: 'AgencyOS', href: '#' },
    { label: 'AI Layer', href: '#' },
  ],
  Solutions: [
    { label: 'For Manufacturers', href: '#' },
    { label: 'For Retailers', href: '#' },
    { label: 'For Traders', href: '#' },
    { label: 'For Agencies', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Hardware Bundles', href: '#' },
  ],
  Company: [
    { label: 'About Aeros', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Data Processing', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

const socialLinks = [
  {
    href: '#', label: 'LinkedIn',
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  },
  {
    href: '#', label: 'X (Twitter)',
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  },
  {
    href: '#', label: 'Instagram',
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-aeros-navy pt-20 pb-8 px-6 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(35,71,217,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(35,71,217,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-aeros-blue flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" />
                  <path d="M9 6L12 8V12L9 14L6 12V8L9 6Z" fill="white" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl font-jakarta tracking-tight">Aeros</span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              The business operating system for manufacturers, traders, cafes, and agencies. Run everything.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-aeros-blue/40 hover:bg-aeros-blue/10 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>

            {/* Markets */}
            <div className="mt-6">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-2 font-mono">Active markets</p>
              <div className="flex flex-wrap gap-1">
                {['IN', 'AE', 'SA', 'SG', 'ID', 'NG', 'KE', 'EG'].map((country) => (
                  <span key={country} className="text-[10px] text-white/30 bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.5 rounded font-mono">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-5 font-jakarta">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-mono">
            © 2025 Aeros Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/30 text-xs font-mono">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
