
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import SpecsSection from '@/components/SpecsSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'DST Electric - Future of Transportation';
  }, []);

  return (
    <div className="min-h-screen bg-futuristic-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <SpecsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
