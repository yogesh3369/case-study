import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Pencil, Layout, FormInput, BarChart, Search } from "lucide-react"

export default function SketchingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Sketching & Ideation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Weeks 5-7: Exploring solutions through sketches and low-fidelity wireframes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-8 text-slate-700 leading-relaxed">
                With clear problems defined, I began exploring solutions through sketches and low-fidelity wireframes to quickly iterate on ideas:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Layout className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Layout Exploration</h3>
                    <p className="text-slate-600">Created multiple layout options for key screens to improve information hierarchy and user flow</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FormInput className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Form Simplification</h3>
                    <p className="text-slate-600">Explored form simplification through progressive disclosure and smart defaults</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Unified Dashboard</h3>
                    <p className="text-slate-600">Designed a unified dashboard concept that provides at-a-glance insights into recruitment activities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Search & Filtering</h3>
                    <p className="text-slate-600">Sketched improved filtering and search mechanisms with predictive suggestions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image 
                  src="/placeholder.svg" 
                  alt="Sketches and wireframes" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">Early sketches and wireframes</p>
                </div>
              </div>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-emerald-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Pencil className="h-4 w-4 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900">OneView Concept</h3>
                  </div>
                  <p className="italic text-slate-700 text-lg">
                    "The OneView comparison tool emerged from watching recruiters constantly switch between tabs to compare candidates. This simple solution became one of the most praised features."
                  </p>
                  <p className="text-sm text-slate-500 mt-4 font-medium">— Design Insight</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
