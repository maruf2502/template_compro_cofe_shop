"use client";

import { motion } from "framer-motion";

export default function StatisticsSection() {
  const stats = [
    { number: "50+", label: "Varian Menu" },
    { number: "3", label: "Cabang" },
    { number: "10k+", label: "Pelanggan Puas" },
    { number: "5+", label: "Penghargaan" },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-brand-900">
      <div className="absolute inset-0 bg-brand-950/20 z-0" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-brand-300 mb-2">
                {stat.number}
              </p>
              <p className="text-brand-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
