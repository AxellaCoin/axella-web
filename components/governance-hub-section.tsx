"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Vote, Shield, TrendingUp } from "lucide-react"

export function GovernanceHubSection() {
  const [activeTab, setActiveTab] = useState("community")

  const tabs = [
    { id: "community", label: "Community Governance", icon: Vote },
    { id: "platform", label: "Platform Governance", icon: Shield },
    { id: "equity", label: "Equity Governance", icon: TrendingUp },
  ]

  const content = {
    community: {
      title: "Community Governance (AXC)",
      description: "AXC token holders participate in key ecosystem decisions",
      features: [
        "Vote on trial funding proposals",
        "Approve new research categories",
        "Set community treasury allocations",
        "Propose ecosystem improvements",
      ],
    },
    platform: {
      title: "Platform Governance",
      description: "Shared oversight between Foundation and Treasury",
      features: [
        "Protocol upgrades and parameters",
        "Fee structure modifications",
        "Integration of new blockchains",
        "Security and compliance updates",
      ],
    },
    equity: {
      title: "Equity Governance (TT-E)",
      description: "Trial-specific governance for equity token holders",
      features: [
        "Monitor trial milestones",
        "Review financial allocations",
        "Vote on major trial decisions",
        "Access detailed progress reports",
      ],
    },
  }

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-6 leading-[1.1] tracking-tight text-balance text-white">
            Governance
            <br />
            <span className="text-[#26C8B8] font-thin">Three-Layer System</span>
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent decision-making at every level
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-light text-xs sm:text-sm transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) min-h-[44px] ${
                activeTab === tab.id
                  ? "bg-[#26C8B8] text-[#021C24] shadow-lg shadow-[#26C8B8]/40"
                  : "bg-[#094068]/20 text-white/90 border border-[#26C8B8]/20 hover:border-[#26C8B8]/40 hover:bg-[#094068]/30"
              }`}
            >
              <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              <span className="text-balance">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-6 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0">
              {activeTab === "community" && <Vote className="w-6 h-6 sm:w-7 sm:h-7 text-[#26C8B8]" strokeWidth={1.5} />}
              {activeTab === "platform" && (
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#26C8B8]" strokeWidth={1.5} />
              )}
              {activeTab === "equity" && (
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#26C8B8]" strokeWidth={1.5} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2 text-balance">
                {content[activeTab as keyof typeof content].title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                {content[activeTab as keyof typeof content].description}
              </p>
            </div>
          </div>

          <ul className="space-y-2.5">
            {content[activeTab as keyof typeof content].features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-white/90 font-light">
                <span className="text-[#26C8B8] mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-[#26C8B8]/20">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 hover:shadow-lg hover:shadow-[#26C8B8]/40 hover:scale-[1.02] px-8 text-sm font-medium rounded-lg transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) min-h-[44px]"
            >
              View Governance Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
