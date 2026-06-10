const divisions = [
  {
    name: 'Hybrid Aerospace',
    desc: 'Electrojet manufacturing, aerospace port operations, satellite constellation for autopilot systems.',
    coords: '64.386°N 40.710°E',
    location: 'Arkhangelsk Region, RF',
  },
  {
    name: 'Hybrid Robotics',
    desc: 'Manipulators, bionic prosthetics, lunar rovers, and additive manufacturing systems.',
    coords: '—',
    location: 'R&D Division',
  },
  {
    name: 'Hybrid Transit',
    desc: 'Electric trains, buses, autonomous freight trucks, three-axle pickups for northern latitudes.',
    coords: '—',
    location: 'Transit Division',
  },
  {
    name: 'Hybrid Charge',
    desc: 'Network of stationary and mobile charging infrastructure across the Hybrid ecosystem.',
    coords: '—',
    location: 'Infrastructure Division',
  },
  {
    name: 'Hybrid Athletics',
    desc: "Women's triathlon team. Competing under Hybrid colors.",
    coords: '—',
    location: 'Sports Division',
  },
  {
    name: 'Hybrid Esports',
    desc: 'Competitive gaming organization. Academy + pro teams across multiple titles.',
    coords: '—',
    location: 'Esports Division',
  },
]

export function Divisions() {
  return (
    <section id="divisions" className="py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <div className="text-[#00D4B4] text-xs tracking-widest2 uppercase mb-4">Structure</div>
          <h2 className="text-3xl md:text-4xl font-extralight text-white">Divisions</h2>
        </div>

        <div className="space-y-px bg-[#1a1a1a]">
          {divisions.map((d, i) => (
            <div
              key={i}
              className="bg-[#080808] px-8 py-6 hover:bg-[#0f0f0f] transition-colors flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="w-6 text-[#404040] text-xs font-mono flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-light mb-1">{d.name}</div>
                <div className="text-[#707070] text-xs font-light leading-relaxed">{d.desc}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[#404040] text-[10px] font-mono">{d.coords}</div>
                <div className="text-[#404040] text-[10px]">{d.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
