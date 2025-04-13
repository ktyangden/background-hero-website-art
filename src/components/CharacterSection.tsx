
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';

const CharacterSection = () => {
  return (
    <section id="characters" className="py-20 bg-chainsaw-orange noise-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4 tracking-wider">CHARACTERS</h2>
          <div className="h-1 w-20 bg-white"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <CharacterCard 
            name="DENJI" 
            image="/lovable-uploads/60779c70-f899-48f2-8266-a90d4d82a5f0.png"
            description="A young man with the heart of a devil, Denji transforms into the legendary Chainsaw Man to battle devils threatening humanity."
            traits={["STRENGTH", "ENDURANCE", "REGENERATION"]}
          />
          
          <CharacterCard 
            name="POWER" 
            image="https://via.placeholder.com/400x500/222/fff?text=POWER"
            description="The Blood Devil who forms an unlikely friendship with Denji. Chaotic and unpredictable, she brings both trouble and powerful abilities."
            traits={["AGILITY", "BLOOD CONTROL", "UNPREDICTABILITY"]}
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-4 border-4 border-white bg-white/10 backdrop-blur">
            <h3 className="font-bebas text-3xl md:text-4xl text-white glitch-text" data-text="MORE CHARACTERS COMING SOON">
              MORE CHARACTERS COMING SOON
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CharacterCardProps {
  name: string;
  image: string;
  description: string;
  traits: string[];
}

const CharacterCard = ({ name, image, description, traits }: CharacterCardProps) => {
  return (
    <Card className="bg-white text-chainsaw-dark overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bebas text-3xl mb-2 tracking-wide">{name}</h3>
            <p className="text-sm opacity-80 mb-4">{description}</p>
            
            <div className="space-y-2">
              {traits.map((trait, index) => (
                <div key={index} className="bg-gray-100 px-3 py-1 text-xs font-bebas inline-block mr-2">
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="h-64 md:h-auto relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </Card>
  );
};

export default CharacterSection;
