import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ResultsSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">🎉 Results & Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="list-disc pl-6 space-y-4 mb-6">
            <li className="text-lg">
              <span className="font-semibold">15 agencies</span> adopted the new ATS within 18 months
            </li>
            <li className="text-lg">
              Recruiters praised the unified views and faster workflows
            </li>
            <li className="text-lg">
              Managers stopped relying on Excel
            </li>
            <li className="text-lg">
              Reduced task times for common actions like shortlisting candidates
            </li>
          </ul>
          <Card className="mt-4">
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground">
                "This finally feels like a tool built for us."
                <span className="block mt-2 text-sm">— Agency recruiter</span>
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg" 
              alt="Adoption metrics chart" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              Adoption metrics over 18 months
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="Task completion time improvements" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                Task completion improvements
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="User testimonials" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                User testimonials
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
