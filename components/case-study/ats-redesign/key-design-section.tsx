import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { LayoutDashboard, Users, Filter, FormInput, Paintbrush, Sparkles } from "lucide-react"

export default function KeyDesignSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Key Design Decisions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Strategic design choices that transformed the user experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <LayoutDashboard className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Unified Dashboard</h3>
                        <p className="text-slate-700">Brought jobs, cases, and interviews into one cohesive view, reducing context switching and providing a holistic overview of recruitment activities.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">OneView Comparison Tool</h3>
                        <p className="text-slate-700">Enabled side-by-side candidate comparisons, eliminating the need to switch between profiles and making selection decisions more efficient.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-emerald-50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Filter className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Smart Filtering</h3>
                        <p className="text-slate-700">Embedded filters directly into lists to save clicks, with contextual filtering options that adapt to the current view and user needs.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FormInput className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Simplified Forms</h3>
                        <p className="text-slate-700">Grouped sections logically and clearly marked mandatory fields, reducing form completion time and error rates.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Paintbrush className="h-5 w-5 text-slate-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Clean, Consistent Visual Language</h3>
                        <p className="text-slate-700">Reduced cognitive load and made the experience feel modern with a cohesive design system that scales across the platform.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image 
                  src="/placeholder.svg" 
                  alt="Before and after comparison" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">Before and after comparison</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="OneView comparison tool" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">OneView comparison tool</p>
                  </div>
                </div>
                
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Simplified form design" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">Simplified form design</p>
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
