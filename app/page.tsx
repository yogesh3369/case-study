"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/landing/navigation"
import HeroSection from "@/components/landing/hero-section"
import CaseStudiesSection from "@/components/landing/case-studies-section"
import AIAutomationsSection from "@/components/landing/ai-automations-bento"
import ContactSection from "@/components/landing/contact-section"
import Footer from "@/components/landing/footer"
import { motion } from "framer-motion"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay for the entrance animation
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Parallax effect on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Parallax background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        <div 
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-100/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.header variants={itemVariants}>
          <Navigation />
        </motion.header>
        
        <main>
          <motion.div variants={itemVariants}>
            <HeroSection />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CaseStudiesSection />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AIAutomationsSection />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ContactSection />
          </motion.div>
        </main>
        
        <motion.footer variants={itemVariants}>
          <Footer />
        </motion.footer>
      </motion.div>
    </div>
  )
}
