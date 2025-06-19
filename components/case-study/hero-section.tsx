import { ArrowDown, TrendingUp, DollarSign, Users, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-white to-emerald-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-8 animate-fade-in-down">
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 transition-colors text-sm px-4 py-2">
              UX Case Study
            </Badge>
            <Badge className="bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 transition-colors text-sm px-4 py-2">
              Mobile App Redesign
            </Badge>
            <Badge className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-colors text-sm px-4 py-2">
              2023
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-center max-w-5xl">
            <span className="text-slate-900">Accelerating Bookings</span>
            <br />
            <span className="text-slate-900">through a </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Lean Mobile Redesign
            </span>
          </h1>
          
          <p className="text-slate-600 text-xl max-w-3xl text-center mb-12">
            How I reimagined the booking experience for a coworking space app, resulting in a
            <span className="font-semibold text-emerald-700"> 140% increase in conversions </span>
            and
            <span className="font-semibold text-teal-700"> ₹4.2L in additional annual revenue</span>.
          </p>

          {/* Device Mockups */}
          <div className="relative w-full max-w-6xl mx-auto mb-16">
            <div className="relative z-10 flex justify-center">
              <div className="relative shadow-2xl rounded-[40px] border-8 border-slate-800 bg-slate-800 transform transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-slate-800 rounded-b-xl"></div>
                <Image 
                  src="/coworking-app-mockup.png" 
                  alt="Coworking App Interface" 
                  width={300} 
                  height={600}
                  className="rounded-3xl"
                  priority
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-slate-600 rounded-full"></div>
              </div>
            </div>
            
            {/* Glowing dots */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-emerald-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>

          {/* Metrics Section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-5 mb-16">
              {/* Conversion Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-emerald-600 mb-1">140%</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Conversion Increase</div>
                  <div className="text-slate-500 text-xs">25% → 60%</div>
                </div>
              </div>

              {/* Revenue Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-teal-600 mb-1">₹4.2L</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Revenue Impact</div>
                  <div className="text-slate-500 text-xs">Net annual</div>
                </div>
              </div>
              
              {/* Users Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-blue-600 mb-1">12K+</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Monthly Users</div>
                  <div className="text-slate-500 text-xs">Across 8 locations</div>
                </div>
              </div>
              
              {/* Timeline Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-purple-600 mb-1">4 wks</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Project Timeline</div>
                  <div className="text-slate-500 text-xs">Design to launch</div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center">
              <div className="w-12 h-12 border-2 border-slate-300 rounded-full flex items-center justify-center animate-bounce">
                <ArrowDown className="h-5 w-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  )
}
