<<<<<<< HEAD
import React from 'react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
=======
import React from "react";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
>>>>>>> f3194145b9b6804610e551646ba4005288c76045

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-chainsaw-orange">
      {/* Main chainsaw character image - enlarged to remove borders */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full">
<<<<<<< HEAD
        <img 
          src="\lovable-uploads\denji2.png" 
          alt="Chainsaw Man" 
          className="h-full object-cover scale-125"
=======
        <img
          src="\lovable-uploads\denji2.png"
          alt="Chainsaw Man"
          className="h-full object-contain"
>>>>>>> f3194145b9b6804610e551646ba4005288c76045
        />
      </div>

      {/* Japanese vertical text */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <h2 className="font-rangdi text-white text-7xl writing-vertical tracking-wider">
          チェンソーマン
        </h2>
      </div>

<<<<<<< HEAD
      {/* Bottom-centered quote + button */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end items-center pb-24 text-center">
        <motion.div 
=======
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-32">
        <motion.div
>>>>>>> f3194145b9b6804610e551646ba4005288c76045
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-2xl text-white font-orbitron mb-6 tracking-wide">
            "All Devils Are Born With A Name"
          </p>

<<<<<<< HEAD
          <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 rounded-md font-orbitron">
=======
          <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 rounded-md">
>>>>>>> f3194145b9b6804610e551646ba4005288c76045
            PLAY NOW
            <Play className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
