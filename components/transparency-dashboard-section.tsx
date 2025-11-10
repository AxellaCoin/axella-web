"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Coins, Wallet, ExternalLink } from "lucide-react"

export function TransparencyDashboardSection() {
  const metrics = [
    { label: "Treasury Balance", value: "$2.4M", icon: Wallet, color: "#26C8B8" },
    { label: "Foundation Balance", value: "$580K", icon: Heart, color: "#26C8B8" },
    { label: "AXC Price (USD)", value: "$0.85", icon: TrendingUp, color: "#26C8B8" },
    { label: "Holders", value: "3,247", icon: Users, color: "#26C8B8" },
    { label: "TVL", value: "$12.8M", icon: Coins, color: "#26C8B8" },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="dashboard">
      <div className="absolute top-20 right-10 w-[800px] h-[800px] opacity-[0.05] pointer-events-none">
        <img src="/concentric-circles.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white text-balance">
            Transparency <span className="text-[#26C8B8]">Dashboard</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Real-time on-chain metrics via Blockfrost API
          </p>
          <p className="text-sm text-white/70 max-w-2xl mx-auto font-light italic">
            Live data sourced from on-chain at launch
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 p-6 hover:border-[#26C8B8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3 min-h-[160px]"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${metric.color}20` }}
              >
                <metric.icon className="w-6 h-6" style={{ color: metric.color }} strokeWidth={1.5} />
              </div>
              <div className="text-xs text-white/70 uppercase tracking-wide font-light">{metric.label}</div>
              <div className="text-2xl font-light text-white font-mono">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 hover:shadow-lg hover:shadow-[#26C8B8]/40 hover:scale-[1.02] px-8 text-base font-medium rounded-lg transition-all duration-300 gap-2 min-h-[44px]"
          >
            Launch Web3 Portal
            <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </section>
  )
}

function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  )
}
