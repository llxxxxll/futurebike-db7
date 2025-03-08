
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import LeftSidebar from '@/components/LeftSidebar';
import ImageCarousel from '@/components/ImageCarousel';
import RightSidebar from '@/components/RightSidebar';

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = 'DB7 - Next Generation Electric Motorcycle';
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <Navbar />
      
      <main className="pt-20 relative z-10">
        <div className="w-full min-h-[85vh] relative">          
          {/* Main content container */}
          <div className="container mx-auto px-6 lg:px-12 py-8 relative z-10">
            <div className="flex flex-row h-[80vh]">
              {/* Left sidebar */}
              <div className="w-[20%] hidden lg:flex flex-col justify-start items-start">
                <LeftSidebar />
              </div>
              
              {/* Center content */}
              <div className="w-full lg:w-[55%] flex flex-col">
                <ImageCarousel />
              </div>
              
              {/* Right sidebar */}
              <div className="w-[25%] hidden lg:flex flex-col">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
