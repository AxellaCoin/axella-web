"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }))
    setParticles(particleArray)
  }, [])

  return (
    <section
      id="main"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="geometric-shape geometric-shape-1" />
      <div className="geometric-shape geometric-shape-2" />

      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-br from-[#26c8b8] to-transparent"
          style={{ clipPath: "polygon(100% 0, 100% 60%, 40% 0)" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15 pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-tr from-[#094068] to-transparent"
          style={{ clipPath: "polygon(0 100%, 60% 100%, 0 40%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#26C8B8]/20 bg-[#021C24]/60 backdrop-blur-sm hover:border-[#26C8B8]/40 hover:bg-[#021C24]/80 transition-all duration-300 shadow-lg shadow-[#26C8B8]/5">
          <img src="/images/design-mode/logo(3).png" alt="Cardano" className="w-6 h-6 opacity-90" />
          <span className="text-[11px] font-light text-[#26C8B8] tracking-[0.08em] uppercase">Built on Cardano</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight px-4 text-balance">
          <span className="heading-gradient block">Powering the Future of</span>
          <span className="text-accent-cyan block mt-2">Clinical Research</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4 font-light text-white/90">
          Connecting innovators, investors, and vendors to accelerate breakthrough therapies through transparent
          funding.
        </p>

        <p className="text-sm sm:text-base lg:text-lg font-light tracking-wide text-white/90">
          <span className="text-[#26C8B8]">Transparent.</span> <span className="text-white/90">Compliant.</span>{" "}
          <span className="text-[#26C8B8]">Impact-Driven.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 flex-wrap">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSqQpCL-C2rBqRiS-z2kk01AzA2q2lM0Tevk0_JYiE6bzIIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 hover:shadow-lg hover:shadow-[#26C8B8]/40 hover:scale-[1.02] px-8 text-sm font-medium rounded-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) min-h-[44px]"
            >
              Join the Presale
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1s0aEdyBnBkm19xjmeohhot1VA3jY9aks/view?usp=drivesdk",
                "_blank",
              )
            }
            className="border-2 border-[#26C8B8]/50 text-[#26C8B8] hover:bg-[#26C8B8]/10 hover:border-[#26C8B8] hover:text-[#26C8B8] hover:scale-[1.02] px-8 text-sm font-normal rounded-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) bg-transparent backdrop-blur-sm min-h-[44px]"
          >
            Read the Whitepaper
          </Button>
        </div>
      </div>
    </section>
  )
}
