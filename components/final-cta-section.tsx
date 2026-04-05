import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-[#021C24] to-[#094068] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extralight text-white mb-6 tracking-tight leading-tight">
          Be Among the First to Fund <span className="text-[#26C8B8]">Medical Breakthroughs</span>
        </h2>
        <p className="text-lg text-white/90 font-light mb-10 leading-relaxed">
          Join the founding community of investors, researchers, and patients building the future of medical research
          funding. Launching Q1 2026.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 px-10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Buy AXC →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#26C8B8] text-[#26C8B8] hover:bg-[#26C8B8] hover:text-[#021C24] px-10 font-medium rounded-lg transition-all bg-transparent"
          >
            Read Whitepaper
          </Button>
          <a href="https://ecosera.io" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#c9a84c] text-[#0a1628] hover:bg-[#e8b84b] px-10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <img src="/images/ecosera-symbol.png" alt="" className="w-10 h-10 object-contain rounded-full" style={{ filter: 'brightness(0.15)' }} />
              Explore ecosera
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
