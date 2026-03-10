import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    step: "01",
    title: "Learn & Explore",
    desc: "Constantly expanding knowledge boundaries across physics, computer engineering, and autonomous robotics.",
    svg: (
      // Open Book / Mind Clipart Graphic
      <svg className="w-full h-full max-w-[200px] text-textLight opacity-90 drop-shadow-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20 L50 85" stroke="#888888" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 20 C35 15 20 25 15 35 L15 80 C20 70 35 70 50 85" stroke="#F5F3EE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 20 C65 15 80 25 85 35 L85 80 C80 70 65 70 50 85" stroke="#F5F3EE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="15" r="8" fill="#2563EB" filter="drop-shadow(0 0 8px #2563EB)" className="animate-pulse" />
        {/* Abstract Data Nodes representing exploration */}
        <circle cx="25" cy="45" r="3" fill="#2563EB" />
        <circle cx="35" cy="65" r="3" fill="#2563EB" />
        <circle cx="75" cy="45" r="3" fill="#2563EB" />
        <circle cx="65" cy="65" r="3" fill="#2563EB" />
      </svg>
    )
  },
  {
    step: "02",
    title: "Build & Test",
    desc: "Rigorous iterative prototyping from code logic to physical integration on FTC tracks and autonomous vehicles.",
    svg: (
      // Gear and Tools Clipart Graphic
      <svg className="w-full h-full max-w-[200px] text-textLight opacity-90 drop-shadow-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-spin" style={{ animationDuration: '10s' }}>
          <circle cx="50" cy="50" r="25" stroke="#F5F3EE" strokeWidth="5" strokeDasharray="10 6" />
          <circle cx="50" cy="50" r="15" stroke="#888888" strokeWidth="4" />
        </g>
        {/* Wrench overlay */}
        <path d="M75 25 L55 45" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" filter="drop-shadow(0 0 6px #2563EB)" />
        <circle cx="75" cy="25" r="8" stroke="#2563EB" strokeWidth="4" fill="#050508" />
        {/* Circuit traces representing testing */}
        <path d="M20 20 L40 40 L40 50" stroke="#888888" strokeWidth="3" fill="none" />
        <circle cx="20" cy="20" r="4" fill="#F5F3EE" />
      </svg>
    )
  },
  {
    step: "03",
    title: "Share & Iterate",
    desc: "Lifting up peers through dedicated mentorship, teaching, and leading ambitious teams to competition victories.",
    svg: (
      // Network Branching Clipart Graphic (Mentorship)
      <svg className="w-full h-full max-w-[200px] text-textLight opacity-90 drop-shadow-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 80 L50 50" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" filter="drop-shadow(0 0 6px #2563EB)" />
        <path d="M50 50 L25 30" stroke="#F5F3EE" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 50 L75 30" stroke="#F5F3EE" strokeWidth="4" strokeLinecap="round" />
        
        {/* Main Node (Mentor) */}
        <circle cx="50" cy="80" r="10" fill="#F5F3EE" />
        {/* Child Nodes (Peers/Team) */}
        <circle cx="25" cy="30" r="8" fill="#888888" />
        <circle cx="75" cy="30" r="8" fill="#888888" />
        
        <path d="M25 30 L15 15" stroke="#888888" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M75 30 L85 15" stroke="#888888" strokeWidth="2" strokeDasharray="4 2" />
        
        <circle cx="15" cy="15" r="4" fill="#2563EB" className="animate-pulse" />
        <circle cx="85" cy="15" r="4" fill="#2563EB" className="animate-pulse" />
      </svg>
    )
  }
];

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Stacking logic
      const cards = gsap.utils.toArray('.stack-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-primary pb-[100px] pt-24">
      {cardsData.map((item, index) => (
        <div 
          key={index} 
          className="stack-card h-screen w-full flex items-center justify-center p-8 bg-primary z-10 relative"
          style={{ zIndex: index + 10 }}
        >
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-background p-12 rounded-[3rem] border border-white/5 shadow-2xl">
            {/* Text Side */}
            <div className="flex flex-col">
              <span className="font-data font-bold text-accent text-xl mb-4 py-1 px-3 border border-accent/40 w-fit rounded-md uppercase tracking-widest bg-accent/10">Seq.{item.step}</span>
              <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-textLight mb-6 uppercase tracking-tight">{item.title}</h2>
              <p className="font-heading text-lg font-medium text-textDark leading-relaxed max-w-lg">{item.desc}</p>
            </div>
            {/* Visual Side */}
            <div className="w-full aspect-square md:aspect-auto md:h-96 flex items-center justify-center p-8 bg-primary rounded-[2rem] border border-white/5 relative overflow-hidden shadow-inner">
                {item.svg}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Protocol;
