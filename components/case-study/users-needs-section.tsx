import { Users, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function UsersNeedsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Users & Their Needs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Understanding our target audience and addressing their core requirements
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-teal-700">Target Users</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Freelancers & Remote Workers",
                  description: "Needing flexible workspaces",
                  icon: "💻",
                },
                {
                  title: "Small Business Teams",
                  description: "Looking for meeting rooms and day passes",
                  icon: "👥",
                },
                {
                  title: "Mobile-First Users",
                  description: "Expecting quick booking experience",
                  icon: "📱",
                },
              ].map((user, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50"
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{user.icon}</div>
                    <h4 className="font-bold text-teal-700 mb-2">{user.title}</h4>
                    <p className="text-slate-600">{user.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-12 text-teal-700 text-center flex items-center justify-center gap-3">
              <Lightbulb className="h-8 w-8" />
              Key User Needs We Addressed
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Clear Next Steps", desc: "Provided obvious booking process entry points", icon: "🎯" },
                {
                  title: "Location Clarity",
                  desc: "Solved confusion about workspace availability in their city",
                  icon: "📍",
                },
                {
                  title: "Simple Categories",
                  desc: "Created easy navigation between day pass, meeting rooms, and dedicated desks",
                  icon: "🗂️",
                },
                { title: "Quick Booking", desc: "Reduced from 6 taps to 2 taps to start reservation", icon: "⚡" },
              ].map((need, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{need.icon}</div>
                      <div>
                        <h4 className="font-bold text-teal-700 mb-2 text-lg">{need.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{need.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
