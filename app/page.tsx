"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/landing/navigation"
import HeroSection from "@/components/landing/hero-section"
import CaseStudiesSection from "@/components/landing/case-studies-section"
import AIAutomationsSection from "@/components/landing/ai-automations-bento"
import ContactSection from "@/components/landing/contact-section"
import Footer from "@/components/landing/footer"
import Pendulum from "@/components/ui/pendulum-component"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Pendulum />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <CaseStudiesSection />
        <AIAutomationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
