import { Users, Briefcase, Clock, FileSpreadsheet, BarChart3, Search } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function UsersSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Who We Designed For</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Our redesign focused on two key user groups with distinct needs but shared frustrations with the legacy system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-visible relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg rotate-3">
                <Users className="h-10 w-10 text-white" />
              </div>
              
              <CardHeader className="pt-16 pb-6">
                <h3 className="text-2xl font-bold text-center text-slate-900">Recruiters</h3>
              </CardHeader>
              
              <CardContent className="pb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Efficiency Seekers</h4>
                      <p className="text-slate-600">Needed to process more candidates in less time without sacrificing quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Search className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Data Navigators</h4>
                      <p className="text-slate-600">Struggled with finding relevant candidate information quickly during time-sensitive hiring processes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileSpreadsheet className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Duplicate Work Avoiders</h4>
                      <p className="text-slate-600">Frustrated by having to enter the same information multiple times across different systems</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-visible relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg -rotate-3">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              
              <CardHeader className="pt-16 pb-6">
                <h3 className="text-2xl font-bold text-center text-slate-900">Hiring Managers</h3>
              </CardHeader>
              
              <CardContent className="pb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Insight Seekers</h4>
                      <p className="text-slate-600">Needed clear visibility into hiring pipelines and team performance metrics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Time Optimizers</h4>
                      <p className="text-slate-600">Wanted to reduce time spent on administrative tasks to focus on strategic hiring decisions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileSpreadsheet className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Spreadsheet Escapees</h4>
                      <p className="text-slate-600">Frustrated with maintaining separate tracking systems outside the ATS</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
