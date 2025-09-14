import React, { useRef, useEffect, useState, createContext, useContext } from 'react';

interface ScrollContextValue {
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextValue>({ scrollProgress: 0 });

interface ContainerScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerScroll({ children, className = "" }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -elementHeight;
      const progress = Math.max(0, Math.min(1, (start - elementTop) / (start - end)));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollProgress }}>
      <div
        ref={containerRef}
        className={`relative min-h-screen ${className}`}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'threeCells' | 'fourCells';
}

export function BentoGrid({ children, className = "", variant = 'default' }: BentoGridProps) {
  const getGridLayout = () => {
    switch (variant) {
      case 'threeCells':
        return 'grid-cols-2 grid-rows-2 gap-4';
      case 'fourCells':
        return 'grid-cols-2 grid-rows-2 gap-4';
      default:
        return 'grid-cols-3 grid-rows-2 gap-4';
    }
  };

  return (
    <div className={`grid ${getGridLayout()} ${className}`}>
      {children}
    </div>
  );
}

interface BentoCellProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function BentoCell({ children, className = "", index = 0 }: BentoCellProps) {
  const { scrollProgress } = useContext(ScrollContext);

  const getTransformStyle = () => {
    if (scrollProgress < 0.3) return {};

    const mergeProgress = Math.min(1, (scrollProgress - 0.3) / 0.4);

    const transforms = [
      { x: 0, y: 0 },
      { x: -100, y: 100 },
      { x: 100, y: 100 },
      { x: -50, y: -100 },
      { x: 50, y: -100 },
    ];

    const transform = transforms[index] || { x: 0, y: 0 };
    const currentX = transform.x * (1 - mergeProgress);
    const currentY = transform.y * (1 - mergeProgress);
    const scale = 0.8 + (0.2 * (1 - mergeProgress));

    return {
      transform: `translate(${currentX}px, ${currentY}px) scale(${scale})`,
      transition: 'transform 0.1s ease-out',
    };
  };

  return (
    <div
      className={`relative ${className}`}
      style={getTransformStyle()}
    >
      {children}
    </div>
  );
}

interface ContainerScaleProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerScale({ children, className = "" }: ContainerScaleProps) {
  const { scrollProgress } = useContext(ScrollContext);

  const scale = 1 - (scrollProgress * 0.3);
  const opacity = Math.max(0.1, 1 - (scrollProgress * 0.8));

  return (
    <div
      className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${className}`}
      style={{
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity: opacity,
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
}