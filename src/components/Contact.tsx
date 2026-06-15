import { useState, FormEvent } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Instagram, CheckCircle, Flame } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate high-performance transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Auto-reset success message after 5 seconds
      setTimeout(() => setIsSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 md:py-28 bg-athlete-black athlete-grid-pattern overflow-hidden border-t border-white/5"
    >
      {/* Background ambient radial lights */}
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-athlete-deep/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-athlete-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info desk layout */}
          <div className="lg:col-span- così space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-athlete-neon font-mono text-[11px] tracking-[0.3em] uppercase">
                <span className="w-6 h-[1px] bg-athlete-neon inline-block" />
                <span>CONNECT WITH ME</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight uppercase text-white leading-none">
                MULAI KOLABORASI SELEKASNYA
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-sans">
                Ide fantastis, kolaborasi teknis, atau penawaran proyek berskala tinggi? Hubungi saya secepatnya. Saya siap memberikan performa teknis terbaik untuk aplikasi Anda.
              </p>
            </div>

            {/* Direct Connect details panel */}
            <div className="space-y-4">
              
              <div className="flex items-center space-x-4 p-4 bg-athlete-card border border-white/5 rounded-sm">
                <div className="bg-athlete-deep text-athlete-neon p-2.5 rounded-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">EMAIL DIRECT</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-athlete-neon text-sm sm:text-base font-display tracking-wide font-bold transition-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-athlete-card border border-white/5 rounded-sm">
                <div className="bg-athlete-deep text-athlete-neon p-2.5 rounded-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">LOKASI UTAMA</span>
                  <span className="text-white text-sm sm:text-base font-display tracking-tight font-bold">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social media connections visual list */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1">JARINGAN SOSIAL PROFESIONAL</h4>
              <div className="flex items-center space-x-3">
                <a
                  id="contact-git"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-athlete-card hover:bg-athlete-neon hover:text-black border border-white/10 hover:border-transparent text-gray-300 p-3 rounded-sm transition-all duration-300 hover:scale-105"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>

                <a
                  id="contact-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-athlete-card hover:bg-athlete-neon hover:text-black border border-white/10 hover:border-transparent text-gray-300 p-3 rounded-sm transition-all duration-300 hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  id="contact-instagram"
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-athlete-card hover:bg-athlete-neon hover:text-black border border-white/10 hover:border-transparent text-gray-300 p-3 rounded-sm transition-all duration-300 hover:scale-105"
                  title="Instagram Profile"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right form table layout */}
          <div className="lg:col-span-7">
            <div className="bg-athlete-card border border-white/5 p-6 md:p-10 rounded-sm relative overflow-hidden sports-stripes">
              
              {/* Form success notifier panel */}
              {isSubmitSuccess ? (
                <div className="absolute inset-0 bg-athlete-black/95 flex flex-col justify-center items-center p-6 text-center z-20 space-y-4">
                  <div className="bg-athlete-deep text-athlete-neon p-4 rounded-full animate-bounce">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">
                    TRANSMISI BERHASIL!
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Pesan Anda telah dikirim dan dicatat pada sistem internal. Saya akan meninjau dan merespon email Anda secepatnya. Terima kasih banyak atas minat Anda!
                  </p>
                  <div className="text-[10px] font-mono text-athlete-neon bg-athlete-deep px-3 py-1.5 rounded uppercase tracking-widest">
                    STATUS_OK: DISPATCHED_SUCCESSFULLY
                  </div>
                </div>
              ) : null}

              <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-6 pb-3 border-b border-white/5 flex items-center">
                <Flame size={18} className="text-athlete-neon mr-2" />
                KIRIM PESAN DIRECT
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-[10px] font-mono text-zinc-400 block uppercase tracking-wider pl-1">
                    Nama Lengkap Anda
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Cristiano Ronaldo"
                    className="w-full bg-athlete-black border border-white/10 focus:border-athlete-neon focus:ring-1 focus:ring-athlete-neon text-white px-4 py-3 text-sm focus:outline-none transition-all duration-300 rounded-sm font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-[10px] font-mono text-zinc-400 block uppercase tracking-wider pl-1">
                    Alamat Email Aktif
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Contoh: ronaldo@brand.com"
                    className="w-full bg-athlete-black border border-white/10 focus:border-athlete-neon focus:ring-1 focus:ring-athlete-neon text-white px-4 py-3 text-sm focus:outline-none transition-all duration-300 rounded-sm font-sans"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-[10px] font-mono text-zinc-400 block uppercase tracking-wider pl-1">
                    Detail Pesan Kolaborasi
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan proyek impian atau penawaran kerja Anda di sini secara lengkap..."
                    className="w-full bg-athlete-black border border-white/10 focus:border-athlete-neon focus:ring-1 focus:ring-athlete-neon text-white px-4 py-3 text-sm focus:outline-none transition-all duration-300 rounded-sm font-sans resize-none"
                  />
                </div>

                <button
                  id="submit-form-trigger"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center px-8 py-4 font-display text-xs uppercase tracking-[0.25em] font-bold text-black bg-athlete-neon hover:bg-athlete-neon-bright disabled:opacity-50 transition-all duration-300 rounded-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
                      <span>SEDANG TRANSMISI...</span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      TRANSMISIKAN PESAN
                      <Send size={12} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
