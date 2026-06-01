"use client";

import { motion } from "framer-motion";

const processes = [
  {
    num: "01",
    icon: "🌱",
    title: "Petani Lokal",
    desc: "Biji kopi dipilih langsung dari petani lokal terpercaya di berbagai daerah Indonesia"
  },
  {
    num: "02",
    icon: "🔥",
    title: "Roasting",
    desc: "Proses roasting artisan dengan kontrol suhu presisi untuk profil rasa optimal"
  },
  {
    num: "03",
    icon: "⚗️",
    title: "Grinding",
    desc: "Penggilingan fresh-to-order untuk menjaga aroma dan kesegaran biji kopi"
  },
  {
    num: "04",
    icon: "☕",
    title: "Brewing",
    desc: "Disajikan oleh barista berpengalaman dengan teknik penyeduhan yang tepat"
  }
];

export default function Section04b_Process() {
  return (
    <section id="process" className="py-24 lg:py-40 px-6 sm:px-12 lg:px-20 relative overflow-hidden bg-kofi-dark">
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-kofi-gold justify-center mb-6"
        >
          <div className="w-10 h-px bg-kofi-gold" />
          Proses Kami
          <div className="w-10 h-px bg-kofi-gold" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-4xl sm:text-5xl lg:text-[72px] font-bold leading-tight"
        >
          Dari Biji Hingga <em className="text-kofi-gold font-normal italic">Secangkir</em>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[500px] mx-auto mt-5 text-[15px] leading-[1.8] text-kofi-muted"
        >
          Setiap tahapan dilakukan dengan penuh dedikasi untuk menghasilkan kopi berkualitas terbaik
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 relative">
        {/* Horizontal Line connecting steps (hidden on mobile/tablet) */}
        <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-kofi-gold to-transparent opacity-30" />

        {processes.map((step, idx) => (
          <motion.div 
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2) }}
            className="text-center relative group"
          >
            <div className="w-[120px] h-[120px] mx-auto mb-8 rounded-full border border-kofi-gold/20 flex items-center justify-center text-[40px] bg-kofi-dark relative z-10 transition-all duration-400 group-hover:border-kofi-gold group-hover:bg-kofi-gold/5 group-hover:scale-110">
              {step.icon}
            </div>
            <div className="font-playfair text-sm text-kofi-gold tracking-[2px] mb-3">
              {step.num}
            </div>
            <h3 className="font-playfair text-[22px] font-bold mb-3">{step.title}</h3>
            <p className="text-[13px] leading-[1.8] text-kofi-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
