"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-700">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap untuk Merasakan Kopi Terbaik Kami?
          </h2>
          <p className="text-brand-100 text-lg mb-10">
            Kunjungi kedai kami hari ini atau pesan secara online. Dapatkan diskon 15% untuk pembelian pertama Anda melalui website.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-900 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Pesan Sekarang <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold transition-all hover:bg-white/10 flex items-center justify-center"
            >
              Lihat Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
