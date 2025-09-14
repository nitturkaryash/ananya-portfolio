import React, { useRef, useEffect, useState } from 'react';

interface ContainerScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerScroll({ children, className = "" }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const timeout = setTimeout(() => setIsScrolling(false), 150);
      return () => clearTimeout(timeout);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      {children}
    </div>
  );
}

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
}

interface BentoCellProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoCell({ children, className = "" }: BentoCellProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

interface ContainerScaleProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerScale({ children, className = "" }: ContainerScaleProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      setScale(1 + parallax * 0.001);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`transform transition-transform duration-300 ${className}`}
      style={{ transform: `scale(${scale})` }}
    >
      {children}
    </div>
  );
}