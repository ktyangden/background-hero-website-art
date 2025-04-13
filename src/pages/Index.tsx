
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GameModes from '../components/GameModes';
import CharacterSection from '../components/CharacterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <GameModes />
      <CharacterSection />
      <Footer />
    </div>
  );
};

export default Index;
