import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Map, AlertCircle, BarChart3, ListFilter } from "lucide-react"

export default function DefiningProblemsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Defining the Problems</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Weeks 3-4: Organizing research findings into clear problem statements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg mb-8 text-slate-700 leading-relaxed">
                After gathering research, I organized findings into clear problem statements to guide our design approach:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Map className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Journey Mapping</h3>
                    <p className="text-slate-600">Mapped user pain points across the entire recruitment journey to identify critical friction points</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Workflow Analysis</h3>
                    <p className="text-slate-600">Identified critical workflow breakdowns where users were creating workarounds to complete tasks</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Impact Prioritization</h3>
                    <p className="text-slate-600">Prioritized issues based on frequency and impact on productivity to focus our design efforts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ListFilter className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Problem Hierarchy</h3>
                    <p className="text-slate-600">Created a problem hierarchy to guide our design approach and ensure we addressed root causes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image 
                  src="/placeholder.svg" 
                  alt="User journey map with pain points" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">User journey map with pain points highlighted</p>
                </div>
              </div>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-slate-900 mb-4">Key Problem Areas Identified:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">1</span>
                      <p className="text-slate-700">Form complexity and redundant data entry</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">2</span>
                      <p className="text-slate-700">Unreliable search functionality</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">3</span>
                      <p className="text-slate-700">Lack of visibility into recruitment pipeline</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">4</span>
                      <p className="text-slate-700">Inconsistent UI patterns across the platform</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">5</span>
                      <p className="text-slate-700">Missing reporting capabilities for managers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
