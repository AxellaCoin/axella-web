import {
  ArrowRight,
  Coins,
  Shield,
  Dna,
  Vault,
  Heart,
  Users,
  Repeat,
  Wallet,
  Target,
  BarChart3,
  Gift,
} from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Wallet,
    title: "Stake AXC",
    subtitle: "Gain Governance Rights",
    description:
      "Stake AXC to mint TT-G (Tokenized Trial Governance) NFTs, granting you governance rights to participate in curated trials. Stakers receive community benefits including eligibility for future airdrops and boosts when holding governance NFTs.",
  },
  {
    number: 2,
    icon: Target,
    title: "Participate in Funding",
    subtitle: "Support Vetted Trials",
    description:
      "Fund trials with fiat currency to receive TT-E (Tokenized Trial Equity) tokens representing equity positions in clinical trials. Each trial launches its own fractionalized NFT.",
  },
  {
    number: 3,
    icon: BarChart3,
    title: "Returns to Treasury",
    subtitle: "Value Flows Back",
    description:
      "A portion of net profits from funding deals flows to the Treasury, creating sustainable value for the ecosystem.",
  },
  {
    number: 4,
    icon: Gift,
    title: "Reinvest & Reward",
    subtitle: "Community Benefits",
    description:
      "Treasury performs buybacks, airdrops, and new funding rounds, rewarding the AXC community and driving growth.",
  },
]

