import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductTiles } from "@/components/product-tiles"
import { UnderTheHood } from "@/components/under-the-hood"
import { SocialProof } from "@/components/social-proof"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="noise-bg grid-bg min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProductTiles />
        <UnderTheHood />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}
