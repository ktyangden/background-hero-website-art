import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const GameModes = () => {
  return (
    <section id="modes" className="py-20 bg-chainsaw-dark noise-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl text-white font-orbitron mb-6 tracking-wide">
            GAME MODES
          </h2>
          <div className="h-1 w-20 bg-chainsaw-orange"></div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="story" className="w-full max-w-5xl mx-auto">
          {/* Tab Triggers */}
          <TabsList className="w-full grid grid-cols-2 mb-8 bg-transparent h-auto gap-4">
            <TabsTrigger
              value="story"
              className="data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white bg-transparent text-white/70 font-bebas text-xl py-4 border border-chainsaw-orange/50"
            >
              STORY
            </TabsTrigger>
            <TabsTrigger
              value="pvp"
              className="data-[state=active]:bg-chainsaw-orange data-[state=active]:text-white bg-transparent text-white/70 font-bebas text-xl py-4 border border-chainsaw-orange/50"
            >
              5V5
            </TabsTrigger>
          </TabsList>

          {/* STORY MODE */}
          <TabsContent
            value="story"
            className="relative h-[500px] md:h-[600px] overflow-hidden rounded-md shadow-lg"
          >
            <img
              src="\lovable-uploads\story.jpg"
              alt="story"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
              <h3 className="font-orbitron text-4xl md:text-5xl text-white mb-4">
                STORY MODE
              </h3>
              <p className="text-white/90 text-lg md:text-xl font-bold max-w-2xl mb-6">
                Follow Denji's journey as he makes contracts with devils and
                battles the most dangerous threats to humanity. Experience key
                manga moments with stunning visuals and immersive gameplay.
              </p>
              <Button className="bg-chainsaw-orange hover:bg-chainsaw-orange/90 text-white font-bebas px-10 py-6 rounded-md text-lg">
                START CAMPAIGN
              </Button>
            </div>
          </TabsContent>

          {/* PVP MODE */}
          <TabsContent
            value="pvp"
            className="relative h-[500px] md:h-[600px] overflow-hidden rounded-md shadow-lg"
          >
            <img
              src="\lovable-uploads\fight.png"
              alt="Fight"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
              <h3 className="font-orbitron text-4xl md:text-5xl text-white mb-4">
                5V5 MODE
              </h3>
              <p className="text-white/90 text-lg md:text-xl font-bold max-w-2xl mb-6">
                Test your skills against other players in intense 5v5 battles.
                Choose Denji, Power, Aki and more— each with unique abilities
                and devil powers.
              </p>
              <Button className="bg-chainsaw-orange hover:bg-chainsaw-orange/90 text-white font-bebas px-10 py-6 rounded-md text-lg">
                JOIN BATTLE
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GameModes;
