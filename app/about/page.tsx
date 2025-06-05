import { Metadata } from 'next'
import Navigation from "@/components/landing/navigation"
import Footer from "@/components/landing/footer"
import AboutHero from '@/components/about/hero-section'
import ExperienceTimeline from '@/components/about/experience-timeline'

export const metadata: Metadata = {
  title: 'About Me | Yogesh Yadav',
  description: 'Learn more about me, my experience, and my interests.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <AboutHero />
        <div className="py-16 bg-gray-50">
          <ExperienceTimeline />
        </div>
      </main>
      <Footer />
    </div>
  )
}
