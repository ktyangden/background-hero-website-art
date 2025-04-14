
import React from 'react';
import Hero from '../components/Hero';
import GameModes from '../components/GameModes';
import CharacterSection from '../components/CharacterSection';
import Footer from '../components/Footer';
import PlotSection from '../components/PlotSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <CharacterSection />
      <GameModes />
      <PlotSection />
      <Footer />
    </div>
  );
};

export default Index;
