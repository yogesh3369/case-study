'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollToTopButtonProps {
  className?: string;
}

export default function ScrollToTopButton({ className }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg flex items-center justify-center z-50 transition-all duration-500 overflow-hidden',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none',
        className
      )}
      aria-label="Scroll to top"
    >
      {/* Pulsing background effect */}
      <div className={cn(
        'absolute inset-0 bg-emerald-400 rounded-full transition-transform duration-1000 ease-in-out',
        isHovered ? 'scale-[1.8] opacity-0' : 'scale-100 opacity-0'
      )} />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <span className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-all duration-700',
          isHovered ? 'scale-[15] opacity-10' : 'scale-0 opacity-0'
        )} />
      </div>
      
      {/* Arrow container with animation - perfectly centered */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className={cn(
          'flex flex-col items-center justify-center transition-transform duration-500 absolute top-1/2 left-1/2 -translate-x-1/2',
          isHovered ? '-translate-y-[calc(50%+4px)]' : '-translate-y-1/2'
        )}>
          <ArrowUp className={cn(
            'w-6 h-6 transition-all duration-500',
            isHovered ? 'stroke-[2.5px]' : 'stroke-[2px]'
          )} />
          
          {/* Animated dots */}
          <div className="flex flex-col items-center mt-0.5 space-y-0.5">
            <div className={cn(
              'w-1 h-1 rounded-full bg-white transition-all duration-300',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            )} />
            <div className={cn(
              'w-1 h-1 rounded-full bg-white transition-all duration-300 delay-100',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            )} />
            <div className={cn(
              'w-1 h-1 rounded-full bg-white transition-all duration-300 delay-200',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            )} />
          </div>
        </div>
      </div>
    </button>
  );
}
