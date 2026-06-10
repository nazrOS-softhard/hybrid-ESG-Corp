import React from 'react';

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-8">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#00D4B4]" />
          <span className="text-[#00D4B4] text-xs tracking-widest2 uppercase font-light">Hybrid Inc. · Est. 2024</span>
          <div className="h-px w-12 bg-[#00D4B4]" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extralight text-white leading-none tracking-tight mb-6">
          Carbon-neutral<br />
          <span className="font-light" style={{ color: '#00D4B4' }}>robotic systems</span>
        </h1>

        <p className="text-[#707070] text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-12">
          From electromagnetic drives to lunar rovers.<br />
          Engineering tomorrow's infrastructure today.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          
            href="#products"
            className="px-8 py-3 bg-white text-black text-sm font-medium rounded hover:bg-[#e8e8e8] transition-colors tracking-wide"
          >
            Our Products
          </a>
          
            href="https://hybrid-away.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#1a1a1a] text-[#707070] text-sm font-light rounded hover:border-[#00D4B4] hover:text-[#00D4B4] transition-all tracking-wide"
          >
            Hybrid В Пути →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-[#404040]" />
        <span className="text-[#404040] text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
