'use client';

import { ReactNode, useState, useEffect } from 'react';
import { X, Menu, ArrowUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

interface Section {
  id: string;
  title: string;
}

interface CaseStudyLayoutProps {
  children: ReactNode;
  sections: Section[];
}

export default function CaseStudyLayout({ children, sections }: CaseStudyLayoutProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsDrawerOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-slate-200 bg-white fixed h-full overflow-y-auto">
        <div className="p-6 sticky top-0 bg-white z-10 border-b border-slate-100">
          <h2 className="font-bold text-lg text-slate-800">Case Study</h2>
          <p className="text-sm text-slate-500">Coworking Mobile Redesign</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    'w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    activeSection === section.id
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  )}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="pt-8 pb-4">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center text-slate-600 hover:text-emerald-600 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Back</span>
              </button>
            </div>
            
            <div className="pt-2">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Drawer Toggle */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center z-40"
        aria-label="Open navigation"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Scroll to top button - visible on desktop and tablet */}
      <ScrollToTopButton className="lg:block hidden" />
      
      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsDrawerOpen(false)}
      >
        <div 
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 transform',
            isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <h2 className="font-bold text-lg text-slate-800">Table of Contents</h2>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="text-slate-500 hover:text-slate-700"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 overflow-y-auto max-h-[70vh]">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center',
                      activeSection === section.id
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    )}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Scroll to top button */}
          <div className="p-4 border-t border-slate-200">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full flex items-center justify-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium py-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
