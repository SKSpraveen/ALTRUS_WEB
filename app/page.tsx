import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectScope } from "@/components/project-scope"
import { Milestones } from "@/components/milestones"
import { AboutUs } from "@/components/about-us"
import { NetoraCollab } from "@/components/netora-collab"
import { Achievements } from "@/components/achievements"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"
import { ParticleBg } from "@/components/particle-bg"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <ParticleBg />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectScope />
        <Milestones />
        <AboutUs />
        <NetoraCollab />
        <Achievements />
        <ContactUs />
        <Footer />
      </div>
    </main>
  )
}
