import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function DefiningProblemsSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Weeks 3-4 – Defining the Problems</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            After gathering research, I organized findings into clear problem statements:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Mapped user pain points across the entire recruitment journey</li>
            <li>Identified critical workflow breakdowns where users were creating workarounds</li>
            <li>Prioritized issues based on frequency and impact on productivity</li>
            <li>Created a problem hierarchy to guide our design approach</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg" 
              alt="User journey map with pain points" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              User journey map with pain points highlighted
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-2">Key Problem Areas Identified:</h3>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Form complexity and redundant data entry</li>
                <li>Unreliable search functionality</li>
                <li>Lack of visibility into recruitment pipeline</li>
                <li>Inconsistent UI patterns across the platform</li>
                <li>Missing reporting capabilities for managers</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
