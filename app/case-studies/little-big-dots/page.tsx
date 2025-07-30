import HeroSection from "../../../components/case-study/little-big-dots/hero-section"
import TldrSection from "../../../components/case-study/little-big-dots/tldr-section"
import SparkSection from "../../../components/case-study/little-big-dots/spark-section"
import LightbulbSection from "../../../components/case-study/little-big-dots/lightbulb-section"
import ChallengeSection from "../../../components/case-study/little-big-dots/challenge-section"
import SprintSection from "../../../components/case-study/little-big-dots/sprint-section"
import SecretSauceSection from "../../../components/case-study/little-big-dots/secret-sauce-section"
import NumbersSection from "../../../components/case-study/little-big-dots/numbers-section"
import LaunchSection from "../../../components/case-study/little-big-dots/launch-section"
import FinalStorySection from "../../../components/case-study/little-big-dots/final-story-section"
import MomentOfTruthSection from "../../../components/case-study/little-big-dots/moment-of-truth-section"
import ImagesSection from "../../../components/case-study/little-big-dots/images-section"
import CaseStudyLayout from "../../../components/case-study/case-study-layout"

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'tldr', title: 'TL;DR' },
  { id: 'the-spark', title: 'The Spark' },
  { id: 'lightbulb-moment', title: 'Lightbulb Moment' },
  { id: 'the-challenge', title: 'The Challenge' },
  { id: '14-day-sprint', title: '14-Day Sprint' },
  { id: 'secret-sauce', title: 'Secret Sauce' },
  { id: 'design-artifacts', title: 'Design Artifacts' },
  { id: 'the-numbers', title: 'The Numbers' },
  { id: 'launch-strategy', title: 'Launch Strategy' },
  { id: 'real-story', title: 'Real Story' },
  { id: 'moment-of-truth', title: 'Moment of Truth' },
]

export default function LittleBigDotsCaseStudyPage() {
  return (
    <CaseStudyLayout sections={sections}>
      <section id="overview" className="mb-6 md:mb-12">
        <HeroSection />
      </section>
      
      <section id="tldr" className="mb-6 md:mb-12">
        <TldrSection />
      </section>
      
      <section id="the-spark" className="mb-6 md:mb-12">
        <SparkSection />
      </section>
      
      <section id="lightbulb-moment" className="mb-6 md:mb-12">
        <LightbulbSection />
      </section>
      
      <section id="the-challenge" className="mb-6 md:mb-12">
        <ChallengeSection />
      </section>
      
      <section id="14-day-sprint" className="mb-6 md:mb-12">
        <SprintSection />
      </section>
      
      <section id="secret-sauce" className="mb-6 md:mb-12">
        <SecretSauceSection />
      </section>
      
      <section id="design-artifacts" className="mb-6 md:mb-12">
        <ImagesSection />
      </section>
      
      <section id="the-numbers" className="mb-6 md:mb-12">
        <NumbersSection />
      </section>
      
      <section id="launch-strategy" className="mb-6 md:mb-12">
        <LaunchSection />
      </section>
      
      <section id="real-story" className="mb-6 md:mb-12">
        <FinalStorySection />
      </section>
      
      <section id="moment-of-truth" className="mb-6 md:mb-12">
        <MomentOfTruthSection />
      </section>
    </CaseStudyLayout>
  )
}
