"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Alex's design thinking transformed our product. The user research insights and iterative approach led to a 140% increase in conversions. Highly recommend for any UX challenges.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Working with Alex was a game-changer. The design system and user flows they created became the foundation for our Series A funding. Exceptional attention to detail.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "E-commerce Co",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The checkout flow redesign Alex delivered reduced our cart abandonment by 45%. The data-driven approach and clear communication made the entire process smooth.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "FinTech Solutions",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Alex bridges design and development beautifully. The prototypes were pixel-perfect and the handoff process was seamless. Our development time decreased by 30%.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Feedback from clients and collaborators I've had the pleasure to work with
          </p>
        </div>

        <div className="relative">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full w-10 h-10 p-0">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full w-10 h-10 p-0">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
