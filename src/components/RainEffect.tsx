import React from 'react';
import { motion } from 'framer-motion';

const RainEffect = () => {
  const rainDrops = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2, // Fixed duration for all drops
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {rainDrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-[1px] h-12 bg-black/20 transform-gpu"
          style={{
            left: `${drop.x}%`,
            top: '-3rem',
            willChange: 'transform',
          }}
          initial={{ y: 0 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1], // Custom cubic-bezier for smoother motion
            delay: drop.delay,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect; 