import { DollarSign, Shield, TrendingUp, CheckCircle } from "lucide-react"

export function StablecoinSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Predictable Payments",
      description: "USD-pegged stability eliminates volatility for vendors and researchers",
    },
    {
      icon: CheckCircle,
      title: "Clean Accounting",
      description: "Simplified tax reporting and transparent tracking",
    },
    {
      icon: TrendingUp,
      title: "Auditable Flows",
      description: "On-chain transparency for every transaction",
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-tl from-[#26c8b8] to-transparent"
          style={{ clipPath: "polygon(100% 100%, 100% 0, 40% 100%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-6 leading-tight text-balance">
              Stable, Compliant
              <br />
              <span className="text-accent-cyan">Payment Rails</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 font-light leading-relaxed">
              Vendor and trial payments via cUSD-Clinical, our USD-pegged stablecoin for clinical research.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-[#26C8B8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-8 hover:border-[#26C8B8]/40 transition-all duration-300">
            <h3 className="text-2xl font-light text-white mb-6">How It Works</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0 text-[#26C8B8] text-sm font-light">
                  1
                </div>
                <div>
                  <h4 className="text-base font-light text-white mb-1">Trial Funding Approved</h4>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Milestone-based payments in cUSD-Clinical
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0 text-[#26C8B8] text-sm font-light">
                  2
                </div>
                <div>
                  <h4 className="text-base font-light text-white mb-1">Vendors Get Paid</h4>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Stable USD-equivalent payments to CROs and labs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0 text-[#26C8B8] text-sm font-light">
                  3
                </div>
                <div>
                  <h4 className="text-base font-light text-white mb-1">Pioneer Rewards</h4>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Optional AXC acceptance for ecosystem alignment
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-[#26C8B8]/5 border border-[#26C8B8]/20">
              <p className="text-sm text-white/90 font-light leading-relaxed">
                <strong className="text-white font-medium">1:1 USD Peg:</strong> Reserve-backed for stable value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
