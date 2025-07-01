import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function KeyDesignSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">✨ Key Design Decisions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Unified Dashboard</h3>
              <p>Brought jobs, cases, and interviews into one cohesive view.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">OneView Comparison Tool</h3>
              <p>Enabled side-by-side candidate comparisons.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
              <p>Embedded filters directly into lists to save clicks.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Simplified Forms</h3>
              <p>Grouped sections and clear mandatory fields.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Clean, Consistent Visual Language</h3>
              <p>Reduced cognitive load and made the experience feel modern.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg" 
              alt="Before and after comparison" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              Before and after comparison
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="OneView comparison tool" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                OneView comparison tool
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="Simplified form design" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                Simplified form design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
