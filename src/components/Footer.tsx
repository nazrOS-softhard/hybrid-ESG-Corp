export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1a1a1a] py-12">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-5 rounded flex items-center justify-center font-semibold text-black text-xs"
            style={{ background: '#00D4B4' }}
          >
            H
          </div>
          <span className="text-[#404040] text-xs tracking-widest uppercase font-light">Hybrid Inc.</span>
        </div>

        <div className="text-[#404040] text-xs font-mono">
          64.386°N 40.710°E · Arkhangelsk Region
        </div>

        <div className="text-[#404040] text-xs font-light">
          © {year} Hybrid Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
