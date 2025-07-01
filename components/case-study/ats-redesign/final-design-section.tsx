import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FinalDesignSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Weeks 13-18 – Final Design & Handoff</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            After successful prototype testing, I finalized the designs and prepared them for development:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Created high-fidelity UI designs for all screens</li>
            <li>Developed a comprehensive component library</li>
            <li>Documented design decisions and rationales</li>
            <li>Created detailed specifications for developers</li>
            <li>Established a design system for future consistency</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg" 
              alt="Final high-fidelity designs" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              Final high-fidelity designs
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="UI component library" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                UI component library
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="Developer handoff specs" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                Developer handoff specs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
