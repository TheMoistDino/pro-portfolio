import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    step: "01",
    title: "Learn & Explore",
    desc: "Constantly expanding knowledge boundaries across physics, computer engineering, and autonomous robotics.",
    src: "/sequence-1.png",
    alt: "Learn and Explore"
  },
  {
    step: "02",
    title: "Build & Test",
    desc: "Rigorous iterative prototyping from code logic to physical integration on FTC tracks and autonomous vehicles.",
    src: "/sequence-2.png",
    alt: "Build and Test"
  },
  {
    step: "03",
    title: "Share & Iterate",
    desc: "Lifting up peers through dedicated mentorship, teaching, and leading ambitious teams to competition victories.",
    src: "/sequence-3.png",
    alt: "Share and Iterate"
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
            <div className="w-full aspect-square md:aspect-auto md:h-96 flex items-center justify-center bg-black rounded-[2rem] border border-white/5 relative overflow-hidden shadow-inner p-0">
              <img src={item.src} alt={item.alt} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Protocol;
