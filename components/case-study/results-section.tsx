import { Star, DollarSign, TrendingUp, CheckCircle, Rocket } from "lucide-react"

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Measured Results & Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
              Quantifiable improvements across user experience, revenue, and operational efficiency
            </p>
          </div>

          <div className="space-y-20">
            {/* User Experience Transformation */}
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full border border-emerald-200 mb-4">
                  <Star className="h-5 w-5" />
                  <span className="font-semibold">User Experience Transformation</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    metric: "140%",
                    label: "Booking Completion Rate",
                    detail: "25% → 60% increase",
                    progress: 100,
                    color: "emerald",
                  },
                  {
                    metric: "46%",
                    label: "User Drop-off Reduction",
                    detail: "75% → 40% improvement",
                    progress: 85,
                    color: "teal",
                  },
                  {
                    metric: "67%",
                    label: "Booking Flow Efficiency",
                    detail: "6 taps → 2 taps reduction",
                    progress: 90,
                    color: "cyan",
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${item.color}-100 to-${item.color}-50 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity`}
                    ></div>
                    <div className="relative bg-white border border-slate-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-center">
                        <div className={`text-4xl font-black text-${item.color}-600 mb-3`}>{item.metric}</div>
                        <div className="text-slate-700 font-semibold mb-2">{item.label}</div>
                        <div className="text-slate-500 text-sm mb-4">{item.detail}</div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Impact */}
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-teal-50 text-teal-700 px-6 py-3 rounded-full border border-teal-200 mb-4">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-semibold">Revenue Impact</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    metric: "₹35K",
                    label: "Monthly Revenue Swing",
                    detail: "-₹15K → +₹20K transformation",
                    progress: 95,
                    color: "teal",
                  },
                  {
                    metric: "₹4.2L",
                    label: "Annual Revenue Impact",
                    detail: "Net improvement achieved",
                    progress: 100,
                    color: "emerald",
                  },
                  {
                    metric: "45%",
                    label: "Cost Per Acquisition",
                    detail: "Reduction through higher conversions",
                    progress: 80,
                    color: "cyan",
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${item.color}-100 to-${item.color}-50 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity`}
                    ></div>
                    <div className="relative bg-white border border-slate-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-center">
                        <div className={`text-4xl font-black text-${item.color}-600 mb-3`}>{item.metric}</div>
                        <div className="text-slate-700 font-semibold mb-2">{item.label}</div>
                        <div className="text-slate-500 text-sm mb-4">{item.detail}</div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Process Optimization */}
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-cyan-50 text-cyan-700 px-6 py-3 rounded-full border border-cyan-200 mb-4">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-semibold">Sales Process Optimization</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    metric: "95%",
                    label: "Lead Response Time Cut",
                    detail: "6-7 hours → 10-20 minutes",
                    progress: 95,
                    color: "cyan",
                  },
                  {
                    metric: "133%",
                    label: "Lead Conversion Rate",
                    detail: "12% → 28% improvement",
                    progress: 90,
                    color: "teal",
                  },
                  {
                    metric: "50%",
                    label: "Sales Team Efficiency",
                    detail: "Increase in qualified conversations",
                    progress: 75,
                    color: "emerald",
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${item.color}-100 to-${item.color}-50 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity`}
                    ></div>
                    <div className="relative bg-white border border-slate-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-center">
                        <div className={`text-4xl font-black text-${item.color}-600 mb-3`}>{item.metric}</div>
                        <div className="text-slate-700 font-semibold mb-2">{item.label}</div>
                        <div className="text-slate-500 text-sm mb-4">{item.detail}</div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Impact Areas */}
            <div className="grid lg:grid-cols-2 gap-12 mt-20">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white border border-purple-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-700">Operational Benefits</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Navigation-related support tickets reduced by 90%",
                      "App store rating improved from 3.2 to 4.6 stars",
                      "Sales team reported 3x higher lead quality with clear intent signals",
                      "Created scalable foundation for ongoing conversion optimization",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white border border-orange-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-orange-700">Long-term Business Impact</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Successfully met website integration deadline enabling full platform launch",
                      "Established automated lead nurturing system reducing manual sales overhead",
                      "Built user experience framework supporting 300% user base growth over 6 months",
                    ].map((impact, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 leading-relaxed">{impact}</p>
                      </div>
                    ))}
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
