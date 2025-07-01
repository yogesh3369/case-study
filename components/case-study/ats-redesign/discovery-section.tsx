import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function DiscoverySection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Weeks 1-2 – Discovery & Research</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            During the initial discovery phase, I focused on understanding the current user experience and pain points:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Conducted in-depth interviews with 8 recruiters and 4 managers</li>
            <li>Shadowed users as they completed common tasks in the existing system</li>
            <li>Analyzed support tickets to identify recurring issues</li>
            <li>Reviewed competitor products to identify industry best practices</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg" 
              alt="Research notes and affinity mapping" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              Research notes and affinity mapping
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="italic text-muted-foreground">
                "The most valuable insight from our research was discovering that users were creating their own workarounds for almost every major feature in the system."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
