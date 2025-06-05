import { ArrowRight, Clock, TrendingUp, ExternalLink, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: "coworking-mobile-redesign",
      title: "Coworking Mobile App Redesign",
      subtitle: "Accelerating Bookings through Lean UX",
      description:
        "Transformed a failing booking experience into a conversion powerhouse through strategic navigation redesign and automated lead management.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Mobile UX",
      duration: "3 weeks",
      impact: {
        conversion: "140%",
        revenue: "₹4.2L",
        efficiency: "67%",
      },
      tags: ["Mobile Design", "Conversion Optimization", "Lead Automation"],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      id: "ecommerce-checkout",
      title: "E-commerce Checkout Optimization",
      subtitle: "Reducing Cart Abandonment by 45%",
      description:
        "Redesigned the checkout flow for a major e-commerce platform, focusing on trust signals and form optimization to boost conversions.",
      image: "/placeholder.svg?height=300&width=500",
      category: "E-commerce",
      duration: "4 weeks",
      impact: {
        conversion: "45%",
        revenue: "₹8.5L",
        efficiency: "60%",
      },
      tags: ["E-commerce", "Checkout Flow", "Trust Design"],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      id: "saas-onboarding",
      title: "SaaS Onboarding Experience",
      subtitle: "Improving User Activation by 85%",
      description:
        "Created a progressive onboarding flow that guides users to their first 'aha' moment faster, significantly improving activation rates.",
      image: "/placeholder.svg?height=300&width=500",
      category: "SaaS",
      duration: "5 weeks",
      impact: {
        conversion: "85%",
        revenue: "₹6.8L",
        efficiency: "70%",
      },
      tags: ["SaaS", "Onboarding", "User Activation"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-emerald-50/50 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-50/50 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center relative mb-24">
            <div className="inline-block">
              <div className="relative inline-block">
                <span className="absolute -top-6 -right-6 text-purple-500 rotate-12">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 relative inline-block">
                  Featured Work
                </h2>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 rounded-full"></span>
              </div>
            </div>
            <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
              Explore how I solve complex UX challenges with measurable results
            </p>
          </div>

          {/* Case Studies Showcase */}
          <div className="relative">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="mb-32 last:mb-0">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10`}>
                  {/* Featured Image */}
                  <div className="w-full lg:w-7/12 relative group">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-30 group-hover:opacity-10 rounded-3xl transition-all duration-500 blur-xl group-hover:blur-2xl -m-4`} 
                      style={{ mixBlendMode: 'multiply' }}
                    ></div>
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/50 shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <div className="aspect-[16/9] relative">
                        <img 
                          src={study.image || "/placeholder.svg"} 
                          alt={study.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                        
                        {/* Stats Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div className="flex items-center gap-3">
                            <Badge className={`bg-gradient-to-r ${study.gradient} text-white border-0 py-1 font-medium backdrop-blur-sm`}>
                              {study.category}
                            </Badge>
                            <div className="bg-black/30 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                              <Clock className="h-3 w-3 opacity-70" />
                              {study.duration}
                            </div>
                          </div>
                          
                          <div className={`bg-gradient-to-r ${study.gradient} text-white font-bold rounded-full py-1 px-3 text-sm flex items-center gap-1.5`}>
                            <TrendingUp className="h-3 w-3" />
                            +{study.impact.conversion}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-5/12">
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{study.title}</h3>
                        <p className="text-lg text-slate-600 font-medium">{study.subtitle}</p>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed">{study.description}</p>
                      
                      {/* Impact Grid */}
                      <div className="grid grid-cols-3 gap-4 py-3">
                        <div>
                          <div className={`text-xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>+{study.impact.conversion}</div>
                          <div className="text-slate-500 text-sm">Conversion</div>
                        </div>
                        <div>
                          <div className={`text-xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>{study.impact.revenue}</div>
                          <div className="text-slate-500 text-sm">Revenue</div>
                        </div>
                        <div>
                          <div className={`text-xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>+{study.impact.efficiency}</div>
                          <div className="text-slate-500 text-sm">Efficiency</div>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-slate-600 px-3 py-1 bg-slate-100/80">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="pt-2">
                        <Button
                          asChild
                          className={`bg-gradient-to-r ${study.gradient} hover:opacity-90 text-white rounded-full px-8 py-6 h-auto group relative overflow-hidden`}
                        >
                          <Link href={`/case-studies/${study.id}`} className="flex items-center gap-3">
                            <span className="relative z-10">View Case Study</span>
                            <span className="relative z-10 transition-transform group-hover:translate-x-1">
                              <ExternalLink className="h-4 w-4" />
                            </span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
