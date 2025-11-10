import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LiveLaunchBar } from "@/components/live-launch-bar"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TokenOverviewSection } from "@/components/token-overview-section"
import { StablecoinSection } from "@/components/stablecoin-section"
import { TreasuryFoundationSection } from "@/components/treasury-foundation-section"
import { JoinEcosystemSection } from "@/components/join-ecosystem-section"
import { InvestmentOpportunitiesSection } from "@/components/investment-opportunities-section"
import { TransparencyDashboardSection } from "@/components/transparency-dashboard-section"
import { GovernanceHubSection } from "@/components/governance-hub-section"
import { StakeSupportSection } from "@/components/stake-support-section"
import { BuyAXTCSection } from "@/components/buy-axtc-section"
import { TeamSection } from "@/components/team-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { LegalDisclaimer } from "@/components/legal-disclaimer"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LiveLaunchBar />
      <HowItWorksSection />
      <TokenOverviewSection />
      <StablecoinSection />
      <TreasuryFoundationSection />
      <JoinEcosystemSection />
      <InvestmentOpportunitiesSection />
      <TransparencyDashboardSection />
      <GovernanceHubSection />
      <StakeSupportSection />
      <BuyAXTCSection />
      <TeamSection />
      <RoadmapSection />
      <LegalDisclaimer />
      <Footer />
    </main>
  )
}
