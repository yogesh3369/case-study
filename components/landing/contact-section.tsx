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
  
  // Magic widget states
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [companyLink, setCompanyLink] = useState("");
  const [email, setEmail] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMagicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  // Auto close widget after showing success message
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setWidgetOpen(false);
        setSubmitted(false);
        setCompanyLink("");
        setEmail("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);
  
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
      
      {/* Magic Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        {!widgetOpen ? (
          <motion.button
            onClick={() => setWidgetOpen(true)}
            className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 group"
            style={{
              backgroundSize: '200% 200%',
            }}
            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 10, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              transition: { duration: 3, repeat: Infinity, ease: 'linear' },
            }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            aria-label="Open magic widget"
          >
            <motion.span 
              className="text-2xl"
              animate={{
                scale: isHovering ? [1, 1.2, 1] : 1,
                transition: { duration: 0.5 },
              }}
            >
              ✨
            </motion.span>
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-70 blur transition duration-1000 group-hover:duration-200"
              animate={{
                opacity: isHovering ? 0.7 : 0,
                scale: isHovering ? 1.2 : 1,
              }}
            />
          </motion.button>
        ) : (
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-5 w-80 relative overflow-hidden border border-white/20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient" />
              
              {!submitted ? (
                <>
                  <div className="text-center mb-4">
                    <motion.div 
                      className="inline-block mb-2"
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <span className="text-3xl">🎩</span>
                    </motion.div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Let me show you something magical! ✨
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Just two quick details...</p>
                  </div>
                  
                  <form onSubmit={handleMagicSubmit} className="space-y-4">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Input
                        placeholder="🔗 Company LinkedIn URL"
                        value={companyLink}
                        onChange={(e) => setCompanyLink(e.target.value)}
                        className="text-sm border-gray-200 hover:border-purple-300 focus:border-purple-500 transition-colors"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Input
                        type="email"
                        placeholder="📧 Your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-sm border-gray-200 hover:border-blue-300 focus:border-blue-500 transition-colors"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Working my magic...
                          </>
                        ) : (
                          <>
                            <span className="mr-1">✨</span> Show Me the Magic!
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </>
              ) : (
                <motion.div 
                  className="text-center py-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <motion.div 
                    className="text-5xl mb-3 inline-block"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                  >
                    🎉
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Magic in Progress!</h3>
                  <p className="text-sm text-gray-600">
                    Good things take time...<br />
                    Check your email - I'm already there! ✨
                  </p>
                  <motion.div 
                    className="mt-4 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"
                    initial={{ scaleX: 1 }}
                    animate={{ 
                      scaleX: [1, 0, 1],
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{ 
                      duration: 5,
                      ease: 'linear',
                      repeat: Infinity
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
            
            <motion.button
              onClick={() => { setWidgetOpen(false); setSubmitted(false); }}
              className="absolute -top-2 -right-2 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs shadow-md hover:scale-110 transition-transform"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close magic widget"
            >
              ×
            </motion.button>
            
            {/* Floating particles */}
            {!submitted && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-purple-400/30"
                    style={{
                      width: Math.random() * 10 + 5 + 'px',
                      height: Math.random() * 10 + 5 + 'px',
                      top: Math.random() * 100 + '%',
                      left: Math.random() * 100 + '%',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 5,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        )}
      </div>

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
