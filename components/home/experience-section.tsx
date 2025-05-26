import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "TechCorp",
      role: "Senior UX Designer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Leading design for B2B SaaS products, focusing on user research and conversion optimization. Increased user engagement by 200% across multiple product lines.",
      achievements: [
        "Led redesign of core product resulting in 140% conversion increase",
        "Established design system used across 5 product teams",
        "Mentored 3 junior designers and conducted user research workshops",
      ],
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      company: "StartupXYZ",
      role: "Product Designer",
      period: "2020 - 2022",
      location: "Remote",
      description:
        "Full-stack design role covering user research, UI/UX design, and front-end development for early-stage fintech startup.",
      achievements: [
        "Designed and built MVP that secured $2M Series A funding",
        "Conducted user interviews with 100+ potential customers",
        "Implemented design-to-development workflow reducing handoff time by 60%",
      ],
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      company: "Design Agency",
      role: "UX Designer",
      period: "2019 - 2020",
      location: "New York, NY",
      description:
        "Client work across various industries including healthcare, e-commerce, and education. Specialized in mobile-first design and accessibility.",
      achievements: [
        "Delivered 15+ client projects with 95% satisfaction rate",
        "Specialized in mobile-first design and accessibility standards",
        "Collaborated with cross-functional teams across 3 time zones",
      ],
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building impactful digital experiences across different industries and company stages
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src={exp.logo || "/placeholder.svg"} alt={exp.company} className="w-8 h-8 rounded" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-4 text-gray-600">
                          <span className="font-medium">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
