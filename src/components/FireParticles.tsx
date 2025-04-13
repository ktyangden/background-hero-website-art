
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  color: string;
};

const FireParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = React.useState<Particle[]>([]);
  
  // Generate new particles
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      
      // Colors for fire effect
      const colors = ['#F97316', '#ea384c', '#FF5F1F', '#ff8c69', '#D946EF'];
      
      // Create new particle
      const newParticle: Particle = {
        id: Date.now(),
        x: Math.random() * containerWidth,
        y: 0,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 2 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      // Cleanup old particles to avoid memory issues
      setParticles(prev => prev.filter(p => Date.now() - p.id < 4000));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          initial={{ 
            x: particle.x,
            y: "100%",
            opacity: 0.8,
            scale: 0.8,
            backgroundColor: particle.color
          }}
          animate={{ 
            y: "0%", 
            opacity: 0,
            scale: 0.2,
          }}
          transition={{ 
            duration: particle.duration,
            ease: "easeOut"
          }}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FireParticles;
