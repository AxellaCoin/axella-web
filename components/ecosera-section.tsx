import { Button } from "@/components/ui/button"
import { FlaskConical, Shield, CreditCard, Users, FileText, BarChart3 } from "lucide-react"

export function EcoseraSection() {
  const capabilities = [
    {
      icon: FlaskConical,
      title: "Study Management",
      desc: "End-to-end trial operations — from RFP to closeout, across Sponsors, CROs, Sites, and Vendors.",
    },
    {
      icon: CreditCard,
      title: "AXUSD Payments",
      desc: "Milestone-based payments, patient stipends, and vendor invoicing — all settled in AXUSD stablecoin.",
    },
    {
      icon: FileText,
      title: "Regulatory & TMF",
      desc: "ICH GCP E6(R3) compliant document management, eCTD submissions, and inspection readiness.",
    },
    {
      icon: Shield,
      title: "21 CFR Part 11 Signatures",
      desc: "AI-powered e-signatures with SHA-256 hashing, multi-signer flows, and full audit trails.",
    },
    {
      icon: Users,
      title: "Patient Portal & PHR",
      desc: "FHIR R4 health records, trial matching, family sub-portals, and research consent management.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      desc: "Risk-based monitoring, enrollment analytics, budget burn rates, and site compliance scoring.",
    },
  ]

  return (
    <section id="ecosera" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c9a84c]/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 backdrop-blur-sm mb-8">
            <img src="/images/ecosera-symbol.png" alt="ecosera" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(201,168,76,0.4)]" />
            <span className="text-base font-medium text-[#c9a84c] tracking-wide">The Operating Platform</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-[1.1] tracking-tight text-balance">
            <span className="heading-gradient">Powered by</span>
            <br />
            <span className="text-[#c9a84c]">ecosera</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            AXC tokens fuel the economy. ecosera runs the operations. The complete clinical trials operating system
            where every stakeholder — Sponsors, CROs, Sites, Vendors, Patients, and Investors — collaborates
            on a single unified platform.
          </p>
        </div>

        {/* Logo showcase — symbol + CSS text, tightly grouped */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative flex flex-col items-center">
            <div className="absolute inset-0 bg-[#c9a84c]/10 blur-[60px] rounded-full scale-[2]" />
            <img
              src="/images/ecosera-symbol.png"
              alt="ecosera"
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain drop-shadow-[0_0_30px_rgba(201,168,76,0.4)]"
              style={{ mixBlendMode: 'screen' }}
            />
            <div className="relative text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight leading-none -mt-2 sm:-mt-3">
              <span className="text-white">eco</span><span className="text-[#c9a84c] font-light">sera</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-white/40 font-light mt-3 tracking-[0.2em] uppercase">Clinical Trials Operating Ecosystem</div>
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl bg-[#094068]/20 backdrop-blur-md border border-[#c9a84c]/15 p-7 hover:border-[#c9a84c]/40 hover:bg-[#094068]/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                <cap.icon className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Connection banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#094068]/40 to-[#c9a84c]/10 border border-[#c9a84c]/20 p-8 sm:p-10 text-center backdrop-blur-md">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/images/design-mode/image03(1).png" alt="AXC" className="w-14 h-14 rounded-full shadow-lg shadow-[#26C8B8]/20" />
            <div className="w-20 h-px bg-gradient-to-r from-[#26C8B8] to-[#c9a84c]" />
            <img src="/images/ecosera-symbol.png" alt="ecosera" className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.4)]" />
          </div>
          <h3 className="text-2xl font-light text-white mb-3">
            <span className="text-[#26C8B8]">AxellaCoin</span> + <span className="text-[#c9a84c]">ecosera</span> = One Unified Ecosystem
          </h3>
          <p className="text-white/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            AXC provides the funding, governance, and economic incentives. ecosera provides the regulatory-grade
            operating platform. Together, they create the first end-to-end clinical trials ecosystem.
          </p>
          <a href="https://ecosera.io" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#c9a84c] text-[#0a1628] hover:bg-[#e8b84b] hover:shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-[1.02] px-10 text-sm font-medium rounded-lg transition-all duration-300 min-h-[44px] flex items-center gap-2 mx-auto"
            >
              <img src="/images/ecosera-symbol.png" alt="" className="w-7 h-7 object-contain" style={{ filter: 'brightness(0.15)' }} />
              Launch ecosera Platform
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
