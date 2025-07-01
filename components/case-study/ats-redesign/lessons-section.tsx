import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Puzzle, Database } from "lucide-react"

export default function LessonsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Lessons Learned</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Key insights gained throughout the design process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Stakeholder Collaboration</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Stakeholder collaboration is crucial for enterprise UX success. Regular check-ins and 
                      involving key decision-makers early helped secure buy-in for more ambitious changes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Small Changes, Big Impact</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Small UI changes can create massive value—even without backend overhauls. 
                      Focusing on workflow improvements delivered significant user benefits without 
                      requiring complete system rebuilds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Puzzle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Design System Value</h3>
                    <p className="text-slate-700 leading-relaxed">
                      A robust design system prevents inconsistencies as products evolve. 
                      Creating a component library early saved time later and ensured a 
                      cohesive experience across all parts of the application.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-emerald-50 overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Legacy Understanding</h3>
                    <p className="text-slate-700 leading-relaxed">
                      It's essential to deeply understand legacy systems before making changes. 
                      Taking time to learn the existing architecture and data models helped us 
                      make smart design decisions that were feasible to implement.
                    </p>
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
