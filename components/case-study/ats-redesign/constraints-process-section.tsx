import { Clock, AlertTriangle, Code, Workflow } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ConstraintsProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Constraints & Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Working within real-world constraints while following a structured design process to deliver impactful results.
            </p>
          </div>
          
          <div className="mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Project Constraints</h3>
                </div>
              </CardHeader>
              
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Code className="h-5 w-5 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-amber-700 mb-2">Limited Development Resources</h4>
                  <p className="text-slate-600">Small development team (primarily one developer) meant designs needed to be pragmatic and implementation-friendly</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Workflow className="h-5 w-5 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-amber-700 mb-2">Backend Limitations</h4>
                  <p className="text-slate-600">Minimal backend changes allowed, requiring creative solutions focused on UI and workflow improvements</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-lg text-amber-700 mb-2">Phased Implementation</h4>
                  <p className="text-slate-600">Required incremental rollout to minimize disruption to active recruiting workflows</p>
                </div>
              </CardContent>
            </Card>
          </div>
        
          <div className="mt-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                    <Workflow className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Design Process</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This project followed a structured 18-week design process, moving from initial research through to final handoff. 
                  Each phase built upon insights from the previous one, ensuring that the final solution addressed real user needs 
                  while working within our technical constraints.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  The process was collaborative throughout, with regular check-ins with recruiters and stakeholders to validate 
                  direction and gather feedback on incremental improvements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
