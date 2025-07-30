import { MessageSquare, Lightbulb, AlertTriangle, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SparkSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">The Spark That Started Everything</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              How a simple LinkedIn message turned into a weekend obsession and eventually a full community platform
            </p>
          </div>

          {/* October 2024 Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-700">October 2024: When Curiosity Strikes</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-10">
              <p className="text-xl italic text-slate-700 mb-6 border-l-4 border-purple-400 pl-4">
                "I'm that person who can't see a shiny new tool without diving headfirst into it."
              </p>
              
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-purple-700">1</span>
                      </div>
                      <div>
                        <p className="text-slate-700">
                          Scrolled LinkedIn, saw my mentor's post about "v0," and slid into his DMs: "Tell me more about this v0 thing."
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-purple-700">2</span>
                      </div>
                      <div>
                        <p className="text-slate-700">
                          What I thought would be a quick question turned into "weekend exploration sessions where we'd geek out about AI tools for hours."
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-purple-700">3</span>
                      </div>
                      <div>
                        <p className="text-slate-700">
                          I shared each new discovery on LinkedIn "like a kid showing off their latest Pokémon cards," and designers got excited—but overwhelmed.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative group">
                  <div className="rounded-xl overflow-hidden shadow-xl relative">
                    <Image 
                      src="/linkedin-dm-illustration.png" 
                      alt="LinkedIn conversation about v0" 
                      width={500}
                      height={350}
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay with CTA */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Link 
                        href="https://www.linkedin.com/posts/raktim-chatterjee-3abb44102_ai-appdevelopment-vercel-activity-7244548676381990912-UJ75/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOT0G8BhTouEhnBl7PxR-ETS0VDBPAtl9E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors transform hover:scale-105 shadow-lg"
                      >
                        <span>View Original Post</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center z-10">
                    <Lightbulb className="h-10 w-10 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Realizing the Problem Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-700">Realizing the Bigger Problem</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-xl italic text-slate-700 mb-6 border-l-4 border-indigo-400 pl-4">
                "There's so much information out there, but I feel more confused than when I started."
              </p>
              
              <p className="text-slate-700 mb-8">
                In the Design Masters community, junior, mid-level, and senior designers all voiced nearly the same frustration: too many tools, not enough guidance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-lg text-purple-700 mb-3">The Overwhelmed Newbie</h4>
                  <p className="text-sm text-slate-600 mb-2">Junior/Aspiring Designers</p>
                  <p className="italic text-slate-700 border-l-3 border-purple-300 pl-3 text-sm">
                    "I bookmark every AI tool I see on LinkedIn, but my bookmarks folder is chaos."
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-lg text-indigo-700 mb-3">The Frustrated Integrator</h4>
                  <p className="text-sm text-slate-600 mb-2">Mid-Career Designers</p>
                  <p className="italic text-slate-700 border-l-3 border-indigo-300 pl-3 text-sm">
                    "I tried Figma AI and ChatGPT, but I can't figure out how to make them actually useful in my daily work."
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-lg text-blue-700 mb-3">The Strategic Worrier</h4>
                  <p className="text-sm text-slate-600 mb-2">Senior Designers & Leaders</p>
                  <p className="italic text-slate-700 border-l-3 border-blue-300 pl-3 text-sm">
                    "My team is using different AI tools randomly. I need to understand this space well enough to make strategic decisions."
                  </p>
                </div>
              </div>
              
              <p className="text-slate-700 mt-8">
                Each interview confirmed: designers needed more than just a list of tools—they needed community, structure, and confidence-building guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
