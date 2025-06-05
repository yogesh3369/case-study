import { Clock, Users, ArrowDownUp, Zap, CheckSquare, PieChart } from "lucide-react"

export default function NumbersSection() {
  return (
    <section className="relative bg-gradient-to-b from-teal-50/30 to-emerald-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Numbers That Tell the Story</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              Measurable results that showcase the rapid development and successful launch
            </p>
          </div>

          {/* Numbers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* 14-Day Delivery */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <span className="text-4xl font-black text-emerald-700 mb-1">14-Day</span>
                <p className="text-slate-700 text-sm">Fully featured platform ready by October 31, 2024</p>
              </div>
            </div>
            
            {/* 3 Personas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <span className="text-4xl font-black text-green-700 mb-1">3 Personas</span>
                <p className="text-slate-700 text-sm">Onboarding paths tailored to distinct designer needs</p>
              </div>
            </div>
            
            {/* 35+ Members */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-lime-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <span className="text-4xl font-black text-lime-700 mb-1">35+</span>
                <p className="text-slate-700 text-sm">Founding Members migrated with zero hiccups</p>
              </div>
            </div>
            
            {/* 70% Cost Reduction */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <ArrowDownUp className="h-7 w-7 text-white" />
                </div>
                <span className="text-4xl font-black text-yellow-700 mb-1">70%</span>
                <p className="text-slate-700 text-sm">Cost reduction from $50+ to $15 via self-hosting</p>
              </div>
            </div>
            
            {/* 80% Automation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg mb-3">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <span className="text-4xl font-black text-amber-700 mb-1">80%</span>
                <p className="text-slate-700 text-sm">Manual tasks replaced by automated workflows</p>
              </div>
            </div>
          </div>

          {/* Other Metrics */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Community Readiness Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <CheckSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-700">Community Readiness Metrics</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <p className="text-slate-700">
                    100% user journey coverage—no dead ends
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <p className="text-slate-700">
                    Daily automated content: tool spotlights, quick tips, and occasional bad puns
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <p className="text-slate-700">
                    3 volunteer moderators (certified meme-curators)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <p className="text-slate-700">
                    Launch partnerships lined up with Design Masters, UXUnicorns, and more
                  </p>
                </li>
              </ul>
            </div>

            {/* Technical Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <PieChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-700">Technical Achievements</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-blue-700" />
                  </div>
                  <p className="text-slate-700">
                    Zero-downtime AWS deployment ("Nailed it!")
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-blue-700" />
                  </div>
                  <p className="text-slate-700">
                    Fully mobile-responsive—tested on old flip phones and new foldables
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-blue-700" />
                  </div>
                  <p className="text-slate-700">
                    Secure, self-hosted workflows (n8n updates? It's like a fine cheese—aged to perfection)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckSquare className="h-3.5 w-3.5 text-blue-700" />
                  </div>
                  <p className="text-slate-700">
                    Scalable architecture—ready for hundreds (or even thousands) of users
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
