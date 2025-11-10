import { FileText, Shield, Map, Table, Wallet, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"

const documents = [
  {
    title: "AXC Whitepaper",
    description: "Complete technical documentation and vision",
    icon: FileText,
    url: "https://drive.google.com/file/d/1KhDZWl2Kc3kQNmV77YwBKcIkGPUoYP5R/view",
  },
  {
    title: "Governance & Compliance Manual",
    description: "Legal framework and operational guidelines",
    icon: Shield,
    url: "https://drive.google.com/file/d/13F6gPATrBrwvw3tGtz_dpw-cho77fmlW/view",
  },
  {
    title: "Strategic Roadmap",
    description: "Development timeline and milestones",
    icon: Map,
    url: "https://drive.google.com/file/d/1eMlEAEbsOMbUdNIefd2hrmEKo-pQno1e/view",
  },
  {
    title: "Milestone Unlock Table",
    description: "Token release schedule and vesting",
    icon: Table,
    url: "https://airtable.com/app64md8rNnOgaZkf/shrjzxl3jDTYmqggg/tblhOM2ajITT2kaPd",
  },
  {
    title: "Treasury Wallet",
    description: "View live treasury holdings on-chain",
    icon: Wallet,
    url: "https://pool.pm/addr1q88upxz48zh7cfjd20yfpuzhhtjrnp44tsv6p9dlhsalskddjfeuuw4x686gq079d95mwq6kkskvfyv245v2w5d04hns2vgu2d",
  },
]

export function DocumentsSection() {
  return (
    <section id="documents" className="py-24 px-6 bg-[#021C24]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extralight text-white mb-4 tracking-tight">
            Transparency <span className="text-[#26C8B8]">&</span> Governance
          </h2>
          <p className="text-lg text-[#EEEEEE] font-light max-w-3xl mx-auto">
            Full access to our documentation, governance framework, and on-chain treasury
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <a key={doc.title} href={doc.url} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="h-full bg-[#094068]/50 backdrop-blur-xl border-2 border-[#26C8B8]/30 p-8 hover:border-[#26C8B8] hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 rounded-xl">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[#26C8B8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                    <doc.icon className="w-7 h-7 text-[#021C24]" />
                  </div>

                  <div className="absolute top-0 right-0">
                    <ExternalLink className="w-5 h-5 text-[#EEEEEE] group-hover:text-[#26C8B8] transition-colors" />
                  </div>

                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-[#26C8B8] transition-colors tracking-tight">
                    {doc.title}
                  </h3>
                  <p className="text-[#EEEEEE] font-light leading-relaxed">{doc.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
