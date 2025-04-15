import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Analytics } from "@vercel/analytics/react";
import SparkEffect from "./SparkEffect";

const CharacterSection = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [characterType, setCharacterType] = useState("all");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const characters = [
    {
      id: 1,
      name: "Denji",
      image: "/images/denji.jpg",
      description: "The protagonist who becomes Chainsaw Man after merging with Pochita.",
      quote: "I want to live a normal life, eat good food, and sleep in a warm bed.",
      audio: "/audio/denji.mp3",
      type: "hybrid"
    },
    {
      id: 2,
      name: "Power",
      image: "/images/POWER.png",
      description: "The Blood Devil who forms a contract with Denji.",
      quote: "I am the great Power! The Blood Devil!",
      audio: "/audio/power.mp3",
      type: "devil"
    },
    {
      id: 3,
      name: "Aki",
      image: "/images/AKI.jpg",
      description: "A Public Safety Devil Hunter and Denji's mentor.",
      quote: "I'll kill the Gun Devil, no matter what it takes.",
      audio: "/audio/aki.mp3",
      type: "hunter"
    },
    {
      id: 4,
      name: "Himeno",
      image: "/images/HIMENO.png",
      description: "Aki's former partner and a skilled Devil Hunter.",
      quote: "I'll protect you, Aki.",
      audio: "/audio/himeno.mp3",
      type: "hunter"
    },
    {
      id: 5,
      name: "Reze",
      image: "/images/REZE.png",
      description: "A mysterious girl with a connection to Denji.",
      quote: "I want to be with you, Denji.",
      audio: "/audio/reze.mp3",
      type: "hybrid"
    },
    {
      id: 6,
      name: "Makima",
      image: "/images/makima.jpg",
      description: "The mysterious and powerful Control Devil.",
      quote: "I want to create a world where everyone is equal.",
      audio: "/audio/makima.mp3",
      type: "devil"
    },
    {
      id: 7,
      name: "Yoru",
      image: "/images/YORU.png",
      description: "The War Devil who takes over Asa's body.",
      quote: "I am the War Devil. I will make you suffer.",
      audio: "/audio/yoru.mp3",
      type: "devil"
    }
  ];

  const filteredCharacters = characterType === "all" 
    ? characters 
    : characters.filter(char => char.type === characterType);

  // Function to scroll thumbnail to selected character
  const scrollToCharacter = (index: number) => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnails = container.querySelectorAll('button');
      if (thumbnails[index]) {
        const thumbnail = thumbnails[index] as HTMLElement;
        const containerWidth = container.clientWidth;
        const thumbnailWidth = thumbnail.offsetWidth;
        const gap = 16; // 4 * 4px gap
        const scrollPosition = thumbnail.offsetLeft - (containerWidth / 2) + (thumbnailWidth / 2) + gap;
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const playCharacterSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    const audio = new Audio(filteredCharacters[currentCharacter].audio);
    audioRef.current = audio;
    audio.play().catch(error => {
      console.error("Error playing audio:", error);
    });
  };

  const nextCharacter = () => {
    setCurrentCharacter((prev) => {
      const next = (prev + 1) % filteredCharacters.length;
      scrollToCharacter(next);
      return next;
    });
    playCharacterSound();
  };

  const prevCharacter = () => {
    setCurrentCharacter((prev) => {
      const next = (prev - 1 + filteredCharacters.length) % filteredCharacters.length;
      scrollToCharacter(next);
      return next;
    });
    playCharacterSound();
  };

  // Reset current character when type changes
  React.useEffect(() => {
    setCurrentCharacter(0);
    playCharacterSound();
  }, [characterType]);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevCharacter();
      } else if (e.key === 'ArrowRight') {
        nextCharacter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentCharacter, characterType]); // Add dependencies to ensure proper updates

  return (
    <section
      id="characters"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Spark Effect */}
      <SparkEffect />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-chainsaw-orange to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-chainsaw-orange to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-6xl md:text-7xl text-white mb-6 tracking-wider font-orbitron font-bold">
            CHARACTERS
          </h2>
          <div className="h-1 w-32 bg-chainsaw-orange"></div>
        </div>

        {/* Character Type Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="all" className="w-full max-w-md" onValueChange={setCharacterType}>
            <TabsList className="grid grid-cols-4 w-full bg-gray-900/50 p-1 rounded-lg">
              <TabsTrigger 
                value="all" 
                className="text-white/90 data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white font-orbitron text-sm md:text-base"
              >
                ALL
              </TabsTrigger>
              <TabsTrigger 
                value="hunter" 
                className="text-white/90 data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white font-orbitron text-sm md:text-base"
              >
                HUNTERS
              </TabsTrigger>
              <TabsTrigger 
                value="devil" 
                className="text-white/90 data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white font-orbitron text-sm md:text-base"
              >
                DEVILS
              </TabsTrigger>
              <TabsTrigger 
                value="hybrid" 
                className="text-white/90 data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white font-orbitron text-sm md:text-base"
              >
                HYBRIDS
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {/* Character name */}
            <motion.div 
              key={filteredCharacters[currentCharacter].id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center text-white"
            >
              <h3 className="text-7xl md:text-8xl text-chainsaw-orange drop-shadow-md mb-6 font-orbitron font-bold not-italic">
                {filteredCharacters[currentCharacter].name}
              </h3>
              <p className="text-white/80 text-lg md:text-xl italic mb-4">
                "{filteredCharacters[currentCharacter].quote || 'No quote available'}"
              </p>
            </motion.div>

            {/* Character image */}
            <motion.div 
              key={filteredCharacters[currentCharacter].id + "-image"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/30 to-transparent"></div>
              <img
                src={filteredCharacters[currentCharacter].image}
                alt={filteredCharacters[currentCharacter].name}
                className="w-full h-[550px] object-cover"
              />
            </motion.div>

            {/* Character description */}
            <motion.div 
              key={filteredCharacters[currentCharacter].id + "-desc"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center text-white"
            >
              <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8">
                {filteredCharacters[currentCharacter].description}
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
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-12">
            <div className="relative w-full">
              {/* Left Arrow */}
              <button
                onClick={() => {
                  const container = document.querySelector('.thumbnail-scroll-container');
                  if (container) {
                    const scrollAmount = container.clientWidth;
                    container.scrollBy({
                      left: -scrollAmount,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const container = document.querySelector('.thumbnail-scroll-container');
                  if (container) {
                    const scrollAmount = container.clientWidth;
                    container.scrollBy({
                      left: scrollAmount,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>

              <div 
                ref={thumbnailContainerRef}
                className="flex justify-center gap-4 overflow-x-auto scrollbar-hide px-4 thumbnail-scroll-container snap-x snap-mandatory"
              >
                <div className="flex gap-4 snap-center">
                  {filteredCharacters.map((char, index) => (
                    <motion.button
                      key={char.id}
                      onClick={() => {
                        setCurrentCharacter(index);
                        scrollToCharacter(index);
                        playCharacterSound();
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 relative transform-gpu bg-black snap-center
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
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
