import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Philosophy = () => {
  const container = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text Reveal
      gsap.from(".reveal-text", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-container",
          start: "top 80%"
        }
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={container} className="relative w-full py-40 overflow-hidden bg-background flex items-center justify-center border-y border-white/5">
      {/* Background Texture - Mechanical/Tech */}
      <div 
        className="bg-parallax absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none grayscale"
        style={{
          // Mechanical/technical system internal components aesthetic
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-container">
        <p className="reveal-text font-heading text-lg md:text-2xl text-textDark mb-8 font-bold uppercase tracking-widest border-l-4 border-accent pl-4 inline-block text-left">
          Most portfolios focus on: <br/> <span className="text-textLight/80">listing static achievements.</span>
        </p>
        <h2 className="reveal-text font-drama italic text-5xl md:text-8xl text-textLight leading-tight mt-12 bg-primary/80 backdrop-blur px-8 py-4 border border-white/10 shadow-xl inline-block rounded-3xl">
          I focus on <br className="md:hidden" />
          <span className="text-accent">collaborative growth.</span>
        </h2>
      </div>
    </section>
  );
};

export default Philosophy;
