"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, TrendingUp, Microscope, Heart, Building2 } from "lucide-react"
import Image from "next/image"

const tabs = [
  {
    id: "investors",
    label: "For Investors",
    icon: TrendingUp,
    headline: "Support Medical Research. Shape the Future of Healthcare.",
    benefits: [
      "Governance Rights: Use your AXC tokens to vote on which groundbreaking research projects get funded.",
      "Ecosystem Participation: Hold AXC to participate in a growing healthcare innovation ecosystem.",
      "Transparent Impact: Track exactly how your tokens support real medical research through blockchain verification.",
    ],
    cta: "Learn About AXC",
  },
  {
    id: "researchers",
    label: "For Researchers",
    icon: Microscope,
    headline: "Get Your Breakthrough Funded. Bypass the Red Tape.",
    benefits: [
      "Access Non-Traditional Capital: Secure funding for innovative, early-stage research that traditional VCs and grants often overlook.",
      "Streamlined Process: A fast, transparent, and community-driven funding process.",
      "Focus on Science, Not Fundraising: Spend more time in the lab and less time writing grants.",
    ],
    cta: "Submit Your Research",
  },
  {
    id: "patients",
    label: "For Patients",
    icon: Heart,
    headline: "Hope Through Innovation. Access to Cutting-Edge Trials.",
    benefits: [
      "Accelerating Cures: Our funding model fast-tracks research that could lead to new treatments.",
      "Community-Driven: Support a system that prioritizes promising science, not just commercial potential.",
      "Find New Options: Discover and enroll in clinical trials funded by the AxellaCoin ecosystem.",
    ],
    cta: "Explore Clinical Trials",
  },
  {
    id: "vendors",
    label: "For Vendors",
    icon: Building2,
    headline: "Partner with the Future of Biotech. Secure & Transparent Payments.",
    benefits: [
      "Reliable Payments: Get paid on time, every time, with transparent, blockchain-verified transactions.",
      "Grow Your Business: Become a preferred vendor for a growing network of cutting-edge research projects.",
      "Simple & Efficient: Streamlined invoicing and payment processing.",
    ],
    cta: "Become a Vendor",
  },
]

export function WhoWeServeSection() {
  const [activeTab, setActiveTab] = useState("investors")
  const activeContent = tabs.find((tab) => tab.id === activeTab)!
  const ActiveIcon = activeContent.icon

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#021C24] border-t border-[#094068] relative overflow-hidden">
      <div className="absolute top-32 right-10 w-36 h-36 animate-float-slow pointer-events-none z-0 opacity-60">
        <Image src="/3d-stethoscope.png" alt="" width={144} height={144} className="medical-3d-asset" />
      </div>

      <div className="absolute bottom-20 left-10 w-32 h-32 animate-float pointer-events-none z-0 opacity-50">
        <Image src="/3d-pills.png" alt="" width={128} height={128} className="medical-3d-asset" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extralight text-white mb-4">
            An Ecosystem for <span className="text-accent-cyan">Medical Innovation</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Connecting stakeholders across the healthcare value chain through blockchain technology
          </p>
        </div>

        <div className="flex overflow-x-auto gap-3 mb-10 pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-3 px-5 py-2 font-light rounded-lg transition-all border-2 whitespace-nowrap flex-shrink-0 text-sm lg:text-base h-10 ${
                  activeTab === tab.id
                    ? "bg-[#26C8B8] text-[#021C24] border-[#26C8B8] shadow-lg shadow-cyan-500/50"
                    : "bg-[#094068] text-white border-[#094068] hover:border-[#26C8B8] hover:bg-[#094068]/80"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${activeTab === tab.id ? "text-[#021C24]" : "text-[#26C8B8] group-hover:text-[#26C8B8]"}`}
                />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <Card className="p-8 lg:p-10 bg-[#094068]/50 backdrop-blur-xl border-2 border-[#26C8B8]/30 shadow-2xl shadow-cyan-500/20 rounded-xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-[#26C8B8] flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <ActiveIcon className="w-7 h-7 lg:w-8 lg:h-8 text-[#021C24]" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-thin text-white mb-2 leading-tight">{activeContent.headline}</h3>
              <div className="h-1 w-20 bg-[#26C8B8] rounded-full" />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {activeContent.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#26C8B8]/20 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-[#26C8B8]" strokeWidth={3} />
                </div>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed font-light">{benefit}</p>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 px-6 text-sm lg:text-base font-medium rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all w-full lg:w-auto"
          >
            {activeContent.cta} →
          </Button>
        </Card>
      </div>
    </section>
  )
}
