import React from 'react';
import { motion } from 'framer-motion';

const InfiniteScrollText = () => {
  const text = "control  darkness  eternity  bomb  gun  ghost  violence  famine  war  death";

  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
      <div className="absolute inset-0 w-full h-screen overflow-hidden bg-transparent py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-200%'],
          }}
          transition={{
            x: {
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          <span className="text-[24rem] md:text-[36rem] font-['Reckoner_Bold'] text-black/60 tracking-wider min-w-max">
            {text}
          </span>
          <span className="text-[24rem] md:text-[36rem] font-['Reckoner_Bold'] text-black/60 tracking-wider min-w-max">
            {text}
          </span>
          <span className="text-[24rem] md:text-[36rem] font-['Reckoner_Bold'] text-black/60 tracking-wider min-w-max">
            {text}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollText; 