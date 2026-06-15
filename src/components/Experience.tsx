import { Briefcase, Calendar, CheckCircle, Pin } from 'lucide-react';
import { experienceTimeline } from '../data';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative py-20 md:py-28 bg-athlete-black athlete-grid-pattern overflow-hidden border-t border-white/5"
    >
      {/* Decorative linear lights */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-athlete-neon/20 via-transparent to-transparent opacity-30" />
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-athlete-deep/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
          <div className="flex items-center space-x-2 text-athlete-neon font-mono text-[11px] tracking-[0.3em] uppercase">
            <span className="w-6 h-[1px] bg-athlete-neon inline-block" />
            <span>CAREER TRACK RUNLINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight uppercase text-white leading-none">
            REKAM JEJAK & PENGALAMAN
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-sans max-w-xl">
            Siklus pencapaian keahlian profesional saya selama bertahun-tahun dalam menguji, men-deploy, dan memelihara aplikasi berkinerja tinggi.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center-Left bar */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-athlete-neon via-white/5 to-white/0 transform md:translate-x-[-1px]" />

          {/* Timeline Cards Container */}
          <div className="space-y-12">
            {experienceTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between w-full font-sans group ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Penpoint Ball Marker on vertical line */}
                  <div className="absolute left-4 md:left-[50%] top-6 w-4 h-4 rounded-full border-[3px] border-athlete-neon bg-athlete-black shadow-md shadow-athlete-neon/40 transform -translate-x-[7px] md:-translate-x-2 z-20 group-hover:bg-athlete-neon transition-colors duration-300" />

                  {/* Left Column (or Right on reverse) - content card */}
                  <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-athlete-card border border-white/5 p-6 hover:border-athlete-neon/20 hover:bg-athlete-muted/80 rounded-sm transition-all duration-300 relative overflow-hidden group/card shadow-lg">
                      
                      {/* Interactive edge highlighter */}
                      <div className={`absolute top-0 bottom-0 w-[3px] bg-athlete-neon/30 group-hover/card:bg-athlete-neon transition-colors ${
                        isEven ? 'right-0 pl-0' : 'left-0 pr-0'
                      }`} />

                      {/* Sports diagonal accent watermark behind timeline */}
                      <div className="absolute top-0 right-0 h-10 w-10 sports-stripes opacity-10" />

                      {/* Year badge label */}
                      <div className={`flex items-center space-x-2 mb-3 text-athlete-neon font-mono text-[10px] sm:text-xs tracking-[0.15em] font-semibold ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <Calendar size={12} className="text-athlete-neon-bright" />
                        <span>{item.year}</span>
                      </div>

                      {/* Header positions */}
                      <h3 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-wider mb-0.5">
                        {item.role}
                      </h3>
                      
                      <h4 className="text-sm font-sans font-semibold text-gray-300 mb-4">
                        {item.company}
                      </h4>

                      {/* Details description block */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Tools employed pills inside career profile */}
                      <div className={`flex flex-wrap gap-1.5 pt-2 border-t border-white/5 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[9px] font-mono text-white/50 bg-athlete-black border border-white/5 rounded-sm uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Spacer for MD screens on other side to preserve vertical grid symmetry */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
