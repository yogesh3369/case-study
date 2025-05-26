import { ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
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
    <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Featured Case Studies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Explore detailed case studies showcasing my approach to solving complex UX challenges with measurable
              results
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image Section */}
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${study.bgGradient} ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="aspect-video lg:aspect-square relative">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-10 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`bg-gradient-to-r ${study.gradient} text-white border-0`}>
                        {study.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="h-4 w-4" />
                        {study.duration}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{study.title}</h3>
                    <p className="text-xl text-slate-600 mb-4 font-medium">{study.subtitle}</p>
                    <p className="text-slate-600 mb-8 leading-relaxed">{study.description}</p>

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div
                          className={`text-2xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}
                        >
                          +{study.impact.conversion}
                        </div>
                        <div className="text-slate-500 text-sm">Conversion</div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-2xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}
                        >
                          {study.impact.revenue}
                        </div>
                        <div className="text-slate-500 text-sm">Revenue Impact</div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-2xl font-black bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}
                        >
                          +{study.impact.efficiency}
                        </div>
                        <div className="text-slate-500 text-sm">Efficiency</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`bg-gradient-to-r ${study.gradient} hover:opacity-90 text-white rounded-full px-8`}
                    >
                      <Link href={`/case-studies/${study.id}`} className="flex items-center gap-2">
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
