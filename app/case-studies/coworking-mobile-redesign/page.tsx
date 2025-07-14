"use client";

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
import ArtifactsSection from "@/components/case-study/artifacts-section"
import CaseStudyLayout from "@/components/case-study/case-study-layout"
import { useEffect } from "react"

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'tldr', title: 'TL;DR' },
  { id: 'outcome', title: 'Outcome' },
  { id: 'user-needs', title: 'User Needs' },
  { id: 'my-role', title: 'My Role' },
  { id: 'constraints', title: 'Constraints & Process' },
  { id: 'solutions', title: 'Dual Solutions' },
  { id: 'artifacts', title: 'Design Artifacts' },
  { id: 'execution', title: 'Execution' },
  { id: 'results', title: 'Results' },
  { id: 'impact', title: 'Final Impact' },
]

const artifactsData = {
  wireframes: {
    title: 'Wireframes',
    beforeImage: '/wireframes.png',
    afterImage: '',
    description: 'Initial wireframes showing the evolution of the user interface.',
    isSingleImage: true
  },
  mobileScreens: {
    title: 'Mobile Screens',
    beforeImage: '/Before.PNG',
    afterImage: '/Home Page.png',
    description: 'Mobile experience before and after the redesign.'
  },
  aiAutomation: {
    title: 'AI Automation Flow',
    beforeImage: '/AI Automation.png',
    afterImage: '', // Not used when isSingleImage is true
    description: 'User flow showing the AI automation implementation.',
    isSingleImage: true
  }
}

export default function CoworkingCaseStudyPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <CaseStudyLayout sections={sections}>
      <div className="pt-0">
        <section id="overview">
          <HeroSection />
        </section>
        
        <section id="tldr" className="py-20">
          <TldrSection />
        </section>
        
        <section id="outcome" className="py-20">
          <OutcomeSection />
        </section>
        
        <section id="user-needs" className="py-20">
          <UsersNeedsSection />
        </section>
        
        <section id="my-role" className="py-20">
          <MyRoleSection />
        </section>
        
        <section id="constraints" className="py-20">
          <ConstraintsProcessSection />
        </section>
        
        <section id="solutions" className="py-20">
          <DualSolutionSection />
        </section>
        
        <section id="artifacts" className="py-20">
          <ArtifactsSection artifacts={artifactsData} />
        </section>
        
        <section id="execution" className="py-20">
          <WeekExecutionSection />
        </section>
        
        <section id="results" className="py-20">
          <ResultsSection />
        </section>
        
        <section id="impact" className="py-20 pb-32">
          <FinalImpactSection />
        </section>
      </div>
    </CaseStudyLayout>
  )
}
