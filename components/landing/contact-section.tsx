"use client"

import { Mail, Linkedin, ArrowRight, MessageSquare, Phone, Copy, CheckCircle, Send, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Removed magic widget states and related code
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      color: 'purple',
      label: 'Email',
      value: 'yogesh.design@outlook.com',
      href: 'mailto:yogesh.design@outlook.com',
      copyValue: 'yogesh.design@outlook.com',
      id: 'email'
    },
    {
      icon: Phone,
      color: 'green',
      label: 'Mobile',
      value: '+91 96671 02848',
      href: 'tel:+919667102848',
      copyValue: '+919667102848',
      id: 'phone'
    },
    {
      icon: Linkedin,
      color: 'blue',
      label: 'LinkedIn',
      value: 'Yogesh Yadav',
      href: 'https://www.linkedin.com/in/yogesh-yadav-a67966201/',
      copyValue: 'https://www.linkedin.com/in/yogesh-yadav-a67966201/',
      id: 'linkedin'
    }
  ];

  const colorVariants = {
    purple: 'from-purple-500 to-indigo-600',
    blue: 'from-blue-500 to-cyan-600',
    green: 'from-green-500 to-emerald-600'
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 mb-6">
            <Send className="h-4 w-4 mr-2" />
            Let's Collaborate
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Build <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Something Amazing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 md:p-10">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Let's create something extraordinary together.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    const color = method.color as keyof typeof colorVariants;
                    const isCopied = copiedItem === method.id;
                    
                    return (
                      <motion.div 
                        key={method.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group relative overflow-hidden bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300`}
                      >
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${colorVariants[color]} text-white`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="ml-4 flex-grow">
                            <p className="text-sm font-medium text-gray-500">{method.label}</p>
                            <a 
                              href={method.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-base font-medium text-gray-900 hover:text-purple-600 transition-colors"
                            >
                              {method.value}
                            </a>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              copyToClipboard(method.copyValue, method.id);
                            }}
                            className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 transition-colors group-hover:opacity-100"
                            aria-label={`Copy ${method.label}`}
                          >
                            {isCopied ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <Copy className="h-5 w-5 group-hover:text-gray-600 transition-colors" />
                            )}
                          </button>
                        </div>
                        {isCopied && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-0 left-0 right-0 bg-green-50 text-green-600 text-sm text-center py-1"
                          >
                            Copied to clipboard!
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Animated CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        className="mt-20 text-center"
      >
        <p className="text-gray-500 mb-6">Prefer to send a direct message?</p>
        <Button 
          size="lg" 
          className="group relative overflow-hidden px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          asChild
        >
          <a href="https://wa.me/919667102848" target="_blank" rel="noopener noreferrer">
            <span className="relative z-10 flex items-center">
              Say Hello <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </Button>
      </motion.div>
      
      {/* Magic Widget - Removed */}

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
