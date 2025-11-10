import { Building2, Heart } from "lucide-react"

export function TreasuryFoundationSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-tr from-[#094068] to-transparent"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-4 text-balance">
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">New Era for</span>
            <br />
            <span className="text-[#26C8B8]">Clinical Funding</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Dual structure balancing profit-driven growth with mission impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-8 hover:border-[#26C8B8]/40 transition-all duration-300 flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-[#26C8B8]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-light text-white mb-1">Axella Treasury</h3>
                <p className="text-sm text-[#26C8B8] font-light">For-Profit Entity</p>
              </div>
            </div>

            <ul className="space-y-3 text-white/90 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#26C8B8] mt-1 text-xl">•</span>
                <span className="leading-relaxed">Holds TT-E proceeds and exit gains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#26C8B8] mt-1 text-xl">•</span>
                <span className="leading-relaxed">Executes AXC buybacks and reinvestment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#26C8B8] mt-1 text-xl">•</span>
                <span className="leading-relaxed">Operates under governance policy</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-8 hover:border-[#26C8B8]/40 transition-all duration-300 flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-7 h-7 text-[#26C8B8]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-light text-white mb-1">Axella Foundation</h3>
                <p className="text-sm text-[#26C8B8] font-light">Non-Profit Entity</p>
              </div>
            </div>

            <ul className="space-y-3 text-white/90 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#26C8B8] mt-1 text-xl">•</span>
                <span className="leading-relaxed">Deploys grants under TT-G guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#26C8B8] mt-1 text-xl">•</span>
                <span className="leading-relaxed">Vets trials for scientific rigor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#26C8B8] mt-1 text-xl">•</span>
                <span className="leading-relaxed">Supports open-science initiatives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
