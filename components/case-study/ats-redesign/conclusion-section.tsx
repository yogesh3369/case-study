import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Trophy } from "lucide-react"

export default function ConclusionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Conclusion</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-slate-900 mb-2">Project Success</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  This project proved that even complex legacy systems can become user-friendly tools that people love to use. 
                  It's incredibly rewarding when recruiters go from dreading their ATS to genuinely enjoying it.
                </p>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
                  <CardContent className="p-6">
                    <p className="text-lg font-medium text-slate-800 italic">
                      Because good design isn't just how it looks—it's how it makes people feel at work.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-slate-200">
              <Image 
                src="/placeholder.svg" 
                alt="Final redesigned product" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium text-lg">Final redesigned product</p>
                  <p className="text-sm text-white/80">A modern, user-friendly ATS that recruiters love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
