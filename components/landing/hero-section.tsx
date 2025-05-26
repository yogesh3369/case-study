import { ArrowRight, Star, Award, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingHeroSection() {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-8 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors text-sm px-4 py-2">
            UX Portfolio
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="text-slate-900">Designing</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Exceptional Experiences
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of UX case studies showcasing data-driven design solutions that deliver measurable
            business impact and exceptional user experiences.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-black text-blue-600 mb-2">5+</div>
                <div className="text-slate-700 font-medium">Case Studies</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-black text-purple-600 mb-2">200%</div>
                <div className="text-slate-700 font-medium">Avg. Conversion Lift</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-black text-indigo-600 mb-2">₹10L+</div>
                <div className="text-slate-700 font-medium">Revenue Impact</div>
              </div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#case-studies" className="flex items-center gap-2">
              Explore Case Studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
