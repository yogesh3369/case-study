"use client"

import type React from "react"

import { useState } from "react"
import { Send, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ChatSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ email, message })
    setMessage("")
    setEmail("")
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full w-14 h-14 p-0 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        ) : (
          <Card className="w-80 shadow-xl border-0">
            <CardHeader className="bg-gray-900 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Let's chat!</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-gray-800 p-1 h-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    Hi! I'm Alex. What project are you working on? I'd love to help!
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  required
                />
                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to work together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and help bring your ideas to life. Let's discuss your project!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Start a conversation
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8"
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
