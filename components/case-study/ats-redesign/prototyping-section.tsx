import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Figma, Users, Clock, MessageSquare, RefreshCw } from "lucide-react"

export default function PrototypingSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Prototyping & Testing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Weeks 8-12: Transforming wireframes into interactive prototypes and validating with users
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg mb-8 text-slate-700 leading-relaxed">
                I transformed wireframes into interactive prototypes and tested them with real users to validate our design solutions:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Figma className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Interactive Prototyping</h3>
                    <p className="text-slate-600">Built medium-fidelity interactive prototypes in Figma with clickable workflows</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Usability Testing</h3>
                    <p className="text-slate-600">Conducted usability testing with 6 recruiters and 3 managers to validate design decisions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Performance Metrics</h3>
                    <p className="text-slate-600">Measured task completion rates and time-on-task to quantify usability improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Qualitative Feedback</h3>
                    <p className="text-slate-600">Gathered qualitative feedback on the new workflows through interviews and observation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RefreshCw className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Design Iteration</h3>
                    <p className="text-slate-600">Iterated on designs based on user feedback to refine the experience</p>
                  </div>
                </div>
              </div>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <p className="italic text-slate-700 text-lg">
                    "This feels so much less stressful."
                  </p>
                  <p className="text-sm text-slate-500 mt-4 font-medium">— Recruiter during usability testing</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image 
                  src="/placeholder.svg" 
                  alt="Interactive prototype in Figma" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">Interactive prototype in Figma</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Usability testing session" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">Usability testing session</p>
                  </div>
                </div>
                
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/placeholder.svg" 
                    alt="User feedback notes" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="font-medium text-sm">User feedback notes</p>
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
