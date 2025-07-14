import { Star, Heart, Trophy, Bookmark, Users, MessageSquare, ChevronRight } from "lucide-react"

export default function MomentOfTruthSection() {
  const stats = [
    { value: "150+", label: "Active community members", icon: Users, color: "from-fuchsia-500 to-pink-600" },
    { value: "3", label: "AI design tool partnerships", icon: Bookmark, color: "from-pink-500 to-rose-600" },
    { value: "47", label: "Weekly active discussions", icon: MessageSquare, color: "from-rose-500 to-red-600" },
    { value: "14", label: "Designer mentor pairs", icon: Trophy, color: "from-red-500 to-orange-600" }
  ]

  const lessons = [
    {
      title: "When Community is the Feature",
      description: "The most valuable part of the platform wasn't what I built—it was the belonging I enabled. Technology was just the stage; the community was the show.",
      icon: Star,
      color: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      title: "Empathy Beats Efficiency",
      description: "The personas weren't abstract archetypes—they were real people I knew by name, with real struggles I'd promised to solve. Their pain points felt personal.",
      icon: Heart,
      color: "bg-gradient-to-br from-rose-500 to-red-600"
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-purple-50/30 to-fuchsia-50/30 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,white)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block bg-fuchsia-100 text-fuchsia-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            The Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
            The Moment of Truth
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Reflections on the journey and the lasting impact of Little Big Dots
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Quote Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform transition-all hover:scale-[1.01] duration-300">
            <div className="p-8 md:p-12 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-fuchsia-100 rounded-full opacity-30 blur-3xl" />
              <div className="relative z-10">
                <div className="text-fuchsia-500 text-7xl font-serif -mb-6 -ml-2">"</div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-800 leading-relaxed mb-8 max-w-4xl mx-auto">
                  On the morning of October 31st, I watched the migration counter tick to 35/35 members. 
                  <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                    Every single founding member made the jump...and they brought friends.
                  </span>
                </p>
                <div className="flex items-center justify-end">
                  <div className="h-px bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent w-1/3 mr-4" />
                  <span className="text-fuchsia-700 font-medium">Founder, Little Big Dots</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
              Lessons That Will Last a Lifetime
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {lessons.map((lesson, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                >
                  <div className={`w-14 h-14 ${lesson.color} rounded-xl flex items-center justify-center shadow-lg mb-6`}>
                    <lesson.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{lesson.title}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Section */}
          <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-20 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-fuchsia-200 rounded-full opacity-20" />
            <div className="absolute -left-20 bottom-0 w-96 h-96 bg-pink-200 rounded-full opacity-20" />
            <div className="relative z-10">
              <span className="inline-block bg-white/50 text-fuchsia-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-fuchsia-100">
                The Journey Continues
              </span>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    From 35 to 150+ and Growing
                  </h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    As I write this in June 2025, Little Big Dots has grown to over 150 active members. What started as a weekend exploration has become a thriving community with its own rituals, inside jokes, and success stories.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The original 35 members still wear their "OG" badges with pride, and I still wake up every morning to multiple notifications from designers celebrating their latest AI victories.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <ChevronRight className="h-5 w-5 text-fuchsia-600 mr-2" />
                    Community Growth Milestones
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "35 founding members joined in the first week",
                      "100+ members by end of 2024",
                      "3 major AI tool partnerships formed",
                      "14 active mentor-mentee pairs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-fuchsia-500 rounded-full" />
                        </div>
                        <span className="ml-3 text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 hover:-translate-y-1 transform transition"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
