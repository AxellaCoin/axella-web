import { Button } from "@/components/ui/button"
import { Flag as Flask, Store, TrendingUp, Users } from "lucide-react"

export function JoinEcosystemSection() {
  const stakeholders = [
    {
      title: "Investors",
      icon: TrendingUp,
      description: "Access tokenized trial equity (TT-E) via SPVs. Accredited investors only.",
      cta: "Explore TT-E",
      href: "#investors",
    },
    {
      title: "Researchers",
      icon: Flask,
      description: "Apply for milestone-based funding in cUSD-Clinical for your clinical trials",
      cta: "Request Funding",
      href: "#researchers",
    },
    {
      title: "Vendors",
      icon: Store,
      description: "Get paid in cUSD-Clinical stablecoins; earn AXC Pioneer rewards for alignment",
      cta: "Join Network",
      href: "#vendors",
    },
    {
      title: "Community",
      icon: Users,
      description: "Participate in governance via TT-G and support programs through AXC staking",
      cta: "Get Started",
      href: "#supporters",
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] opacity-15 pointer-events-none">
        <img src="/3d-globe.png" alt="" className="w-full h-full object-contain animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-[1.1] tracking-tight text-balance">
            <span className="heading-gradient">Join the</span>
            <br />
            <span className="text-accent-cyan">Ecosystem</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Multiple pathways to participate in the future of clinical research
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((stakeholder) => (
            <div
              key={stakeholder.title}
              className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-8 flex flex-col items-center text-center hover:border-[#26C8B8]/50 hover:bg-[#094068]/30 hover:-translate-y-1 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:shadow-2xl hover:shadow-[#26C8B8]/20 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#26C8B8]/10 flex items-center justify-center mb-6 group-hover:bg-[#26C8B8]/20 transition-colors duration-300">
                <stakeholder.icon className="w-8 h-8 text-[#26C8B8]" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-light text-white mb-4 text-balance">{stakeholder.title}</h3>

              <p className="text-sm text-white/90 flex-grow mb-6 leading-relaxed font-light text-balance">
                {stakeholder.description}
              </p>

              <Button
                size="lg"
                className="w-full bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 font-medium rounded-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:shadow-lg hover:shadow-[#26C8B8]/40 min-h-[44px]"
                asChild
              >
                <a href={stakeholder.href}>{stakeholder.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
