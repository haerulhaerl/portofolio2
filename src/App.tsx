import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-athlete-black text-white selection:bg-athlete-neon selection:text-athlete-black antialiased">
      {/* Absolute Ambient Layer */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-athlete-black to-athlete-black pointer-events-none z-0" />
      
      {/* Structural sections assemblage */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Experience /> */}
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
