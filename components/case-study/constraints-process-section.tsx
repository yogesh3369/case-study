import { Clock, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConstraintsProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Constraints & Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Working within tight deadlines and resource limitations to deliver exceptional results
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-red-600">Why 3 Weeks?</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Hard Deadline", desc: "New website launching with deep linking dependencies", icon: "⏰" },
                {
                  title: "Marketing Commitment",
                  desc: "Integrated platform announcement already scheduled",
                  icon: "📢",
                },
                {
                  title: "Competitive Pressure",
                  desc: "UX improvements needed before market positioning",
                  icon: "🏃‍♂️",
                },
              ].map((constraint, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-red-50 to-orange-50"
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{constraint.icon}</div>
                    <h4 className="font-bold text-red-600 mb-4 text-lg">{constraint.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{constraint.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-12 text-orange-600 text-center">Working Constraints</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { constraint: "Solo designer on aggressive timeline", icon: "👤" },
                { constraint: "Existing app framework and component limitations", icon: "🔧" },
                { constraint: "Limited development resources (2 developers)", icon: "👨‍💻" },
                { constraint: "Guerrilla testing only - no formal research budget", icon: "🔍" },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{item.icon}</div>
                      <p className="text-slate-700 leading-relaxed">{item.constraint}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Rocket className="h-7 w-7" />
                How We Delivered
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { method: "Leveraged coworking space access for rapid user feedback", icon: "🏢" },
                  { method: "Daily prototype-test-iterate cycles", icon: "🔄" },
                  { method: "Continuous developer collaboration preventing implementation issues", icon: "🤝" },
                  { method: "Focused on highest-impact changes first", icon: "🎯" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <p className="text-white/90 leading-relaxed">{item.method}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
