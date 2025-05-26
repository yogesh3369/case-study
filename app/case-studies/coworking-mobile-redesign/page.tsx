import Navigation from "@/components/case-study/navigation"
import HeroSection from "@/components/case-study/hero-section"
import TldrSection from "@/components/case-study/tldr-section"
import OutcomeSection from "@/components/case-study/outcome-section"
import UsersNeedsSection from "@/components/case-study/users-needs-section"
import MyRoleSection from "@/components/case-study/my-role-section"
import ConstraintsProcessSection from "@/components/case-study/constraints-process-section"
import DualSolutionSection from "@/components/case-study/dual-solution-section"
import WeekExecutionSection from "@/components/case-study/week-execution-section"
import ResultsSection from "@/components/case-study/results-section"
import FinalImpactSection from "@/components/case-study/final-impact-section"
import Footer from "@/components/case-study/footer"

export default function CoworkingCaseStudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navigation />
      <HeroSection />
      <TldrSection />
      <OutcomeSection />
      <UsersNeedsSection />
      <MyRoleSection />
      <ConstraintsProcessSection />
      <DualSolutionSection />
      <WeekExecutionSection />
      <ResultsSection />
      <FinalImpactSection />
      <Footer />
    </div>
  )
}
