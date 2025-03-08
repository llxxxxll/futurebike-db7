
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const backgroundPositionRef = useRef({
    x: 0,
    y: 0
  });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
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
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div 
      id="animated-background" 
      className="fixed inset-0 z-0 bg-gradient-to-br from-white to-gray-100" 
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(240, 240, 242, 0.8) 0%, rgba(230, 232, 240, 0.8) 90%),
          radial-gradient(circle at 90% 80%, rgba(245, 247, 250, 0.8) 0%, rgba(237, 241, 245, 0.8) 90%)
        `,
        backgroundSize: '400px 400px'
      }} 
    />
  );
};

export default AnimatedBackground;
