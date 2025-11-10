import { Card } from "@/components/ui/card"

const coreTeam = [
  {
    name: "Avi Kamelhar",
    role: "Founder & CEO",
    image: "/avi-kamelhar-cropped.jpg",
    bio: "Seasoned entrepreneur and technology leader with extensive experience in blockchain, DeFi, and healthcare innovation. Avi brings a unique blend of business acumen and technical expertise to drive AxellaCoin's vision of democratizing medical research funding.",
  },
  {
    name: "Henry Hazan",
    role: "CTO & Co-Founder",
    image: "/henry-hazan.jpg",
    bio: "Expert blockchain architect and full-stack developer with deep expertise in smart contract development, tokenomics, and decentralized systems. Henry leads the technical architecture and implementation of the AxellaCoin ecosystem.",
  },
]

const advisors = [
  {
    name: "Judd Boczko, MD",
    title: "Medical Advisor",
    credentials: [
      "Board-certified urologist with 25+ years clinical experience",
      "Specializes in robotic and minimally invasive treatments",
      "Led multiple clinical trials",
      "Chief Investment Officer at Overlook Research & Investments",
      "Reviews grant proposals and guides trial strategy",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image07-J8DREIjjFMxezp3CguhlEPvZEMcs6k.jpg",
  },
]

function TeamMember({ member }: { member: (typeof coreTeam)[0] | (typeof advisors)[0] }) {
  return (
    <Card className="p-5 md:p-6 hover:shadow-2xl hover:shadow-[#26C8B8]/20 hover:-translate-y-1 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) bg-[#094068]/20 backdrop-blur-md border border-[#26C8B8]/20 rounded-xl">
      <img
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 object-cover border-2 border-[#26C8B8]/40"
      />
      <h3 className="text-xl md:text-2xl font-light text-white text-center mb-1">{member.name}</h3>
      {("role" in member && member.role) || ("title" in member && member.title) ? (
        <p className="text-[#26C8B8] font-light text-center mb-4 text-base md:text-lg">{member.role || member.title}</p>
      ) : (
        <div className="mb-4"></div>
      )}
      {"subtitle" in member && member.subtitle && (
        <p className="text-white/60 font-light text-center mb-4 text-sm">{member.subtitle}</p>
      )}
      {!("subtitle" in member) && <div className="mb-0"></div>}
      {"bio" in member && member.bio ? (
        <p className="text-white/90 text-sm text-center leading-relaxed">{member.bio}</p>
      ) : (
        <ul className="space-y-2.5">
          {member.credentials.map((credential, index) => (
            <li key={index} className="text-white/90 text-sm flex items-start gap-2.5 font-light leading-relaxed">
              <span className="text-[#26C8B8] mt-0.5">•</span>
              <span>{credential}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#021C24]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extralight mb-6 md:mb-10 text-center leading-[1.1] tracking-tight text-balance">
          <span className="heading-gradient">Meet the Team Behind</span>
          <br />
          <span className="text-accent-cyan">AxellaCoin</span>
        </h2>

        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-light text-[#26C8B8] text-center mb-6 md:mb-8">Core Team</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {coreTeam.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-light text-[#26C8B8] text-center mb-6 md:mb-8">Medical Advisors</h3>
          <div className="max-w-2xl mx-auto">
            {advisors.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
