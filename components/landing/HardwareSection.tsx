const devices = [
  {
    name: 'Aeros Sight',
    description: 'Computer vision cameras for the floor.',
    tags: ['Edge AI', 'PoE'],
  },
  {
    name: 'Aeros Terminal',
    description: 'Touchscreen point of sale & ops.',
    tags: ['Android', '4G'],
  },
  {
    name: 'Aeros Badge',
    description: 'Wearable identity for staff & access.',
    tags: ['BLE', 'NFC'],
  },
  {
    name: 'Aeros Sense',
    description: 'Environmental & equipment sensors.',
    tags: ['LoRa', 'Battery'],
  },
]

export default function HardwareSection() {
  return (
    <section id="hardware" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-4">
            Hardware
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink font-jakarta leading-tight">
            Hardware closes the loop.
          </h2>
          <p className="mt-5 text-muted text-lg">
            Devices that pair in seconds and stream straight into Aeros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line hairline">
          {devices.map((d) => (
            <div key={d.name} className="bg-white p-6">
              <div className="aspect-[4/3] rounded-lg bg-paper-2 hairline mb-5 flex items-center justify-center">
                <div className="w-12 h-12 rounded-md bg-ink/90" />
              </div>
              <h3 className="font-bold text-ink font-jakarta mb-1">
                {d.name}
              </h3>
              <p className="text-muted text-sm mb-4">{d.description}</p>
              <div className="flex gap-1.5">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded hairline text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted">
          <span>Zero-config pairing</span>
          <span className="text-line">·</span>
          <span>Real-time sync</span>
          <span className="text-line">·</span>
          <span>OTA updates</span>
        </div>
      </div>
    </section>
  )
}
