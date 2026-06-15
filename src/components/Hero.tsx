import { useState, useEffect } from 'react';
import { ArrowRight, Download, Smartphone, Laptop, CheckSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = personalInfo.roles;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        if (typedText === currentFullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
          return;
        }
      }
      
      setTypingSpeed(isDeleting ? 40 : 120);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden athlete-grid-pattern bg-athlete-black"
    >
      {/* Absolute Ambient Background Lights resembling a night football stadium or high-performance racetrack */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-athlete-deep/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-athlete-neon/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Diagonal Subtle Sports Stripe Highlight */}
      <div className="absolute inset-x-0 top-0 h-40 sports-stripes opacity-[0.25] pointer-events-none" />

      {/* Decorative vertical running lines (Athlete brand aesthetics) */}
      <div className="absolute left-6 md:left-12 bottom-20 top-24 w-[1px] bg-white/[0.03] hidden sm:block">
        <div className="w-[1.5px] h-12 bg-athlete-neon absolute top-1/4 animate-bounce" style={{ animationDuration: '6s' }} />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* Left: Headline & Call To Action */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          
          {/* Badge: Performance Level status */}
          <div className="inline-flex items-center space-x-2 bg-athlete-card border border-white/10 px-3 py-1.5 rounded-full w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-athlete-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-athlete-neon"></span>
            </span>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-gray-300">
              AVAILABLE FOR NEW PROJECT / GLOBAL CAPABLE
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter text-white leading-[0.9]">
              <span className="block opacity-70 font-light text-2xl sm:text-3xl tracking-widest uppercase mb-1 font-sans">
                I AM
              </span>
              HAERUDDIN
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-athlete-white via-athlete-white to-athlete-neon">
                HASRAT
              </span>
            </h1>
            
            {/* Dynamic typed role subtitle */}
            <div className="h-8 md:h-10 flex items-center">
              <p className="text-sm md:text-xl font-mono text-athlete-neon tracking-wide flex items-center">
                <span className="text-white/40 mr-2">&lt;</span>
                {typedText}
                <span className="animate-pulse font-normal border-r-2 border-athlete-neon h-5 ml-1" />
                <span className="text-white/40 ml-1">&gt;</span>
              </p>
            </div>
          </div>

          {/* Tagline description */}
          <div className="max-w-xl space-y-4">
            <h2 className="text-xs md:text-sm font-display font-bold tracking-[0.25em] text-white/90">
              {personalInfo.tagline}
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed">
              {personalInfo.subTagline}
            </p>
          </div>

          {/* Buttons CTA Container */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              id="cta-projects"
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-display text-xs uppercase tracking-[0.25em] font-bold text-black bg-white hover:text-white hover:bg-transparent overflow-hidden border border-white transition-all duration-300 rounded-sm"
            >
              {/* Green Slider hover background */}
              <span className="absolute inset-0 w-3 h-full bg-athlete-neon transition-all duration-300 group-hover:w-full -z-10" />
              <span className="flex items-center">
                Lihat Project
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              id="cta-cv"
              href={personalInfo.cvUrl}
              className="group inline-flex items-center justify-center px-8 py-4 font-display text-xs uppercase tracking-[0.25em] font-bold text-white border border-white/20 hover:border-athlete-neon transition-all duration-300 rounded-sm"
            >
              <Download size={14} className="mr-2 group-hover:-translate-y-1 transition-transform text-athlete-neon" />
              Download CV
            </a>
          </div>

          {/* Quick core metrics tags at bottom of text */}
          <div className="flex items-center space-x-6 border-t border-white/5 pt-8 max-w-xl text-gray-500 font-mono text-[10px] md:text-xs">
            <div className="flex items-center space-x-1.5">
              <Laptop size={14} className="text-athlete-neon/70" />
              <span>Fullstack Web Expert</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Smartphone size={14} className="text-athlete-neon/70" />
              <span>Native Android Enthusiast</span>
            </div>
          </div>

        </div>

        {/* Right side: Interactive carbon display dashboard simulating active IDE frameworks */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0">
          
          {/* Subtle Circular Outer Glow */}
          <div className="absolute inset-0 bg-athlete-neon/10 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '4s' }} />

          <div
            id="hero-dashboard-mockup"
            className="w-full max-w-[420px] bg-athlete-card border border-white/10 rounded-xl relative overflow-hidden shadow-2xl p-5 hover:border-athlete-neon/30 transition-all duration-500 group athlete-glow"
          >
            {/* Top Bar / Dots */}
            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-athlete-neon/80 block" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">HAERUDDIN_PROFILE.ts</span>
            </div>

            {/* Stylized Avatar Placeholder inside full editor mock context */}
            <div className="relative aspect-square w-full rounded-lg bg-athlete-black border border-white/5 overflow-hidden flex flex-col justify-center items-center p-4">
              
              {/* Matrix line animation */}
              <div className="absolute inset-0 sports-stripes opacity-20 pointer-events-none" />
              
              {/* Graphic container */}
              <div className="relative z-10 w-44 h-44 rounded-full flex items-center justify-center">
                
                {/* Glowing Outer Rings */}
                <div className="absolute inset-0 border-2 border-athlete-neon/20 border-dashed rounded-full animate-spin" style={{ animationDuration: '24s' }} />
                <div className="absolute -inset-2 border border-white/5 rounded-full animate-reverse-spin" style={{ animationDuration: '16s' }} />
                
                {/* Inner Ring with neon outline */}
                <div className="absolute inset-3 bg-gradient-to-tr from-athlete-black via-zinc-900 to-athlete-deep border-2 border-athlete-neon rounded-full flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Huge bold brand initials */}
                  <span className="font-display font-black text-white text-5xl tracking-widest pl-2">
                    {personalInfo.initials}
                  </span>
                  
                  <div className="bg-athlete-neon text-black text-[8px] font-mono font-bold px-2 py-0.5 mt-1 rounded uppercase tracking-[0.1em]">
                    PRO LEVEL
                  </div>
                </div>

              </div>

              {/* Status and simulated IDE overlay */}
              <div className="w-full mt-6 space-y-2 relative z-10">
                
                {/* Code segment */}
                <div className="font-mono text-left text-[11px] leading-relaxed text-gray-400 space-y-1">
                  <div>
                    <span className="text-athlete-neon-bright font-semibold">const</span> developer = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-brand-electric font-medium">"Haeruddin Hasrat"</span>,
                  </div>
                  <div className="pl-4">
                    core: [<span className="text-green-300">"Web"</span>, <span className="text-green-300">"Android"</span>],
                  </div>
                  <div className="pl-4">
                    status: <span className="text-teal-400">"HIGH_PERFORMANCE"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 border-t border-white/5 pt-2">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-athlete-neon rounded-full inline-block" />
                    <span>SYSTEM ONLINE</span>
                  </span>
                  <span>BUILD: OPTIMAL</span>
                </div>
              </div>

            </div>
            
            {/* Aesthetic athlete decals at bottom of card */}
            <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
              <span className="font-display font-black text-9xl leading-none text-white tracking-widest select-none block transform translate-x-10 translate-y-6">
                PRO
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
