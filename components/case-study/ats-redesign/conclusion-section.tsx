import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ConclusionSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">🏆 Conclusion</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            This project proved that even complex legacy systems can become user-friendly tools that people love to use. 
            It's incredibly rewarding when recruiters go from dreading their ATS to genuinely enjoying it.
          </p>
          <p className="text-lg font-medium mt-6">
            Because good design isn't just how it looks—it's how it makes people feel at work.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="/placeholder.svg" 
            alt="Final redesigned product" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
            Final redesigned product
          </div>
        </div>
      </div>
    </div>
  )
}
