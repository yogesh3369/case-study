import { ArrowDown, TrendingUp, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-8 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 transition-colors text-sm px-4 py-2">
            UX Case Study
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black mb-12 leading-tight">
            <span className="text-slate-900">Accelerating Bookings</span>
            <br />
            <span className="text-slate-900">through a </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Lean Mobile Redesign
            </span>
          </h1>

          {/* Floating Metrics */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Conversion Metric */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-black text-emerald-600 mb-3">140%</div>
                  <div className="text-slate-700 font-semibold text-lg mb-2">Conversion Increase</div>
                  <div className="text-slate-500">25% → 60%</div>
                </div>
              </div>

              {/* Revenue Metric */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-black text-teal-600 mb-3">₹4.2L</div>
                  <div className="text-slate-700 font-semibold text-lg mb-2">Revenue Impact</div>
                  <div className="text-slate-500">Net annual</div>
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
