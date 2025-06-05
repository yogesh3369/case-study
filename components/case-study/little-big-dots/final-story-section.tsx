import { Lightbulb, Users, Gauge, MessageSquare } from "lucide-react"

export default function FinalStorySection() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50/30 to-purple-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Real Story Behind the Success</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              The core principles that made Little Big Dots possible, beyond the technical details
            </p>
          </div>

          {/* Story Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">It Started with Curiosity</h3>
                </div>
                
                <p className="text-slate-700">
                  One casual LinkedIn DM snowballed into a caffeine-fueled sprint proving that big ideas can sprout from small questions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-700">Community First, Platform Second</h3>
                </div>
                
                <p className="text-slate-700">
                  Our WhatsApp group wasn't just a test audience—it was the heartbeat behind every decision.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700">AI Tools as Enablers, Not Solutions</h3>
                </div>
                
                <p className="text-slate-700">
                  AI handled grunt work; I infused humor, context, and real-time feedback.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Gauge className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-700">Constraints Breed Innovation</h3>
                </div>
                
                <p className="text-slate-700">
                  The two-week, shoestring budget wasn't a setback—it was the secret ingredient that sparked better decisions and craftsmanship.
                </p>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-10 shadow-lg text-center">
            <p className="text-2xl italic text-slate-700 mb-6">
              "The most valuable part of building Little Big Dots wasn't the tech stack or automation—it was watching designers go from overwhelmed to confident as they explored AI tools together."
            </p>
            <div className="w-16 h-1 bg-indigo-400 mx-auto mb-4"></div>
            <p className="text-slate-600 font-semibold">From my project journal, Day 10</p>
          </div>
        </div>
      </div>
    </section>
  )
}
