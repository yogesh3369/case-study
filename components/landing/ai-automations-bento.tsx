import React from 'react';
import { Bot, Cpu, BarChart3, Globe, Sparkles } from 'lucide-react';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const aiFeatures = [
  {
    Icon: Bot,
    name: "AI-Powered Outreach Generator",
    description: "Transform cold outreach into warm conversations. This tool analyzes prospect data from LinkedIn profiles and company websites to automatically generate personalized, compelling sales emails that resonate with your target audience.",
    href: "/ai-automations/outreach-generator",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-100/10 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BarChart3,
    name: "AI-Powered Candidate Evaluation",
    description: "Streamline your hiring process with intelligent resume screening. Analyze company culture, extract job requirements, and automatically evaluate candidate resumes against role-specific criteria.",
    href: "/ai-automations/candidate-evaluation",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-100/10 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Cpu,
    name: "RAG-Powered HR Policy Chatbot",
    description: "Advanced Retrieval-Augmented Generation chatbot that instantly retrieves and responds to employee policy questions with source-backed answers about leaves, benefits, and workplace policies.",
    href: "/ai-automations/hr-chatbot",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-100/10 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Globe,
    name: "Skills Path Generator",
    description: "Transform your career goals into actionable learning plans. This intelligent AI agent analyzes your background, skills, and aspirations to create custom-tailored learning roadmaps.",
    href: "/ai-automations/skills-path",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-100/10 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Sparkles,
    name: "AI Social Media Scheduler",
    description: "Automate your social media presence with AI-powered content creation and scheduling. This system scrapes relevant articles, generates engaging posts, and publishes them across Twitter and LinkedIn at optimal times.",
    href: "/ai-automations/social-media",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-100/10 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
];

export default function AIAutomationsSection() {
  return (
    <section id="ai-automations" className="pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-3 py-1.5 bg-slate-100 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 text-emerald-600" />
            <span className="text-xs font-medium text-gray-800">Powered by AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            AI Automations <span className="text-emerald-600">for Everyone</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Leverage cutting-edge artificial intelligence to automate and enhance your business processes without writing a single line of code.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {aiFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
