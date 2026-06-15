import { useState } from 'react';
import { ExternalLink, Github, Layers, Compass, Smartphone, Laptop } from 'lucide-react';
import { projects } from '../data';

type CategoryFilter = 'All' | 'Web' | 'Android' | 'Fullstack';

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(item => item.category === filter);

  const categories: CategoryFilter[] = ['All', 'Web', 'Android', 'Fullstack'];

  return (
    <section 
      id="projects" 
      className="relative py-20 md:py-28 bg-athlete-black border-t border-white/5 overflow-hidden"
    >
      {/* Ambient backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-athlete-neon/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-athlete-deep/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center space-x-2 text-athlete-neon font-mono text-[11px] tracking-[0.3em] uppercase">
              <span className="w-6 h-[1px] bg-athlete-neon inline-block" />
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight uppercase text-white leading-none">
              DAFTAR PORTFOLIO PILIHAN
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-sans">
              Menjelajahi rangkaian produk digital performa tinggi, dirancang untuk skalabilitas, desain presisi, dan arsitektur kode modern.
            </p>
          </div>

          {/* Filter Navigation - Athlete Tab Styling */}
          <div className="flex flex-wrap items-center bg-athlete-card border border-white/5 p-1 rounded-sm w-fit self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-display uppercase tracking-[0.15em] font-bold transition-all duration-300 rounded-sm ${
                  filter === cat
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white bg-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Container - Asymmetric Grid feeling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group bg-athlete-card border border-white/5 rounded-sm overflow-hidden flex flex-col justify-between hover:border-athlete-neon/40 hover:translate-y-[-4px] transition-all duration-300 relative athlete-glow"
              >
                {/* Visual Backdrop with styled Sports Gradients */}
                <div className={`relative h-48 w-full bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between overflow-hidden`}>
                  {/* Stripes decoration of the card banner */}
                  <div className="absolute inset-0 sports-stripes opacity-15" />
                  
                  {/* Category icon overlay top-left */}
                  <div className="relative z-10 self-start bg-athlete-black/85 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-athlete-neon flex items-center space-x-1">
                    {project.category === 'Android' && <Smartphone size={10} />}
                    {project.category === 'Web' && <Laptop size={10} />}
                    {project.category === 'Fullstack' && <Layers size={10} />}
                    <span>{project.category}</span>
                  </div>

                  {/* Brand signature watermarking */}
                  <div className="absolute right-4 top-4 font-display font-black text-6xl text-white/5 pointer-events-none uppercase">
                    {project.category}
                  </div>

                  {/* Icon centered illustration of technical athlete block */}
                  <div className="relative z-10 flex justify-center items-center h-20">
                    <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-md shadow-black/40">
                      {project.category === 'Android' && <Smartphone size={24} className="text-athlete-neon" />}
                      {project.category === 'Web' && <Laptop size={24} className="text-athlete-neon" />}
                      {project.category === 'Fullstack' && <Layers size={24} className="text-athlete-neon" />}
                    </div>
                  </div>

                  {/* Neon border lines connecting */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-athlete-neon/0 via-athlete-neon to-athlete-neon/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Card description body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-athlete-neon transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack pills / badges */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[9px] font-mono text-zinc-400 bg-athlete-black border border-white/5 rounded-sm uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer connection links inside card */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
                      
                      <a
                        id={`project-git-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-gray-400 hover:text-white font-mono uppercase tracking-widest transition-colors duration-300"
                        title="GitHub Repository"
                      >
                        <Github size={14} className="text-athlete-neon" />
                        <span className="text-[10px]">CODEBASE</span>
                      </a>

                      {project.demoUrl && (
                        <a
                          id={`project-demo-${project.id}`}
                          href={project.demoUrl}
                          className="inline-flex items-center space-x-1 text-gray-400 hover:text-white font-mono uppercase tracking-widest transition-colors duration-300"
                          title="Live Demo"
                        >
                          <span className="text-[10px] text-athlete-neon group-hover:text-athlete-neon-bright font-bold">LIVE PREVIEW</span>
                          <ExternalLink size={12} className="text-athlete-neon" />
                        </a>
                      )}

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA for complete portfolio request */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase mb-4 tracking-widest">
            DAN MASIH BANYAK PROJECT MENARIK LAINNYA DI REPOSITORI GITHUB
          </p>
          <a
            id="github-portfolio-cta"
            href="https://github.com/haerulhaerl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-display font-medium text-white hover:text-athlete-neon border-b border-white hover:border-athlete-neon pb-1 transition-all duration-300"
          >
            <span>Telusuri GitHub Lengkap saya</span>
            <ExternalLink size={12} className="ml-1.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
