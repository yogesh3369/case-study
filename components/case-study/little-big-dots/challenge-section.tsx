import { Clock, Users, Code, Puzzle } from "lucide-react"
import Image from "next/image"

export default function ChallengeSection() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50/30 to-blue-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Challenge That Changed Everything</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              Turning an impossible deadline into an opportunity for innovation
            </p>
          </div>

          {/* The Challenge Quote */}
          <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 text-center">
            <p className="text-3xl font-bold text-blue-700 mb-6">
              "You have two weeks. Make it happen."
            </p>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-slate-700 mb-8 text-lg">
                  Right as our WhatsApp community was finding its legs, Raktim sir dropped the bomb: we needed a full website—with engagement, learning, and growth features—live in 14 days.
                </p>
                
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-blue-700">1</span>
                    </div>
                    <p className="text-slate-700 italic">"That's impossible."</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-indigo-700">2</span>
                    </div>
                    <p className="text-slate-700 italic">"Wait—remember all those AI tools we've been playing with?"</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg font-bold text-cyan-700">3</span>
                    </div>
                    <p className="text-slate-700 italic">"Challenge accepted."</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/challenge-illustration.png" 
                    alt="The challenge timeline" 
                    width={500}
                    height={350}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center z-10">
                  <Clock className="h-10 w-10 text-cyan-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Wearing All the Hats */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Puzzle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-700">Wearing All the Hats</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-purple-700 mb-3">User Researcher</h4>
                <p className="text-slate-700">
                  Led three persona interviews and distilled 12 pain points.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Code className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-indigo-700 mb-3">Technical Architect</h4>
                <p className="text-slate-700">
                  Chose a code-first stack to skip Figma bottlenecks.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-white" rotate={180} />
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-3">Community Strategist</h4>
                <p className="text-slate-700">
                  Designed launch events, "punny" onboarding emails, and cheeky engagement tactics.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Puzzle className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-cyan-700 mb-3">Problem Solver</h4>
                <p className="text-slate-700">
                  When things blew up (and they did), I improvised—sometimes with coffee and late-night Googling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
