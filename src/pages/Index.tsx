import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight, CircleOff, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
const bikeImages = ["/lovable-uploads/daa3bd28-1d42-4de8-9d04-308adf14de6d.png", "/lovable-uploads/3de39d08-0e7f-4a01-8852-cd0ffd71a503.png", "/lovable-uploads/ae2a21a8-af34-4928-98ac-2c2921d68ca2.png"];
const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<number | null>(null);
  const backgroundPositionRef = useRef({
    x: 0,
    y: 0
  });
  const requestRef = useRef<number | null>(null);

  // Setup automatic slideshow
  useEffect(() => {
    // Set page title
    document.title = 'DB7 - Next Generation Electric Motorcycle';

    // Initial animation
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);

    // Start the slideshow timer
    startSlideTimer();

    // Animation for background
    const animateBackground = () => {
      const speed = 0.05;
      backgroundPositionRef.current.x += speed;
      backgroundPositionRef.current.y += speed;
      const bgElement = document.getElementById('animated-background');
      if (bgElement) {
        bgElement.style.backgroundPosition = `${backgroundPositionRef.current.x}px ${backgroundPositionRef.current.y}px`;
      }
      requestRef.current = requestAnimationFrame(animateBackground);
    };
    requestRef.current = requestAnimationFrame(animateBackground);
    return () => {
      clearTimeout(timer);
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
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
  return <div className="min-h-screen overflow-hidden">
      {/* Animated background */}
      <div id="animated-background" className="fixed inset-0 z-0 bg-gradient-to-br from-white to-gray-100" style={{
      backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(240, 240, 242, 0.8) 0%, rgba(230, 232, 240, 0.8) 90%),
            radial-gradient(circle at 90% 80%, rgba(245, 247, 250, 0.8) 0%, rgba(237, 241, 245, 0.8) 90%)
          `,
      backgroundSize: '400px 400px'
    }} />
      
      <Navbar />
      
      <main className="pt-20 relative z-10">
        <div className="w-full min-h-[85vh] relative">          
          {/* Main content container */}
          <div className="container mx-auto px-6 lg:px-12 py-8 relative z-10">
            <div className="flex flex-row h-[80vh]">
              {/* Left sidebar */}
              <div className="w-[20%] hidden lg:flex flex-col justify-start items-start pr-8 pt-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-full mb-8 shadow-lg border border-[#eaeaea]">
                  <h3 className="text-2xl font-bold mb-4">Models</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                      <span className="text-[#0EA5E9] font-semibold">DB7</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-500">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span>DB7 Sport</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-500">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span>DB8</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-full shadow-lg border border-[#eaeaea]">
                  <h3 className="text-xl font-bold mb-4">Performance</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 text-sm">Power</span>
                        <span className="text-sm font-semibold">95%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0EA5E9] rounded-full" style={{
                        width: '95%'
                      }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 text-sm">Range</span>
                        <span className="text-sm font-semibold">88%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0EA5E9] rounded-full" style={{
                        width: '88%'
                      }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Alternate Mode</span>
                        <div className="w-12 h-6 bg-[#0EA5E9] rounded-full flex items-center p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Center content */}
              <div className="w-full lg:w-[55%] flex flex-col">
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
                  {bikeImages.map((_, index) => <button key={index} onClick={() => setImage(index)} className={cn("w-3 h-3 rounded-full transition-all", currentImageIndex === index ? "bg-[#0EA5E9] scale-125" : "bg-gray-300 hover:bg-gray-400")} aria-label={`View image ${index + 1}`} />)}
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
              
              {/* Right sidebar */}
              <div className="w-[25%] hidden lg:flex flex-col pt-12 pl-8">
                <div className="mb-8">
                  <h1 className="text-5xl font-bold tracking-tight">
                    DB7
                  </h1>
                  <h2 className="text-xl text-[#0EA5E9] font-semibold mt-2">
                    UNMATCHED PROTECTION
                  </h2>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    The DB7 represents the future of electric motorcycles with its revolutionary design and cutting-edge technology. Experience unparalleled performance with zero emissions.
                  </p>
                  
                  <button className="mt-8 bg-[#0EA5E9] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#0EA5E9]/90 transition-all flex items-center space-x-2">
                    <span>Reserve Now</span>
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <ChevronRight size={16} className="text-white" />
                    </span>
                  </button>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#eaeaea]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Potential</h3>
                    <Info size={18} className="text-gray-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-end space-x-2">
                      <div className="w-3 bg-[#0EA5E9] rounded-t-md h-10"></div>
                      <div className="w-3 bg-[#0EA5E9] rounded-t-md h-16"></div>
                      <div className="w-3 bg-[#0EA5E9] rounded-t-md h-12"></div>
                      <div className="w-3 bg-[#0EA5E9] rounded-t-md h-20"></div>
                      <div className="w-3 bg-[#0EA5E9] rounded-t-md h-14"></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>1.56k</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-[#0EA5E9]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#22D3EE]"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
interface ImageSelectorProps {
  isSelected: boolean;
  onClick: () => void;
}
const ImageSelector = ({
  isSelected,
  onClick
}: ImageSelectorProps) => {
  return <button onClick={onClick} className={`w-3 h-12 rounded-full ${isSelected ? 'bg-neon-blue' : 'bg-gray-700'} transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`} />;
};
export default Index;