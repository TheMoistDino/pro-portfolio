import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="relative w-full min-h-screen bg-primary">
      {/* Global CSS noise overlay filter element */}
      <div className="noise-overlay pointer-events-none"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;
