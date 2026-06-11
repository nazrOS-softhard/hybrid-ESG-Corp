'use client'

import { useEffect, useRef } from 'react'

export function WireframeWithVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0

    const COLS = 40
    const ROWS = 25
    const FOV = 800

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function height(xi: number, zi: number, t: number): number {
      const nx = xi / COLS
      const nz = zi / ROWS
      return (
        Math.sin(nx * 4 + t * 0.5) * 15 +
        Math.cos(nz * 3 + t * 0.3) * 10
      )
    }

    function project(wx: number, wy: number, wz: number) {
      const W = canvas!.width
      const H = canvas!.height
      const camDist = ROWS * 1.2
      const dz = camDist - wz
      if (dz < 0.1) return null
      const scale = FOV / dz
      return {
        x: W * 0.5 + wx * scale,
        y: H * 0.35 - wy * scale,
        scale,
        depth: wz / ROWS,
      }
    }

    function draw() {
      const W = canvas!.width
      const H = canvas!.height
      ctx!.clearRect(0, 0, W, H)
      time += 0.005

      const pts: ({ x: number; y: number; wy: number } | null)[][] = []

      for (let zi = 0; zi <= ROWS; zi++) {
        pts[zi] = []
        for (let xi = 0; xi <= COLS; xi++) {
          const wx = (xi / COLS - 0.5) * W * 1.2
          const wy = height(xi, zi, time)
          const projected = project(wx, wy, zi)
          pts[zi][xi] = projected ? { x: projected.x, y: projected.y, wy } : null
        }
      }

      const strokeStyle = 'rgba(0, 212, 180, 0.3)'
      ctx!.strokeStyle = strokeStyle
      ctx!.lineWidth = 0.5

      // Сетка по горизонтали
      for (let zi = 0; zi <= ROWS; zi++) {
        ctx!.beginPath()
        for (let xi = 0; xi <= COLS; xi++) {
          const p = pts[zi][xi]
          if (!p) continue
          if (xi === 0) ctx!.moveTo(p.x, p.y)
          else ctx!.lineTo(p.x, p.y)
        }
        ctx!.stroke()
      }

      // Сетка по вертикали
      for (let xi = 0; xi <= COLS; xi++) {
        ctx!.beginPath()
        for (let zi = 0; zi <= ROWS; zi++) {
          const p = pts[zi][xi]
          if (!p) continue
          if (zi === 0) ctx!.moveTo(p.x, p.y)
          else ctx!.lineTo(p.x, p.y)
        }
        ctx!.stroke()
      }

      // Точки узлов
      ctx!.fillStyle = '#00D4B4'
      for (let zi = 0; zi <= ROWS; zi += 3) {
        for (let xi = 0; xi <= COLS; xi += 3) {
          const p = pts[zi][xi]
          if (!p) continue
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
          ctx!.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      {/* Видео-слой на заднем плане */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          objectFit: 'cover',
          opacity: 0.4,
        }}
      >
        <source src="/wireframe-loop.mp4" type="video/mp4" />
        {/* Если видео не загрузится — покажет чёрный фон */}
        <div style={{ background: '#080808', width: '100%', height: '100%' }} />
      </video>

      {/* Canvas-сетка поверх видео */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'transparent',
        }}
      />
    </>
  )
}
