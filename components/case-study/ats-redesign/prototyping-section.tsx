import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PrototypingSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Weeks 8-12 – Prototyping & Testing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            I transformed wireframes into interactive prototypes and tested them with real users:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Built medium-fidelity interactive prototypes in Figma</li>
            <li>Conducted usability testing with 6 recruiters and 3 managers</li>
            <li>Measured task completion rates and time-on-task</li>
            <li>Gathered qualitative feedback on the new workflows</li>
            <li>Iterated on designs based on user feedback</li>
          </ul>
          <Card className="mt-4">
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground">
                "This feels so much less stressful."
                <span className="block mt-2 text-sm">— Recruiter during usability testing</span>
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg" 
              alt="Interactive prototype in Figma" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              Interactive prototype in Figma
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="Usability testing session" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg" 
                alt="User feedback notes" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
