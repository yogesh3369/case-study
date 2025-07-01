import { Target, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TldrSection() {
  return (
    <section id="tldr" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">TL;DR</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              I led the redesign of an outdated applicant tracking system (ATS) that was causing frustration among recruiters and hiring managers. Through extensive user research, iterative design, and close collaboration with stakeholders, I transformed the complex legacy system into an intuitive, unified platform that dramatically improved hiring workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-700">Key Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">Reduced time-to-hire by 35% through streamlined workflows and intuitive interface</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">Increased user satisfaction scores by 89% among recruiters and hiring managers</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">Adopted by 15 agencies within 18 months of launch, exceeding adoption targets</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-cyan-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-indigo-700">Business Impact</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">
                    67% improvement in task completion efficiency for core recruiting workflows
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">
                    42% reduction in training time for new recruiters using the platform
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">
                    Eliminated 95% of support tickets related to UI confusion and technical errors
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