const ecosystemNodes = [
  {
    icon: Coins,
    title: "Investors",
    subtitle: "Provide capital via TT-E",
    color: "#26C8B8",
    angle: 0, // top
  },
  {
    icon: Shield,
    title: "TT-E SPV",
    subtitle: "Compliant fractionalized equity",
    color: "#26C8B8",
    angle: 60,
  },
  {
    icon: Dna,
    title: "Biotech / Researchers",
    subtitle: "Milestone-based research",
    color: "#26C8B8",
    angle: 120,
  },
  {
    icon: Vault,
    title: "AXC Treasury",
    subtitle: "Holds value, regenerates capital",
    color: "#26C8B8",
    angle: 180, // bottom
  },
  {
    icon: Heart,
    title: "Compassionate-Use",
    subtitle: "Mission-driven reinvestment",
    color: "#26C8B8",
    angle: 240,
  },
  {
    icon: Users,
    title: "Community",
    subtitle: "Governance, staking, rewards",
    color: "#26C8B8",
    angle: 300,
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#021C24] via-[#032530] to-[#021C24]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-15">
          <div className="w-full h-full bg-gradient-to-bl from-[#26c8b8] via-[#26c8b8]/50 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15">
          <div className="w-full h-full bg-gradient-to-tr from-[#26c8b8] via-[#26c8b8]/50 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#26C8B8]/10 border border-[#26C8B8]/20">
            <Repeat className="w-4 h-4 text-[#26C8B8]" strokeWidth={1.5} />
            <span className="text-sm font-light text-[#26C8B8] tracking-wide uppercase">Regenerative Ecosystem</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white mb-6 leading-tight tracking-tight text-balance">
            How AXC
            <br />
            <span className="text-[#26C8B8] font-thin">Creates Value</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            A continuous regenerative loop where funding flows into innovation, returns flow to treasury,
            <br className="hidden sm:block" />
            and value continuously reinvests into the community and new breakthroughs
          </p>
        </div>

        <div className="mb-20 md:mb-28 relative">
          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-4">
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-[#26C8B8]/20 blur-2xl animate-pulse" />
                <img
                  src="/images/design-mode/image03(2).png"
                  alt="AxellaCoin Logo"
                  className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                />
              </div>
            </div>

            {ecosystemNodes.map((node, index) => {
              const IconComponent = node.icon
              return (
                <div key={index} className="relative">
                  <div className="rounded-xl bg-[#094068]/30 backdrop-blur-md border border-[#26C8B8]/20 p-5 hover:border-[#26C8B8]/60 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-full blur-lg opacity-40"
                            style={{ backgroundColor: node.color }}
                          />
                          <div
                            className="relative w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${node.color}20` }}
                          >
                            <IconComponent className="w-6 h-6" strokeWidth={1.5} style={{ color: node.color }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-light text-white mb-1 leading-tight">{node.title}</h3>
                        <p className="text-sm text-white/70 font-light leading-relaxed">{node.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector between nodes */}
                  {index < ecosystemNodes.length - 1 && (
                    <div className="flex justify-center py-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#26C8B8]/60">
                        <path
                          d="M12 5v14m0 0l-4-4m4 4l4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Desktop/Tablet: Circular Layout */}
          <div className="hidden md:block relative w-full max-w-4xl mx-auto aspect-square max-h-[700px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative group">
                {/* Animated glow ring */}
                <div className="absolute inset-0 rounded-full bg-[#26C8B8]/20 blur-2xl animate-pulse" />

                {/* Center circle */}
                <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 flex items-center justify-center">
                  <img
                    src="/images/design-mode/image03(2).png"
                    alt="AxellaCoin Logo"
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Circular connection path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#26C8B8" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#26C8B8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#26C8B8" stopOpacity="0.4" />
                </linearGradient>

                {/* Arrow marker - improved visibility */}
                <marker
                  id="arrowhead"
                  markerWidth="12"
                  markerHeight="12"
                  refX="10"
                  refY="6"
                  orient="auto"
                  fill="#26C8B8"
                >
                  <polygon points="0 0, 12 6, 0 12" opacity="0.8" />
                </marker>
              </defs>

              {/* Main circular path with arrows */}
              <circle
                cx="400"
                cy="400"
                r="260"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                strokeDasharray="10 5"
                className="opacity-60"
                markerMid="url(#arrowhead)"
              />

              {/* Animated flowing dots */}
              <circle cx="400" cy="140" r="3" fill="#26C8B8" opacity="0.8">
                <animateMotion dur="10s" repeatCount="indefinite" path="M400,140 A260,260 0 1,1 399,140" />
              </circle>
              <circle cx="400" cy="140" r="3" fill="#26C8B8" opacity="0.6">
                <animateMotion dur="10s" repeatCount="indefinite" begin="5s" path="M400,140 A260,260 0 1,1 399,140" />
              </circle>
            </svg>

            {/* Ecosystem nodes positioned in circle */}
            {ecosystemNodes.map((node, index) => {
              const IconComponent = node.icon
              const radius = 260 // Match SVG circle
              const angleRad = (node.angle - 90) * (Math.PI / 180)
              const x = 50 + 32.5 * Math.cos(angleRad)
              const y = 50 + 32.5 * Math.sin(angleRad)

              return (
                <div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div className="relative">
                    {/* Node card */}
                    <div className="w-36 sm:w-44 md:w-52 rounded-xl bg-[#094068]/30 backdrop-blur-md border border-[#26C8B8]/20 p-4 md:p-5 transition-all duration-500 hover:border-[#26C8B8]/60 hover:bg-[#094068]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#26C8B8]/20 hover:scale-105">
                      {/* Icon with glow */}
                      <div className="flex justify-center mb-3">
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-full blur-lg opacity-40"
                            style={{ backgroundColor: node.color }}
                          />
                          <div
                            className="relative w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${node.color}20` }}
                          >
                            <IconComponent
                              className="w-5 h-5 md:w-6 md:h-6"
                              strokeWidth={1.5}
                              style={{ color: node.color }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-sm md:text-base font-light text-white mb-1 text-center leading-tight text-balance">
                        {node.title}
                      </h3>
                      <p className="text-xs text-white/70 font-light text-center leading-relaxed text-balance">
                        {node.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-extralight text-white mb-3 text-balance">
              The <span className="text-[#26C8B8] font-thin">Four-Step</span> Value Loop
            </h3>
            <p className="text-base text-white/70 font-light max-w-2xl mx-auto">
              Each step feeds into the next, creating a sustainable cycle of innovation and growth
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon

            return (
              <div key={step.number} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 items-center justify-center w-6 h-6">
                    <ArrowRight
                      className="w-5 h-5 text-[#26C8B8]/60 group-hover:text-[#26C8B8] transition-all duration-300"
                      strokeWidth={2}
                    />
                  </div>
                )}

                <div className="h-full rounded-xl bg-gradient-to-br from-[#094068]/30 to-[#021C24]/50 backdrop-blur-md border border-[#26C8B8]/20 p-6 md:p-8 transition-all duration-500 hover:border-[#26C8B8]/60 hover:from-[#094068]/50 hover:to-[#021C24]/70 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#26C8B8]/20 flex flex-col items-center text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#26C8B8]/0 to-[#26C8B8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col items-center w-full">
                    <div className="mb-5 relative">
                      {/* Outer glow ring - cyan */}
                      <div className="absolute inset-0 bg-[#26C8B8]/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150" />

                      {/* Middle glow ring - gold accent */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-[#26C8B8]/30 to-[#26C8B8]/20 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse" />

                      {/* Icon container with gradient background */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#094068] via-[#0a5578] to-[#094068] flex items-center justify-center border-2 border-[#26C8B8]/30 group-hover:border-[#FFD700]/50 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-[#26C8B8]/30">
                        {/* Inner highlight gradient */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#26C8B8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Icon with enhanced styling */}
                        <StepIcon
                          className="w-9 h-9 relative z-10 transition-all duration-500 group-hover:scale-110"
                          strokeWidth={1.5}
                          style={{
                            filter: "drop-shadow(0 0 8px rgba(38, 200, 184, 0.6))",
                            color: "#26C8B8",
                          }}
                        />
                      </div>

                      {/* Gold accent ring on hover */}
                      <div className="absolute inset-0 rounded-full border border-[#FFD700]/0 group-hover:border-[#FFD700]/30 transition-all duration-500 scale-110" />
                    </div>

                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#26C8B8]/30 to-[#26C8B8]/10 border border-[#26C8B8]/30 text-[#26C8B8] font-light text-sm mb-3">
                      {step.number}
                    </div>

                    <h3 className="text-lg md:text-xl font-light text-[#26C8B8] mb-2 text-balance">{step.title}</h3>
                    <h4 className="text-sm md:text-base font-light text-white mb-3 text-balance">{step.subtitle}</h4>
                    <p className="text-sm text-white/80 leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
