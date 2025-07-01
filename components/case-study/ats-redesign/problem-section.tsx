import { AlertTriangle, Quote } from "lucide-react"
import Image from "next/image"

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Problem</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              The existing ATS was a legacy system built over a decade ago, causing significant frustration for recruiters and hiring managers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Key Challenges</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-red-100">
                    <h4 className="font-semibold text-lg text-red-700 mb-2">Cluttered Interface</h4>
                    <p className="text-slate-700">Poor information hierarchy and visual overload made it difficult for users to find what they needed</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-red-100">
                    <h4 className="font-semibold text-lg text-red-700 mb-2">Inconsistent Workflows</h4>
                    <p className="text-slate-700">Different processes for similar tasks caused confusion and frequent user errors</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-red-100">
                    <h4 className="font-semibold text-lg text-red-700 mb-2">Disconnected Systems</h4>
                    <p className="text-slate-700">Manual data entry between systems led to duplicated work and information gaps</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-red-100">
                    <h4 className="font-semibold text-lg text-red-700 mb-2">Limited Visibility</h4>
                    <p className="text-slate-700">Hiring managers had no direct access, forcing recruiters to manually export data to spreadsheets</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Old ATS UI Screenshot" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-3 rounded-br-lg font-medium text-sm">
                  BEFORE
                </div>
                <div className="bg-slate-900 text-white p-4">
                  <p className="text-sm font-medium">Legacy ATS interface with overwhelming information density and poor visual hierarchy</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"></div>
            
            <div className="relative flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 mt-1">
                <Quote className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-slate-700 text-lg italic leading-relaxed">
                  "I spend more time fighting with the ATS than actually recruiting. It's like working with software from another era. I've resorted to keeping my own spreadsheets because I can't trust the system to show me what I need when I need it."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg">
                    SR
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Senior Recruiter</p>
                    <p className="text-slate-500 text-sm">8+ years using the legacy system</p>
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
