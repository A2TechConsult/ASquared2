import { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ 
  imageUrl, 
  children, 
  speed = 0.5,
  className = ''
}: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop + windowHeight) * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${-offset}px)`,
          willChange: 'transform',
        }}
      >
        <div
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: 'grayscale(100%) contrast(1.1) brightness(0.4)',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
