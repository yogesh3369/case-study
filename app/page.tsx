import Navigation from "@/components/landing/navigation"
import HeroSection from "@/components/landing/hero-section"
import CaseStudiesSection from "@/components/landing/case-studies-section"
import AIAutomationsSection from "@/components/landing/ai-automations-bento"
import ContactSection from "@/components/landing/contact-section"
import Footer from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <CaseStudiesSection />
        <AIAutomationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
