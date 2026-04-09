type IconProps = { className?: string }

function CameraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="6" y="14" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 14l3-5h10l3 5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="26" r="2" fill="currentColor" />
    </svg>
  )
}

function TerminalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="6" y="8" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M14 16l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 34v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function BadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M24 4v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="20" y="8" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="9" y="12" width="30" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M16 36c1.5-3 4.5-5 8-5s6.5 2 8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SenseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="32" r="3" fill="currentColor" />
      <path d="M17 25a10 10 0 0114 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 20a17 17 0 0124 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 15a24 24 0 0134 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const devices = [
  {
    name: 'Aeros Sight',
    description: 'Computer vision cameras for the floor.',
    tags: ['Edge AI', 'PoE'],
    Icon: CameraIcon,
  },
  {
    name: 'Aeros Terminal',
    description: 'Touchscreen point of sale & ops.',
    tags: ['Android', '4G'],
    Icon: TerminalIcon,
  },
  {
    name: 'Aeros Badge',
    description: 'Wearable identity for staff & access.',
    tags: ['BLE', 'NFC'],
    Icon: BadgeIcon,
  },
  {
    name: 'Aeros Sense',
    description: 'Environmental & equipment sensors.',
    tags: ['LoRa', 'Battery'],
    Icon: SenseIcon,
  },
]

export default function HardwareSection() {
  return (
    <section id="hardware" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Hardware
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
            Hardware closes the loop.
          </h2>
          <p className="mt-5 text-fg-muted text-lg">
            Devices that pair in seconds and stream straight into Aeros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-default border border-border-default">
          {devices.map((d) => (
            <div key={d.name} className="bg-white p-6">
              <div className="aspect-[4/3] rounded-lg bg-bg-subtle border border-border-default mb-5 flex items-center justify-center">
                <d.Icon className="w-14 h-14 text-fg-primary" />
              </div>
              <h3 className="font-bold text-fg-primary mb-1">
                {d.name}
              </h3>
              <p className="text-fg-muted text-sm mb-4">{d.description}</p>
              <div className="flex gap-1.5">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded border border-border-default text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-fg-muted">
          <span>Zero-config pairing</span>
          <span className="text-border-default">·</span>
          <span>Real-time sync</span>
          <span className="text-border-default">·</span>
          <span>OTA updates</span>
        </div>
      </div>
    </section>
  )
}
