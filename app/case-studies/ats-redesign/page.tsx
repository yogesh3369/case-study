import HeroSection from "../../../components/case-study/ats-redesign/hero-section"
import TldrSection from "../../../components/case-study/ats-redesign/tldr-section"
import OutcomeSection from "../../../components/case-study/ats-redesign/outcome-section"
import ProblemSection from "../../../components/case-study/ats-redesign/problem-section"
import UsersSection from "../../../components/case-study/ats-redesign/users-section"
import MyRoleSection from "../../../components/case-study/ats-redesign/my-role-section"
import ConstraintsProcessSection from "../../../components/case-study/ats-redesign/constraints-process-section"
import DiscoverySection from "../../../components/case-study/ats-redesign/discovery-section"
import DefiningProblemsSection from "../../../components/case-study/ats-redesign/defining-problems-section"
import SketchingSection from "../../../components/case-study/ats-redesign/sketching-section"
import PrototypingSection from "../../../components/case-study/ats-redesign/prototyping-section"
import FinalDesignSection from "../../../components/case-study/ats-redesign/final-design-section"
import KeyDesignSection from "../../../components/case-study/ats-redesign/key-design-section"
import ResultsSection from "../../../components/case-study/ats-redesign/results-section"
import LessonsSection from "../../../components/case-study/ats-redesign/lessons-section"
import ConclusionSection from "../../../components/case-study/ats-redesign/conclusion-section"
import CaseStudyLayout from "../../../components/case-study/case-study-layout"

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'tldr', title: 'TL;DR' },
  { id: 'outcome', title: 'Outcome' },
  { id: 'problem', title: 'The Problem' },
  { id: 'users', title: 'Who We Designed For' },
  { id: 'my-role', title: 'My Role' },
  { id: 'constraints', title: 'Constraints & Process' },
  { id: 'discovery', title: 'Discovery & Research' },
  { id: 'defining-problems', title: 'Defining the Problems' },
  { id: 'sketching', title: 'Sketching & Ideation' },
  { id: 'prototyping', title: 'Prototyping & Testing' },
  { id: 'final-design', title: 'Final Design & Handoff' },
  { id: 'key-design', title: 'Key Design Decisions' },
  { id: 'results', title: 'Results & Impact' },
  { id: 'lessons', title: 'Lessons Learned' },
  { id: 'conclusion', title: 'Conclusion' },
]

export default function ATSRedesignCaseStudyPage() {
  return (
    <CaseStudyLayout sections={sections}>
      <section id="overview" className="mb-6 md:mb-12">
        <HeroSection />
      </section>
      
      <section id="tldr" className="mb-6 md:mb-12">
        <TldrSection />
      </section>
      
      <section id="outcome" className="mb-6 md:mb-12">
        <OutcomeSection />
      </section>
      
      <section id="problem" className="mb-6 md:mb-12">
        <ProblemSection />
      </section>
      
      <section id="users" className="mb-6 md:mb-12">
        <UsersSection />
      </section>
      
      <section id="my-role" className="mb-6 md:mb-12">
        <MyRoleSection />
      </section>
      
      <section id="constraints" className="mb-6 md:mb-12">
        <ConstraintsProcessSection />
      </section>
      
      <section id="discovery" className="mb-6 md:mb-12">
        <DiscoverySection />
      </section>
      
      <section id="defining-problems" className="mb-6 md:mb-12">
        <DefiningProblemsSection />
      </section>
      
      <section id="sketching" className="mb-6 md:mb-12">
        <SketchingSection />
      </section>
      
      <section id="prototyping" className="mb-6 md:mb-12">
        <PrototypingSection />
      </section>
      
      <section id="final-design" className="mb-6 md:mb-12">
        <FinalDesignSection />
      </section>
      
      <section id="key-design" className="mb-6 md:mb-12">
        <KeyDesignSection />
      </section>
      
      <section id="results" className="mb-6 md:mb-12">
        <ResultsSection />
      </section>
      
      <section id="lessons" className="mb-6 md:mb-12">
        <LessonsSection />
      </section>
      
      <section id="conclusion" className="mb-6 md:mb-12">
        <ConclusionSection />
      </section>
    </CaseStudyLayout>
  )
}
