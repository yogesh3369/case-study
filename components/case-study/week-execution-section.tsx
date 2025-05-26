import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WeekExecutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Week-by-Week Execution</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              A detailed timeline of our sprint methodology and deliverables
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                week: "Week 1",
                title: "Research & Problem Validation",
                color: "emerald",
                bgColor: "from-emerald-50 to-teal-50",
                textColor: "text-emerald-700",
                icon: "🔍",
                days: [
                  {
                    period: "Days 1-2:",
                    tasks: [
                      "Analytics deep-dive confirmed 75% home screen drop-off",
                      "Set up guerrilla testing sessions with coworking members",
                    ],
                  },
                  {
                    period: "Days 3-5:",
                    tasks: [
                      "Usability testing with 12 users revealed booking CTA invisibility",
                      "User journey mapping exposed location confusion patterns",
                      "Validated dual approach with PM and development team",
                    ],
                  },
                ],
              },
              {
                week: "Week 2",
                title: "Design & Automation Setup",
                color: "teal",
                bgColor: "from-teal-50 to-cyan-50",
                textColor: "text-teal-700",
                icon: "🎨",
                days: [
                  {
                    period: "Days 1-2:",
                    tasks: [
                      "Sketched 3 navigation approaches, selected optimal solution",
                      "Designed city confirmation flow and category card structure",
                      "Began n8n workflow configuration with sales team input",
                    ],
                  },
                  {
                    period: "Days 3-5:",
                    tasks: [
                      "Built high-fidelity Figma prototype with interaction design",
                      "Mid-week validation testing with 8 users confirmed 2-tap success",
                      "Completed lead automation workflow and CRM integration testing",
                    ],
                  },
                ],
              },
              {
                week: "Week 3",
                title: "Implementation & Launch",
                color: "cyan",
                bgColor: "from-cyan-50 to-purple-50",
                textColor: "text-cyan-700",
                icon: "🚀",
                days: [
                  {
                    period: "Days 1-3:",
                    tasks: [
                      "Daily developer collaboration ensuring pixel-perfect implementation",
                      "Deployed n8n automation workflows with real-time monitoring",
                      "Created Lottie animations and provided implementation specifications",
                    ],
                  },
                  {
                    period: "Days 4-5:",
                    tasks: [
                      "Final usability testing on production build",
                      "Analytics tracking setup for post-launch measurement",
                      "Coordinated launch with marketing team and app store submission",
                    ],
                  },
                ],
              },
            ].map((week, weekIndex) => (
              <Card
                key={weekIndex}
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500"
              >
                <CardHeader className={`bg-gradient-to-r ${week.bgColor} rounded-t-lg`}>
                  <div className="text-center py-6">
                    <div className="text-4xl mb-4">{week.icon}</div>
                    <Badge className={`${week.textColor} bg-white/80 text-lg px-6 py-2 mb-4`}>{week.week}</Badge>
                    <CardTitle className={`text-2xl ${week.textColor}`}>{week.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-10">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {week.days.map((day, dayIndex) => (
                      <div key={dayIndex}>
                        <h4 className="font-bold mb-4 text-slate-800 text-lg">{day.period}</h4>
                        <div className="space-y-4">
                          {day.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-start gap-3">
                              <div className={`w-2 h-2 bg-${week.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                              <p className="text-slate-600 leading-relaxed">{task}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
