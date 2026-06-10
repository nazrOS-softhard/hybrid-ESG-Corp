const products = [
  {
    id: '01',
    name: 'Electrojet',
    ru: 'Электроджет',
    desc: 'Zero-emission aircraft powered by direct-flow magnetic-waveguide motors. No carbon, no compromise.',
    tag: 'Aviation',
  },
  {
    id: '02',
    name: 'Lunar Rover',
    ru: 'Лунный ровер',
    desc: 'Electromagnetic-drive robotic vehicles engineered for lunar surface exploration and resource mapping.',
    tag: 'Space',
  },
  {
    id: '03',
    name: 'Argo Printer',
    ru: 'Аддитивный принтер Арго',
    desc: 'Industrial-scale additive manufacturing system for on-site construction of large-scale structures.',
    tag: 'Industry',
  },
  {
    id: '04',
    name: 'Bionic Prosthetics',
    ru: 'Бионические протезы',
    desc: 'Electromagnetic-actuated bionics with adaptive configuration. High precision, individual calibration.',
    tag: 'MedTech',
  },
  {
    id: '05',
    name: 'Electric Train',
    ru: 'Электропоезд',
    desc: 'High-speed electromagnetic rail systems for passenger and cargo transport.',
    tag: 'Transit',
  },
  {
    id: '06',
    name: 'Autonomous Truck',
    ru: 'Электротягач',
    desc: 'Self-piloting electrified freight carriers with satellite autopilot via Hybrid orbital constellation.',
    tag: 'Logistics',
  },
  {
    id: '07',
    name: 'Manipulators',
    ru: 'Роботизированные манипуляторы',
    desc: 'High-precision robotic arms for manufacturing, construction, and medical applications.',
    tag: 'Robotics',
  },
  {
    id: '08',
    name: 'Charge Network',
    ru: 'Сеть зарядных станций',
    desc: 'Stationary and mobile charging infrastructure for the full Hybrid electric fleet.',
    tag: 'Infrastructure',
  },
]

export function Products() {
  return (
    <section id="products" className="py-32 px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <div className="text-[#00D4B4] text-xs tracking-widest2 uppercase mb-4">Product Line</div>
        <h2 className="text-3xl md:text-4xl font-extralight text-white">
          Eight systems.<br />One mission.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-[#080808] p-8 hover:bg-[#0f0f0f] transition-colors group cursor-default"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[#404040] text-xs font-mono">{p.id}</span>
              <span className="text-[10px] text-[#404040] border border-[#1a1a1a] px-2 py-0.5 rounded-full tracking-wider uppercase">
                {p.tag}
              </span>
            </div>

            {/* Placeholder box */}
            <div
              className="w-full h-32 rounded mb-6 flex items-center justify-center"
              style={{ background: '#0f0f0f', border: '1px solid #1a1a1a' }}
            >
              <span className="text-[#1a1a1a] text-xs font-mono tracking-wider">[ image ]</span>
            </div>

            <div className="text-white text-sm font-light mb-1">{p.name}</div>
            <div className="text-[#404040] text-[11px] mb-3">{p.ru}</div>
            <p className="text-[#707070] text-xs leading-relaxed font-light">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
