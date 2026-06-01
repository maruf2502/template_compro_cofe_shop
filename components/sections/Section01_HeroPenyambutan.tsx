"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section01_HeroPenyambutan() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-kofi-dark"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-2 text-[11px] tracking-[3px] uppercase text-kofi-gold mb-6"
        >
          <div className="w-[30px] h-px bg-kofi-gold" />
          Sejak 2018 — Specialty Coffee
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-5xl sm:text-6xl lg:text-[80px] font-black leading-[0.95] mb-7 text-kofi-cream"
        >
          Seni Dalam
          <span className="block font-normal italic text-kofi-gold mt-2">Setiap Tegukan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base leading-[1.8] text-kofi-muted max-w-[440px] mb-10"
        >
          Kami menghadirkan pengalaman kopi specialty yang unik, dari biji pilihan petani lokal hingga secangkir kesempurnaan di tangan barista terbaik kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
        >
          <a
            href="#menu"
            className="group relative overflow-hidden px-10 py-4 bg-kofi-gold text-kofi-dark font-space font-semibold text-[13px] tracking-[2px] uppercase transition-all"
          >
            <div className="absolute inset-0 w-full h-full bg-kofi-cream -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            <span className="relative z-10">Jelajahi Menu</span>
          </a>
          <a
            href="#about"
            className="px-10 py-4 bg-transparent text-kofi-cream border border-white/20 font-space font-medium text-[13px] tracking-[2px] uppercase transition-colors hover:border-kofi-gold hover:text-kofi-gold"
          >
            Cerita Kami
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block relative overflow-hidden h-full">
        <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <img
            src="https://image.qwenlm.ai/public_source/03440135-0924-4818-b53b-0115e59777d4/11474e396-0b02-43d5-a3fc-77fec5132844.png"
            alt="Coffee Shop Interior"
            className="w-full h-full object-cover brightness-75 saturate-90"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-kofi-dark from-0% to-transparent to-40%" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-6 sm:left-12 lg:left-20 flex items-center gap-3 text-[11px] tracking-[3px] uppercase text-kofi-muted z-10"
      >
        <div className="w-px h-[50px] bg-gradient-to-b from-kofi-gold to-transparent animate-scroll-pulse" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
