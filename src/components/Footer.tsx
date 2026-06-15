import { personalInfo } from '../data';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-athlete-black border-t border-white/5 py-12 relative overflow-hidden">
      {/* Subtle stripe line banner */}
      <div className="absolute top-0 inset-x-0 h-1 sports-stripes opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left Side: Initials & Sub-Statement */}
        <div className="flex items-center space-x-3 text-center md:text-left">
          <div className="font-display font-black text-white text-xl tracking-widest pl-1 border border-white/10 px-2.5 py-1 rounded-sm bg-athlete-card">
            {personalInfo.initials}
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-display font-medium text-white block">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">
              FULLSTACK WEB & ANDROID ENGINEER
            </span>
          </div>
        </div>

        {/* Center: Navigation quick jumps */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
          <a href="#home" className="hover:text-white transition-colors">HOME</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
          <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>

        {/* Right Side: Back to Top Trigger Button & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <button
            onClick={handleScrollTop}
            title="Sapu Layar Ke Atas"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-athlete-neon bg-athlete-card text-gray-400 hover:text-athlete-neon hover:scale-105 transition-all duration-300"
          >
            <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <p className="text-[10px] font-mono text-zinc-500">
            &copy; {currentYear} {personalInfo.name}. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}
