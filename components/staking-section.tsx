"use client"

import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, Shield, Copy, Check } from "lucide-react"
import { useState } from "react"

export function StakingSection() {
  const [copied, setCopied] = useState(false)
  const stakingAddress =
    "addr1q86c9dmz3yh6xgq9cje8q6wvf2kdy8cl4qry5edzwd436mgew9ezf787q8rv0l8aumnhqgyzjmnqw03mafsrzn4wxapqthrd3v"

  const copyAddress = () => {
    navigator.clipboard.writeText(stakingAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="staking"
      className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#021C24] to-[#094068] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extralight text-white mb-4 tracking-tight text-balance">
            Stake-to-Support Program
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto">
            Support Real-World Trials, Earn Rewards
          </p>
        </div>

        <div className="bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 rounded-xl p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-5">
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                Support clinical trials by staking AXC and earn milestone-based rewards. Your stake helps fund
                compassionate use protocols.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Coins, title: "Minimum Stake", desc: "500 AXC tokens required" },
                  {
                    icon: TrendingUp,
                    title: "Milestone Rewards",
                    desc: "Earn as trials reach key milestones",
                  },
                  {
                    icon: Shield,
                    title: "Blockchain Verified",
                    desc: "All stakes tracked on Cardano",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center flex-shrink-0 border border-[#26C8B8]/20">
                      <item.icon className="w-5 h-5 text-[#26C8B8]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-light text-white mb-0.5 text-sm">{item.title}</h4>
                      <p className="text-white/80 font-light text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-light text-white mb-2">Staking Wallet Address</label>
                <div className="relative">
                  <input
                    type="text"
                    value={stakingAddress}
                    readOnly
                    className="w-full px-4 py-3 pr-12 bg-[#021C24]/50 border border-[#26C8B8]/30 rounded-lg text-xs sm:text-sm font-mono text-white/90 font-light"
                  />
                  <button
                    onClick={copyAddress}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-[#26C8B8]/20 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title="Copy address"
                    aria-label="Copy staking address"
                  >
                    {copied ? <Check className="w-5 h-5 text-[#26C8B8]" /> : <Copy className="w-5 h-5 text-white/80" />}
                  </button>
                </div>
                <p className="text-xs text-white/70 font-light mt-2">Send your AXC tokens to this address to stake</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-[#26C8B8] text-[#021C24] hover:bg-[#26C8B8]/90 font-medium rounded-lg shadow-lg hover:shadow-[#26C8B8]/50 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) min-h-[44px]"
                asChild
              >
                <a href="https://forms.gle/your-stake-form" target="_blank" rel="noopener noreferrer">
                  Submit Stake Form
                </a>
              </Button>

              <p className="text-xs text-white/70 font-light text-center">
                After staking, submit the form to register your stake
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
