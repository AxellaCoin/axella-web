import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function InvestmentOpportunitiesSection() {
  const trials = [
    {
      title: "Pancreatic Cancer",
      stage: "Phase II",
      minTicket: "$25,000",
      token: "TT-E",
      region: "US/EU",
      description: "Targeting KRAS G12D; endpoints: PFS/OS with 12-month follow-up",
      raise: "$1M",
    },
    {
      title: "Alzheimer's Discovery",
      stage: "Pre-clinical",
      minTicket: "$10,000",
      token: "TT-G",
      region: "Global",
      description: "Novel small-molecule modulating microglial activation; IND-enabling studies",
      raise: "$500K",
    },
    {
      title: "DMD Gene Therapy",
      stage: "Phase I",
      minTicket: "$50,000",
      token: "TT-E",
      region: "US Only",
      description: "AAV9 delivery for dystrophin restoration; safety/PK primary endpoints",
      raise: "$2M",
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative" id="investors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white text-balance">
            Investment <span className="text-[#26C8B8]">Opportunities</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Illustrative projects; replace with live listings. Eligibility depends on jurisdiction and KYC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trials.map((trial) => (
            <div
              key={trial.title}
              className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-8 hover:border-[#26C8B8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[480px]"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-[#26C8B8]/20 text-[#26C8B8] text-xs font-medium rounded-full uppercase tracking-wide">
                  {trial.stage}
                </span>
                <div className="flex items-center gap-1 text-xs text-white/70 font-light">
                  <MapPin className="w-3 h-3" strokeWidth={1.5} />
                  {trial.region}
                </div>
              </div>

              <h3 className="text-xl font-light text-white mb-3 text-balance">{trial.title}</h3>

              <p className="text-sm text-white/80 font-light leading-relaxed flex-grow mb-6">{trial.description}</p>

              <div className="space-y-3 pt-4 border-t border-[#26C8B8]/20 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 font-light">Min Ticket:</span>
                  <span className="text-white font-medium">{trial.minTicket}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 font-light">Token:</span>
                  <span className="text-[#26C8B8] font-medium">{trial.token}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 font-light">Raise Target:</span>
                  <span className="text-white font-medium">{trial.raise}</span>
                </div>
              </div>

              <Button
                size="default"
                className="w-full bg-transparent border-2 border-[#26C8B8] text-[#26C8B8] hover:bg-[#26C8B8]/10 hover:border-[#26C8B8]/60 font-medium rounded-lg group transition-all duration-300 min-h-[44px]"
                asChild
              >
                <a href="#view-details" className="flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
