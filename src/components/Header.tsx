import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-athlete-black/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Initials */}
        <a
          id="nav-logo"
          href="#home"
          className="group relative flex items-center justify-center font-display font-extrabold text-2xl tracking-[0.15em] text-white"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-athlete-neon">
            {personalInfo.initials}
          </span>
          <span className="absolute -inset-2 bg-gradient-to-r from-athlete-neon/0 via-athlete-neon/10 to-athlete-neon/0 rounded-lg scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></span>
          <span className="w-1.5 h-1.5 bg-athlete-neon rounded-full ml-1 self-end mb-1"></span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative px-4 py-2 font-display text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-athlete-neon rounded-full" />
              )}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-white/10 mx-3" />

          {/* Social icons on header */}
          <div className="flex items-center space-x-3 text-gray-400">
            <a
              id="header-social-github"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-athlete-neon transition-colors duration-300"
            >
              <Github size={16} />
            </a>
            <a
              id="header-social-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-athlete-neon transition-colors duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </nav>

        {/* Hamburger Trigger button */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-400 hover:text-white relative z-50 p-2 transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-athlete-neon/50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
        </button>

        {/* Mobile Fullscreen Overlay */}
        <div
          id="mobile-nav-overlay"
          className={`fixed inset-0 bg-athlete-black/98 z-40 lg:hidden flex flex-col justify-between p-8 md:p-12 transition-all duration-500 ease-in-out sports-stripes ${
            isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
          }`}
        >
          {/* Decorative Corner Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-athlete-neon/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-athlete-green/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex-1 flex flex-col justify-center mt-12">
            <nav id="mobile-menu-nav" className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`block font-display text-4xl font-black uppercase tracking-widest transition-all duration-300 transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  } ${
                    activeSection === item.id
                      ? 'text-white border-l-4 border-athlete-neon pl-4'
                      : 'text-zinc-600 hover:text-white pl-0 hover:pl-4'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials & Info inside Mobile Menu Footer */}
          <div className={`mt-8 space-y-6 border-t border-white/5 pt-8 transition-all duration-500 transform ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`} style={{ transitionDelay: '350ms' }}>
            <div className="flex space-x-6 text-zinc-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors duration-300"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors duration-300"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
            <div className="text-zinc-600 text-xs font-mono select-none">
              HAERUDDIN HASRAT / FULLSTACK DEVELOPER
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
