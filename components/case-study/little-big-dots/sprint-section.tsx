import { Calendar, Users, Code, Server, Database, Clock } from "lucide-react"

export default function SprintSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/30 to-cyan-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The 14-Day Sprint: Chaos Meets Creativity</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              Breaking down how the platform came together, one caffeine-fueled day at a time
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-cyan-300 pl-8 ml-4">
            {/* Days 1-3 */}
            <div className="mb-12 relative">
              <div className="absolute -left-[46px] top-0">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-bold rounded-full">
                    Days 1–3
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">"Talk to Real People First"</h3>
                </div>
                
                <p className="text-slate-700 mb-5">Paused prototyping to interview actual users:</p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><span className="font-bold">Junior:</span> "My bookmarks folder is chaos—tell me where to begin."</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><span className="font-bold">Mid-Career:</span> "ChatGPT spits out jargon; I need real examples of AI in design."</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><span className="font-bold">Senior:</span> "I need a big-picture view so I don't look clueless."</p>
                  </div>
                </div>
                
                <p className="font-semibold text-slate-700">Finalized: Confidence and community &gt; mere tool lists.</p>
              </div>
            </div>
            
            {/* Days 4-7 */}
            <div className="mb-12 relative">
              <div className="absolute -left-[46px] top-0">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-bold rounded-full">
                    Days 4–7
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">"Okay, Now Build This Thing Without Figma"</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <h4 className="font-bold text-indigo-700 mb-2">Tech Stack Decision</h4>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Frontend: Bolt & Windsurf ("no Figma phase—design directly in code")</li>
                      <li>• Backend: n8n (planned as a cloud service)</li>
                      <li>• Hosting: AWS for reliability and scale</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700 mb-2">Content Architecture</h4>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Personalized onboarding paths per persona</li>
                      <li>• Dynamic resource recommendations</li>
                      <li>• Automated daily tips and discussion prompts</li>
                    </ul>
                  </div>
                </div>
                
                <p className="font-semibold text-slate-700">By Day 7, wireframes (in code) and information-architecture diagrams were locked in.</p>
              </div>
            </div>
            
            {/* Days 8-11 */}
            <div className="mb-12 relative">
              <div className="absolute -left-[46px] top-0">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                  <Server className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                    Days 8–11
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">"Holy Crap, This AI Development Thing Actually Works"</h3>
                </div>
                
                <div className="space-y-2 mb-5">
                  <p className="text-slate-700"><span className="font-semibold">Day 8:</span> Basic site structure and navigation—"felt like building Lego with rocket boosters."</p>
                  <p className="text-slate-700"><span className="font-semibold">Day 9:</span> User authentication & personalized dashboards—complete with cheeky "Forgot password? Have another coffee" messages.</p>
                  <p className="text-slate-700"><span className="font-semibold">Day 10:</span> Simple CMS for resources & tips.</p>
                  <p className="text-slate-700"><span className="font-semibold">Day 11:</span> Community forums, comment threads, and reaction GIF support.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-red-700 font-semibold">First Budget Panic: n8n cloud plan would cost $50+/month—too much for a pre-launch community.</p>
                </div>
              </div>
            </div>
            
            {/* Days 12-14 */}
            <div className="relative">
              <div className="absolute -left-[46px] top-0">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <Database className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-bold rounded-full">
                    Days 12–14
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">"When Life Gives You Budget Constraints"</h3>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-4 rounded-lg mb-5">
                  <h4 className="font-bold text-cyan-700 mb-2">Self-Hosting n8n on AWS</h4>
                  <ul className="space-y-1 text-sm text-slate-700 mb-2">
                    <li>• Spent late nights learning DevOps: "Could n8n be self-hosted? Yes—via Easypanel."</li>
                    <li>• Deployed n8n, set up automation workflows, and tested personalized content delivery.</li>
                    <li>• Reduced monthly costs from $50+ to under $15.</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-4 rounded-lg">
                  <h4 className="font-bold text-teal-700 mb-2">Final Day Push (Day 14):</h4>
                  <p className="text-slate-700 mb-2">Exhaustively tested every user journey, fixed typos, tuned performance, and configured analytics.</p>
                  <p className="font-semibold text-teal-700">By midnight, Little Big Dots was live—"better than I originally envisioned."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
