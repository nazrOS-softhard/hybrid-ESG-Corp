export function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center px-8"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,212,180,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12" style={{ background: '#00D4B4' }} />
          <span
            className="text-xs uppercase font-light"
            style={{ color: '#00D4B4', letterSpacing: '0.25em' }}
          >
            Hybrid Inc. · Est. 2024
          </span>
          <div className="h-px w-12" style={{ background: '#00D4B4' }} />
        </div>

        <h1 className="text-5xl md:text-7xl font-extralight text-white leading-none tracking-tight mb-6">
          Carbon-neutral
          <br />
          <span style={{ color: '#00D4B4' }} className="font-light">
            robotic systems
          </span>
        </h1>

        <p
          className="text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-12"
          style={{ color: '#707070' }}
        >
          From electromagnetic drives to lunar rovers.
          <br />
          Engineering tomorrow&apos;s infrastructure today.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          
            href="#products"
            className="px-8 py-3 bg-white text-black text-sm font-medium rounded tracking-wide hover:opacity-90 transition-opacity"
          >
            Our Products
          </a>
          
            href="https://hybrid-away.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-sm font-light rounded tracking-wide transition-all"
            style={{ border: '1px solid #1a1a1a', color: '#707070' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00D4B4'
              e.currentTarget.style.color = '#00D4B4'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1a1a1a'
              e.currentTarget.style.color = '#707070'
            }}
          >
            Hybrid В Пути →
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2" style={{ transform: 'translateX(-50%)' }}>
        <div className="h-8 w-px" style={{ background: 'linear-gradient(to bottom, transparent, #404040)' }} />
        <span className="text-xs uppercase" style={{ color: '#404040', letterSpacing: '0.2em' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
