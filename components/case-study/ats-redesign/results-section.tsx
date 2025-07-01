import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { TrendingUp, Clock, Award, Users } from "lucide-react"

export default function ResultsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Results & Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Measurable outcomes and positive feedback from the redesign
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Widespread Adoption</h3>
                    <p className="text-slate-700"><span className="font-semibold">15 agencies</span> adopted the new ATS within 18 months, demonstrating strong product-market fit</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">User Satisfaction</h3>
                    <p className="text-slate-700">Recruiters praised the unified views and faster workflows, reporting higher job satisfaction</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Tool Consolidation</h3>
                    <p className="text-slate-700">Managers stopped relying on Excel spreadsheets, centralizing all recruitment data in one system</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Efficiency Gains</h3>
                    <p className="text-slate-700">Reduced task times for common actions like shortlisting candidates by up to 40%</p>
                  </div>
                </div>
              </div>
              
              <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
                <CardContent className="p-6">
                  <p className="italic text-slate-700 text-lg">
                    "This finally feels like a tool built for us."
                    <span className="block mt-3 text-sm font-medium text-slate-600">— Agency recruiter</span>
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image 
                  src="/placeholder.svg" 
                  alt="Adoption metrics chart" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">Adoption metrics over 18 months</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Task completion time improvements" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">Task completion improvements</p>
                  </div>
                </div>
                
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="User testimonials" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">User testimonials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
