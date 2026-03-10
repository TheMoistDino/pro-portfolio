import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const container = useRef();
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.8
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] w-full flex items-end pb-24 px-8 md:px-16" style={{
        // Programming/Server room abstract aesthetic
        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="flex flex-col gap-2">
          <span className="hero-text font-heading font-extrabold text-4xl md:text-6xl text-textLight tracking-tight uppercase">Engineer the</span>
          <span className="hero-text font-drama italic text-7xl md:text-9xl text-accent">System.</span>
        </h1>
        <div className="mt-12 flex flex-wrap gap-4">
            <div className="hero-cta">
                <button className="btn-magnetic bg-accent text-textLight border-2 border-accent px-8 py-4 rounded-[2rem] font-heading font-bold tracking-tight text-lg relative group overflow-hidden">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-textLight">Explore Projects & Connect</span>
                    <span className="absolute inset-0 bg-blue-700 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 z-0"></span>
                </button>
            </div>
            <div className="hero-cta">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-magnetic inline-block bg-background text-textLight border-2 border-white/20 hover:border-textLight px-8 py-4 rounded-[2rem] font-heading font-bold tracking-tight text-lg relative group overflow-hidden transition-colors">
                    <span className="relative z-10 flex items-center gap-2">
                        View Resume
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                    <span className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 z-0"></span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
