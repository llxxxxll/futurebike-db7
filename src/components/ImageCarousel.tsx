
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const bikeImages = [
  "/lovable-uploads/daa3bd28-1d42-4de8-9d04-308adf14de6d.png", 
  "/lovable-uploads/3de39d08-0e7f-4a01-8852-cd0ffd71a503.png", 
  "/lovable-uploads/ae2a21a8-af34-4928-98ac-2c2921d68ca2.png"
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<number | null>(null);

  // Setup automatic slideshow
  useEffect(() => {
    // Initial animation
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);

    // Start the slideshow timer
    startSlideTimer();

    return () => {
      clearTimeout(timer);
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, []);

  const startSlideTimer = () => {
    if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    slideTimerRef.current = window.setInterval(() => {
      if (!isPaused) {
        setIsAnimating(true);
        setCurrentImageIndex(prev => (prev + 1) % bikeImages.length);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 5000);
  };

  const nextImage = () => {
    setIsPaused(true); // Pause automatic slideshow when manually changing
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds

    setIsAnimating(true);
    setCurrentImageIndex(prev => (prev + 1) % bikeImages.length);
    setTimeout(() => setIsAnimating(false), 500);

    // Reset the timer
    startSlideTimer();
  };

  const prevImage = () => {
    setIsPaused(true); // Pause automatic slideshow when manually changing
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds

    setIsAnimating(true);
    setCurrentImageIndex(prev => (prev - 1 + bikeImages.length) % bikeImages.length);
    setTimeout(() => setIsAnimating(false), 500);

    // Reset the timer
    startSlideTimer();
  };

  const setImage = (index: number) => {
    if (index !== currentImageIndex) {
      setIsPaused(true); // Pause automatic slideshow when manually changing
      setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds

      setIsAnimating(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsAnimating(false), 500);

      // Reset the timer
      startSlideTimer();
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Main product image */}
      <div className="relative flex items-center justify-center h-[60vh] bg-[#f8f9fa] rounded-xl">
        <div className="">
          <img src={bikeImages[currentImageIndex]} alt="DB7 Electric Motorcycle" className="max-h-full max-w-full object-contain" />
        </div>
        
        <button onClick={prevImage} className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/80 text-[#333] shadow-lg hover:bg-[#0EA5E9] hover:text-white transition-all z-10">
          <ChevronLeft size={20} />
        </button>
        
        <button onClick={nextImage} className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/80 text-[#333] shadow-lg hover:bg-[#0EA5E9] hover:text-white transition-all z-10">
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Image selectors */}
      <div className="flex justify-center mt-6 space-x-3">
        {bikeImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setImage(index)} 
            className={cn(
              "w-3 h-3 rounded-full transition-all", 
              currentImageIndex === index ? "bg-[#0EA5E9] scale-125" : "bg-gray-300 hover:bg-gray-400"
            )} 
            aria-label={`View image ${index + 1}`} 
          />
        ))}
      </div>
      
      {/* Product stats */}
      <div className="flex justify-center mt-8 space-x-12 sm:space-x-16">
        <div className="text-center">
          <div className="text-[#0EA5E9] font-bold text-3xl">180</div>
          <div className="text-gray-500 text-sm mt-1">km/h</div>
        </div>
        <div className="text-center">
          <div className="text-[#0EA5E9] font-bold text-3xl">300</div>
          <div className="text-gray-500 text-sm mt-1">km range</div>
        </div>
        <div className="text-center">
          <div className="text-[#0EA5E9] font-bold text-3xl">30</div>
          <div className="text-gray-500 text-sm mt-1">min charge</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
