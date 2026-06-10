'use client'

import React from 'react'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = ['Products', 'Divisions', 'Mission', 'В Пути']

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded flex items-center justify-center font-semibold text-black text-sm"
            style={{ background: '#00D4B4' }}
          >
            H
          </div>
          <span className="text-white font-light tracking-widest2 text-sm uppercase">Hybrid Inc.</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            
              key={l}
              href={l === 'В Пути' ? '#vputi' : `#${l.toLowerCase()}`}
              className="text-[#707070] hover:text-white text-xs tracking-widest uppercase transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        
          href="https://hybrid-away.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-4 py-2 rounded border border-[#00D4B4] text-[#00D4B4] hover:bg-[#00D4B4] hover:text-black transition-all duration-200 tracking-wider uppercase"
        >
          В Пути →
        </a>
      </div>
    </nav>
  )
}
