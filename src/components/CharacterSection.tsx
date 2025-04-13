import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const CharacterSection = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  const characters = [
    {
      id: 1,
      name: "DENJI",
      image: "/lovable-uploads/denji_cahracter.jpg",
      description: "Chainsaw-wielding hybrid devil hunter. Brash, hungry, and deadly.",
    },
    {
      id: 2,
      name: "POWER",
      image: "/lovable-uploads/POWER.png",
      description: "Blood Devil. Chaotic, loud, and fiercely loyal in her own twisted way.",
    },
    {
      id: 3,
      name: "AKI",
      image: "/lovable-uploads/AKI.jpg",
      description: "Calm and driven Public Safety Devil Hunter, with a contract with the Fox Devil.",
    },
    {
      id: 4,
      name: "HIMENO",
      image: "/lovable-uploads/HIMENO.png",
      description: "Ghost Devil user. Mysterious, emotional, and deadly.",
    },
    {
      id: 5,
      name: "REZE",
      image: "/lovable-uploads/REZE.png",
      description: "Bomb Devil hybrid. Sweet exterior hides explosive power.",
    },
    {
      id: 6,
      name: "MAKIMA",
      image: "/lovable-uploads/MAKIMA.png",
      description: "Control Devil. Calm, composed, and terrifyingly manipulative.",
    },
    {
      id: 7,
      name: "YORU",
      image: "/lovable-uploads/YORU.png",
      description: "War Devil. Cold and calculating with a mission to dominate.",
    },
  ];

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length);
  };

  return (
    <section id="characters" className="py-20 bg-chainsaw-orange noise-bg font-orbitron">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-6xl text-white mb-4 tracking-wider font-orbitron font-bold">
            CHARACTERS
          </h2>
          <div className="h-1 w-20 bg-white"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-900 relative overflow-hidden rounded-md shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Character info */}
              <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                <motion.h3
                  key={characters[currentCharacter].id + "-name"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-6xl text-orange-400 drop-shadow-md mb-6 font-orbitron font-bold not-italic"
                >
                  {characters[currentCharacter].name}
                </motion.h3>

                <motion.p
                  key={characters[currentCharacter].id + "-desc"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-white/80 text-lg"
                >
                  {characters[currentCharacter].description}
                </motion.p>
              </div>

              {/* Character image */}
              <div className="bg-zinc-800 relative overflow-hidden">
                <motion.img
                  key={characters[currentCharacter].id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={characters[currentCharacter].image}
                  alt={characters[currentCharacter].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
              <Button
                onClick={prevCharacter}
                variant="ghost"
                size="icon"
                className="bg-gray-800/50 text-white hover:bg-gray-800/80 rounded-sm"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={nextCharacter}
                variant="ghost"
                size="icon"
                className="bg-gray-800/50 text-white hover:bg-gray-800/80 rounded-sm"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          {/* 💫 Sleek Thumbnail Nav Bar */}
          <div className="mt-6 bg-zinc-950/90 p-3 rounded-xl overflow-x-auto no-scrollbar flex gap-3 justify-center items-center">
            {characters.map((char, index) => (
              <button
                key={char.id}
                onClick={() => setCurrentCharacter(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300
                ${index === currentCharacter
                  ? "border-orange-500 shadow-[0_0_12px_4px_rgba(255,115,0,0.8)]"
                  : "border-zinc-700 hover:border-orange-400 hover:shadow-md"
                }`}
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
