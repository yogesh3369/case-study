import { Target, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TldrSection() {
  return (
    <section id="tldr" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">TL;DR</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              In October 2024, a single LinkedIn DM about an AI tool called v0 spun into weekend-long tool binging. Two weeks later, Little Big Dots was live—a community for 35+ designers across three personas, featuring personalized automation workflows and self-hosted infrastructure that slashed costs by 70%.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-purple-700">Key Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">Built and launched a complete community platform in just 14 days</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">Reduced monthly costs by 70% through self-hosting and smart architecture</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">Onboarded 35+ founding members across three distinct designer personas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-blue-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-indigo-700">Community Impact</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">
                    Created personalized journeys for junior, mid-level, and senior designers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">
                    Automated 80% of manual tasks with n8n workflows and AI integration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">
                    Built partnerships with Design Masters, UXUnicorns, and other industry leaders
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
