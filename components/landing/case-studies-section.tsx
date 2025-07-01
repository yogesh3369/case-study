import { ArrowRight, Clock, TrendingUp, ExternalLink, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button"

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: "coworking-mobile-redesign",
      title: "Coworking Mobile App Redesign",
      subtitle: "Accelerating Bookings through Lean UX",
      description:
        "Transformed a failing booking experience into a conversion powerhouse through strategic navigation redesign and automated lead management.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Mobile UX",
      duration: "3 weeks",
      impact: {
        conversion: "140%",
        revenue: "₹4.2L",
        efficiency: "67%",
      },
      tags: ["Mobile Design", "Conversion", "Automation"],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      id: "little-big-dots",
      title: "Little Big Dots",
      subtitle: "Early Childhood Learning Platform",
      description:
        "Designed an engaging digital learning experience for preschoolers, combining educational content with playful interactions.",
      image: "/LBD front.png",
      category: "EdTech",
      duration: "6 weeks",
      impact: {
        conversion: "75%",
        revenue: "₹5.2L",
        efficiency: "82%",
      },
      tags: ["EdTech", "Mobile App", "UX/UI Design"],
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      id: "ats-redesign",
      title: "ATS Redesign",
      subtitle: "From Legacy to Loved",
      description:
        "Transformed a cluttered applicant tracking system into a modern, unified platform that 15 agencies adopted within 18 months.",
      image: "/placeholder.svg?height=600&width=800",
      category: "UX/UI Design",
      duration: "18 weeks",
      impact: {
        conversion: "100%",
        revenue: "15 agencies",
        efficiency: "67%",
      },
      tags: ["Enterprise UX", "Design System", "User Research"],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
  ]

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 bg-slate-100 rounded-full mb-3">
              <TrendingUp className="h-3.5 w-3.5 mr-1.5 text-blue-600" />
              <span className="text-xs font-medium text-gray-800">Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Products <span className="text-blue-600">for Everyone</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Only the best of the best has made to here.
            </p>
          </div>

          {caseStudies.map((study, index) => (
            <div key={study.id} className={`mb-24 ${index < caseStudies.length - 1 ? 'border-b border-gray-100 pb-20' : ''}`}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {study.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
                    {study.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-16 mb-12">
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {study.id === 'coming-soon' ? '0' : '45,00,000+'}
                      </p>
                      <p className="text-sm text-gray-500 mt-2 font-medium">users currently<br />on {study.title}</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {study.id === 'coming-soon' ? '0' : '10,000+'}
                      </p>
                      <p className="text-sm text-gray-500 mt-2 font-medium">companies hire<br />on {study.title}</p>
                    </div>
                  </div>
                  
                  <div className="inline-block">
                    <GradientButton
                      href={study.id === 'coming-soon' ? '#' : `/case-studies/${study.id}`}
                      icon={
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="group-hover:translate-x-0.5 transition-transform duration-200"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      }
                    >
                      {study.id === 'coming-soon' ? 'Coming soon' : 'View case study'}
                    </GradientButton>
                  </div>
                </div>
                
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {study.image.startsWith('/') ? (
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      <Image
                        src={study.image}
                        alt={study.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
