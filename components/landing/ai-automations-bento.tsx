import React from 'react';
import { Bot, Cpu, BarChart3, Globe, Sparkles } from 'lucide-react';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const aiFeatures = [
  {
    Icon: Bot,
    name: "AI Chatbots",
    description: "Custom conversational agents that engage with your customers 24/7, providing instant support and information.",
    href: "/ai-automations/chatbots",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-100/10 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BarChart3,
    name: "Data Analysis",
    description: "Intelligent systems that process and analyze large datasets to extract valuable insights for your business.",
    href: "/ai-automations/data-analysis",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-100/10 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Cpu,
    name: "Workflow Automation",
    description: "Streamline repetitive tasks and processes with smart automation tools powered by artificial intelligence.",
    href: "/ai-automations/workflow",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-100/10 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Globe,
    name: "Content Generation",
    description: "AI-powered content creation for blogs, social media, and marketing materials tailored to your brand voice.",
    href: "/ai-automations/content",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-100/10 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Sparkles,
    name: "AI-Powered Insights",
    description: "Transform raw data into actionable business intelligence with our advanced machine learning algorithms.",
    href: "/ai-automations/insights",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-100/10 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
];

export default function AIAutomationsSection() {
  return (
    <section id="ai-automations" className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-4">
            <Sparkles className="h-4 w-4 mr-2 text-emerald-600" />
            <span className="text-sm font-medium text-gray-800">Powered by AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            AI Automations <span className="text-emerald-600">for Everyone</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Leverage cutting-edge artificial intelligence to automate and enhance your business processes without writing a single line of code.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3 mb-12">
          {aiFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
        
        <div className="mt-12 text-center">
          <a 
            href="/ai-automations"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
          >
            Explore All Automations
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
