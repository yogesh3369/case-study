"use client"

import { Mail, Linkedin, ArrowRight, MessageSquare, Phone, Copy, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  
  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4 shadow-sm">
              <Send className="h-4 w-4 mr-2 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Together</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your ideas into exceptional user experiences? I'm here to help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            {/* Left column with illustration */}
            <div className="md:col-span-2 hidden md:flex items-center justify-center">
              <div className="relative w-full h-full max-h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl opacity-70"></div>
                <div className="relative z-10 p-6">
                  <Image 
                    src="/collaboration.svg" 
                    alt="Collaboration illustration" 
                    width={300} 
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Right column with contact info */}
            <div className="md:col-span-3">
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
                    <p className="text-gray-600 leading-relaxed">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 mb-8">
                    <div className="group flex items-center p-4 rounded-xl transition-all duration-300 hover:bg-purple-50">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center mr-4 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-purple-600 font-medium mb-1">Email</p>
                        <p className="text-gray-800 font-medium">yogesh.design@outlook.com</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard('yogesh.design@outlook.com', 'email')} 
                        className="ml-2 flex-shrink-0 p-2 text-gray-400 hover:text-purple-600 transition-colors rounded-full hover:bg-purple-100"
                        aria-label="Copy email"
                      >
                        {copiedItem === 'email' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    <div className="group flex items-center p-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center mr-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-blue-600 font-medium mb-1">LinkedIn</p>
                        <p className="text-gray-800 font-medium">Yogesh Yadav</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard('https://www.linkedin.com/in/yogesh-yadav-a67966201/', 'linkedin')} 
                        className="ml-2 flex-shrink-0 p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-100"
                        aria-label="Copy LinkedIn URL"
                      >
                        {copiedItem === 'linkedin' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    <div className="group flex items-center p-4 rounded-xl transition-all duration-300 hover:bg-indigo-50">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center mr-4 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
                        <Phone className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-indigo-600 font-medium mb-1">Phone</p>
                        <p className="text-gray-800 font-medium">+91 9667102848</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard('+919667102848', 'phone')} 
                        className="ml-2 flex-shrink-0 p-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-100"
                        aria-label="Copy phone number"
                      >
                        {copiedItem === 'phone' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
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
        </div>
      </div>
    </section>
  )
}
