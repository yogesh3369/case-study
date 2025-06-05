import Navigation from "@/components/landing/navigation"
import HeroSection from "@/components/landing/hero-section"
import AboutSection from "@/components/landing/about-section"
import CaseStudiesSection from "@/components/landing/case-studies-section"
import AIAutomationsSection from "@/components/landing/ai-automations-section"
import ContactSection from "@/components/landing/contact-section"
import Footer from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navigation />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroSection />
        <AboutSection />
        <CaseStudiesSection />
        <AIAutomationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
