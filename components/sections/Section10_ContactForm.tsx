"use client";

import { motion } from "framer-motion";

export default function Section10_ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button span');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Terkirim ✓';
      setTimeout(() => {
        btn.textContent = originalText;
        (e.target as HTMLFormElement).reset();
      }, 2500);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-40 px-6 sm:px-12 lg:px-20 relative bg-kofi-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-kofi-gold mb-6">
            <div className="w-10 h-px bg-kofi-gold" />
            Hubungi Kami
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[56px] font-bold mb-6">
            Mari <em className="text-kofi-gold font-normal italic">Terhubung</em>
          </h2>
          <p className="text-[15px] leading-[1.8] text-kofi-muted mb-12">
            Kunjungi kami atau kirim pesan. Kami selalu senang mendengar dari Anda.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-kofi-gold/20 flex items-center justify-center text-lg text-kofi-gold shrink-0">
                📍
              </div>
              <div>
                <div className="text-[11px] tracking-[2px] uppercase text-kofi-muted mb-1">Alamat</div>
                <div className="text-[15px] text-kofi-cream">Jl. Kemang Raya No. 45, Jakarta Selatan</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-kofi-gold/20 flex items-center justify-center text-lg text-kofi-gold shrink-0">
                🕒
              </div>
              <div>
                <div className="text-[11px] tracking-[2px] uppercase text-kofi-muted mb-1">Jam Operasional</div>
                <div className="text-[15px] text-kofi-cream">Sen - Min: 07:00 - 22:00 WIB</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-kofi-gold/20 flex items-center justify-center text-lg text-kofi-gold shrink-0">
                📞
              </div>
              <div>
                <div className="text-[11px] tracking-[2px] uppercase text-kofi-muted mb-1">Telepon</div>
                <div className="text-[15px] text-kofi-cream">+62 21 7890 1234</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-kofi-gold/20 flex items-center justify-center text-lg text-kofi-gold shrink-0">
                ✉️
              </div>
              <div>
                <div className="text-[11px] tracking-[2px] uppercase text-kofi-muted mb-1">Email</div>
                <div className="text-[15px] text-kofi-cream">hello@kofi.id</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative group">
              <input 
                type="text" 
                placeholder=" " 
                required 
                className="w-full py-4 bg-transparent border-b border-white/10 text-kofi-cream font-inter text-sm outline-none transition-colors focus:border-kofi-gold peer"
              />
              <label className="absolute top-4 left-0 text-[13px] text-kofi-muted transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-[10px] peer-focus:tracking-[2px] peer-focus:uppercase peer-focus:text-kofi-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[2px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-kofi-gold">
                Nama Lengkap
              </label>
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder=" " 
                required 
                className="w-full py-4 bg-transparent border-b border-white/10 text-kofi-cream font-inter text-sm outline-none transition-colors focus:border-kofi-gold peer"
              />
              <label className="absolute top-4 left-0 text-[13px] text-kofi-muted transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-[10px] peer-focus:tracking-[2px] peer-focus:uppercase peer-focus:text-kofi-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[2px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-kofi-gold">
                Email
              </label>
            </div>
          </div>
          <div className="relative group">
            <input 
              type="text" 
              placeholder=" " 
              className="w-full py-4 bg-transparent border-b border-white/10 text-kofi-cream font-inter text-sm outline-none transition-colors focus:border-kofi-gold peer"
            />
            <label className="absolute top-4 left-0 text-[13px] text-kofi-muted transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-[10px] peer-focus:tracking-[2px] peer-focus:uppercase peer-focus:text-kofi-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[2px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-kofi-gold">
              Subjek
            </label>
          </div>
          <div className="relative group">
            <textarea 
              placeholder=" " 
              required 
              className="w-full h-[100px] py-4 bg-transparent border-b border-white/10 text-kofi-cream font-inter text-sm outline-none transition-colors focus:border-kofi-gold peer resize-none"
            />
            <label className="absolute top-4 left-0 text-[13px] text-kofi-muted transition-all pointer-events-none peer-focus:-top-2 peer-focus:text-[10px] peer-focus:tracking-[2px] peer-focus:uppercase peer-focus:text-kofi-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[2px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-kofi-gold">
              Pesan Anda
            </label>
          </div>
          
          <div className="self-start mt-4">
            <button
              type="submit"
              className="group relative overflow-hidden px-10 py-4 bg-kofi-gold text-kofi-dark font-space font-semibold text-[13px] tracking-[2px] uppercase transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-kofi-cream -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              <span className="relative z-10 transition-colors">Kirim Pesan</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
