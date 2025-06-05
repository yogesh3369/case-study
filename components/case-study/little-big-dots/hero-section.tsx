import { ArrowDown, Users, Clock, Code, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-white to-purple-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-8 animate-fade-in-down flex-wrap justify-center gap-2">
            <Badge className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-colors text-sm px-4 py-2">
              UX Case Study
            </Badge>
            <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 transition-colors text-sm px-4 py-2">
              Community Platform
            </Badge>
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors text-sm px-4 py-2">
              2024-2025
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-center max-w-5xl">
            <span className="text-slate-900">Building a Designer</span>
            <br />
            <span className="text-slate-900">Community through </span>
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h1>
          
          <p className="text-slate-600 text-xl max-w-3xl text-center mb-12">
            How I transformed a weekend tool exploration into
            <span className="font-semibold text-indigo-700"> Little Big Dots </span>
            — a thriving community platform for designers navigating the AI landscape, with
            <span className="font-semibold text-purple-700"> 70% reduced costs</span> and
            <span className="font-semibold text-blue-700"> 35+ founding members</span>.
          </p>

          {/* Device Mockups */}
          <div className="relative w-full max-w-6xl mx-auto mb-16">
            <div className="relative z-10 flex justify-center">
              <div className="relative shadow-2xl rounded-xl border border-slate-200 bg-white transform transition-all duration-500 hover:scale-105">
                <Image 
                  src="/little-big-dots-mockup.png" 
                  alt="Little Big Dots Platform Interface" 
                  width={800} 
                  height={450}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Glowing dots */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-purple-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-blue-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>

          {/* Metrics Section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-5 mb-16">
              {/* Days Delivery Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-purple-600 mb-1">14</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Days Delivery</div>
                  <div className="text-slate-500 text-xs">Idea to launch</div>
                </div>
              </div>
              
              {/* Cost Reduction Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-indigo-600 mb-1">70%</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Cost Reduction</div>
                  <div className="text-slate-500 text-xs">Through self-hosting</div>
                </div>
              </div>
              
              {/* Members Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-blue-600 mb-1">35+</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Founding Members</div>
                  <div className="text-slate-500 text-xs">Across 3 personas</div>
                </div>
              </div>
              
              {/* Automation Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-cyan-600 mb-1">80%</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Automation</div>
                  <div className="text-slate-500 text-xs">Manual tasks replaced</div>
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
        
        {/* Featured in badges */}
        <div className="max-w-3xl mx-auto mt-16">
          <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-6">Supported by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <Image src="/design-masters-logo.svg" alt="Design Masters" width={120} height={40} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/ux-unicorns-logo.svg" alt="UX Unicorns" width={120} height={40} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/ai-tools-logo.svg" alt="AI Tools" width={120} height={40} className="grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
