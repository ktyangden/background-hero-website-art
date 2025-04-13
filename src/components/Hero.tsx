
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/fc493ffa-71e2-467f-893a-b4d38cd58943.png')",
          filter: "brightness(0.8)"
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 
            data-text="ALL DEVILS FEAR DEATH WITH A BLADE" 
            className="glitch-text font-bebas text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
          >
            ALL DEVILS FEAR DEATH WITH A BLADE
          </h1>
          
          <div className="h-1 w-24 bg-chainsaw-orange mb-6" />
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            Enter the dark fantasy world where devils run rampant and one man with a chainsaw for a head fights to save humanity.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-chainsaw-orange hover:bg-chainsaw-orange/90 text-white px-8 py-6 rounded-none">
              START GAME
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-none">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
