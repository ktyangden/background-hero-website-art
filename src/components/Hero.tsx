import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FireParticles from './FireParticles';
import ScratchEffect from './ScratchEffect';
import InfiniteScrollText from './InfiniteScrollText';
import { Button } from './ui/button';

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200); // Glitch lasts 200ms
    }, 2000); // Random glitch every 3 seconds (adjust frequency here)

    return () => clearInterval(glitchInterval); // Cleanup on component unmount
  }, []);

  // Generate scratches specifically for the image overlay
  const imageScratches = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 20 - 10,
    width: Math.random() * 1.5 + 0.5,
    height: Math.random() * 30 + 20,
    opacity: Math.random() * 0.15 + 0.05,
    color: Math.random() > 0.8 ? 'bg-gray-800' : 'bg-black',
  }));

  return (
    <div className="relative h-screen w-full overflow-hidden bg-chainsaw-orange">
      {/* Fire particles effect */}
      <FireParticles />
      
      {/* Scratch and dirt effect */}
      <ScratchEffect />

      {/* Infinite scrolling text background */}
      <InfiniteScrollText />

      {/* Main chainsaw character image - enlarged to remove borders */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full z-10">
        <motion.div 
          className="h-full relative"
          whileHover={{ rotateY: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src="/images/denji2.png" 
            alt="Chainsaw Man" 
            className="h-full object-cover scale-125"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Image overlay scratches */}
          <div className="absolute inset-0 pointer-events-none">
            {imageScratches.map((scratch) => (
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
          </div>
        </motion.div>
        
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30">
        <p className="text-white/90 text-2xl md:text-4xl italic mb-4">
          "All Devils Are Born With A Name."
        </p>
        <Button className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg">
          WATCH NOW
        </Button>
      </div>
      
      {/* Japanese vertical text with glitch effect */}
      <div className="absolute right-2 sm:right-4 md:right-12 top-1/2 transform -translate-y-1/2 z-20 [text-shadow:_0_0_20px_rgba(0,0,0,0.7)]">
        <h2 className={`font-synthek text-white text-5xl sm:text-6xl md:text-9xl writing-vertical tracking-wider ${isGlitching ? 'glitch' : ''} whitespace-nowrap`}>
          チェンソーマン
        </h2>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30">
        <p className="text-white/90 text-2xl md:text-4xl italic mb-4">
          "All Devils Are Born With A Name."
        </p>
        <Button className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg">
          WATCH NOW
        </Button>
      </div>
    </div>
  );
};

export default Hero;
