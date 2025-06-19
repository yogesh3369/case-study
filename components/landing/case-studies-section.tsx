import { ArrowRight, Clock, TrendingUp, ExternalLink, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      id: "coming-soon",
      title: "New Project",
      subtitle: "Coming Soon",
      description:
        "I'm currently working on something exciting! Check back soon to see my latest case study.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Coming Soon",
      duration: "In Progress",
      impact: {
        conversion: "0%",
        revenue: "TBD",
        efficiency: "0%",
      },
      tags: ["Coming", "Soon", "2025"],
      gradient: "from-gray-400 to-slate-600",
      bgGradient: "from-gray-50 to-slate-100",
    },
  ]

  return (
    <section id="case-studies" className="pt-16 pb-20 md:pt-20 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full mb-3">
              <TrendingUp className="h-3.5 w-3.5 mr-1.5 text-blue-600" />
              <span className="text-xs font-medium text-gray-800">Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Featured <span className="text-blue-600">Work</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Selected projects showcasing my approach to solving complex UX challenges with measurable results
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-30 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800">
                      {study.category}
                    </div>
                    {study.id !== 'coming-soon' && (
                      <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                        <Clock className="h-4 w-4" />
                        <span>{study.duration}</span>
                        {study.id === 'little-big-dots' && (
                          <span className="ml-2 px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Featured</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${study.gradient}`}></span>
                      <span className="text-sm font-medium text-slate-500">{study.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{study.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{study.subtitle}</p>
                    
                    {/* Impact */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className="text-center p-2 rounded-lg bg-slate-50">
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          +{study.impact.conversion}
                        </div>
                        <div className="text-xs text-slate-500">Growth</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-slate-50">
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {study.impact.revenue}
                        </div>
                        <div className="text-xs text-slate-500">Revenue</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-slate-50">
                        <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          +{study.impact.efficiency}
                        </div>
                        <div className="text-xs text-slate-500">Efficiency</div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {study.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Button */}
                  <Button
                    asChild
                    variant="outline"
                    className={`mt-auto w-full border-slate-200 hover:bg-slate-50 group/button`}
                  >
                    <Link 
                      href={`/case-studies/${study.id}`} 
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
    </section>
  )
}
