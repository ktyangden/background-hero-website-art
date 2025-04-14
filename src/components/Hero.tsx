import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import FireParticles from './FireParticles';
import ScratchEffect from './ScratchEffect';

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200); // Glitch lasts 200ms
    }, 1000); // Random glitch every 1 second (adjust frequency here)

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

      {/* Main chainsaw character image - enlarged to remove borders */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full">
        <motion.div 
          className="h-full relative"
          whileHover={{ rotateY: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src="\lovable-uploads\denji2.png" 
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

      {/* Japanese vertical text with glitch effect */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <h2 className={`font-rangdi text-white text-7xl writing-vertical tracking-wider font-bold ${isGlitching ? 'glitch' : ''}`}>
          チェンソーマン
        </h2>
      </div>

      {/* Bottom-centered quote + button */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end items-center pb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-4xl text-white font-orbitron mb-6 tracking-wide">
            "All Devils Are Born With A Name"
          </p>

          <a
            href="https://youtu.be/xvFZjo5PgG0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 rounded-md font-orbitron">
              WATCH NOW
              <Play className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
