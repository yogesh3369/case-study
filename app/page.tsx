import Navigation from "@/components/navigation"
import HeroSection from "@/components/home/hero-section"
import SkillsSection from "@/components/home/skills-section"
import ProjectsSection from "@/components/home/projects-section"
import ExperienceSection from "@/components/home/experience-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import ChatSection from "@/components/home/chat-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ChatSection />
    </div>
  )
}
