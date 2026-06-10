export default function Home() {
  return (
    <main style={{ background: '#080808', color: '#e8e8e8', fontFamily: 'Inter, sans-serif' }}>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #1a1a1a', background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#00D4B4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#000', fontSize: 13 }}>H</div>
            <span style={{ color: '#fff', fontWeight: 300, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Hybrid Inc.</span>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {(['#products', '#divisions', '#mission', '#vputi'] as const).map((href, i) => (
              <a key={href} href={href} style={{ color: '#707070', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
                {(['Products', 'Divisions', 'Mission', 'В Пути'] as const)[i]}
              </a>
            ))}
          </div>
          <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, padding: '8px 16px', borderRadius: 6, border: '1px solid #00D4B4', color: '#00D4B4', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            В Пути →
          </a>
        </div>
      </nav>

      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 32px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ height: 1, width: 48, background: '#00D4B4' }} />
            <span style={{ color: '#00D4B4', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 300 }}>Hybrid Inc. · Est. 2024</span>
            <div style={{ height: 1, width: 48, background: '#00D4B4' }} />
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 200, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
            Carbon-neutral<br /><span style={{ color: '#00D4B4', fontWeight: 300 }}>robotic systems</span>
          </h1>
          <p style={{ color: '#707070', fontSize: 16, fontWeight: 300, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 48px' }}>
            From electromagnetic drives to lunar rovers.<br />Engineering tomorrow&apos;s infrastructure today.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#products" style={{ padding: '12px 32px', background: '#fff', color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>Our Products</a>
            <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 32px', border: '1px solid #1a1a1a', color: '#707070', borderRadius: 6, fontSize: 13, fontWeight: 300, textDecoration: 'none' }}>Hybrid В Пути →</a>
          </div>
        </div>
      </section>

      <section id="products" style={{ padding: '128px 32px', maxWidth: 1152, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ color: '#00D4B4', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>Product Line</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 200, color: '#fff' }}>Eight systems.<br />One mission.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 1, background: '#1a1a1a' }}>
          {[
            ['01','Electrojet','Aviation','Zero-emission aircraft on direct-flow magnetic-waveguide motors.'],
            ['02','Lunar Rover','Space','Electromagnetic-drive robotics for lunar surface exploration.'],
            ['03','Argo Printer','Industry','Industrial additive manufacturing for on-site construction.'],
            ['04','Bionics','MedTech','Electromagnetic-actuated prosthetics with individual calibration.'],
            ['05','Electric Train','Transit','High-speed electromagnetic rail for passenger and cargo.'],
            ['06','Auto Truck','Logistics','Self-piloting electrified freight with satellite autopilot.'],
            ['07','Manipulators','Robotics','High-precision robotic arms for industry and medicine.'],
            ['08','Charge Network','Infrastructure','Stationary and mobile charging for the Hybrid fleet.'],
          ].map(([num, name, tag, desc]) => (
            <div key={num} style={{ background: '#080808', padding: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <span style={{ color: '#404040', fontSize: 11, fontFamily: 'monospace' }}>{num}</span>
                <span style={{ color: '#404040', fontSize: 10, border: '1px solid #1a1a1a', padding: '2px 8px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tag}</span>
              </div>
              <div style={{ width: '100%', height: 120, background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 6, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#1a1a1a', fontSize: 11, fontFamily: 'monospace' }}>[ image ]</span>
              </div>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 300, marginBottom: 8 }}>{name}</div>
              <div style={{ color: '#707070', fontSize: 12, lineHeight: 1.6, fontWeight: 300 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="divisions" style={{ padding: '128px 32px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ color: '#00D4B4', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>Structure</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 200, color: '#fff' }}>Divisions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#1a1a1a' }}>
            {[
              ['01','Hybrid Aerospace','Electrojet manufacturing, aerospace port, satellite constellation.','64.386°N 40.710°E'],
              ['02','Hybrid Robotics','Manipulators, bionic prosthetics, lunar rovers, additive manufacturing.','R&D Division'],
              ['03','Hybrid Transit','Electric trains, buses, autonomous freight trucks.','Transit Division'],
              ['04','Hybrid Charge','Stationary and mobile charging infrastructure.','Infrastructure'],
              ['05','Hybrid Athletics',"Women's triathlon team.",'Sports Division'],
              ['06','Hybrid Esports','Competitive gaming org. Academy + pro teams.','Esports Division'],
            ].map(([num, name, desc, loc]) => (
              <div key={num} style={{ background: '#080808', padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 24 }}>
                <span style={{ color: '#404040', fontSize: 11, fontFamily: 'monospace', width: 24, flexShrink: 0 }}>{num}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#fff', fontSize: 13, fontWeight: 300, marginBottom: 4 }}>{name}</div>
                  <div style={{ color: '#707070', fontSize: 12, fontWeight: 300 }}>{desc}</div>
                </div>
                <div style={{ color: '#404040', fontSize: 10, fontFamily: 'monospace', textAlign: 'right', flexShrink: 0 }}>{loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" style={{ padding: '128px 32px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <div style={{ color: '#00D4B4', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 32 }}>Mission</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 200, color: '#fff', lineHeight: 1.3 }}>Safe coexistence<br />between humans<br />and digital intelligence.</h2>
          </div>
          <div style={{ paddingTop: 48 }}>
            <p style={{ color: '#707070', fontSize: 13, fontWeight: 300, lineHeight: 1.8, marginBottom: 32 }}>
              Hybrid Inc. integrates carbon-neutral robotic units into industry and daily life — building infrastructure where human capability is extended, not replaced.
            </p>
            {[
              ['PMV Drive','Direct-flow magnetic-waveguide motor. Fast response, near-zero emissions.'],
              ['Orbital Autopilot','Proprietary satellite constellation enabling autonomous navigation.'],
              ['Aerospace Port','64.386°N 40.710°E — launch facility for suborbit, orbit, and lunar missions.'],
            ].map(([title, desc]) => (
              <div key={title} style={{ borderLeft: '1px solid #1a1a1a', paddingLeft: 16, marginBottom: 24 }}>
                <div style={{ color: '#fff', fontSize: 12, fontWeight: 500, marginBottom: 4 }}>{title}</div>
                <div style={{ color: '#707070', fontSize: 12, fontWeight: 300, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vputi" style={{ padding: '128px 32px', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ color: '#00D4B4', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 32 }}>Internal Platform</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 200, color: '#fff', marginBottom: 24 }}>Hybrid<br /><span style={{ color: '#00D4B4' }}>В Пути</span></h2>
            <p style={{ color: '#707070', fontSize: 13, fontWeight: 300, lineHeight: 1.8, marginBottom: 8 }}>
              Corporate travel OS for Hybrid Inc. employees. AI builds full door-to-door routes — taxi, flight, train, hotel in one confirmation.
            </p>
            <p style={{ color: '#404040', fontSize: 12, fontWeight: 300, lineHeight: 1.8, marginBottom: 40 }}>Available to all Hybrid Inc. staff. Web and mobile.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', background: '#00D4B4', color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>Open Web App →</a>
              <button disabled style={{ padding: '12px 24px', border: '1px solid #1a1a1a', color: '#404040', borderRadius: 6, fontSize: 13, background: 'transparent', cursor: 'not-allowed' }}>Download APK · Soon</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: 240, aspectRatio: '9/16', background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#00D4B4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#000', margin: '0 auto 12px' }}>H</div>
                <div style={{ color: '#fff', fontSize: 14, fontWeight: 300 }}>В Пути</div>
                <div style={{ color: '#404040', fontSize: 12, marginTop: 4 }}>App Preview</div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: -12, right: 0, padding: '6px 12px', borderRadius: 20, background: '#0f0f0f', border: '1px solid #00D4B4', color: '#00D4B4', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Internal</div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '48px 32px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: '#00D4B4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#000', fontSize: 11 }}>H</div>
            <span style={{ color: '#404040', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 300 }}>Hybrid Inc.</span>
          </div>
          <div style={{ color: '#404040', fontSize: 11, fontFamily: 'monospace' }}>64.386°N 40.710°E · Arkhangelsk Region</div>
          <div style={{ color: '#404040', fontSize: 11, fontWeight: 300 }}>© 2024 Hybrid Inc.</div>
        </div>
      </footer>

    </main>
  )
}
