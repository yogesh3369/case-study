import { PencilRuler, Users, Lightbulb, Presentation, Palette } from "lucide-react"
import Image from "next/image"

export default function MyRoleSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">My Role</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              As the lead UX/UI designer on this project, I was responsible for the entire redesign process from research to final handoff.
            </p>
          </div>
          
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 shadow-lg max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                    <PencilRuler className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Key Responsibilities</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">User Research</h4>
                      <p className="text-slate-600">Led interviews with recruiters and hiring managers to understand pain points and needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Ideation & Wireframing</h4>
                      <p className="text-slate-600">Created user flows, wireframes and interactive prototypes to test concepts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Presentation className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Stakeholder Collaboration</h4>
                      <p className="text-slate-600">Presented design decisions to leadership and advocated for user-centered solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Palette className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Design System</h4>
                      <p className="text-slate-600">Developed a comprehensive design system to ensure consistency and scalability</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-100 shadow-lg text-center">
            <p className="text-lg md:text-xl text-slate-700 font-medium italic">
              "This project required me to balance the needs of multiple stakeholders while keeping the end users at the center of every design decision."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
