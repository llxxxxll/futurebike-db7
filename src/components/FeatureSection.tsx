
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Battery, Cpu, Gauge, Shield, Smartphone, Zap } from 'lucide-react';

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden bg-futuristic-black"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]"></div>
        <div className="bg-grid-pattern opacity-10 absolute inset-0"></div>
      </div>
      
      <div className="container px-6 md:px-10 relative z-10">
        {/* Section header */}
        <div className={cn(
          "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="inline-block bg-futuristic-darkgray/80 backdrop-blur-sm text-neon-blue rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Core Technologies
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight-plus mb-4">
            Cutting-Edge <span className="text-neon-blue">Features</span>
          </h2>
          <p className="text-futuristic-silver max-w-2xl mx-auto leading-relaxed text-balance">
            The DST electric bike combines advanced engineering with futuristic design to deliver 
            an unmatched riding experience that pushes the boundaries of what's possible.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard 
            icon={<Battery />}
            title="Advanced Battery"
            description="High-density lithium-polymer battery with rapid charging capability and 300 km range on a single charge."
            delay={0}
            isVisible={isVisible}
          />
          
          <FeatureCard 
            icon={<Cpu />}
            title="AI-Powered System"
            description="Smart onboard computer that adapts to your riding style and optimizes performance in real-time."
            delay={100}
            isVisible={isVisible}
          />
          
          <FeatureCard 
            icon={<Shield />}
            title="Safety Systems"
            description="Integrated collision detection, automatic emergency braking, and 360° environmental awareness."
            delay={200}
            isVisible={isVisible}
          />
          
          <FeatureCard 
            icon={<Gauge />}
            title="Performance Drive"
            description="Dual electric motors with precision torque vectoring for maximum stability and cornering ability."
            delay={300}
            isVisible={isVisible}
          />
          
          <FeatureCard 
            icon={<Smartphone />}
            title="Connected Experience"
            description="Seamless smartphone integration with dedicated app for tracking, customization, and over-the-air updates."
            delay={400}
            isVisible={isVisible}
          />
          
          <FeatureCard 
            icon={<Zap />}
            title="Rapid Charging"
            description="80% charge in just 20 minutes with our proprietary fast-charging technology compatible with global standards."
            delay={500}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const FeatureCard = ({ icon, title, description, delay, isVisible }: FeatureCardProps) => (
  <div className={cn(
    "glass p-6 rounded-xl transition-all duration-700 hover:border-neon-blue/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] group",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
    { "transition-delay-100": delay === 100 },
    { "transition-delay-200": delay === 200 },
    { "transition-delay-300": delay === 300 },
    { "transition-delay-400": delay === 400 },
    { "transition-delay-500": delay === 500 },
  )}
  style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-4 text-neon-blue group-hover:bg-neon-blue/20 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-neon-blue transition-colors duration-300">
      {title}
    </h3>
    <p className="text-futuristic-silver text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default FeatureSection;
