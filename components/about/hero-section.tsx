import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Briefcase, Zap, Download, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutHero() {
  const stats = [
    { icon: <MapPin className="w-5 h-5 text-blue-600" />, label: 'Locations', value: 'California, USA, Wellington, NZ' },
    { icon: <Briefcase className="w-5 h-5 text-blue-600" />, label: 'Experience', value: '5 Years' },
    { icon: <Zap className="w-5 h-5 text-blue-600" />, label: 'Superpower', value: 'High fidelity prototyping' },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 opacity-30 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 opacity-20 rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Profile Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-fadeIn">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-full opacity-60 animate-spin-slow"></div>
              <div className="absolute -inset-8 border border-blue-100 rounded-full"></div>
              
              {/* Profile Image with Border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Yogesh Yadav" 
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 right-0 bg-white py-2 px-5 rounded-full shadow-lg border border-gray-100 animate-fadeInUp animation-delay-300">
                <p className="text-sm font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  5 Years of Experience
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 animate-fadeInUp animation-delay-200">
            {/* About Me Badge */}
            <div className="inline-block mb-2">
              <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                About Me
              </span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Why hello there!
            </h1>
            
            {/* Accent Line */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            
            {/* Bio Text */}
            <div className="text-gray-700 space-y-5 max-w-2xl">
              <p className="text-xl leading-relaxed font-medium">
                I enjoy the pursuit of craft, solving complex problems, and mentoring others.
              </p>
              <p className="text-lg leading-relaxed">
                I'm inquisitive by nature and love exploring this beautiful world. I also enjoy volunteering and meeting new people.
              </p>
              <p className="text-lg leading-relaxed">
                Outside of work I enjoy travel, hiking, photography, and longbow archery.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="#contact" passHref>
                <Button variant="outline" className="px-6 py-3 border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeInUp animation-delay-500">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-2">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Portfolio Link */}
        <div className="mt-16 text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group"
          >
            View my portfolio
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
