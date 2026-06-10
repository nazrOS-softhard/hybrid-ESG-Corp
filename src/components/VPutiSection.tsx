import React from 'react';

export function VPutiSection() {
  return (
    <section id="vputi" className="py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="text-[#00D4B4] text-xs tracking-widest2 uppercase mb-8">
              Internal Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-6">
              Hybrid<br />
              <span style={{ color: '#00D4B4' }}>В Пути</span>
            </h2>
            <p className="text-[#707070] text-sm font-light leading-relaxed mb-4">
              Corporate travel OS for Hybrid Inc. employees. Point-to-point routing powered by AI —
              taxi, flight, train, hotel in a single confirmation.
            </p>
            <p className="text-[#404040] text-xs font-light leading-relaxed mb-10">
              Available to all Hybrid Inc. staff. Web and mobile.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Web app */}
              
                href="https://hybrid-away.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00D4B4] text-black text-sm font-medium rounded hover:bg-[#00bfa3] transition-colors tracking-wide"
              >
                Open Web App →
              </a>

              {/* APK placeholder */}
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1a1a1a] text-[#404040] text-sm font-light rounded cursor-not-allowed tracking-wide"
                title="Coming soon"
              >
                Download APK
                <span className="text-[10px] border border-[#1a1a1a] px-1.5 py-0.5 rounded-full">Soon</span>
              </button>
            </div>
          </div>

          {/* Right — app preview placeholder */}
          <div className="relative">
            <div
              className="w-full aspect-[9/16] max-w-[280px] mx-auto rounded-2xl flex items-center justify-center"
              style={{ background: '#0f0f0f', border: '1px solid #1a1a1a' }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-black text-lg mx-auto mb-3"
                  style={{ background: '#00D4B4' }}
                >
                  H
                </div>
                <div className="text-white text-sm font-light">В Пути</div>
                <div className="text-[#404040] text-xs mt-1">App Preview</div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wider uppercase"
              style={{ background: '#0f0f0f', border: '1px solid #00D4B4', color: '#00D4B4' }}
            >
              Internal
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
