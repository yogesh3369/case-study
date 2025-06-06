import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Briefcase, Zap, Sparkles } from 'lucide-react'

export default function AboutHero() {
  const stats = [
    { icon: <MapPin className="w-5 h-5 text-blue-600" />, label: 'Locations', value: 'California, USA, Wellington, NZ' },
    { icon: <Briefcase className="w-5 h-5 text-blue-600" />, label: 'Experience', value: '5 Years' },
    { icon: <Zap className="w-5 h-5 text-blue-600" />, label: 'Superpower', value: 'High fidelity prototyping' },
  ]

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-[10%] rounded-full bg-blue-50 opacity-20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute left-10 bottom-10 h-32 w-32 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <div className="container relative mx-auto px-4 max-w-6xl">
        {/* About Me Badge with decorative element */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-blue-50 opacity-50 blur-md"></div>
          <span className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            About Me
          </span>
        </div>
        
        {/* Heading with enhanced typography */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight relative inline-block">
            Why hello there!
            <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-blue-100 rounded-full opacity-70 -z-10"></span>
          </h1>
        </div>
        
        {/* Accent Line with animation */}
        <div className="flex justify-center mb-12">
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>
        
        {/* Content Grid with enhanced styling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content - takes up 2/3 of the grid on large screens */}
          <div className="lg:col-span-2 space-y-8 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-200 opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-200 opacity-70"></div>
            
            <div className="text-slate-700 space-y-5 relative z-10">
              <p className="text-lg leading-relaxed">
                I enjoy the pursuit of craft, solving complex problems, and mentoring others.
              </p>
              <p className="text-lg leading-relaxed">
                I'm inquisitive by nature and love exploring this beautiful world. I also enjoy volunteering and meeting new people.
              </p>
              <p className="text-lg leading-relaxed">
                Outside of work I enjoy travel, hiking, photography, and longbow archery.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="group px-6 py-2.5 bg-blue-600 hover:bg-blue-700 transition-all hover:shadow-md">
                Download CV
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="px-6 py-2.5 border-slate-300 hover:bg-slate-50 transition-all hover:shadow-sm">
                Get in touch
              </Button>
            </div>
          </div>
          
          {/* Stats card with enhanced design */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden relative">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-full h-full bg-blue-50 rounded-bl-[100px]"></div>
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-blue-200"></div>
              </div>
              
              <div className="p-7 relative">
                <h3 className="text-xl font-semibold text-slate-900 mb-7">Quick Facts</h3>
                
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-start gap-4 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <div className="bg-blue-50 p-2.5 rounded-lg shadow-sm">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                        <p className="text-base font-semibold text-slate-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
