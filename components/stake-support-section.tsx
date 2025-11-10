import { Button } from "@/components/ui/button"
import { MessageSquare, GraduationCap, Users, Trophy, Calendar, Eye } from "lucide-react"

export function StakeSupportSection() {
  const benefits = [
    {
      title: "AMA with Lead Researcher",
      description: "Monthly sessions with PIs leading funded trials",
      icon: MessageSquare,
    },
    {
      title: "Biotech Investing 101",
      description: "Educational webinars on clinical trial economics",
      icon: GraduationCap,
    },
    {
      title: "Private Supporter Cohort",
      description: "Exclusive Discord for stakers and NFT holders",
      icon: Users,
    },
    {
      title: "Community Bounties",
      description: "Earn rewards for content creation and outreach",
      icon: Trophy,
    },
    {
      title: "Milestone Showcase Events",
      description: "Quarterly virtual events celebrating trial progress",
      icon: Calendar,
    },
    {
      title: "Early & Gated Information",
      description: "Pre-announcement access to new trial opportunities",
      icon: Eye,
    },
  ]

  return (
    <section id="supporters" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-[1.1] tracking-tight text-balance">
            <span className="heading-gradient">Stake & Support</span>
            <br />
            <span className="text-[#26C8B8]">Exclusive Benefits</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Earn rewards and access exclusive content by staking AXC tokens
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-6 hover:border-[#26C8B8]/40 hover:bg-[#094068]/30 hover:-translate-y-1 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:shadow-2xl hover:shadow-[#26C8B8]/20 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center mb-4 group-hover:bg-[#26C8B8]/20 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-[#26C8B8]" strokeWidth={1.5} />
              </div>

              <h3 className="text-lg sm:text-xl font-light text-white mb-2 text-balance">{benefit.title}</h3>

              <p className="text-sm text-white/90 leading-relaxed font-light text-balance">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <Button
            size="lg"
            className="bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 hover:shadow-lg hover:shadow-[#26C8B8]/40 hover:scale-[1.02] px-8 text-sm font-medium rounded-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) min-h-[44px]"
            asChild
          >
            <a href="#staking">Start Staking AXC</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
