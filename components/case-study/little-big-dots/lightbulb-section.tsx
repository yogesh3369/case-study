import { Lightbulb, MessagesSquare } from "lucide-react"
import Image from "next/image"

export default function LightbulbSection() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50/30 to-indigo-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Lightbulb Moment</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              When a casual insight turned into a strategic community-building opportunity
            </p>
          </div>

          {/* Sneaky Smart Community Building */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-700">Sneaky Smart Community Building</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-10">
              <p className="text-xl italic text-slate-700 mb-6 border-l-4 border-indigo-400 pl-4">
                "What if… we tell people that resources will be shared in a special community, and they need to join to get access?"
              </p>
              
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-indigo-700">1</span>
                      </div>
                      <div>
                        <p className="text-slate-700">
                          Hosted an intro session on "Vibe Coding," our approach to making AI tools feel less intimidating.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-indigo-700">2</span>
                      </div>
                      <div>
                        <p className="text-slate-700">
                          By teasing "exclusive resources," we turned a single session into 30–35 eager sign-ups, giving us instant validation that structured AI guidance in design was in demand.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src="/vibe-coding-session.png" 
                      alt="Vibe Coding Workshop Session" 
                      width={500}
                      height={350}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl font-bold text-blue-600">35+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Up Close with Pain Points */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MessagesSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-700">Getting Up Close with Pain Points</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Image 
                      src="/junior-designer-avatar.png" 
                      alt="Junior Designer" 
                      width={40} 
                      height={40} 
                      className="rounded-full"
                    />
                    <p className="font-semibold text-indigo-700">Junior Designer</p>
                  </div>
                  <p className="italic text-slate-700 border-l-3 border-indigo-300 pl-3">
                    "What if I pick the wrong tool and waste my time?"
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Image 
                      src="/mid-career-avatar.png" 
                      alt="Mid-Career Designer" 
                      width={40} 
                      height={40} 
                      className="rounded-full"
                    />
                    <p className="font-semibold text-blue-700">Mid-Career Designer</p>
                  </div>
                  <p className="italic text-slate-700 border-l-3 border-blue-300 pl-3">
                    "My clients are asking about AI, and I feel like I'm behind."
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Image 
                      src="/senior-designer-avatar.png" 
                      alt="Senior Designer" 
                      width={40} 
                      height={40} 
                      className="rounded-full"
                    />
                    <p className="font-semibold text-cyan-700">Senior Designer</p>
                  </div>
                  <p className="italic text-slate-700 border-l-3 border-cyan-300 pl-3">
                    "I need to guide my team, but I don't have time to research every new tool."
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-blue-700 mb-1">Key Insight</p>
                  <p className="text-slate-700">
                    It wasn't about recommending tools; it was about helping designers feel confident navigating AI in their workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
