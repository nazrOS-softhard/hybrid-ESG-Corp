export function Mission() {
  return (
    <section id="mission" className="py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[#00D4B4] text-xs tracking-widest2 uppercase mb-8">Mission</div>
            <h2 className="text-3xl md:text-4xl font-extralight text-white leading-tight">
              Safe coexistence<br />
              between humans<br />
              and digital intelligence.
            </h2>
          </div>

          <div className="space-y-8 pt-12">
            <p className="text-[#707070] text-sm font-light leading-relaxed">
              Hybrid Inc. integrates carbon-neutral robotic units into industry and daily life —
              building infrastructure where human capability is extended, not replaced.
            </p>

            <div className="space-y-4">
              {[
                ['PMV Drive', 'Direct-flow magnetic-waveguide motor. Fast response, near-zero emissions.'],
                ['Orbital Autopilot', 'Proprietary satellite constellation enabling autonomous ground and air navigation.'],
                ['Hybrid Aerospace Port', '64.386°N 40.710°E — launch facility for suborbit, orbit, and lunar missions.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-l border-[#1a1a1a] pl-4">
                  <div className="text-white text-xs font-medium mb-1">{title}</div>
                  <div className="text-[#707070] text-xs font-light leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
