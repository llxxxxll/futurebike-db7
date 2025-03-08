
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductNavigation from '@/components/ProductNavigation';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  
  useEffect(() => {
    // Set page title
    document.title = 'DST Electric - Premium Electric Bikes';
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333] overflow-x-hidden">
      <Navbar />
      <main className="relative pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-8 flex flex-col lg:flex-row min-h-[85vh]">
          <ProductNavigation />
          
          <div className="flex-1 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 order-2 lg:order-1">
              <span className="text-sm uppercase tracking-widest text-[#999] mb-2 block">Introducing</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6">
                Electric Ace
              </h1>
              <p className="text-[#666] max-w-md mb-10 leading-relaxed">
                The Ace Two is the latest revolution in electric commuting with a light frame. It combines a clean design, cutting-edge technology, and efficient safety features. Rider height: between 175 and 200cm.
              </p>
              
              <div className="flex items-center justify-between max-w-xs mb-8">
                <div className="w-24 h-1 bg-[#ddd]"></div>
                <div className="w-24 h-1 bg-[#ddd]"></div>
                <div className="w-24 h-1 bg-[#ddd]"></div>
              </div>
              
              <button className="bg-[#333] hover:bg-black text-white py-4 px-12 text-sm uppercase tracking-widest transition-colors">
                Buy
              </button>
            </div>
            
            <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] mb-6 lg:mb-0 order-1 lg:order-2">
              <img 
                src="/lovable-uploads/7bfefd02-e626-4255-b936-d07a597cd5d3.png" 
                alt="DST Electric Bike" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
            <ColorSelector 
              color="white" 
              isSelected={selectedColor === 'white'} 
              onClick={() => setSelectedColor('white')} 
            />
            <ColorSelector 
              color="black" 
              isSelected={selectedColor === 'black'} 
              onClick={() => setSelectedColor('black')} 
            />
            <ColorSelector 
              color="gray" 
              isSelected={selectedColor === 'gray'} 
              onClick={() => setSelectedColor('gray')} 
            />
            <div className="h-40 w-px bg-[#ddd]"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ColorSelectorProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const ColorSelector = ({ color, isSelected, onClick }: ColorSelectorProps) => {
  let bgColor = "bg-white";
  if (color === "black") bgColor = "bg-black";
  if (color === "gray") bgColor = "bg-gray-400";
  
  return (
    <button 
      onClick={onClick}
      className={`w-6 h-6 rounded-full ${bgColor} flex items-center justify-center ${isSelected ? 'ring-1 ring-offset-4 ring-black' : ''}`}
    />
  );
};

export default Index;
