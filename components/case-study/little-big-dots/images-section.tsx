"use client"

import { useState, useEffect, useRef } from "react"
import { X, ZoomIn, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

interface ImageItem {
  id: string
  src: string
  alt: string
  title: string
  description: string
  category: "automation" | "wireframes"
}

const images: ImageItem[] = [
  {
    id: "n8n-automation",
    src: "/little-big-dots/n8n-automation-screenshot-min.png",
    alt: "N8N Automation Workflow Screenshot",
    title: "N8N Automation Workflow",
    description: "Complete automation pipeline for member onboarding and content distribution",
    category: "automation"
  },
  {
    id: "final-wireframes",
    src: "/little-big-dots/final-wireframes-min.png",
    alt: "Final Wireframes Design",
    title: "Final Wireframe",
    description: "Polished wireframes showing the complete user journey and interface design",
    category: "wireframes"
  },
  {
    id: "wireframes-iteration-1",
    src: "/little-big-dots/wireframes-iteration-1-min.png",
    alt: "Wireframes First Iteration",
    title: "Wireframe - Iteration 1",
    description: "Initial wireframe concepts focusing on core functionality and user flow",
    category: "wireframes"
  },
  {
    id: "wireframes-iteration-2",
    src: "/little-big-dots/wireframes-iteration-2-min.png",
    alt: "Wireframes Second Iteration",
    title: "Wireframe - Iteration 2",
    description: "Refined wireframes with improved navigation and enhanced user experience",
    category: "wireframes"
  }
]

export default function ImagesSection() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set())
  const [isPreloading, setIsPreloading] = useState(true)
  const modalScrollRef = useRef<HTMLDivElement>(null)

  const openModal = (image: ImageItem) => {
    setSelectedImage(image)
    setCurrentIndex(images.findIndex(img => img.id === image.id))
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  // Preload images on component mount for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image()
          img.onload = () => {
            setImagesLoaded(prev => new Set(prev).add(image.id))
            resolve()
          }
          img.onerror = () => resolve() // Continue even if image fails to load
          img.src = image.src
        })
      })
      
      // Load images in batches to avoid overwhelming the browser
      const batchSize = 2
      for (let i = 0; i < imagePromises.length; i += batchSize) {
        const batch = imagePromises.slice(i, i + batchSize)
        await Promise.all(batch)
        // Small delay between batches to prevent blocking
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      
      setIsPreloading(false)
    }

    preloadImages()
  }, [])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + images.length) % images.length
      : (currentIndex + 1) % images.length
    
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
    
    // Scroll to top when changing images
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev')
    } else if (e.key === 'ArrowRight') {
      navigateImage('next')
    }
  }

  const automationImages = images.filter(img => img.category === "automation")
  const wireframeImages = images.filter(img => img.category === "wireframes")

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white via-white to-emerald-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Design Artifacts
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From automation workflows to wireframe iterations — see how the platform came to life
            </p>
          </div>

          {/* N8N Automation Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Automation Workflow
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The N8N automation that powers member onboarding, content distribution, and community management
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {automationImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                  onClick={() => openModal(image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-200 overflow-hidden">
                    {/* Loading indicator */}
                    {!imagesLoaded.has(image.id) && (
                      <div className="absolute inset-0 bg-slate-100 flex items-center justify-center z-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                      </div>
                    )}
                    <div className="relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-t-2xl"
                        priority={true}
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="h-6 w-6 text-slate-700" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{image.title}</h4>
                      <p className="text-slate-600">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wireframes Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Design Evolution
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From initial concepts to final designs — the iterative process that shaped the user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wireframeImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                  onClick={() => openModal(image)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-200 overflow-hidden">
                    {/* Loading indicator */}
                    {!imagesLoaded.has(image.id) && (
                      <div className="absolute inset-0 bg-slate-100 flex items-center justify-center z-10">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-600"></div>
                      </div>
                    )}
                    <div className="relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-48 md:h-56 object-cover rounded-t-2xl"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="h-6 w-6 text-slate-700" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">{image.title}</h4>
                      <p className="text-slate-600 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full p-2"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full p-3"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full p-3"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>

            {/* Scrollable Image Container */}
            <div
              ref={modalScrollRef}
              className="relative w-full h-full max-w-6xl overflow-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="min-h-full flex items-start justify-center p-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                  loading="eager"
                  style={{ maxWidth: 'none' }}
                  unoptimized={false}
                />
              </div>
              
              {/* Image Info - Fixed at bottom */}
              <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 pointer-events-none">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                  <div className="mt-2 text-white/60 text-sm">
                    {currentIndex + 1} of {images.length} • Scroll to view full image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
