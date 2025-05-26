import Navigation from "@/components/navigation"
import CaseStudiesSection from "@/components/landing/case-studies-section"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24">
        <CaseStudiesSection />
      </div>
    </div>
  )
}
