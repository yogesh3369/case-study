import { Card, CardContent } from "@/components/ui/card"

export default function LessonsSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">💡 Lessons Learned</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="h-full">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Stakeholder Collaboration</h3>
            <p>
              Stakeholder collaboration is crucial for enterprise UX success. Regular check-ins and 
              involving key decision-makers early helped secure buy-in for more ambitious changes.
            </p>
          </CardContent>
        </Card>
        
        <Card className="h-full">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Small Changes, Big Impact</h3>
            <p>
              Small UI changes can create massive value—even without backend overhauls. 
              Focusing on workflow improvements delivered significant user benefits without 
              requiring complete system rebuilds.
            </p>
          </CardContent>
        </Card>
        
        <Card className="h-full">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Design System Value</h3>
            <p>
              A robust design system prevents inconsistencies as products evolve. 
              Creating a component library early saved time later and ensured a 
              cohesive experience across all parts of the application.
            </p>
          </CardContent>
        </Card>
        
        <Card className="h-full">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Legacy Understanding</h3>
            <p>
              It's essential to deeply understand legacy systems before making changes. 
              Taking time to learn the existing architecture and data models helped us 
              make smart design decisions that were feasible to implement.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
