import { Award, Users, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">About My Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              I believe in data-driven design that creates meaningful impact for both users and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "User-Centered",
                description: "Every design decision starts with understanding user needs and pain points",
                color: "blue",
              },
              {
                icon: Award,
                title: "Results-Driven",
                description: "Focus on measurable outcomes that drive business growth and user satisfaction",
                color: "purple",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Creative solutions that push boundaries while maintaining usability",
                color: "indigo",
              },
              {
                icon: Users,
                title: "Collaborative",
                description: "Working closely with cross-functional teams to deliver exceptional experiences",
                color: "pink",
              },
            ].map((principle, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-white"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${principle.color}-500 to-${principle.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                With over 5 years of experience in UX design, I specialize in creating digital experiences that not only
                look beautiful but also drive meaningful business results. My approach combines user research, data
                analysis, and creative problem-solving to deliver solutions that users love and businesses value.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-black text-blue-600 mb-2">5+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-purple-600 mb-2">50+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-indigo-600 mb-2">₹25L+</div>
                  <div className="text-slate-600">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
