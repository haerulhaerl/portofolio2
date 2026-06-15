import { CheckSquare, Sparkles, Trophy, Award } from 'lucide-react';
import { personalInfo, stats } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-athlete-black border-y border-white/5 overflow-hidden"
    >
      {/* Decorative background grid and color highlights */}
      <div className="absolute inset-x-0 top-0 h-40 sports-stripes opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-athlete-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Editorial Typography Portrait / Branding */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Athletic Brand Section Header Label */}
            <div className="flex items-center space-x-2 text-athlete-neon font-mono text-[11px] tracking-[0.3em] uppercase">
              <span className="w-6 h-[1px] bg-athlete-neon inline-block" />
              <span>THE ATHLETE MINDSET</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight uppercase text-white leading-none">
              MENGEJAR PRESTASI LUAR BIASA MELALUI <span className="text-transparent bg-clip-text bg-gradient-to-r from-athlete-neon to-athlete-neon-bright">TEKNOLOGI</span>
            </h2>

            {/* Accent Highlight box with direct quote */}
            <div className="bg-athlete-card border-l-2 border-athlete-neon p-6 rounded-sm sports-stripes">
              <p className="font-display font-bold text-sm tracking-wide text-white uppercase italic leading-relaxed">
                "Disiplin, presisi, dan konsistensi adalah kunci utama saya untuk menghasilkan solusi digital web & mobile papan atas yang berskala tinggi."
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <div className="h-[1px] w-4 bg-white/30" />
                <span className="text-[10px] font-mono text-gray-400">HAERUDDIN HASRAT</span>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-2 space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <div className="bg-athlete-deep p-1 text-athlete-neon rounded mt-0.5">
                  <Trophy size={14} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider font-display">OPTIMIZED ARCHITECTURE</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Selalu mengutamakan optimalisasi load-time, SEO, serta efisiensi database.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <div className="bg-athlete-deep p-1 text-athlete-neon rounded mt-0.5">
                  <Award size={14} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider font-display">CROSS-PLATFORM COMMAND</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Keahlian mumpuni jembatani fungsionalitas web modern ke aplikasi Android native native.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Narrative Story & Giant Grid Statistics */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Story block */}
            <div className="space-y-6 text-gray-300 font-sans leading-relaxed text-sm md:text-base">
              <p>
                {personalInfo.aboutText}
              </p>
              <p>
                Sebagai seorang <strong className="text-white">Fullstack Web & Android Specialist</strong>, saya berkomitmen penuh untuk mengoptimalkan produk secara end-to-end. Saya merancang website dari database relasional di server, menyajikan antarmuka super-responsif menggunakan teknologi React/Next.js modern, hingga membungkusnya sebagai aplikasi mobile Android tangguh menggunakan Kotlin & Jetpack Compose.
              </p>
            </div>

            {/* Giant Grid Statistics layout */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-athlete-card border border-white/5 p-6 hover:border-athlete-neon/20 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Decorative faint pattern */}
                  <div className="absolute top-0 right-0 h-10 w-10 sports-stripes opacity-10 transition-opacity group-hover:opacity-20" />
                  
                  <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-none mb-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:from-white group-hover:to-athlete-neon-bright transition-all duration-500">
                      {stat.value}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-xs md:text-sm text-white uppercase tracking-wider">
                    {stat.label}
                  </h3>
                  
                  <p className="text-[10px] md:text-xs text-zinc-500 mt-1 font-sans">
                    {stat.description}
                  </p>

                  {/* Highlight bar inside card */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-athlete-neon/20 group-hover:bg-athlete-neon transition-all duration-500 w-1/3 group-hover:w-full" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
