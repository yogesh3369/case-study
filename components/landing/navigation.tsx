"use client"

import React from "react"
import Link from "next/link"
import ProfileImage from "./ProfileImage"

export default function LandingNavigation() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 mt-4">
      <nav className="mx-auto max-w-5xl rounded-2xl bg-white/90 backdrop-blur-lg shadow-lg border border-slate-200/50 px-5 py-3 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Left side with profile image and info */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>
            <div className="flex flex-col">
              <Link 
                href="/" 
                className="font-semibold text-base text-slate-800 hover:text-blue-600 transition-colors"
              >
                Yogesh Yadav
              </Link>
              <span className="text-xs text-slate-500 font-medium">5 Years of Experience</span>
            </div>
          </div>
          
          {/* Right side with navigation and CV download button */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              {navItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  {index > 0 && (
                    <span className="mx-2 text-slate-300 text-sm">|</span>
                  )}
                  <Link 
                    href={item.href}
                    className="relative px-2 py-1 text-sm text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </React.Fragment>
              ))}
            </div>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm hover:shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
