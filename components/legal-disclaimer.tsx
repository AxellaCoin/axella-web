import { Shield, Scale } from "lucide-react"

export function LegalDisclaimer() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#021C24] border-t border-[#26C8B8]/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col items-center gap-3 mb-4">
            <Scale className="w-10 h-10 md:w-12 md:h-12 text-[#26C8B8]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight">
              Legal Disclaimer
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Important information about token structure, compliance, and regulatory framing
          </p>
        </div>

        {/* Main Disclaimer Card */}
        <div className="bg-[#094068]/40 backdrop-blur-md border border-[#26C8B8]/20 rounded-2xl p-6 sm:p-8 mb-6 shadow-lg shadow-[#26C8B8]/5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#26C8B8]" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-thin text-white mb-4 tracking-tight">Token Classification</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2 text-base sm:text-lg">AXC (AxellaCoin) - Utility Token</h4>
                  <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                    AXC is a utility token for ecosystem access and alignment. It does not represent equity, ownership,
                    or profit rights. Acquire AXC to access the ecosystem and participate in TT-G-based governance.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2 text-base sm:text-lg">
                    TT-E (Tokenized Trial Equity) - Securities Token
                  </h4>
                  <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                    TT-E represents digital fractional equity in clinical trial SPVs. Available exclusively to
                    accredited investors under Reg D / Reg S. This is a regulated security offering with potential
                    investment returns tied to trial success.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2 text-base sm:text-lg">
                    TT-G (Tokenized Trial Governance) - Governance/Utility Token
                  </h4>
                  <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                    TT-G is a non-equity governance token enabling community members to vote on trial priorities and
                    Foundation initiatives. It does not represent securities and provides no investment returns.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2 text-base sm:text-lg">
                    cUSD-Clinical - Stablecoin Payment Rail
                  </h4>
                  <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                    cUSD-Clinical is a USD-pegged stablecoin used exclusively for vendor payments and trial
                    disbursements. It provides stable, predictable payment flows with transparent on-chain tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Utility Purposes */}
        <div className="bg-[#094068]/40 rounded-xl p-6 mb-6 border border-[#26C8B8]/10">
          <h4 className="font-medium text-white mb-3 text-base sm:text-lg">Utility Purposes Only:</h4>
          <ul className="space-y-2">
            {[
              "Support for trial funding initiatives",
              "Participation in Stake-to-Support campaigns",
              "Access to CRO services (future phase)",
              "Governance participation via DAO (future)",
            ].map((item, index) => (
              <li key={index} className="text-sm sm:text-base text-white/90 font-light flex items-start gap-2">
                <span className="text-[#26C8B8] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-l-4 border-[#26C8B8] pl-4 sm:pl-6 mb-6">
          <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
            When AXC is used to fund biotech startups, any resulting equity, warrants, or royalties are held by Axella
            Research or an affiliated treasury. These assets are not distributed to token holders, but may be used to
            reinvest in future research.
          </p>
          <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mt-3">
            <strong className="text-white font-medium">
              This structure enables a sustainable funding ecosystem—not a profit-sharing scheme.
            </strong>
          </p>
        </div>

        <p className="text-xs sm:text-sm text-white/80 font-light italic">
          The value of AXC may fluctuate. By using AXC, you acknowledge that it is a utility token, not a financial
          instrument, and is used at your own discretion.
        </p>
      </div>
    </section>
  )
}
