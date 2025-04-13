
import React from 'react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-chainsaw-orange">
      {/* Main chainsaw character image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full">
        <img 
          src="\lovable-uploads\denji2.png" 
          alt="Chainsaw Man" 
          className="h-full object-contain"
        />
      </div>
      
      {/* Japanese vertical text */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <h2 className="font-bebas text-white text-7xl writing-vertical tracking-wider">
          チェンソーマン
        </h2>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          <p className="text-2xl text-white font-orbitron mb-6 tracking-wide">
            "All Devils Are Born With A Name"
          </p>

          
          <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 rounded-md">
            PLAY NOW
            <Play className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
