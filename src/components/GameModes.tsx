
import React from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const GameModes = () => {
  return (
    <section id="modes" className="py-20 bg-chainsaw-dark noise-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4 tracking-wider">GAME MODES</h2>
          <div className="h-1 w-20 bg-chainsaw-orange"></div>
        </div>
        
        <Tabs defaultValue="story" className="w-full max-w-4xl mx-auto">
          <TabsList className="w-full grid grid-cols-2 mb-8 bg-transparent h-auto">
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
              PVP
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="story" className="mt-0 bg-zinc-800/50 p-6 md:p-8 border border-chainsaw-orange/30">
            <div className="text-white">
              <h3 className="font-bebas text-3xl mb-4">STORY MODE</h3>
              <p className="mb-6 text-white/80">
                Follow Denji's journey as he makes contracts with devils and battles the most dangerous threats to humanity. 
                Experience key moments from the manga with stunning visuals and immersive gameplay.
              </p>
              <ul className="list-disc list-inside mb-6 text-white/80">
                <li>Fully voiced cutscenes with original voice cast</li>
                <li>Destructible environments</li>
                <li>Transform between human and chainsaw forms</li>
                <li>Unlock new abilities as the story progresses</li>
              </ul>
              <Button className="bg-chainsaw-orange hover:bg-chainsaw-orange/90 text-white font-bebas px-8 py-6 rounded-none">
                START CAMPAIGN
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="pvp" className="mt-0 bg-zinc-800/50 p-6 md:p-8 border border-chainsaw-orange/30">
            <div className="text-white">
              <h3 className="font-bebas text-3xl mb-4">PVP MODE</h3>
              <p className="mb-6 text-white/80">
                Test your skills against other players in intense 1v1 or team battles. Choose from a roster of characters 
                including Denji, Power, Aki, and more. Each with unique abilities and fighting styles.
              </p>
              <ul className="list-disc list-inside mb-6 text-white/80">
                <li>Ranked and casual matchmaking</li>
                <li>Custom match settings</li>
                <li>Seasonal rewards and leaderboards</li>
                <li>Special events with exclusive content</li>
              </ul>
              <Button className="bg-chainsaw-orange hover:bg-chainsaw-orange/90 text-white font-bebas px-8 py-6 rounded-none">
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
