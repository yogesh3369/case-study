"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProfileImage from "./ProfileImage"
import { GradientButton } from "@/components/ui/gradient-button"
import { useEffect } from "react"

export default function LandingHeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      <style jsx global>{`
        @keyframes gentle-sway {
          0% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
          100% { transform: rotate(-1deg); }
        }
        .animate-gentle-sway {
          animation: gentle-sway 5s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative py-16">
        {/* Annotation positioned close to video */}
        <div className="absolute right-[-10px] top-[460px] z-20">
          <div className="flex flex-col items-center">
            <div className="relative w-[107px] h-[84px] -mb4 -ml-4">
              <svg width="107" height="84" viewBox="0 0 107 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-10deg] mr-auto">
                <path d="M85.589 80.643C83.9341 68.0864 79.0962 54.2211 67.9383 47.0097C60.8077 42.4011 50.1617 42.6569 43.5567 48.032C37.3188 53.1083 33.1389 60.8698 36.455 68.7256C38.1835 72.8203 41.49 75.6352 46.14 74.6723C53.2442 73.2012 57.5125 63.8539 58.3269 57.4384C60.8685 37.417 51.1887 14.3248 34.5285 2.7709" stroke="black" strokeWidth="3" strokeLinecap="round" className="animate-draw-arrow"/>
                <path d="M49.5391 4.84717C46.1025 3.98507 38.198 2.26005 34.0733 2.25673" stroke="black" strokeWidth="3" strokeLinecap="round" className="animate-draw-arrow"/>
                <path d="M34.0703 2.25049C34.9269 5.68848 36.6391 13.5957 36.6358 17.7204" stroke="black" strokeWidth="3" strokeLinecap="round" className="animate-draw-arrow"/>
              </svg>
            </div>
            <p className="font-handwriting text-xl text-black animate-float drop-shadow-md">Here is my intro</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-800">Looking for opportunities</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-snug">
              <span className="text-slate-900">Hey, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Yogesh!
              </span>
            </h1>
            <p className="text-base text-slate-500 mb-6 leading-normal max-w-lg">
              I'm a designer with over 5 years of experience in Gurgaon, Haryana, India. Currently working on Mobile app & B2B SAAS UX Design at Stylework.city.
            </p>

            {/* Companies I've worked with */}
            <div className="mb-8">
              <p className="text-sm font-medium text-slate-500 mb-4">Companies I've worked with</p>
              <div className="flex flex-wrap gap-6 items-center">
                <img 
                  src="/stylework-black-logo.svg" 
                  alt="Stylework" 
                  className="h-6"
                />
                <img 
                  src="/RARR.svg" 
                  alt="RARR" 
                  className="h-6"
                />
                <img 
                  src="/logoIdesign.png" 
                  alt="Idesign" 
                  className="h-6"
                />
                <img 
                  src="/P2b.webp" 
                  alt="P2b" 
                  className="h-6"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="relative">
                <ProfileImage />
              </div>
              
              <span className="text-xl font-bold text-slate-400">+</span>
              
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border border-white shadow">
                <span className="text-slate-400 font-medium text-sm">YOU?</span>
              </div>
              
              <span className="text-2xl font-bold text-slate-400">=</span>
              
              <GradientButton
                href="#contact"
                icon={
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                }
              >
                Let's Talk
              </GradientButton>
            </div>
          </div>
          
          {/* Profile Image with ID card-like hanging effect */}
          <div className="relative flex justify-center pt-10">
            {/* ID Card Hanging String */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-slate-300 to-slate-400"></div>
            
            {/* ID Card Clip */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-slate-400 to-slate-500 rounded-t-lg z-10"></div>
            
            {/* Profile Image Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative animate-gentle-sway w-1/2 mx-auto">
              {/* ID Card Header */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-3 z-10">
                <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-white opacity-70 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                <span className="text-[10px] text-white/80 ml-auto font-medium">PROFILE</span>
              </div>
              
              <div className="aspect-[9/14] bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden pt-6">
                {/* Replace the image source with your actual image path */}
                <img 
                  src="/yofesh card.JPG" 
                  alt="Yogesh Yadav"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    imageRendering: 'crisp-edges',
                    WebkitFontSmoothing: 'subpixel-antialiased',
                  }}
                />
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <div className="text-white">
                    <p className="font-semibold text-base">Yogesh Yadav</p>
                    <p className="text-sm opacity-90">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
