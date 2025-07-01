"use client"

import { ArrowDown, Users, Clock, Code, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-8 animate-fade-in-down flex-wrap justify-center gap-2">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors text-sm px-4 py-2">
              UX/UI Case Study
            </Badge>
            <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 transition-colors text-sm px-4 py-2">
              Enterprise UX
            </Badge>
            <Badge className="bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 transition-colors text-sm px-4 py-2">
              2023-2024
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-center max-w-5xl">
            <span className="text-slate-900">ATS Redesign:</span>
            <br />
            <span className="text-slate-900">From Legacy to </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Loved
            </span>
          </h1>
          
          <p className="text-slate-600 text-xl max-w-3xl text-center mb-12">
            How I transformed a cluttered applicant tracking system into a
            <span className="font-semibold text-indigo-700"> modern, unified platform </span>
            that recruiters love, with
            <span className="font-semibold text-blue-700"> 15 agencies </span>
            adopting it within
            <span className="font-semibold text-cyan-700"> 18 months</span>.
          </p>

          {/* Device Mockups */}
          <div className="relative w-full max-w-6xl mx-auto mb-16">
            <div className="relative z-10 flex justify-center">
              <div className="relative shadow-2xl rounded-xl border border-slate-200 bg-white transform transition-all duration-500 hover:scale-105">
                <Image 
                  src="/placeholder.svg" 
                  alt="ATS Redesign Interface" 
                  width={800} 
                  height={450}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Glowing dots */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-blue-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>

          {/* Metrics Section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-5 mb-16">
              {/* Weeks Delivery Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-blue-600 mb-1">18</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Weeks</div>
                  <div className="text-slate-500 text-xs">Research to launch</div>
                </div>
              </div>
              
              {/* Agencies Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-indigo-600 mb-1">15</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Agencies</div>
                  <div className="text-slate-500 text-xs">Adopted the platform</div>
                </div>
              </div>
              
              {/* Efficiency Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-blue-600 mb-1">67%</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Efficiency</div>
                  <div className="text-slate-500 text-xs">Task time reduction</div>
                </div>
              </div>
              
              {/* Automation Metric */}
              <div className="group md:col-span-1 relative transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-cyan-600 mb-1">100%</div>
                  <div className="text-slate-700 font-semibold text-sm mb-1">Adoption</div>
                  <div className="text-slate-500 text-xs">By target agencies</div>
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
