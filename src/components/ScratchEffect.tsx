import React from 'react';
import { motion } from 'framer-motion';

const ScratchEffect = () => {
  // Generate random scratches - reduced number and made more vertical
  const scratches = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 20 - 10, // More vertical with slight variation
    width: Math.random() * 1.5 + 0.5, // Thinner scratches
    height: Math.random() * 30 + 20, // Longer scratches
    opacity: Math.random() * 0.2 + 0.1, // Lower opacity
    color: Math.random() > 0.8 ? 'bg-gray-800' : 'bg-black',
  }));

  // Generate falling dirt particles - reduced number
  const dirtParticles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 5, // Much slower falling
    opacity: Math.random() * 0.2 + 0.1,
    color: Math.random() > 0.8 ? 'bg-gray-800' : 'bg-black',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main scratches */}
      {scratches.map((scratch) => (
        <motion.div
          key={scratch.id}
          className={`absolute ${scratch.color}`}
          style={{
            left: `${scratch.x}%`,
            top: `${scratch.y}%`,
            transform: `rotate(${scratch.rotation}deg)`,
            transformOrigin: 'center',
            width: `${scratch.width}px`,
            height: `${scratch.height}px`,
            opacity: scratch.opacity,
          }}
          whileHover={{ 
            rotateY: 3,
            scale: 1.05,
            opacity: scratch.opacity + 0.1
          }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Additional thin scratches */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`thin-${i}`}
          className={`absolute ${Math.random() > 0.8 ? 'bg-gray-800' : 'bg-black'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 15 - 7.5}deg)`,
            width: `${Math.random() * 1 + 0.5}px`,
            height: `${Math.random() * 20 + 10}px`,
            opacity: Math.random() * 0.15 + 0.05,
          }}
          whileHover={{ 
            rotateY: 2,
            scale: 1.03,
            opacity: Math.random() * 0.15 + 0.05
          }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Falling dirt particles */}
      {dirtParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: '100vh', opacity: [0, particle.opacity, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ScratchEffect; 