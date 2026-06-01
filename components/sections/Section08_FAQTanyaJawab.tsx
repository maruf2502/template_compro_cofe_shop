"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah Kaizen Coffee menyediakan WiFi gratis?",
      answer: "Ya, kami menyediakan WiFi berkecepatan tinggi secara gratis untuk semua pelanggan yang berkunjung.",
    },
    {
      question: "Jam berapa Kaizen Coffee buka?",
      answer: "Kami buka setiap hari mulai pukul 08:00 pagi hingga 22:00 malam.",
    },
    {
      question: "Apakah bisa melakukan reservasi tempat?",
      answer: "Tentu! Anda bisa menghubungi kami melalui form kontak di bawah atau via WhatsApp untuk reservasi.",
    },
    {
      question: "Apakah tersedia menu non-kopi?",
      answer: "Ya, kami juga memiliki beragam pilihan teh, matcha, artisan chocolate, dan minuman segar lainnya.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-brand-50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Pertanyaan yang sering ditanyakan seputar layanan kami."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white border border-brand-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-brand-900 font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-600 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-brand-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
