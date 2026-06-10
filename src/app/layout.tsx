import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hybrid Inc.',
  description: 'Carbon-neutral robotic systems. From Earth to orbit.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#080808' }}>{children}</body>
    </html>
  )
}
