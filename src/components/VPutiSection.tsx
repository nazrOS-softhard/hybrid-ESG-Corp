export function VPutiSection() {
  return (
    <section id="vputi" className="py-32" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="text-xs uppercase mb-8"
              style={{ color: '#00D4B4', letterSpacing: '0.25em' }}
            >
              Internal Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-6">
              Hybrid
              <br />
              <span style={{ color: '#00D4B4' }}>В Пути</span>
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: '#707070' }}>
              Corporate travel OS for Hybrid Inc. employees. Point-to-point routing powered by AI —
              taxi, flight, train, hotel in a single confirmation.
            </p>
            <p className="text-xs font-light leading-relaxed mb-10" style={{ color: '#404040' }}>
              Available to all Hybrid Inc. staff. Web and mobile.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              
                href="https://hybrid-away.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded tracking-wide transition-colors"
                style={{ background: '#00D4B4', color: '#000' }}
              >
                Open Web App →
              </a>

              <button
                disabled
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-light rounded tracking-wide cursor-not-allowed"
                style={{ border: '1px solid #1a1a1a', color: '#404040' }}
              >
                Download APK
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{ border: '1px solid #1a1a1a' }}
                >
                  Soon
                </span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="w-64 rounded-2xl flex items-center justify-center"
              style={{
                background: '#0f0f0f',
                border: '1px solid #1a1a1a',
                aspectRatio: '9/16',
              }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mx-auto mb-3"
                  style={{ background: '#00D4B4', color: '#000' }}
                >
                  H
                </div>
                <div className="text-white text-sm font-light">В Пути</div>
                <div className="text-xs mt-1" style={{ color: '#404040' }}>
                  App Preview
                </div>
              </div>
            </div>

            <div
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-medium uppercase"
              style={{
                background: '#0f0f0f',
                border: '1px solid #00D4B4',
                color: '#00D4B4',
                letterSpacing: '0.1em',
              }}
            >
              Internal
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
