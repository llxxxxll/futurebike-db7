
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import BikeAnimation from './BikeAnimation';
import { ArrowDown, Battery, Zap } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>
        <div className="bg-grid-pattern opacity-10 absolute inset-0"></div>
      </div>

      <div className="container px-6 md:px-10 pt-10 md:pt-20 pb-20 relative z-10 grid md:grid-cols-2 gap-10 md:gap-6 items-center">
        {/* Left column - Text */}
        <div className="flex flex-col space-y-6 order-2 md:order-1">
          <div className={cn(
            "transition-all duration-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="inline-block bg-futuristic-darkgray/80 backdrop-blur-sm text-neon-blue rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Future of Transportation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight-plus mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-futuristic-silver">DST Electric</span>
              <span className="text-neon-blue">Performance Bike</span>
            </h1>
            <p className="text-futuristic-silver max-w-md text-balance leading-relaxed md:text-lg mb-8">
              Experience the next generation of electric transportation with unparalleled performance, design, and sustainable technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-neon-blue hover:bg-neon-blue/90 text-white py-3 px-8 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                Pre-order Now
              </button>
              <button className="border border-futuristic-silver/30 hover:border-white text-white py-3 px-8 rounded-md font-medium transition-all duration-300 hover:bg-white/5">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={cn(
            "grid grid-cols-3 gap-4 transition-all duration-700 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="glass p-4 rounded-lg">
              <Zap className="text-neon-blue mb-1 h-5 w-5" />
              <p className="text-xl font-display font-bold">160 km/h</p>
              <p className="text-xs text-futuristic-silver">Top Speed</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <Battery className="text-neon-blue mb-1 h-5 w-5" />
              <p className="text-xl font-display font-bold">300 km</p>
              <p className="text-xs text-futuristic-silver">Range</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <Zap className="text-neon-blue mb-1 h-5 w-5" />
              <p className="text-xl font-display font-bold">3.0 s</p>
              <p className="text-xs text-futuristic-silver">0-100 km/h</p>
            </div>
          </div>
        </div>

        {/* Right column - Bike Image */}
        <div className={cn(
          "h-[350px] md:h-[450px] lg:h-[500px] order-1 md:order-2 relative",
          isLoaded ? "opacity-100" : "opacity-0",
          "transition-opacity duration-1000"
        )}>
          <BikeAnimation imagePath="/lovable-uploads/7bfefd02-e626-4255-b936-d07a597cd5d3.png" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className={cn(
          "flex flex-col items-center transition-opacity duration-700 delay-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-xs text-futuristic-silver mb-2">Scroll to explore</p>
          <ArrowDown className="h-4 w-4 text-neon-blue animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
