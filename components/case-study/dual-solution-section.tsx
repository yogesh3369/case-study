import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DualSolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Dual Solution Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Two complementary strategies that addressed both user experience and business process challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">1</span>
                  </div>
                  <CardTitle className="text-2xl">Navigation Redesign</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h4 className="font-bold text-red-600 mb-4 text-lg flex items-center gap-2">❌ The UX Problem:</h4>
                  <div className="space-y-3">
                    {[
                      "Users couldn't find booking options - primary CTA buried under promotional content",
                      "No location context causing availability confusion",
                      "75% of users abandoned the booking funnel",
                    ].map((problem, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-600 text-sm leading-relaxed">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-emerald-600 mb-4 text-lg flex items-center gap-2">
                    ✅ Design Solution:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Created city confirmation splash screen for location context",
                      "Redesigned home screen with 4 prominent category cards",
                      "Moved promotional content to complement, not compete with booking CTAs",
                      "Streamlined booking flow from 6 taps to 2 taps",
                    ].map((solution, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                        <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-t-lg">
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">2</span>
                  </div>
                  <CardTitle className="text-2xl">Lead Management Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h4 className="font-bold text-red-600 mb-4 text-lg flex items-center gap-2">❌ The Sales Problem:</h4>
                  <div className="space-y-3">
                    {[
                      "New signups went to database → manual sales assignment → 6-7 hour delay",
                      "Leads became cold by the time sales team contacted them",
                      "Lost opportunities to competitors with faster response times",
                    ].map((problem, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-600 text-sm leading-relaxed">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-teal-600 mb-4 text-lg flex items-center gap-2">
                    ✅ Automation Solution:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Implemented n8n AI workflow automation",
                      "Direct signup data transfer: App → n8n → CRM → Sales Assignment",
                      "Reduced response time to 10-20 minutes",
                      "Automatic lead scoring and priority routing",
                    ].map((solution, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                        <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
