import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectScope } from "@/components/project-scope"
import { Milestones } from "@/components/milestones"
import { Downloads } from "@/components/downloads"
import { AboutUs } from "@/components/about-us"
import { Achievements } from "@/components/achievements"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectScope />
      <Milestones />
      <Downloads />
      <AboutUs />
      <Achievements />
      <ContactUs />
      <Footer />
    </main>
  )
}
