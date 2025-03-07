
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Battery, Gauge, Clock, Weight, Bolt, Sparkles } from 'lucide-react';

const SpecsSection = () => {
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
      id="specs" 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-futuristic-darkgray/30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container px-6 md:px-10 relative z-10">
        {/* Section header */}
        <div className={cn(
          "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="inline-block bg-futuristic-darkgray/80 backdrop-blur-sm text-neon-blue rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Technical Details
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight-plus mb-4">
            <span className="text-neon-blue">Specs & </span>Performance
          </h2>
          <p className="text-futuristic-silver max-w-2xl mx-auto leading-relaxed text-balance">
            Engineered to outperform conventional electric bikes with advanced materials 
            and proprietary technology developed for uncompromising performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left column - Specs list */}
          <div className={cn(
            "space-y-6 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <SpecRow 
              icon={<Battery />}
              name="Battery"
              value="85 kWh lithium-polymer"
              description="Proprietary high-density cell architecture"
            />
            
            <SpecRow 
              icon={<Gauge />}
              name="Performance"
              value="160 km/h top speed"
              description="0-100 km/h in 3.0 seconds"
            />
            
            <SpecRow 
              icon={<Clock />}
              name="Charging"
              value="20 min to 80%"
              description="Compatible with global fast-charging networks"
            />
            
            <SpecRow 
              icon={<Weight />}
              name="Weight"
              value="115 kg (254 lbs)"
              description="Carbon fiber frame and components"
            />
            
            <SpecRow 
              icon={<Bolt />}
              name="Motor"
              value="Dual 50 kW motors"
              description="200 Nm combined torque"
            />
            
            <SpecRow 
              icon={<Sparkles />}
              name="Materials"
              value="Aerospace-grade"
              description="Carbon fiber, titanium, and aircraft aluminum"
            />
          </div>
          
          {/* Right column - Interactive specs visualization */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="glass rounded-xl overflow-hidden">
              <div className="bg-futuristic-darkgray/50 p-6">
                <h3 className="text-xl font-display font-semibold mb-2">Performance Metrics</h3>
                <p className="text-futuristic-silver text-sm">Compared to industry standards</p>
              </div>
              
              <div className="p-6 space-y-6">
                <PerformanceBar label="Speed" value={90} />
                <PerformanceBar label="Range" value={85} />
                <PerformanceBar label="Acceleration" value={95} />
                <PerformanceBar label="Weight-to-Power" value={88} />
                <PerformanceBar label="Charging Speed" value={92} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SpecRowProps {
  icon: React.ReactNode;
  name: string;
  value: string;
  description: string;
}

const SpecRow = ({ icon, name, value, description }: SpecRowProps) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center shrink-0 text-neon-blue">
      {icon}
    </div>
    <div className="ml-4">
      <div className="flex items-baseline">
        <h3 className="text-lg font-display font-medium text-white mr-2">{name}</h3>
        <span className="text-neon-blue font-medium">{value}</span>
      </div>
      <p className="text-futuristic-silver text-sm">{description}</p>
    </div>
  </div>
);

interface PerformanceBarProps {
  label: string;
  value: number;
}

const PerformanceBar = ({ label, value }: PerformanceBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="text-sm font-medium text-white">{label}</div>
      <div className="text-sm font-mono text-neon-blue">{value}%</div>
    </div>
    <div className="h-2 bg-futuristic-lightgray/20 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default SpecsSection;
