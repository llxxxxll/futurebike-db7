
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface BikeAnimationProps {
  imagePath: string;
  className?: string;
}

const BikeAnimation = ({ imagePath, className }: BikeAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [prevX, setPrevX] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let rotationInterval: number | null = null;

    if (isRotating && !isDragging) {
      rotationInterval = window.setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 50);
    }

    return () => {
      if (rotationInterval) window.clearInterval(rotationInterval);
    };
  }, [isRotating, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsRotating(false);
    setPrevX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const delta = e.clientX - prevX;
      setRotation((prev) => (prev + delta * 0.5) % 360);
      setPrevX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Auto-rotate when mouse leaves
    setIsRotating(true);
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative w-full h-full flex items-center justify-center perspective',
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          'relative preserve-3d transition-all duration-700 ease-spring',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        )}
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <img 
          src={imagePath} 
          alt="Futuristic Electric Bike" 
          className={cn(
            'max-w-full max-h-full object-contain animate-bike-entrance',
            isVisible && !isRotating && !isDragging && 'animate-float'
          )}
          onMouseEnter={() => setIsRotating(false)}
          draggable="false"
        />

        {isVisible && (
          <>
            {/* Reflection effect */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neon-blue/10 to-transparent blur-sm"></div>
            {/* Glowing effect */}
            <div className="absolute inset-0 -z-10 bg-neon-blue/5 blur-3xl rounded-full"></div>
          </>
        )}
      </div>

      {/* Interactive prompt */}
      <div className={cn(
        'absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-futuristic-silver bg-futuristic-darkgray/80 backdrop-blur-sm px-3 py-1.5 rounded-full transition-opacity duration-500',
        isVisible ? 'opacity-60' : 'opacity-0'
      )}>
        Drag to rotate • Click to interact
      </div>
    </div>
  );
};

export default BikeAnimation;
