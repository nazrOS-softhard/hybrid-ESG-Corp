'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Mission', href: '#mission' },
  { label: 'В Пути', href: '#vputi' },
]

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
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded flex items-center justify-center font-semibold text-sm"
            style={{ background: '#00D4B4', color: '#000' }}
          >
            H
          </div>
          <span className="text-white font-light text-sm uppercase tracking-widest">
            Hybrid Inc.
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            
              key={l.label}
              href={l.href}
              className="text-xs uppercase tracking-widest transition-colors"
              style={{ color: '#707070' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#707070')}
            >
              {l.label}
            </a>
          ))}
        </div>

        
          href="https://hybrid-away.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-4 py-2 rounded uppercase tracking-wider transition-all duration-200"
          style={{ border: '1px solid #00D4B4', color: '#00D4B4' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00D4B4'
            e.currentTarget.style.color = '#000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#00D4B4'
          }}
        >
          В Пути →
        </a>
      </div>
    </nav>
  )
}
