import { useState } from 'react';
import { 
  Code, Cpu, Server, Database, Layers, Terminal, 
  Smartphone, Layout, ToggleLeft, Compass, BookOpen, 
  HardDrive, Flame, Share2, GitMerge, Package, 
  Activity, Monitor, CheckSquare, ShieldCheck, Sparkles 
} from 'lucide-react';
import { skillCategories } from '../data';

// Helper to resolve icon component dynamically
function getSkillIcon(iconName: string) {
  switch (iconName) {
    case 'Code': return <Code size={20} />;
    case 'Cpu': return <Cpu size={20} />;
    case 'Server': return <Server size={20} />;
    case 'Database': return <Database size={20} />;
    case 'Layers': return <Layers size={20} />;
    case 'Terminal': return <Terminal size={20} />;
    case 'Smartphone': return <Smartphone size={20} />;
    case 'Layout': return <Layout size={20} />;
    case 'ToggleLeft': return <ToggleLeft size={20} />;
    case 'Compass': return <Compass size={20} />;
    case 'BookOpen': return <BookOpen size={20} />;
    case 'HardDrive': return <HardDrive size={20} />;
    case 'Flame': return <Flame size={20} />;
    case 'Share2': return <Share2 size={20} />;
    case 'GitMerge': return <GitMerge size={20} />;
    case 'Package': return <Package size={20} />;
    case 'Activity': return <Activity size={20} />;
    case 'Monitor': return <Monitor size={20} />;
    case 'CheckSquare': return <CheckSquare size={20} />;
    default: return <ShieldCheck size={20} />;
  }
}

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  return (
    <section 
      id="skills" 
      className="relative py-20 md:py-28 bg-athlete-black athlete-grid-pattern overflow-hidden"
    >
      {/* Decorative light elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-athlete-deep/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-athlete-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <div className="flex items-center space-x-2 text-athlete-neon font-mono text-[11px] tracking-[0.3em] uppercase">
            <span className="w-6 h-[1px] bg-athlete-neon inline-block" />
            <span>ATHLETIC TECH DECK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight uppercase text-white leading-none">
            STRUKTUR TEKNOLOGI YANG DIKUASAI
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-sans max-w-xl">
            Dari pemrograman berorientasi objek di platform seluler hingga manajemen dependensi dan state server web berskala tinggi yang terdistribusi.
          </p>
        </div>

        {/* Bento grid layout for skills groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              onMouseEnter={() => setActiveCategoryIndex(catIdx)}
              onMouseLeave={() => setActiveCategoryIndex(null)}
              className={`bg-athlete-card/80 backdrop-blur-sm border rounded-sm p-6 md:p-8 transition-all duration-500 relative overflow-hidden group ${
                activeCategoryIndex === catIdx 
                  ? 'border-athlete-neon/40 shadow-lg shadow-athlete-neon/5' 
                  : 'border-white/5'
              }`}
            >
              {/* Background gradient on active card to emulate speed and adrenaline */}
              <div className="absolute inset-0 bg-gradient-to-br from-athlete-neon/0 via-athlete-neon/[0.01] to-athlete-neon/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Header inside category column */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5 relative z-10">
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider flex items-center">
                  <span className="w-2.5 h-2.5 bg-athlete-neon rounded-full inline-block mr-2.5 animate-pulse" />
                  {category.title}
                </h3>
                <span className="font-mono text-xs text-zinc-600 group-hover:text-athlete-neon transition-colors">
                  [ 0{catIdx + 1} // TECH DECK ]
                </span>
              </div>

              {/* Technologies List Grid inside category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="p-4 bg-athlete-black border border-white/[0.03] hover:border-athlete-neon/15 hover:bg-athlete-muted rounded-sm transition-all duration-300 relative group/skill"
                  >
                    {/* Glowing bar behind skill */}
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-athlete-neon group-hover/skill:h-full transition-all duration-300" />

                    <div className="flex items-center space-x-3 mb-2.5">
                      <div className="text-gray-400 group-hover/skill:text-athlete-neon transition-colors p-1.5 bg-white/5 rounded-sm">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-white text-sm font-display font-bold tracking-wide uppercase">
                        {skill.name}
                      </span>
                    </div>

                    {/* Progress Bar resembling custom speedometer / energy bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-zinc-600">COMMAND STAT:</span>
                        <span className="text-athlete-neon opacity-75 group-hover/skill:opacity-100 transition-opacity">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-athlete-green to-athlete-neon transition-all duration-1000 ease-out"
                          style={{ 
                            width: activeCategoryIndex === catIdx ? `${skill.level}%` : '10%' 
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Athletic style stripes decoration inside category cards */}
              <div className="absolute -bottom-8 -right-8 h-20 w-20 sports-stripes opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" />

            </div>
          ))}
        </div>

        {/* Live stack disclaimer badge */}
        <div className="mt-12 flex justify-center">
          <div className="bg-athlete-card border border-white/5 px-6 py-4 rounded flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left max-w-2xl">
            <div className="bg-athlete-neon p-2 text-black rounded">
              <Cpu size={18} fill="currentColor" />
            </div>
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider font-display">TEKSTUR TEKNOLOGI ADAPTIF</p>
              <p className="text-zinc-400 text-[11px] font-sans mt-0.5">Saya terus mengonsumsi riset software, mempelajari tren SDK Android terbaru (Compose Multiplatform), dan siap bermigrasi atau menerapkan stack teknologi khusus sesuai kebutuhan proyek Anda.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
