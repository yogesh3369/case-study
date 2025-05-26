import { Award, BarChart3, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function OutcomeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Outcome Statement</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Measurable impact and business transformation achieved through strategic UX improvements
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-12 text-emerald-700 text-center flex items-center justify-center gap-3">
              <Award className="h-8 w-8" />
              What We Achieved
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  metric: "140%",
                  label: "Conversion Improvement",
                  detail: "25% to 60%",
                  color: "emerald",
                  progress: 100,
                },
                { metric: "35%", label: "Drop-off Reduction", detail: "75% to 40%", color: "teal", progress: 85 },
                {
                  metric: "₹4.2L",
                  label: "Net Revenue Impact",
                  detail: "Annual turnaround",
                  color: "cyan",
                  progress: 95,
                },
                {
                  metric: "95%",
                  label: "Response Time Cut",
                  detail: "6-7hrs to 10-20min",
                  color: "emerald",
                  progress: 90,
                },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className={`text-3xl font-black mb-2 text-${item.color}-600`}>{item.metric}</div>
                    <div className="text-slate-700 font-semibold mb-2">{item.label}</div>
                    <div className="text-slate-500 text-sm mb-3">{item.detail}</div>
                    <Progress value={item.progress} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Transformation Visualization */}
          <div className="relative mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
                Business Transformation
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From revenue loss to significant growth through strategic UX improvements
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full z-10"></div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Before State */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl blur-xl opacity-60"></div>
                  <div className="relative bg-white border border-red-200/50 rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">Before</Badge>
                      <div className="text-3xl font-bold text-red-600 mb-2">-₹15K</div>
                      <div className="text-slate-700 font-medium mb-1">Monthly Loss</div>
                      <div className="text-slate-500 text-sm">Failed conversions</div>
                      <div className="text-slate-400 text-xs mt-2">(₹1.8L annually)</div>
                    </div>
                  </div>
                </div>

                {/* Transformation Arrow */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* After State */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl blur-xl opacity-60"></div>
                  <div className="relative bg-white border border-emerald-200/50 rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">After</Badge>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">+₹20K</div>
                      <div className="text-slate-700 font-medium mb-1">Monthly Revenue</div>
                      <div className="text-slate-500 text-sm">Improved conversions</div>
                      <div className="text-slate-400 text-xs mt-2">(₹2.4L annually)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Impact Banner */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl shadow-xl">
                  <Award className="h-6 w-6" />
                  <span className="font-bold text-lg">Net Annual Impact: ₹4.2L revenue turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
