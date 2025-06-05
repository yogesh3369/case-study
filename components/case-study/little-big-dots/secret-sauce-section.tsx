import { Users, Lightbulb, Gauge } from "lucide-react"

export default function SecretSauceSection() {
  return (
    <section className="relative bg-gradient-to-b from-cyan-50/30 to-teal-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Secret Sauce</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              The key ingredients that made this rapid community platform development possible
            </p>
          </div>

          {/* Secret Sauce Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Community-Driven Development */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Community-Driven Development</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg font-bold text-teal-700">1</span>
                    </div>
                    <p className="text-slate-700">
                      Every feature validated with actual designers.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg font-bold text-teal-700">2</span>
                    </div>
                    <p className="text-slate-700">
                      Instant feedback loops: "That button looks like a potato" became a running joke.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI-Accelerated Everything */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-green-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">AI-Accelerated Everything</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg font-bold text-emerald-700">1</span>
                    </div>
                    <p className="text-slate-700">
                      Bolt/Windsurf turned ideas into working code in hours.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg font-bold text-emerald-700">2</span>
                    </div>
                    <p className="text-slate-700">
                      AI tools handled draft content; I added the personality, jokes, and real-world context.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Constraint-Driven Innovation */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-green-500 to-lime-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-green-700 mb-4">Constraint-Driven Innovation</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg font-bold text-green-700">1</span>
                    </div>
                    <p className="text-slate-700">
                      A two-week, budget-tight deadline forced hyper-focus on what really mattered.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg font-bold text-green-700">2</span>
                    </div>
                    <p className="text-slate-700">
                      Self-hosting n8n taught valuable DevOps skills and slashed costs.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg font-bold text-green-700">3</span>
                    </div>
                    <p className="text-slate-700">
                      Solo work eliminated "what do you think?" delays—iteration happened at warp speed.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
