'use client'

import { useRef } from 'react'

export function WireframeWithVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
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
    </video>
  )
}
