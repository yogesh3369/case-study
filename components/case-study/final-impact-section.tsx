import { Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinalImpactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Final Impact & Learnings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Key insights and takeaways from this successful UX transformation
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 mb-12">
            <CardContent className="p-12 text-center">
              <div className="text-4xl mb-6">💡</div>
              <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                This sprint showed how focused UX can deliver huge value fast. While we met tight deadlines, we also
                built a reusable base for future updates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center py-4 flex items-center justify-center gap-3">
                <Lightbulb className="h-7 w-7" />
                Key Learnings
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { learning: "Exposing value early (booking on home) increased engagement", icon: "🎯" },
                  { learning: "Users appreciated real-time confirmations more than we expected", icon: "⚡" },
                  { learning: "Even basic lead automation had a major business impact", icon: "🤖" },
                  { learning: "Small UX tweaks (button size, fewer fields) had outsized results", icon: "🔧" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <p className="text-slate-700 leading-relaxed">{item.learning}</p>
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
