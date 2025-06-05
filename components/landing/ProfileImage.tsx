'use client';

import { useState } from 'react';

export default function ProfileImage() {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative transition-transform duration-300 ease-in-out"
      style={{
        transform: isHovered ? 'perspective(1000px) rotateY(10deg) rotateX(-5deg) scale(1.05)' : 'perspective(1000px)',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden border-2 border-white shadow transition-all duration-300">
        <img 
          src={imgSrc}
          alt="Yogesh" 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)',
          }}
          onError={() => {
            setImgSrc('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiYjM0Q2QkQ4OyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMCAyMXYtMmE0IDQgMCAwIDAtNC00SDhhNCA0IDAgMDAtNCA0djIiPjwvcGF0aD48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiPjwvY2lyY2xlPjwvc3ZnPg==');
          }}
        />
      </div>
      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm transition-transform duration-300"
        style={{
          transform: isHovered ? 'translateZ(20px) scale(1.1)' : 'translateZ(0)',
        }}
      >
        <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="scale-75">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
