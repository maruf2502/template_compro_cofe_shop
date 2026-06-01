"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Kopi terbaik yang pernah saya coba di Jakarta. V60 single origin Toraja-nya luar biasa — clean, fruity, dan sangat aromatic. Tempat yang perfect untuk working session.",
    author: "Anindya Putri",
    role: "Content Creator",
    initial: "A"
  },
  {
    quote: "Suasana yang cozy dan intimate. Barista-nya sangat knowledgeable dan bisa recommend coffee sesuai selera. Croissant-nya juga juara! Pasti balik lagi.",
    author: "Raka Mahendra",
    role: "Software Engineer",
    initial: "R"
  },
  {
    quote: "Sebagai pecinta kopi, KÖFI berhasil membuat saya jatuh cinta lagi dengan kopi Indonesia. Setiap visit selalu ada sesuatu yang baru untuk dicoba. Highly recommended!",
    author: "Sarah Wijaya",
    role: "Food Blogger",
    initial: "S"
  }
];

export default function Section07_TestiUlasan() {
  return (
    <section id="testimonials" className="py-24 lg:py-40 px-6 sm:px-12 lg:px-20 relative bg-kofi-medium">
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-kofi-gold justify-center mb-6"
        >
          <div className="w-10 h-px bg-kofi-gold" />
          Testimoni
          <div className="w-10 h-px bg-kofi-gold" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-4xl sm:text-5xl lg:text-[56px] font-bold"
        >
          Kata <em className="text-kofi-gold font-normal italic">Mereka</em>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
            className="bg-kofi-card border border-white/5 p-10 relative transition-all duration-400 hover:border-kofi-gold/15 hover:-translate-y-1"
          >
            <div className="font-playfair text-5xl text-kofi-gold opacity-30 leading-none mb-4">"</div>
            <div className="text-kofi-gold text-xs tracking-[2px] mb-4">★★★★★</div>
            
            <p className="text-[15px] leading-[1.8] text-kofi-light mb-7 italic">
              {testi.quote}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kofi-gold to-kofi-gold-light flex items-center justify-center font-playfair text-lg font-bold text-kofi-dark">
                {testi.initial}
              </div>
              <div>
                <div className="font-semibold text-sm">{testi.author}</div>
                <div className="text-xs text-kofi-muted mt-0.5">{testi.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
