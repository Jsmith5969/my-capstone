import React from 'react';
import Hero from '../components/Hero';
import MenuHighlightsDropdown from '../components/MenuHighlightsDropdown';
import About from '../components/About';

function HomePage() {
  return (
    <main>
      <Hero />
      <MenuHighlightsDropdown />
      <About />
    </main>
  );
}

export default HomePage;