'use client'

import { useEffect, useRef } from 'react'

export function WireframeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0

    const COLS = 32
    const ROWS = 20
    const FOV = 500

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Высота точки сетки — многослойные синусоиды
    function height(xi: number, zi: number, t: number): number {
      const nx = xi / COLS
      const nz = zi / ROWS
      return (
        Math.sin(nx * Math.PI * 2.1 + t * 0.5) * 45 +
        Math.sin(nz * Math.PI * 1.8 + t * 0.35) * 35 +
        Math.sin((nx + nz) * Math.PI * 1.4 + t * 0.6) * 20 +
        Math.sin(nx * Math.PI * 4.2 - t * 0.8) * 12 +
        Math.sin(nz * Math.PI * 3.1 + t * 0.45) * 8
      )
    }

    // 3D → 2D проекция с перспективой
    function project(wx: number, wy: number, wz: number) {
      const W = canvas!.width
      const H = canvas!.height
      const camDist = ROWS * 1.15
      const dz = camDist - wz
      if (dz < 0.1) return null
      const scale = FOV / dz
      return {
        x: W * 0.5 + wx * scale,
        y: H * 0.58 - wy * scale,
        scale,
        depth: wz / ROWS, // 0 (far) → 1 (near)
      }
    }

    function draw() {
      const W = canvas!.width
      const H = canvas!.height
      ctx!.clearRect(0, 0, W, H)
      time += 0.007

      // Кэшируем спроецированные точки
      const pts: ({ x: number; y: number; scale: number; depth: number; wy: number } | null)[][] = []
      for (let zi = 0; zi <= ROWS; zi++) {
        pts[zi] = []
        for (let xi = 0; xi <= COLS; xi++) {
          const wx = (xi / COLS - 0.5) * W * 0.92
          const wy = height(xi, zi, time)
          pts[zi][xi] = project(wx, wy, zi) ? { ...project(wx, wy, zi)!, wy } : null
        }
      }

      // Линии вдоль Z (колонки)
      for (let xi = 0; xi <= COLS; xi++) {
        ctx!.beginPath()
        let started = false
        for (let zi = 0; zi <= ROWS; zi++) {
          const p = pts[zi][xi]
          if (!p) continue
          const alpha = 0.04 + p.depth * 0.2
          if (!started) {
            ctx!.moveTo(p.x, p.y)
            started = true
          } else {
            ctx!.lineTo(p.x, p.y)
          }
        }
        ctx!.strokeStyle = 'rgba(200,220,220,0.15)'
        ctx!.lineWidth = 0.5
        ctx!.stroke()
      }

      // Линии вдоль X (ряды) — с переменной прозрачностью по глубине
      for (let zi = 0; zi <= ROWS; zi++) {
        ctx!.beginPath()
        let started = false
        for (let xi = 0; xi <= COLS; xi++) {
          const p = pts[zi][xi]
          if (!p) continue
          if (!started) {
            ctx!.moveTo(p.x, p.y)
            started = true
          } else {
            ctx!.lineTo(p.x, p.y)
          }
        }
        const depth = zi / ROWS
        const alpha = 0.05 + depth * 0.25
        ctx!.strokeStyle = `rgba(220,240,238,${alpha})`
        ctx!.lineWidth = 0.5 + depth * 0.4
        ctx!.stroke()
      }

      // Узловые точки на пиках — бирюзовое свечение
      for (let zi = 1; zi < ROWS; zi += 2) {
        for (let xi = 1; xi < COLS; xi += 2) {
          const p = pts[zi][xi]
          if (!p) continue
          const intensity = Math.max(0, (p.wy - 28) / 50)
          if (intensity < 0.01) continue

          // Внешнее свечение
          const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, 6 * intensity + 2)
          grd.addColorStop(0, `rgba(0,212,180,${intensity * 0.9})`)
          grd.addColorStop(1, 'rgba(0,212,180,0)')
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, 6 * intensity + 2, 0, Math.PI * 2)
          ctx!.fillStyle = grd
          ctx!.fill()

          // Центральная точка
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(0,212,180,${Math.min(1, intensity * 1.5)})`
          ctx!.fill()
        }
      }

      // Горизонтальный туман снизу — плавный переход к контенту
      const fog = ctx!.createLinearGradient(0, H * 0.5, 0, H)
      fog.addColorStop(0, 'rgba(8,8,8,0)')
      fog.addColorStop(0.6, 'rgba(8,8,8,0.5)')
      fog.addColorStop(1, 'rgba(8,8,8,1)')
      ctx!.fillStyle = fog
      ctx!.fillRect(0, 0, W, H)

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
