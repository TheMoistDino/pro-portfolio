import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// --- Card 1: Diagnostic Shuffler ---
const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, label: "Path-Following Logic", color: "border-accent/40" },
    { id: 2, label: "Computer Vision", color: "border-textLight/20" },
    { id: 3, label: "Motor Control", color: "border-textLight/10" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-background shadow-2xl rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group">
      <h3 className="font-heading font-bold text-2xl text-textLight mb-2 uppercase tracking-tight">Autonomous Precision</h3>
      <p className="font-heading text-sm text-textDark mb-8 font-medium">Engineering intelligent robotics and complex path-following systems.</p>
      
      <div className="flex-grow flex items-center justify-center relative w-full h-48 perspective-1000">
        {cards.map((card, index) => {
          const isTop = index === 0;
          const yOffset = index * 20;
          const scale = 1 - (index * 0.05);
          const opacity = 1 - (index * 0.3);
          
          return (
            <div 
              key={card.id}
              className={`absolute w-full max-w-[240px] bg-primary rounded-xl p-4 border flex items-center justify-center transition-all duration-[800ms] shadow-xl ${isTop ? 'border-accent/60 bg-blue-900/10 backdrop-blur-sm' : card.color}`}
              style={{
                zIndex: 10 - index,
                transform: `translateY(${yOffset}px) scale(${scale})`,
                opacity: opacity,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <div className="flex items-center gap-3 w-full">
                <div className={`w-3 h-3 rounded-full ${isTop ? 'bg-accent animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'bg-textLight/20'}`}></div>
                <span className="font-data font-bold text-xs text-textLight tracking-wider">{card.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Card 2: Console Typewriter (Software Eng Focus) ---
const ConsoleTypewriter = () => {
  const lines = [
    "Building full-stack app...",
    "Compiled successfully.",
    "Optimizing algorithms...",
    "Runtime: O(log n)",
    "Deploying scalable architecture."
  ];
  
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const resetDelay = setTimeout(() => {
        setDisplayText("");
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(resetDelay);
    }
    
    if (charIndex < lines[lineIndex].length) {
      const typeTimeout = setTimeout(() => {
        setDisplayText(prev => {
          if (charIndex === 0 && lineIndex > 0) {
             return prev + "\n" + lines[lineIndex][charIndex];
          }
          return prev + lines[lineIndex][charIndex];
        });
        setCharIndex(charIndex + 1);
      }, 50 + Math.random() * 50);
      return () => clearTimeout(typeTimeout);
    } else {
      const lineDelay = setTimeout(() => {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 800);
      return () => clearTimeout(lineDelay);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="flex flex-col h-full bg-background shadow-2xl rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group">
      <div className="absolute top-6 right-8 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
        <span className="font-data font-bold text-[10px] text-accent uppercase tracking-widest">Compiler</span>
      </div>
      
      <h3 className="font-heading font-bold text-2xl text-textLight mb-2 uppercase tracking-tight">Software Engineering</h3>
      <p className="font-heading text-sm text-textDark mb-8 max-w-[80%] font-medium">Building robust applications using Python, C++, and Java.</p>
      
      <div className="flex-grow bg-primary rounded-xl p-5 font-data text-xs text-textLight/90 border border-white/10 overflow-hidden whitespace-pre-wrap leading-relaxed shadow-inner">
        <span className="opacity-70 text-accent font-bold">&gt; /usr/bin/dev</span>{"\n"}
        <span className="text-blue-200/80">{displayText}</span>
        <span className="inline-block w-2h.5 h-3 bg-accent ml-1 animate-pulse align-middle shadow-[0_0_5px_rgba(37,99,235,0.8)]"></span>
      </div>
    </div>
  );
};

// --- Card 3: Teamwork Graphic (Collaborative Impact) ---
const CollaborativeImpact = () => {
  return (
    <div className="flex flex-col h-full bg-background shadow-2xl rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group">
      <h3 className="font-heading font-bold text-2xl text-textLight mb-2 uppercase tracking-tight">Collaborative Impact</h3>
      <p className="font-heading text-sm text-textDark mb-8 font-medium">Leading engineering teams and mentoring peers.</p>
      
      <div className="flex-grow flex items-center justify-center relative w-full h-48 bg-black rounded-xl border border-white/10 overflow-hidden shadow-inner p-0">
        <img src="/teamwork.png" alt="Collaborative Teamwork" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 w-full max-w-7xl mx-auto bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr h-auto md:h-[450px]">
        <DiagnosticShuffler />
        <ConsoleTypewriter />
        <CollaborativeImpact />
      </div>
    </section>
  );
};

export default Features;
