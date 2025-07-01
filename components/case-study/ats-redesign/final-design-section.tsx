import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Palette, Library, FileText, Layers, Boxes } from "lucide-react"

export default function FinalDesignSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Final Design & Handoff</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Weeks 13-18: Finalizing designs and preparing them for development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg mb-8 text-slate-700 leading-relaxed">
                After successful prototype testing, I finalized the designs and prepared them for development with a focus on implementation quality:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Palette className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">High-Fidelity UI</h3>
                    <p className="text-slate-600">Created polished, high-fidelity UI designs for all screens with attention to visual details</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Library className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Component Library</h3>
                    <p className="text-slate-600">Developed a comprehensive component library to ensure consistency across the platform</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Design Documentation</h3>
                    <p className="text-slate-600">Documented design decisions and rationales to provide context for implementation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Layers className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Developer Specifications</h3>
                    <p className="text-slate-600">Created detailed specifications for developers to ensure accurate implementation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Boxes className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Design System</h3>
                    <p className="text-slate-600">Established a design system for future consistency and scalability</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image 
                  src="/placeholder.svg" 
                  alt="Final high-fidelity designs" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">Final high-fidelity designs</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="UI component library" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">UI component library</p>
                  </div>
                </div>
                
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Developer handoff specs" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">Developer handoff specs</p>
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
