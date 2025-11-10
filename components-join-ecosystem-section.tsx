const JoinEcosystemSection = () => {
  // Declare the stakeholder variable here or import it from a module
  const stakeholders = [
    { title: "Stakeholder 1", description: "Description for Stakeholder 1" },
    { title: "Stakeholder 2", description: "Description for Stakeholder 2" },
    // Add more stakeholders as needed
  ]

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-thin mb-3 leading-tight">Join the Ecosystem</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          Discover how you can contribute to our growing ecosystem.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stakeholders.map((stakeholder) => (
          <div
            key={stakeholder.title}
            className="rounded-xl bg-[#094068]/15 backdrop-blur-md border border-[#26C8B8]/15 p-6 flex flex-col hover:border-[#26C8B8]/40 hover:bg-[#094068]/25 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#26C8B8]/10 flex items-center justify-center mb-4 group-hover:bg-[#26C8B8]/20 transition-colors">
              {/* Placeholder for icon or image */}
            </div>

            <h3 className="text-lg font-light text-white mb-2">{stakeholder.title}</h3>

            <p className="text-sm text-white/60 flex-grow mb-4 leading-relaxed font-light">{stakeholder.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default JoinEcosystemSection
