import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-[2rem] transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-xl border border-white/10 shadow-lg px-8 py-4' : 'bg-transparent px-6 py-4'}`}>
      <div className="flex items-center gap-12">
        <span className="font-heading font-bold text-xl text-textLight tracking-tight">Darren Luu</span>
        <div className="hidden md:flex gap-8">
          <a href="#projects" className="font-data tracking-tight text-xs uppercase interactive-lift text-textDark hover:text-accent font-bold">Projects</a>
          <a href="#philosophy" className="font-data tracking-tight text-xs uppercase interactive-lift text-textDark hover:text-accent font-bold">Philosophy</a>
          <a href="#contact" className="font-data tracking-tight text-xs uppercase interactive-lift text-textDark hover:text-accent font-bold">Contact</a>
        </div>
        <button className="btn-magnetic rounded-[2rem] px-6 py-2 text-sm font-bold tracking-tight font-heading bg-accent text-textLight relative group overflow-hidden">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-textLight">Get in Touch</span>
          <span className="absolute inset-0 bg-blue-700 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 z-0"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
