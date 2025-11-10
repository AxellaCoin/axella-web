import { Coins, Users, Vote, DollarSign } from "lucide-react"

export function TokenOverviewSection() {
  const tokens = [
    {
      name: "TT-E",
      fullName: "Tokenized Trial Equity",
      icon: Coins,
      type: "Securities Token",
      color: "#26C8B8",
      borderColor: "rgba(38, 200, 184, 0.4)",
      description:
        "Digital fractional equity in clinical trials issued through Special Purpose Vehicles (SPVs). Available exclusively to accredited investors under Reg D / Reg S.",
      features: [
        "Represents equity ownership in trial SPVs",
        "Accredited investors only (Reg D / Reg S)",
        "Potential returns tied to trial success and exits",
        "Transparent on-chain tracking",
      ],
    },
    {
      name: "TT-G",
      fullName: "Tokenized Trial Governance",
      icon: Vote,
      type: "Governance Token",
      color: "#094068",
      borderColor: "rgba(9, 64, 104, 0.4)",
      description:
        "Non-equity governance token enabling community members to prioritize trials, vote on Foundation initiatives, and guide ecosystem direction. No investment returns.",
      features: [
        "Vote on trial prioritization and funding",
        "Participate in governance proposals",
        "Non-equity, non-securities token",
        "Earned through AXC staking and participation",
      ],
    },
    {
      name: "AXC",
      fullName: "AxellaCoin",
      icon: Users,
      type: "Utility Token",
      color: "#26C8B8",
      borderColor: "rgba(38, 200, 184, 0.4)",
      description:
        "Primary ecosystem utility token for staking, access rights, rewards distribution, and platform alignment. Powers all interactions within the AxellaCoin ecosystem.",
      features: [
        "Stake for governance rights (TT-G)",
        "Access to CRO services (future)",
        "Treasury buybacks and rewards",
        "Ecosystem utility and alignment",
      ],
    },
    {
      name: "cUSD-Clinical",
      fullName: "Clinical Stablecoin",
      icon: DollarSign,
      type: "Payment Rail",
      color: "#26C8B8",
      borderColor: "rgba(38, 200, 184, 0.4)",
      description:
        "USD-pegged stablecoin used for all vendor payments and trial disbursements. Ensures predictable cash flows, clean accounting, and regulatory compliance.",
      features: [
        "1:1 USD peg for stability",
        "All vendor and trial payments",
        "Transparent, auditable flows",
        "Optional AXC rewards for Pioneer Vendors",
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
            Token
            <br />
            <span className="text-accent-cyan">Architecture</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Four distinct tokens powering a compliant, transparent clinical research ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </section>
  )
}
