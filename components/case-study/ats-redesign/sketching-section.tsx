import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function SketchingSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Weeks 5-7 – Sketching & Ideation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            With clear problems defined, I began exploring solutions through sketches and low-fidelity wireframes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Created multiple layout options for key screens</li>
            <li>Explored form simplification through progressive disclosure</li>
            <li>Designed a unified dashboard concept</li>
            <li>Developed the "OneView" candidate comparison tool concept</li>
            <li>Sketched improved filtering and search mechanisms</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg" 
              alt="Sketches and wireframes" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              Early sketches and wireframes
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground">
                "The OneView comparison tool emerged from watching recruiters constantly switch between tabs to compare candidates. This simple solution became one of the most praised features."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
