import React from 'react';

const GetStarted = () => {
  return (
    <section id="contact" className="w-full py-40 px-8 flex justify-center bg-background border-t border-white/5">
      <div className="w-full max-w-4xl bg-primary p-16 rounded-[3rem] border border-white/10 shadow-[8px_8px_0px_rgba(37,99,235,0.2)] flex flex-col items-center text-center relative overflow-hidden group">
        
        {/* Sparkle background elements using Blue */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/40 transition-colors duration-700"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-textLight/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        
        <h2 className="font-heading font-extrabold text-5xl md:text-7xl text-textLight mb-8 z-10 uppercase tracking-tight">Initiate Sequence</h2>
        <p className="font-heading font-medium text-xl text-textDark max-w-2xl mb-12 z-10">
          Whether you're looking for a dedicated collaborator on a robotics project or a passionate software engineering intern, I'm ready to build the future together.
        </p>
        
        <a href="mailto:darrenluu2025@gmail.com" className="btn-magnetic z-10 bg-accent text-textLight px-10 py-5 rounded-[2rem] border-2 border-accent text-lg relative group overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-shadow">
          <span className="relative z-10 font-heading font-bold uppercase tracking-wider">Transmit Signal</span>
        </a>
      </div>
    </section>
  );
};

export default GetStarted;
