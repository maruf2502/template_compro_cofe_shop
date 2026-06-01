"use client";

import { motion } from "framer-motion";

export default function Section02_AboutCerita() {
  return (
    <section id="about" className="py-24 lg:py-40 px-6 sm:px-12 lg:px-20 relative bg-kofi-dark">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-kofi-gold mb-12"
      >
        <div className="w-10 h-px bg-kofi-gold" />
        Cerita Kami
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/1fd4104a6-8345-4b6b-b388-b0dbfa92db98.png" 
            alt="Coffee Beans" 
            className="w-full h-[400px] lg:h-[600px] object-cover saturate-80"
          />
          <div className="hidden lg:block absolute top-5 left-5 -right-5 -bottom-5 border border-kofi-gold/30 -z-10" />
          
          <div className="absolute -bottom-5 right-0 lg:-bottom-10 lg:-right-10 bg-kofi-gold text-kofi-dark p-6 lg:p-8 max-w-[200px] lg:max-w-[240px]">
            <div className="font-playfair text-4xl lg:text-5xl font-black leading-none">7+</div>
            <div className="text-[10px] lg:text-xs tracking-[2px] uppercase mt-2 font-semibold">Tahun Pengalaman</div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-8">
            Lebih Dari Sekedar <em className="text-kofi-gold italic font-normal">Kedai Kopi</em>
          </h2>
          
          <p className="text-[15px] leading-[1.9] text-kofi-muted mb-5">
            KÖFI lahir dari kecintaan mendalam terhadap kopi dan budaya yang mengelilinginya. Setiap biji yang kami sajikan memiliki cerita — dari petani di dataran tinggi Toraja, Gayo, hingga Kintamani.
          </p>
          <p className="text-[15px] leading-[1.9] text-kofi-muted mb-5">
            Kami percaya bahwa kopi bukan hanya minuman, melainkan sebuah ritual. Ritual yang menghubungkan manusia, alam, dan kehangatan di setiap tegukannya.
          </p>

          <div className="grid grid-cols-3 gap-5 lg:gap-8 mt-12 pt-12 border-t border-white/10">
            <div>
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-kofi-gold">15+</div>
              <div className="text-[10px] lg:text-xs tracking-[2px] uppercase text-kofi-muted mt-2">Origin Biji</div>
            </div>
            <div>
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-kofi-gold">50+</div>
              <div className="text-[10px] lg:text-xs tracking-[2px] uppercase text-kofi-muted mt-2">Menu Varian</div>
            </div>
            <div>
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-kofi-gold">10+</div>
              <div className="text-[10px] lg:text-xs tracking-[2px] uppercase text-kofi-muted mt-2">Barista Ahli</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
