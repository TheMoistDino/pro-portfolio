import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-textLight rounded-t-[4rem] px-8 md:px-16 pt-24 pb-12 mt-[-4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-accent/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Col */}
        <div className="md:col-span-5 flex flex-col items-start">
          <h3 className="font-heading font-extrabold uppercase text-3xl mb-4 text-textLight tracking-tight">Darren Luu</h3>
          <p className="font-heading text-textDark font-medium max-w-sm mb-12 leading-relaxed">
            Building the future through the fusion of robotics, scalable software engineering, and collaborative innovation.
          </p>
          
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-md">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
            <span className="font-data font-bold text-xs text-textLight uppercase tracking-widest">System Operational</span>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="md:col-span-3 md:col-start-8 flex flex-col gap-6">
          <h4 className="font-data font-bold text-xs text-accent uppercase tracking-widest mb-2 border-b border-accent/30 pb-2">Navigation</h4>
          <a href="#" className="font-heading font-medium text-textDark hover:text-accent transition-colors">Home</a>
          <a href="#projects" className="font-heading font-medium text-textDark hover:text-accent transition-colors">Projects</a>
          <a href="#philosophy" className="font-heading font-medium text-textDark hover:text-accent transition-colors">Philosophy</a>
          <a href="#contact" className="font-heading font-medium text-textDark hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Links Col 2 */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h4 className="font-data font-bold text-xs text-accent uppercase tracking-widest mb-2 border-b border-accent/30 pb-2">Connect</h4>
          <a href="https://linkedin.com/in/dwluu/" target="_blank" rel="noopener noreferrer" className="font-heading font-medium text-textDark hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/TheMoistDino" target="_blank" rel="noopener noreferrer" className="font-heading font-medium text-textDark hover:text-accent transition-colors">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-heading font-medium text-textDark hover:text-accent transition-colors">Resume</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-white/10">
        <p className="font-data font-bold text-xs text-textDark uppercase tracking-widest">&copy; {new Date().getFullYear()} Darren Luu. All rights reserved.</p>
        <p className="font-data font-bold text-xs text-textDark mt-4 md:mt-0 uppercase tracking-widest">Engineered at the Edge.</p>
      </div>
    </footer>
  );
};

export default Footer;
