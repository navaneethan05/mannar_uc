import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { ChairmanSection } from "@/components/chairman-section"
import { EventsSection } from "@/components/events-section"
import { InfoSection } from "@/components/info-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <ChairmanSection />
        <EventsSection />
        <InfoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
