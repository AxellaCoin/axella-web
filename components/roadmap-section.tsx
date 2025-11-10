import { Card } from "@/components/ui/card"
import { Check, Loader2, Clock } from "lucide-react"

const milestones = [
  {
    title: "Platform Development",
    date: "Q4 2025",
    impact: "Building smart contracts, governance mechanisms, and user interfaces",
    status: "in-progress",
  },
  {
    title: "Platform Launch",
    date: "Q1 2026",
    impact: "Launch AXC token on Cardano and open platform to researchers",
    status: "planned",
  },
  {
    title: "First Clinical Trials",
    date: "Q2 2026",
    impact: "Fund first compassionate use protocols through community voting",
    status: "planned",
  },
  {
    title: "Global Expansion",
    date: "Q4 2026",
    impact: "Expand to support institutions in Europe and Asia",
    status: "planned",
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#021C24]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extralight text-center mb-16 md:mb-20 leading-[1.1] tracking-tight text-balance">
          <span className="heading-gradient">Our Journey to</span>
          <br />
          <span className="text-accent-cyan">Revolutionize Funding</span>
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#094068] transform -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <Card
                    className={`p-8 border ${
                      milestone.status === "completed"
                        ? "bg-[#094068]/30 backdrop-blur-md border-[#26C8B8] shadow-lg shadow-[#26C8B8]/20"
                        : milestone.status === "in-progress"
                          ? "bg-[#094068]/30 backdrop-blur-md border-[#26C8B8] shadow-lg shadow-[#26C8B8]/30"
                          : "bg-[#094068]/20 backdrop-blur-md border-[#26C8B8]/20"
                    } rounded-xl`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-light text-white">{milestone.title}</h3>
                      {milestone.status === "completed" && (
                        <div className="w-8 h-8 rounded-full bg-[#26C8B8] flex items-center justify-center shadow-lg shadow-[#26C8B8]/50">
                          <Check className="w-5 h-5 text-[#021C24]" />
                        </div>
                      )}
                      {milestone.status === "in-progress" && (
                        <div className="w-8 h-8 rounded-full bg-[#26C8B8] flex items-center justify-center animate-pulse shadow-lg shadow-[#26C8B8]/50">
                          <Loader2 className="w-5 h-5 text-[#021C24] animate-spin" />
                        </div>
                      )}
                      {milestone.status === "planned" && (
                        <div className="w-8 h-8 rounded-full bg-[#094068] border-2 border-[#26C8B8]/50 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-[#26C8B8]" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-light text-[#26C8B8] mb-2">{milestone.date}</p>
                    <p className="text-white/90 leading-relaxed font-light">{milestone.impact}</p>
                  </Card>
                </div>

                <div
                  className={`hidden md:block w-6 h-6 rounded-full ${
                    milestone.status === "completed"
                      ? "bg-[#26C8B8] shadow-lg shadow-[#26C8B8]/50"
                      : milestone.status === "in-progress"
                        ? "bg-[#26C8B8] animate-pulse shadow-lg shadow-[#26C8B8]/50"
                        : "bg-[#094068] border-2 border-[#26C8B8]/50"
                  } z-10`}
                />

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
