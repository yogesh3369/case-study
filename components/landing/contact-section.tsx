"use client"

import { Mail, Linkedin, ArrowRight, MessageSquare, Phone, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  
  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 bg-purple-100 rounded-full mb-3">
              <MessageSquare className="h-3.5 w-3.5 mr-1.5 text-purple-600" />
              <span className="text-xs font-medium text-gray-800">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Let's Work <span className="text-purple-600">Together</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to create exceptional user experiences? Let's discuss your next project
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Get In Touch</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  I'm always interested in discussing new opportunities, whether it's a full-time role, freelance
                  project, or just a chat about UX design. Feel free to reach out!
                </p>
              </div>

              <div className="grid grid-cols-1 gap-y-4 mb-8 max-w-md mx-auto">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mr-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-grow text-left text-slate-700 text-sm md:text-base">
                    yogesh.design@outlook.com
                  </div>
                  <button 
                    onClick={() => copyToClipboard('yogesh.design@outlook.com', 'email')} 
                    className="ml-2 flex-shrink-0 text-slate-400 hover:text-blue-600 transition-colors"
                    aria-label="Copy email"
                  >
                    {copiedItem === 'email' ? (
                      <span className="text-xs text-green-600">Copied!</span>
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mr-2">
                    <Linkedin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-grow text-left text-slate-700 text-sm md:text-base">
                    LinkedIn
                  </div>
                  <button 
                    onClick={() => copyToClipboard('https://www.linkedin.com/in/yogesh-yadav-a67966201/', 'linkedin')} 
                    className="ml-2 flex-shrink-0 text-slate-400 hover:text-purple-600 transition-colors"
                    aria-label="Copy LinkedIn URL"
                  >
                    {copiedItem === 'linkedin' ? (
                      <span className="text-xs text-green-600">Copied!</span>
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mr-2">
                    <Phone className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex-grow text-left text-slate-700 text-sm md:text-base">
                    +91 9667102848
                  </div>
                  <button 
                    onClick={() => copyToClipboard('+919667102848', 'phone')} 
                    className="ml-2 flex-shrink-0 text-slate-400 hover:text-indigo-600 transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copiedItem === 'phone' ? (
                      <span className="text-xs text-green-600">Copied!</span>
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="mailto:yogesh.design@outlook.com" className="flex items-center gap-2">
                    Start a Conversation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
