import { Rocket, Sparkles, Zap, BarChart } from "lucide-react"
import Image from "next/image"

export default function LaunchSection() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50/30 to-indigo-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">What's Next: Launch Strategy</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              The roadmap for growing Little Big Dots from a founding community to a thriving ecosystem
            </p>
          </div>

          {/* Three Phases Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-indigo-100 rounded-full blur-xl opacity-70"></div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg mb-5">
                    <Rocket className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-indigo-700 mb-4">Grand Community Migration</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-700">1</span>
                      </div>
                      <p className="text-slate-700">
                        Move our 35 WhatsApp members first—complete with virtual cake and celebratory GIFs.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-700">2</span>
                      </div>
                      <p className="text-slate-700">
                        Host a "Welcome to Little Big Dots" livestream with trivia and surprise giveaways.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-700">3</span>
                      </div>
                      <p className="text-slate-700">
                        Target 100+ new members in Month 1 via partner shout-outs and "AI vs. Designer" TikToks.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Automation Advantage */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-purple-100 rounded-full blur-xl opacity-70"></div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-fuchsia-500"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg flex items-center justify-center shadow-lg mb-5">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-purple-700 mb-4">The Automation Advantage</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-purple-700">1</span>
                      </div>
                      <p className="text-slate-700">
                        Personalized onboarding quizzes ("Are you a Procrastinator or a Productivity Ninja?").
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-purple-700">2</span>
                      </div>
                      <p className="text-slate-700">
                        Daily AI tool recommendations—"Try this if you haven't had coffee yet."
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-purple-700">3</span>
                      </div>
                      <p className="text-slate-700">
                        Automated mentorship matches: Overwhelmed Newbies get paired with Frustrated Integrators.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-purple-700">4</span>
                      </div>
                      <p className="text-slate-700">
                        Weekly resource roundups peppered with memes and motivational quotes.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Long-Term Vision */}
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-fuchsia-100 rounded-full blur-xl opacity-70"></div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                <div className="h-2 bg-gradient-to-r from-fuchsia-500 to-pink-500"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg mb-5">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-fuchsia-700 mb-4">Long-Term Vision</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-fuchsia-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-fuchsia-700">1</span>
                      </div>
                      <p className="text-slate-700">
                        Structured learning paths with whimsical badge icons.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-fuchsia-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-fuchsia-700">2</span>
                      </div>
                      <p className="text-slate-700">
                        "Little Big Dots Certified AI-Bender" certifications in partnership with industry leaders.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-fuchsia-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-fuchsia-700">3</span>
                      </div>
                      <p className="text-slate-700">
                        Exclusive beta-tool access and monthly virtual hackathons—"Build an AI toy in 24 hours (no sleep required)."
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
