import { ArrowRight } from "lucide-react"
import Image from "next/image"

type ArtifactItem = {
  title: string
  beforeImage: string
  afterImage: string
  description?: string
}

type ArtifactsSectionProps = {
  artifacts: {
    screens: ArtifactItem
    wireframes: ArtifactItem
    mobileScreens: ArtifactItem
    aiAutomation: ArtifactItem
  }
}

export default function ArtifactsSection({ artifacts }: ArtifactsSectionProps) {
  const ArtifactComparison = ({ title, beforeImage, afterImage, description }: ArtifactItem) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      {description && <p className="text-slate-600 mb-6">{description}</p>}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-2">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={beforeImage}
                alt={`${title} - Before`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-center text-sm text-slate-500">Before</p>
        </div>
        <div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-2">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={afterImage}
                alt={`${title} - After`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-center text-sm text-slate-500">After</p>
        </div>
      </div>
    </div>
  )

  return (
    <section id="artifacts" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Design Artifacts
        </h2>
        
        <div className="space-y-20">
          <ArtifactComparison {...artifacts.screens} />
          <ArtifactComparison {...artifacts.wireframes} />
          <ArtifactComparison {...artifacts.mobileScreens} />
          <ArtifactComparison {...artifacts.aiAutomation} />
        </div>
      </div>
    </section>
  )
}
