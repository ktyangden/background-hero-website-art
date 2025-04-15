import React from 'react';
import Hero from '../components/Hero';
import Videos from '@/components/Videos';
import CharacterSection from '../components/CharacterSection';
import Footer from '../components/Footer';
import PlotSection from '../components/PlotSection';
import InfiniteScrollText from '../components/InfiniteScrollText';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Videos />
      <CharacterSection />
      <PlotSection />
      <InfiniteScrollText />
      <Footer />
    </div>
  );
};

export default Index;
