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
        
          <div>
            <h3 className="text-xl font-semibold mb-4">How It Unfolded</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h4 className="font-medium mb-2">Weeks 1-2 – Discovery & Research</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Interviewed recruiters and managers</li>
                    <li>Gathered pain points and desired improvements</li>
                    <li>Analyzed competitor tools for inspiration</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h4 className="font-medium mb-2">Weeks 3-4 – Defining the Problems</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mapped pain points into user journeys</li>
                    <li>Highlighted where existing workflows failed</li>
                    <li>Began prioritizing fixes based on user impact</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h4 className="font-medium mb-2">Weeks 5-7 – Sketching & Ideation</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Low-fidelity wireframes</li>
                    <li>Explored layout improvements for forms, dashboards, and case management</li>
                    <li>Introduced "OneView" for candidate comparison</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h4 className="font-medium mb-2">Weeks 8-12 – Prototyping & Testing</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Built interactive prototypes in Figma</li>
                    <li>Ran usability sessions to observe task completion and user reactions</li>
                    <li>Incorporated feedback into refinements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full md:col-span-2">
                <CardContent className="pt-6">
                  <h4 className="font-medium mb-2">Weeks 13-18 – Final Design & Handoff</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Created high-fidelity UI designs</li>
                    <li>Documented design decisions</li>
                    <li>Shared guidelines for colors, typography, and UI components</li>
                    <li>Prepared clean handoff files for dev implementation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
