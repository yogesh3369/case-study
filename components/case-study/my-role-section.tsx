import { BarChart3, Lightbulb, Users, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyRoleSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">My Role in the Project</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              End-to-end ownership of the UX/UI redesign process
            </p>
          </div>

          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xl px-8 py-4 rounded-full shadow-lg">
              UX/UI Designer - End-to-end redesign ownership
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  Research Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  "Analyzed user analytics identifying 6-tap booking failure points",
                  "Conducted usability testing with 12 coworking space members",
                  "Created user journey maps exposing navigation pain points",
                  "Interviewed users about location context confusion",
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{activity}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  Design Work
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  "Sketched wireframes for 3 different navigation approaches",
                  "Created high-fidelity interactive prototypes in Figma",
                  "Designed city confirmation splash screen flow",
                  "Restructured home screen with 4 clear category cards",
                  "Specified micro-interactions and Lottie animations",
                ].map((work, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{work}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { role: "Product Manager", task: "Daily sprint check-ins and priority decisions" },
                  { role: "Developers", task: "Close implementation partnership with pixel-perfect specs" },
                  { role: "Marketing Team", task: "Launch timing coordination and app store updates" },
                  { role: "Sales Team", task: "Lead automation workflow design and CRM integration" },
                ].map((collab, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-cyan-700">{collab.role}:</span> {collab.task}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  Key Deliverables
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  "User research findings and conversion optimization recommendations",
                  "Interactive Figma prototype with validated navigation flow",
                  "UI specifications for 24 redesigned screens",
                  "Lottie animation files and implementation guides",
                  "Post-launch performance analysis and optimization roadmap",
                ].map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-slate-700 leading-relaxed">{deliverable}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
