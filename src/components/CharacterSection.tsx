import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Analytics } from "@vercel/analytics/react";

const CharacterSection = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  const characters = [
    {
      id: 1,
      name: "Denji",
      image: "/images/denji.jpg",
      description: "The protagonist who becomes Chainsaw Man after merging with Pochita.",
    },
    {
      id: 2,
      name: "Power",
      image: "/images/POWER.png",
      description: "The Blood Devil who forms a contract with Denji.",
    },
    {
      id: 3,
      name: "Aki",
      image: "/images/AKI.jpg",
      description: "A Public Safety Devil Hunter and Denji's mentor.",
    },
    {
      id: 4,
      name: "Himeno",
      image: "/images/HIMENO.png",
      description: "Aki's former partner and a skilled Devil Hunter.",
    },
    {
      id: 5,
      name: "Reze",
      image: "/images/REZE.png",
      description: "A mysterious girl with a connection to Denji.",
    },
    {
      id: 6,
      name: "Makima",
      image: "/images/makima.jpg",
      description: "The mysterious and powerful Control Devil.",
    },
    {
      id: 7,
      name: "Yoru",
      image: "/images/YORU.png",
      description: "The War Devil who takes over Asa's body.",
    },
  ];

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacter(
      (prev) => (prev - 1 + characters.length) % characters.length
    );
  };

  return (
    <section
      id="characters"
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-chainsaw-orange to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-chainsaw-orange to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-6xl md:text-7xl text-white mb-6 tracking-wider font-orbitron font-bold">
            CHARACTERS
          </h2>
          <div className="h-1 w-32 bg-chainsaw-orange"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Character info */}
            <motion.div 
              key={characters[currentCharacter].id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center text-white relative"
            >
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[60px] border-t-chainsaw-orange border-r-[60px] border-r-transparent"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-b-chainsaw-orange border-l-[60px] border-l-transparent"></div>
              
              <h3 className="text-7xl md:text-8xl text-chainsaw-orange drop-shadow-md mb-8 font-orbitron font-bold not-italic">
                {characters[currentCharacter].name}
              </h3>

              <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-12">
                {characters[currentCharacter].description}
              </p>

              {/* Navigation buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  onClick={prevCharacter}
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-gray-900/50 text-white hover:bg-chainsaw-orange/80 rounded-full"
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button
                  onClick={nextCharacter}
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-gray-900/50 text-white hover:bg-chainsaw-orange/80 rounded-full"
                >
                  <ChevronRight size={24} />
                </Button>
              </div>
            </motion.div>

            {/* Character image */}
            <motion.div 
              key={characters[currentCharacter].id + "-image"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/30 to-transparent"></div>
              <img
                src={characters[currentCharacter].image}
                alt={characters[currentCharacter].name}
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-16">
            <div className="flex justify-center gap-4 overflow-x-auto scrollbar-hide px-4 thumbnail-container">
              {characters.map((char, index) => (
                <motion.button
                  key={char.id}
                  onClick={() => setCurrentCharacter(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 relative transform-gpu bg-black
                  ${
                    index === currentCharacter
                      ? "border-chainsaw-orange shadow-[0_0_20px_5px_rgba(255,115,0,0.5)]"
                      : "border-gray-700 hover:border-chainsaw-orange/50 hover:shadow-md"
                  }`}
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
