import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Divisions } from '@/components/Divisions'
import { Mission } from '@/components/Mission'
import { VPutiSection } from '@/components/VPutiSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#080808] text-[#e8e8e8] overflow-x-hidden">
      <Nav />
      <Hero />
      <Products />
      <Divisions />
      <Mission />
      <VPutiSection />
      <Footer />
    </main>
  )
}
