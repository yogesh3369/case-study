import { CheckCircle, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function OutcomeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Outcome</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              The ATS redesign project delivered significant improvements across all key metrics, transforming how recruiters and hiring managers work.  
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Key Results</h3>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-1">Reduced Time-to-Hire</h4>
                      <p className="text-slate-600">35% faster hiring process through streamlined workflows and intuitive candidate management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full border-2 border-indigo-200 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                        <CheckCircle className="h-5 w-5 text-indigo-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-1">Improved User Satisfaction</h4>
                      <p className="text-slate-600">89% increase in satisfaction scores among recruiters and hiring managers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full border-2 border-cyan-200 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                        <CheckCircle className="h-5 w-5 text-cyan-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-1">Widespread Adoption</h4>
                      <p className="text-slate-600">15 agencies implemented the platform within 18 months of launch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-1">Reduced Support Issues</h4>
                      <p className="text-slate-600">95% reduction in support tickets related to UI confusion and technical errors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 transform transition-all duration-500 hover:scale-[1.02]">
                <Image 
                  src="/placeholder.svg" 
                  alt="ATS Redesign Hero Screenshot" 
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Candidate Experience</p>
                      <p className="text-white font-bold text-lg">+42% Improvement</p>
                    </div>
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
