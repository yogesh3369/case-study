import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, TrendingUp, Users, Mail, Calendar, Database } from "lucide-react"

export default function AIAutomationPage() {
  const automations = [
    {
      title: "Lead Qualification Bot",
      description: "AI-powered chatbot that qualifies leads and schedules meetings automatically",
      icon: Bot,
      metrics: { efficiency: "95%", time: "24/7", leads: "500+" },
      tags: ["AI", "Lead Gen", "Chatbot"],
      size: "large",
    },
    {
      title: "Email Automation",
      description: "Smart email sequences based on user behavior",
      icon: Mail,
      metrics: { open: "45%", click: "12%" },
      tags: ["Email", "Automation"],
      size: "medium",
    },
    {
      title: "Calendar Sync",
      description: "Automatic calendar management and scheduling",
      icon: Calendar,
      metrics: { bookings: "200%" },
      tags: ["Scheduling"],
      size: "medium",
    },
    {
      title: "Data Pipeline",
      description: "Automated data collection and analysis workflows",
      icon: Database,
      metrics: { accuracy: "99%", speed: "10x" },
      tags: ["Data", "Analytics"],
      size: "large",
    },
    {
      title: "Social Media",
      description: "Auto-posting and engagement tracking",
      icon: TrendingUp,
      metrics: { engagement: "150%" },
      tags: ["Social"],
      size: "small",
    },
    {
      title: "Customer Support",
      description: "AI assistant for common customer queries",
      icon: Users,
      metrics: { resolution: "80%" },
      tags: ["Support", "AI"],
      size: "small",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Automation Hub</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intelligent workflows and automations that save time, reduce errors, and scale your business
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {automations.map((automation, index) => {
              const Icon = automation.icon
              const gridClass =
                automation.size === "large"
                  ? "md:col-span-2"
                  : automation.size === "medium"
                    ? "md:col-span-1"
                    : "md:col-span-1"

              return (
                <Card
                  key={index}
                  className={`border-0 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer ${gridClass}`}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {automation.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{automation.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{automation.description}</p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      {Object.entries(automation.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
