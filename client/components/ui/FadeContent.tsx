import React, { useEffect, useState } from 'react';

interface FadeContentProps {
  children: React.ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  initialOpacity?: number;
  className?: string;
}

export default function FadeContent({ 
  children, 
  blur = false, 
  duration = 1000, 
  easing = "ease-out", 
  initialOpacity = 0,
  className = ""
}: FadeContentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : initialOpacity,
        filter: blur && !isVisible ? 'blur(10px)' : 'blur(0px)',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
      }}
    >
      {children}
    </div>
  );
}
