import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Briefcase, Zap } from 'lucide-react'

export default function AboutHero() {
  const stats = [
    { icon: <MapPin className="w-5 h-5 text-blue-600" />, label: 'Locations', value: 'California, USA, Wellington, NZ' },
    { icon: <Briefcase className="w-5 h-5 text-blue-600" />, label: 'Experience', value: '5 Years' },
    { icon: <Zap className="w-5 h-5 text-blue-600" />, label: 'Superpower', value: 'High fidelity prototyping' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Why hello there!
            </h1>
            
            <div className="space-y-5 text-slate-600 max-w-2xl">
              <p className="text-lg md:text-xl leading-relaxed">
                I enjoy the pursuit of craft, solving complex problems, and mentoring others.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                I'm inquisitive by nature and love exploring this beautiful world. I also enjoy volunteering and meeting new people.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Outside of work I enjoy travel, hiking, photography, and longbow archery.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="group px-8 py-6 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
              Download CV
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-base font-medium border-slate-300 hover:bg-slate-50">
              Get in touch
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center space-x-2 text-slate-900">
                  {stat.icon}
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
                <p className="text-lg font-medium text-slate-700">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="relative order-first md:order-last">
          <div className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-90">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
