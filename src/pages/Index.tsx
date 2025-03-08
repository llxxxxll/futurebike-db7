
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductNavigation from '@/components/ProductNavigation';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bikeImages = [
  "/lovable-uploads/daa3bd28-1d42-4de8-9d04-308adf14de6d.png",
  "/lovable-uploads/3de39d08-0e7f-4a01-8852-cd0ffd71a503.png",
  "/lovable-uploads/ae2a21a8-af34-4928-98ac-2c2921d68ca2.png"
];

const Index = () => {
  const [selectedColor, setSelectedColor] = useState('silver');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Set page title
    document.title = 'DB7 - Next Generation Electric Motorcycle';
    
    // Initial animation
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const nextImage = () => {
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % bikeImages.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevImage = () => {
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + bikeImages.length) % bikeImages.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const setImage = (index: number) => {
    if (index !== currentImageIndex) {
      setIsAnimating(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-futuristic-black text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>
      <Navbar />
      <main className="relative pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-8 flex flex-col lg:flex-row min-h-[85vh]">
          <ProductNavigation />
          
          <div className="flex-1 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 order-2 lg:order-1">
              <span className="text-sm uppercase tracking-widest text-gray-400 mb-2 block">Introducing</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                DB7
              </h1>
              <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
                The DB7 represents the future of electric motorcycles with its revolutionary design and cutting-edge technology. Experience unparalleled performance with zero emissions.
              </p>
              
              <div className="flex space-x-8 mb-10">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-light text-neon-blue mb-2">180</span>
                  <span className="text-xs uppercase text-gray-500">km/h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-light text-neon-blue mb-2">300</span>
                  <span className="text-xs uppercase text-gray-500">km range</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-light text-neon-blue mb-2">30</span>
                  <span className="text-xs uppercase text-gray-500">min charge</span>
                </div>
              </div>
              
              <button className="bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 py-4 px-12 text-sm uppercase tracking-widest transition-colors flex items-center group">
                Reserve Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
            
            <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] mb-6 lg:mb-0 order-1 lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute w-full h-full rounded-full bg-neon-blue/5 blur-3xl"></div>
                
                {/* Image */}
                <img 
                  src={bikeImages[currentImageIndex]} 
                  alt="DB7 Electric Motorcycle" 
                  className={`w-full h-full object-contain z-10 transition-all duration-500 ${
                    isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                />
              </div>
              
              {/* Image navigation controls */}
              <button 
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm p-2 rounded-r-full text-white/70 hover:text-white transition z-20"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm p-2 rounded-l-full text-white/70 hover:text-white transition z-20"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              {bikeImages.map((_, index) => (
                <ImageSelector 
                  key={index}
                  isSelected={currentImageIndex === index} 
                  onClick={() => setImage(index)} 
                />
              ))}
            </div>
            <div className="h-40 w-px bg-gray-800"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ImageSelectorProps {
  isSelected: boolean;
  onClick: () => void;
}

const ImageSelector = ({ isSelected, onClick }: ImageSelectorProps) => {
  return (
    <button 
      onClick={onClick}
      className={`w-3 h-12 rounded-full ${isSelected ? 'bg-neon-blue' : 'bg-gray-700'} transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
    />
  );
};

export default Index;
