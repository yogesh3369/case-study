import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Search, Users, FileSearch, LineChart } from "lucide-react"

export default function DiscoverySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Discovery & Research</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Weeks 1-2: Understanding the current user experience and identifying pain points
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-8 text-slate-700 leading-relaxed">
                During the initial discovery phase, I focused on understanding the current user experience and pain points:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">User Interviews</h3>
                    <p className="text-slate-600">Conducted in-depth interviews with 8 recruiters and 4 managers to understand their workflows and frustrations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">User Shadowing</h3>
                    <p className="text-slate-600">Shadowed users as they completed common tasks in the existing system to identify usability issues</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileSearch className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Support Analysis</h3>
                    <p className="text-slate-600">Analyzed support tickets to identify recurring issues and pain points in the current system</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <LineChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Competitive Analysis</h3>
                    <p className="text-slate-600">Reviewed competitor products to identify industry best practices and opportunities for differentiation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image 
                  src="/placeholder.svg" 
                  alt="Research notes and affinity mapping" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <p className="font-medium">Research notes and affinity mapping</p>
                </div>
              </div>
              
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <p className="italic text-slate-700 text-lg">
                    "The most valuable insight from our research was discovering that users were creating their own workarounds for almost every major feature in the system."
                  </p>
                  <p className="text-sm text-slate-500 mt-4 font-medium">— Key Research Finding</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
