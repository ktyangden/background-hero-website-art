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
      image: "/lovable-uploads/ecb87f0a-b61e-4c7d-94be-58427be48e3c.png",
      description: "sombthing soiahfoinaslkfnakl slfknlknlklfasfas fas",
    },
    {
      id: 2,
      name: "POWER",
      image: "/lovable-uploads/60779c70-f899-48f2-8266-a90d4d82a5f0.png",
      description:
        "The Blood Devil who forms an unlikely friendship with Denji. Chaotic and unpredictable.",
    },
    {
      id: 3,
      name: "AKI",
      image: "/lovable-uploads/60779c70-f899-48f2-8266-a90d4d82a5f0.png",
      description:
        "The Blood Devil who forms an unlikely friendship with Denji. Chaotic and unpredictable.",
    },
    {
      id: 4,
      name: "HIMENO",
      image: "/lovable-uploads/HIMENO.png",
      description:
        "The Blood Devil who forms an unlikely friendship with Denji. Chaotic and unpredictable.",
    },
    {
      id: 5,
      name: "REZE",
      image: "/lovable-uploads/REZE.png",
      description:
        "The Blood Devil who forms an unlikely friendship with Denji. Chaotic and unpredictable.",
    },
    {
      id: 6,
      name: "MAKIMA",
      image: "/lovable-uploads/MAKIMA.png",
      description:
        "The Blood Devil who forms an unlikely friendship with Denji. Chaotic and unpredictable.",
    },
    {
      id: 7,
      name: "YORU",
      image: "/lovable-uploads/YORU.png",
      description:
        "The Blood Devil who forms an unlikely friendship with Denji. Chaotic and unpredictable.",
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
    <section id="characters" className="py-20 bg-chainsaw-orange noise-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4 tracking-wider">
            CHARACTERS
          </h2>
          <div className="h-1 w-20 bg-white"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Character info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.h3
                  key={characters[currentCharacter].id + "-name"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-bebas text-6xl text-gray-900 mb-6"
                >
                  {characters[currentCharacter].name}
                </motion.h3>

                <motion.p
                  key={characters[currentCharacter].id + "-desc"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-gray-600 mb-12"
                >
                  {characters[currentCharacter].description}
                </motion.p>

                <div className="flex justify-center mt-auto">
                  <div className="bg-gray-200 rounded-full flex items-center p-1">
                    {characters.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCharacter(index)}
                        className={`h-2 mx-1 rounded-full transition-all ${
                          index === currentCharacter
                            ? "bg-chainsaw-orange w-10"
                            : "bg-gray-400 w-6"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Character image */}
              <div className="bg-chainsaw-orange relative overflow-hidden">
                <motion.img
                  key={characters[currentCharacter].id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={characters[currentCharacter].image}
                  alt={characters[currentCharacter].name}
                  className="w-full h-full object-contain"
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
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
