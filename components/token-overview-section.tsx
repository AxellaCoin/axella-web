import { Coins, Vote, DollarSign } from "lucide-react"

export function TokenOverviewSection() {
  const tokens = [
    {
      name: "AXC",
      fullName: "AxellaCoin",
      icon: Vote,
      type: "Governance & Utility Token",
      color: "#26C8B8",
      borderColor: "rgba(38, 200, 184, 0.4)",
      description:
        "Platform governance: holders vote on material changes and elect an investor representative. Funding decisions sit with an expert committee, and releases follow verified milestones, not votes. AXC carries no equity, ownership or profit rights.",
      features: [
        "1B fixed supply",
        "Governance & utility",
        "Elects an investor representative",
        "No equity, ownership or profit rights",
      ],
    },
    {
      name: "AXUSD",
      fullName: "Operations Stablecoin",
      icon: DollarSign,
      type: "Payment Rail",
      color: "#26C8B8",
      borderColor: "rgba(38, 200, 184, 0.4)",
      description:
        "USD-pegged stablecoin for all platform payments: CRO bids, site payments, vendor invoices, and patient stipends. Every payment reconciles to a milestone.",
      features: [
        "1:1 USD peg for stability",
        "Milestone-based trial and site payments",
        "Vendor invoices and patient stipends",
        "Transparent, auditable flows",
      ],
    },
    {
      name: "RWA",
      fullName: "Trial Economics",
      icon: Coins,
      type: "Securities Token",
      color: "#26C8B8",
      borderColor: "rgba(38, 200, 184, 0.4)",
      description:
        "Economic rights in one funded trial through a trial-specific SPV: a tiered royalty on the molecule (full rate in the funded indication, reduced in follow-on indications) and a share of licensing or exit proceeds, capped at a multiple. Unreleased tranches return to investors if a trial stops.",
      features: [
        "Trial-specific SPV",
        "Tiered royalty on the molecule",
        "Capped share of licensing or exit proceeds",
        "Accredited investors only (Reg D 506(c) / Reg S)",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.03] pointer-events-none">
        <img src="/placeholder.svg?height=1200&width=1200" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-thin text-white mb-6 leading-[1.1] tracking-tight text-balance">
            Three-Layer Token
            <br />
            <span className="text-accent-cyan">Architecture</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Purpose-built on Cardano. Governance, operations, and trial economics, each with a distinct token role.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tokens.map((token) => (
            <div
              key={token.name}
              className="rounded-xl bg-[#094068]/20 backdrop-blur-md border-2 border-[#26C8B8]/40 p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#26C8B8]/10 hover:border-[#26C8B8]/60 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#26C8B8]/20">
                  <token.icon className="w-7 h-7 text-[#26C8B8]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-2xl font-light text-white">
                      {token.name} <span className="text-lg text-white/70">({token.fullName})</span>
                    </h3>
                  </div>
                  <span className="inline-block text-xs px-2 py-1 rounded-full font-light bg-[#26C8B8]/20 text-[#26C8B8] mt-2">
                    {token.type}
                  </span>
                </div>
              </div>

              <p className="text-base text-white/90 mb-6 leading-relaxed font-light">{token.description}</p>

              <ul className="space-y-3">
                {token.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-white/80 font-light">
                    <span className="mt-1 text-lg text-[#26C8B8]">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-white/70 font-light text-center max-w-3xl mx-auto mt-10 leading-relaxed">
          The AxellaCoin trial-financing model described here is in development and not yet available. Royalty and
          return terms are set per trial in its offering documents. Nothing on this site is an offer to sell, or a
          solicitation of an offer to buy, any security or token.
        </p>
      </div>
    </section>
  )
}
